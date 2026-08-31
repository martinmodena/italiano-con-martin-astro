import os
import sys
from pathlib import Path
from urllib.parse import unquote, urlparse
from io import BytesIO
from functools import lru_cache
import re

from lxml import html
from PIL import Image as PILImage, ImageDraw, ImageOps
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Image, KeepTogether, PageBreak, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

ROOT = Path(__file__).resolve().parents[1]
# La sorgente e la build Astro (dist/), non piu legacy-html/ che e congelato.
# I PDF prodotti finiscono in public/pdf/, da dove la build li ripubblica.
SITE = Path(os.environ.get("SITE_ROOT", ROOT / "dist"))
PDF_OUT = Path(os.environ.get("PDF_OUT", ROOT / "public" / "pdf"))
# --only <nome-file-italiano-senza-estensione>: rigenera una sola risorsa,
# in tutte le lingue e per tutti i livelli. Ripetibile.
ONLY = [sys.argv[i + 1] for i, a in enumerate(sys.argv) if a == "--only" and i + 1 < len(sys.argv)]
LEVELS = ["a1", "a2", "b1", "b2", "c1"]
LANGUAGES = ["it", "en", "es", "fr", "cs", "pl", "tr", "de", "ja"]

pdfmetrics.registerFont(TTFont("ICM", r"C:\Windows\Fonts\DejaVuSans.ttf"))
pdfmetrics.registerFont(TTFont("ICM-Bold", r"C:\Windows\Fonts\DejaVuSans-Bold.ttf"))
pdfmetrics.registerFont(TTFont("ICM-JA", r"C:\Windows\Fonts\YuGothR.ttc", subfontIndex=0))
pdfmetrics.registerFont(TTFont("ICM-JA-Bold", r"C:\Windows\Fonts\YuGothB.ttc", subfontIndex=0))


def styles_for(language):
    family = "ICM-JA" if language == "ja" else "ICM"
    bold = "ICM-JA-Bold" if language == "ja" else "ICM-Bold"
    base = getSampleStyleSheet()
    return {
        "title": ParagraphStyle("Title", parent=base["Title"], fontName=bold, fontSize=22, leading=28, textColor=colors.HexColor("#18352e"), alignment=TA_CENTER, spaceAfter=10),
        "subtitle": ParagraphStyle("Subtitle", parent=base["Normal"], fontName=family, fontSize=9, leading=13, textColor=colors.HexColor("#4d5c62"), alignment=TA_CENTER, spaceAfter=16),
        "h2": ParagraphStyle("H2", parent=base["Heading2"], fontName=bold, fontSize=15, leading=20, textColor=colors.HexColor("#b53f27"), spaceBefore=11, spaceAfter=7),
        "h3": ParagraphStyle("H3", parent=base["Heading3"], fontName=bold, fontSize=11, leading=15, textColor=colors.HexColor("#18352e"), spaceBefore=8, spaceAfter=4),
        "body": ParagraphStyle("Body", parent=base["BodyText"], fontName=family, fontSize=9.4, leading=14, textColor=colors.HexColor("#182526"), spaceAfter=7),
        "small": ParagraphStyle("Small", parent=base["BodyText"], fontName=family, fontSize=7.5, leading=10, textColor=colors.HexColor("#4d5c62")),
        "author": ParagraphStyle("Author", parent=base["BodyText"], fontName=family, fontSize=9.2, leading=13, textColor=colors.HexColor("#18352e")),
        "website": ParagraphStyle("Website", parent=base["BodyText"], fontName=bold, fontSize=12, leading=16, textColor=colors.HexColor("#b53f27"), spaceBefore=3),
        "subtitle_left": ParagraphStyle("SubtitleLeft", parent=base["Normal"], fontName=family, fontSize=8.8, leading=12, textColor=colors.HexColor("#4d5c62"), spaceAfter=9),
        "howto": ParagraphStyle("HowTo", parent=base["BodyText"], fontName=family, fontSize=9, leading=13, textColor=colors.HexColor("#18352e"), backColor=colors.HexColor("#f7eee5"), borderPadding=8, borderColor=colors.HexColor("#ddcbbd"), borderWidth=0.7, spaceAfter=10),
    }


MARTIN_URL = "https://preply.com/it/tutor/5086125"
LICIA_URL = "https://preply.in/LICIA6IT2176799611?ts=17865248"

# Testo di servizio del PDF: sempre nella lingua del visitatore (REGOLE_LINGUE.md).
# «Martin», «Licia» e «Italiano con Martin» non si traducono in nessuna lingua.
STRINGS = {
    "it": {"kind": "Lettura graduata per imparare l'italiano", "levels": "livelli A1-C1", "level": "livello {lv}",
           "howto": "Il testo è in italiano. Sotto ogni brano trovi le parole utili con la traduzione e le domande: scrivi le risposte sulle righe.",
           "words_head": ("Italiano", "Significato"), "cta_heading": "Lezioni di italiano 1:1",
           "martin": "scienza, tecnologia ed etimologia", "licia": "arte, pazienza e grammatica",
           "book": "Prenota su Preply", "free_material": "letture, grammatica e vocabolario gratuiti"},
    "en": {"kind": "Graded reading to learn Italian", "levels": "levels A1-C1", "level": "level {lv}",
           "howto": "The text is in Italian. Under each passage you will find the key words with their meaning and the questions: write your answers on the lines.",
           "words_head": ("Italian", "Meaning"), "cta_heading": "1:1 Italian lessons",
           "martin": "science, technology and etymology", "licia": "art, patience and grammar",
           "book": "Book on Preply", "free_material": "free readings, grammar and vocabulary"},
    "es": {"kind": "Lectura graduada para aprender italiano", "levels": "niveles A1-C1", "level": "nivel {lv}",
           "howto": "El texto está en italiano. Debajo de cada pasaje encontrarás las palabras clave con su significado y las preguntas: escribe tus respuestas en las líneas.",
           "words_head": ("Italiano", "Significado"), "cta_heading": "Clases de italiano 1:1",
           "martin": "ciencia, tecnología y etimología", "licia": "arte, paciencia y gramática",
           "book": "Reserva en Preply", "free_material": "lecturas, gramática y vocabulario gratuitos"},
    "fr": {"kind": "Lecture graduée pour apprendre l'italien", "levels": "niveaux A1-C1", "level": "niveau {lv}",
           "howto": "Le texte est en italien. Sous chaque passage se trouvent les mots utiles avec leur sens et les questions : écris tes réponses sur les lignes.",
           "words_head": ("Italien", "Sens"), "cta_heading": "Cours d'italien 1:1",
           "martin": "sciences, technologie et étymologie", "licia": "art, patience et grammaire",
           "book": "Réserver sur Preply", "free_material": "lectures, grammaire et vocabulaire gratuits"},
    "cs": {"kind": "Odstupňované čtení pro výuku italštiny", "levels": "úrovně A1-C1", "level": "úroveň {lv}",
           "howto": "Text je v italštině. Pod každým úryvkem najdeš užitečná slova s významem a otázky: odpovědi piš na řádky.",
           "words_head": ("Italsky", "Význam"), "cta_heading": "Individuální lekce italštiny",
           "martin": "věda, technika a etymologie", "licia": "umění, trpělivost a gramatika",
           "book": "Rezervovat na Preply", "free_material": "čtení, gramatika a slovní zásoba zdarma"},
    "pl": {"kind": "Czytanka z poziomami do nauki włoskiego", "levels": "poziomy A1-C1", "level": "poziom {lv}",
           "howto": "Tekst jest po włosku. Pod każdym fragmentem znajdziesz przydatne słowa ze znaczeniem i pytania: odpowiedzi zapisz na liniach.",
           "words_head": ("Włoski", "Znaczenie"), "cta_heading": "Lekcje włoskiego 1:1",
           "martin": "nauka, technologia i etymologia", "licia": "sztuka, cierpliwość i gramatyka",
           "book": "Zarezerwuj na Preply", "free_material": "darmowe czytanki, gramatyka i słownictwo"},
    "tr": {"kind": "İtalyanca öğrenmek için kademeli okuma", "levels": "A1-C1 seviyeleri", "level": "{lv} seviyesi",
           "howto": "Metin İtalyancadır. Her bölümün altında yararlı kelimeler ve anlamları ile sorular var: yanıtlarını çizgilerin üzerine yaz.",
           "words_head": ("İtalyanca", "Anlamı"), "cta_heading": "1:1 İtalyanca dersleri",
           "martin": "bilim, teknoloji ve etimoloji", "licia": "sanat, sabır ve dilbilgisi",
           "book": "Preply'de rezervasyon yap", "free_material": "ücretsiz okuma, dilbilgisi ve kelime"},
    "de": {"kind": "Gestufter Lesetext zum Italienischlernen", "levels": "Niveaus A1-C1", "level": "Niveau {lv}",
           "howto": "Der Text ist auf Italienisch. Unter jedem Abschnitt stehen die nützlichen Wörter mit ihrer Bedeutung und die Fragen: Schreibe deine Antworten auf die Linien.",
           "words_head": ("Italienisch", "Bedeutung"), "cta_heading": "Italienischunterricht 1:1",
           "martin": "Wissenschaft, Technik und Etymologie", "licia": "Kunst, Geduld und Grammatik",
           "book": "Auf Preply buchen", "free_material": "kostenlose Lesetexte, Grammatik und Wortschatz"},
    "ja": {"kind": "イタリア語学習のための段階別読解", "levels": "レベル A1〜C1", "level": "レベル {lv}",
           "howto": "本文はイタリア語です。各文章の下に、意味つきの重要単語と質問があります。答えは線の上に書いてください。",
           "words_head": ("イタリア語", "意味"), "cta_heading": "マンツーマンのイタリア語レッスン",
           "martin": "科学・技術・語源", "licia": "芸術・忍耐・文法",
           "book": "Preplyで予約", "free_material": "無料の読解・文法・語彙"},
}


def strings(language):
    return STRINGS.get(language, STRINGS["en"])


def clean(value):
    return re.sub(r"\s+", " ", value or "").strip()


def node_text(node):
    return clean(" ".join(part.strip() for part in node.itertext() if part.strip()))


def safe_markup(value):
    value = value.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    return value


def add_node(story, node, style):
    tag = node.tag.lower() if isinstance(node.tag, str) else ""
    text = node_text(node)
    if not text or tag in {"script", "style", "nav", "footer", "header", "button"}:
        return
    if tag in {"h1", "h2"}:
        story.append(Paragraph(safe_markup(text), style["h2"]))
    elif tag == "h3":
        story.append(Paragraph(safe_markup(text), style["h3"]))
    elif tag in {"p", "li", "figcaption", "label"} or "example" in (node.get("class") or "").split() or "mistake" in (node.get("class") or "").split():
        prefix = "• " if tag == "li" else ""
        story.append(Paragraph(safe_markup(prefix + text), style["body"]))
    elif tag == "table":
        rows = []
        for row in node.xpath(".//tr"):
            cells = [node_text(cell) for cell in row.xpath("./th|./td")]
            if cells:
                rows.append([Paragraph(safe_markup(cell), style["small"]) for cell in cells])
        if rows:
            table = Table(rows, repeatRows=1, hAlign="LEFT")
            table.setStyle(TableStyle([
                ("FONTNAME", (0, 0), (-1, -1), style["small"].fontName),
                ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#f4e3d0")),
                ("GRID", (0, 0), (-1, -1), 0.35, colors.HexColor("#ddcbbd")),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 5),
                ("RIGHTPADDING", (0, 0), (-1, -1), 5),
                ("TOPPADDING", (0, 0), (-1, -1), 4),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
            ]))
            story.extend([table, Spacer(1, 4 * mm)])


def content_nodes(container):
    skip_classes = {"language-switcher", "pdf-downloads", "level-nav", "lesson-nav", "conversion-section", "exercise-actions", "score-card"}
    nodes = []
    for node in container.xpath(".//*"):
        classes = set((node.get("class") or "").split())
        if classes & skip_classes:
            continue
        if any(set((parent.get("class") or "").split()) & skip_classes for parent in node.iterancestors()):
            continue
        classes = set((node.get("class") or "").split())
        printable = node.tag in {"h2", "h3", "p", "li", "table", "figcaption", "label"} or bool(classes & {"example", "mistake"})
        if printable and not any(parent.tag == "table" for parent in node.iterancestors()):
            nodes.append(node)
    return nodes


def footer(canvas, doc):
    canvas.saveState()
    canvas.setFont("ICM-Bold", 8.5)
    canvas.setFillColor(colors.HexColor("#18352e"))
    canvas.drawString(18 * mm, 10 * mm, "italianoconmartin.com")
    canvas.linkURL("https://italianoconmartin.com/", (18 * mm, 8.5 * mm, 61 * mm, 13 * mm), relative=0)
    canvas.drawRightString(192 * mm, 10 * mm, str(doc.page))
    canvas.restoreState()


@lru_cache(maxsize=4)
def circular_photo(name="martin-portrait.webp"):
    source = SITE / "assets" / name
    photo = PILImage.open(source).convert("RGB")
    photo = ImageOps.fit(photo, (180, 180), method=PILImage.Resampling.LANCZOS, centering=(0.5, 0.34))
    mask = PILImage.new("L", photo.size, 0)
    ImageDraw.Draw(mask).ellipse((0, 0, photo.width - 1, photo.height - 1), fill=255)
    background = PILImage.new("RGB", photo.size, "#f7eee5")
    background.paste(photo, mask=mask)
    output = BytesIO()
    background.save(output, format="JPEG", quality=82, optimize=True)
    return output.getvalue()


def teacher_cell(style, photo, name, specialty, url, book):
    portrait = Image(BytesIO(circular_photo(photo)), width=22 * mm, height=22 * mm)
    copy = [
        Paragraph(f"<b>{safe_markup(name)}</b>", style["author"]),
        Paragraph(safe_markup(specialty), style["small"]),
        Paragraph(f'<link href="{url}" color="#b53f27"><u>{safe_markup(book)}</u></link>', style["author"]),
    ]
    cell = Table([[portrait, copy]], colWidths=[26 * mm, 46 * mm])
    cell.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 2),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    return cell


def closing_block(style, language):
    # Chiusura del PDF: chi insegna, con che cosa, e dove si prenota.
    # Martin e Licia restano non tradotti in ogni lingua (REGOLE_LINGUE.md).
    t = strings(language)
    heading = Paragraph(f'<b>{safe_markup(t["cta_heading"])}</b>', style["h3"])
    pair = Table(
        [[
            teacher_cell(style, "martin-portrait.webp", "Martin", t["martin"], MARTIN_URL, t["book"]),
            teacher_cell(style, "licia-portrait.webp", "Licia", t["licia"], LICIA_URL, t["book"]),
        ]],
        colWidths=[75 * mm, 75 * mm],
        hAlign="CENTER",
    )
    pair.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    site = Paragraph(
        '<link href="https://italianoconmartin.com/" color="#b53f27"><u>italianoconmartin.com</u></link>'
        f' - {safe_markup(t["free_material"])}',
        style["author"],
    )
    panel = Table([[heading], [pair], [site]], colWidths=[152 * mm], hAlign="CENTER")
    panel.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#f7eee5")),
        ("BOX", (0, 0), (-1, -1), 0.7, colors.HexColor("#ddcbbd")),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 9),
        ("RIGHTPADDING", (0, 0), (-1, -1), 9),
        ("TOPPADDING", (0, 0), (-1, -1), 7),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
    ]))
    return KeepTogether([Spacer(1, 7 * mm), panel])


@lru_cache(maxsize=32)
def editorial_image_bytes(image_path):
    source = PILImage.open(image_path).convert("RGB")
    source = ImageOps.fit(source, (960, 540), method=PILImage.Resampling.LANCZOS)
    output = BytesIO()
    source.save(output, format="JPEG", quality=74, optimize=True)
    return output.getvalue()


def editorial_image(document, page):
    candidates = document.xpath('//figure[contains(concat(" ", normalize-space(@class), " "), " story-figure ")]//img[1]/@src')
    if not candidates:
        return None
    parsed = urlparse(candidates[0])
    image_path = SITE / "assets" / Path(parsed.path).name if parsed.scheme else (page.parent / unquote(parsed.path)).resolve()
    if not image_path.exists():
        return None
    image = Image(BytesIO(editorial_image_bytes(str(image_path))), width=156 * mm, height=87.75 * mm)
    image.hAlign = "CENTER"
    return image


def answer_lines(count=2, width=152 * mm):
    rows = Table([[""] for _ in range(count)], colWidths=[width], rowHeights=[7.5 * mm] * count, hAlign="LEFT")
    rows.setStyle(TableStyle([
        ("LINEBELOW", (0, 0), (-1, -1), 0.4, colors.HexColor("#d9c9b8")),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    return rows


def words_rows(node):
    """Parole utili: [(italiano, significato)]. Sulla pagina italiana il
    significato manca, perché non si traduce l'italiano in italiano."""
    spans = node.xpath('.//span[@lang="it"]')
    if spans:
        rows = []
        for span in spans:
            gloss = clean(span.tail or "").lstrip("=").strip()
            rows.append((node_text(span), gloss))
        return rows
    return [(word.strip(), "") for word in node_text(node).split(",") if word.strip()]


def words_block(story, heading, node, style, language):
    rows = words_rows(node)
    if not rows:
        return
    story.append(Paragraph(safe_markup(heading), style["h3"]))
    glossed = any(gloss for _, gloss in rows)
    head = strings(language)["words_head"]
    if glossed:
        data = [[Paragraph(f"<b>{safe_markup(head[0])}</b>", style["small"]), Paragraph(f"<b>{safe_markup(head[1])}</b>", style["small"])]]
        data += [[Paragraph(f'<b>{safe_markup(w)}</b>', style["body"]), Paragraph(safe_markup(g), style["body"])] for w, g in rows]
        widths = [52 * mm, 100 * mm]
    else:
        data = [[Paragraph(f'<b>{safe_markup(w)}</b>', style["body"])] for w, _ in rows]
        widths = [152 * mm]
    table = Table(data, colWidths=widths, hAlign="LEFT")
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#f4e3d0") if glossed else colors.white),
        ("GRID", (0, 0), (-1, -1), 0.35, colors.HexColor("#ddcbbd")),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 4),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
    ]))
    story.extend([table, Spacer(1, 4 * mm)])


def questions_block(story, heading, node, style):
    items = node.xpath("./li")
    if not items:
        return
    story.append(Paragraph(safe_markup(heading), style["h3"]))
    for index, item in enumerate(items, 1):
        italian = item.xpath('./span[@lang="it"]')
        gloss = item.xpath('./span[contains(@class, "q-gloss")]')
        question = node_text(italian[0]) if italian else node_text(item)
        parts = [Paragraph(f"<b>{index}. {safe_markup(question)}</b>", style["body"])]
        if gloss:
            parts.append(Paragraph(f'<i>{safe_markup(node_text(gloss[0]))}</i>', style["small"]))
        parts.extend([Spacer(1, 1.5 * mm), answer_lines(), Spacer(1, 4 * mm)])
        story.append(KeepTogether(parts))


def render_article(story, article, style, language, minor=False):
    """minor=True per la nota finale: stesso contenuto, peso tipografico da nota."""
    heading = clean("".join(article.xpath(".//header//h2[1]//text()")))
    focus = clean("".join(article.xpath(".//header//p[1]//text()")))
    block = [Paragraph(safe_markup(heading), style["h3" if minor else "h2"])]
    if focus and not minor:
        block.append(Paragraph(safe_markup(focus), style["subtitle_left"]))
    for paragraph in article.xpath('.//div[contains(@class, "story-text")]/p'):
        block.append(Paragraph(safe_markup(node_text(paragraph)), style["small" if minor else "body"]))
    if minor:
        story.append(KeepTogether(block))
        return
    story.extend(block)
    for column in article.xpath('.//div[contains(@class, "learning-grid")]/div'):
        title = clean("".join(column.xpath("./h3[1]//text()")))
        words = column.xpath("./p[1]")
        questions = column.xpath("./ol[1]")
        if questions:
            questions_block(story, title, questions[0], style)
        elif words:
            words_block(story, title, words[0], style, language)


def cover_block(story, style, language, title, level, canonical, image):
    t = strings(language)
    scope = t["levels"] if level == "all-levels" else t["level"].format(lv=level.upper())
    story.append(Paragraph(safe_markup(title), style["title"]))
    story.append(Paragraph(f'{safe_markup(t["kind"])} - {safe_markup(scope)}', style["subtitle"]))
    if image:
        story.extend([image, Spacer(1, 5 * mm)])
    story.append(Paragraph(safe_markup(t["howto"]), style["howto"]))
    if level == "all-levels":
        story.append(Paragraph(safe_markup(" - ".join(lv.upper() for lv in LEVELS)), style["subtitle"]))
    if canonical:
        story.append(Paragraph(f'<link href="{canonical}" color="#b53f27"><u>{safe_markup(canonical)}</u></link>', style["small"]))
    if level == "all-levels":
        story.append(PageBreak())
    else:
        story.append(Spacer(1, 5 * mm))


def build_pdf(page, language, level, output):
    document = html.fromstring(page.read_text(encoding="utf-8"))
    style = styles_for(language)
    title = clean("".join(document.xpath("//h1[1]//text()"))) or page.stem
    canonical = next(iter(document.xpath('//link[@rel="canonical"]/@href')), "")
    is_reading = any(part in {"letture", "favole", "readings", "stories", "lecturas", "cuentos", "lectures", "histoires", "cteni", "pribehy", "czytanki", "historie", "okumalar", "hikayeler", "lesetexte", "geschichten", "dokkai", "monogatari"} for part in page.parts)
    story = []
    if is_reading:
        cover_block(story, style, language, title, level, canonical, editorial_image(document, page))
        # Un livello per pagina; la nota finale segue l'ultimo livello.
        levels = document.xpath(f'//article[@id="{level}"]') if level != "all-levels" else document.xpath('//article[contains(concat(" ", normalize-space(@class), " "), " story-card ") and @id]')
        note = document.xpath('//article[contains(concat(" ", normalize-space(@class), " "), " story-card ") and not(@id)]')
        for index, article in enumerate(levels):
            if index:
                story.append(PageBreak())
            render_article(story, article, style, language)
        for article in note:
            story.append(Spacer(1, 6 * mm))
            render_article(story, article, style, language, minor=True)
    else:
        level_label = "A1-C1" if level == "all-levels" else level.upper()
        story.append(Paragraph(safe_markup(title), style["title"]))
        story.append(Paragraph(safe_markup(f"{language.upper()} - {level_label} - {canonical}"), style["subtitle"]))
        for node in content_nodes(document.xpath("//main")[0]):
            add_node(story, node, style)
    story.append(closing_block(style, language))
    output.parent.mkdir(parents=True, exist_ok=True)
    pdf = SimpleDocTemplate(
        str(output), pagesize=A4, rightMargin=18 * mm, leftMargin=18 * mm, topMargin=17 * mm, bottomMargin=17 * mm,
        title=title, author="Italiano con Martin", subject=strings(language)["kind"],
    )
    pdf.build(story, onFirstPage=footer, onLaterPages=footer)


def localized_pages():
    italian_resources = [page for category in ["letture", "favole", "grammatica"] for page in (SITE / category).rglob("*.html") if page.name != "index.html"]
    if ONLY:
        italian_resources = [page for page in italian_resources if page.stem in ONLY]
        if not italian_resources:
            raise SystemExit(f"--only: nessuna risorsa italiana con nome {ONLY} in {SITE}")
    for italian in italian_resources:
        source = html.fromstring(italian.read_text(encoding="utf-8"))
        alternates = {node.get("hreflang"): node.get("href") for node in source.xpath('//link[@rel="alternate"]')}
        category = italian.relative_to(SITE).parts[0]
        for language in LANGUAGES:
            if language == "it":
                page = italian
            else:
                target = unquote(urlparse(alternates[language]).path.lstrip("/"))
                page = SITE / target
            levels = [italian.relative_to(SITE).parts[1]] if category == "grammatica" else ["all-levels", *LEVELS]
            for level in levels:
                yield page, language, level


jobs = list(localized_pages())
for index, (page, language, level) in enumerate(jobs, 1):
    output = PDF_OUT / language / f"{page.stem}-{level}.pdf"
    build_pdf(page, language, level, output)
    if index % 100 == 0:
        print(f"Generated {index}/{len(jobs)} PDFs")
print(f"Generated {len(jobs)} PDFs")
