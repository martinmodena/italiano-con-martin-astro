import os
import sys
from pathlib import Path
from urllib.parse import unquote, urljoin, urlparse
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
from reportlab.platypus.flowables import HRFlowable
from reportlab.platypus.tableofcontents import TableOfContents

ROOT = Path(__file__).resolve().parents[1]
# La sorgente e la build Astro (dist/), non piu legacy-html/ che e congelato.
# I PDF prodotti finiscono in public/pdf/, da dove la build li ripubblica.
SITE = Path(os.environ.get("SITE_ROOT", ROOT / "dist"))
PDF_OUT = Path(os.environ.get("PDF_OUT", ROOT / "public" / "pdf"))
# --only <nome-file-italiano-senza-estensione>: rigenera una sola risorsa,
# in tutte le lingue e per tutti i livelli. Ripetibile.
ONLY = [sys.argv[i + 1] for i, a in enumerate(sys.argv) if a == "--only" and i + 1 < len(sys.argv)]
# --lang <codice>: genera solo quella lingua (es. --lang pt). Ripetibile.
LANG_ONLY = [sys.argv[i + 1] for i, a in enumerate(sys.argv) if a == "--lang" and i + 1 < len(sys.argv)]
LEVELS = ["a1", "a2", "b1", "b2", "c1"]
LANGUAGES = ["it", "en", "es", "fr", "cs", "pl", "tr", "de", "ja"]
# Portoghese brasiliano (dal 2026-10-09): solo per le pagine già tradotte,
# cioè quelle che nella pagina italiana hanno l'hreflang pt-BR.
OPTIONAL_LANGUAGES = {"pt": "pt-BR"}

pdfmetrics.registerFont(TTFont("ICM", r"C:\Windows\Fonts\DejaVuSans.ttf"))
pdfmetrics.registerFont(TTFont("ICM-Bold", r"C:\Windows\Fonts\DejaVuSans-Bold.ttf"))
pdfmetrics.registerFont(TTFont("ICM-JA", r"C:\Windows\Fonts\YuGothR.ttc", subfontIndex=0))
pdfmetrics.registerFont(TTFont("ICM-JA-Bold", r"C:\Windows\Fonts\YuGothB.ttc", subfontIndex=0))
# Senza la famiglia, <b> e <i> nei paragrafi non trovano il grassetto.
from reportlab.lib.fonts import addMapping
for _family, _bold in (("ICM", "ICM-Bold"), ("ICM-JA", "ICM-JA-Bold")):
    addMapping(_family, 0, 0, _family)
    addMapping(_family, 1, 0, _bold)
    addMapping(_family, 0, 1, _family)
    addMapping(_family, 1, 1, _bold)


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


# Dal 2026-10-13 niente link ai profili Preply: si prenota la lezione di prova
# su WhatsApp, con il messaggio già scritto nella lingua del PDF (gli stessi
# testi di scripts/whatsapp-conversion.mjs).
WHATSAPP = "https://wa.me/393280555034?text="
WHATSAPP_MSG = {
    "it": ("Ciao Martin, vorrei prenotare una lezione di prova di italiano.", "Ciao, vorrei prenotare una lezione di prova di italiano con Licia."),
    "en": ("Hi Martin, I'd like to book an Italian trial lesson.", "Hi, I'd like to book an Italian trial lesson with Licia."),
    "es": ("Hola Martin, quisiera reservar una clase de prueba de italiano.", "Hola, quisiera reservar una clase de prueba de italiano con Licia."),
    "pt": ("Olá Martin, gostaria de marcar uma aula experimental de italiano.", "Olá, gostaria de marcar uma aula experimental de italiano com a Licia."),
    "fr": ("Bonjour Martin, je voudrais réserver un cours d’essai d’italien.", "Bonjour, je voudrais réserver un cours d’essai d’italien avec Licia."),
    "cs": ("Dobrý den, Martine, chtěl(a) bych si rezervovat zkušební lekci italštiny.", "Dobrý den, chtěl(a) bych si rezervovat zkušební lekci italštiny s Licií."),
    "pl": ("Dzień dobry, chciał(a)bym zarezerwować lekcję próbną włoskiego z Martinem.", "Dzień dobry, chciał(a)bym zarezerwować lekcję próbną włoskiego z Licią."),
    "tr": ("Merhaba Martin, İtalyanca deneme dersi almak istiyorum.", "Merhaba, Licia ile İtalyanca deneme dersi almak istiyorum."),
    "de": ("Hallo Martin, ich möchte eine Probestunde Italienisch buchen.", "Hallo, ich möchte eine Probestunde Italienisch bei Licia buchen."),
    "ja": ("Martinさん、こんにちは。イタリア語の体験レッスンを予約したいです。", "こんにちは。Liciaさんのイタリア語の体験レッスンを予約したいです。"),
}


def whatsapp_urls(language):
    from urllib.parse import quote
    martin, licia = WHATSAPP_MSG.get(language, WHATSAPP_MSG["en"])
    return WHATSAPP + quote(martin, safe=""), WHATSAPP + quote(licia, safe="")

# Testo di servizio del PDF: sempre nella lingua del visitatore (REGOLE_LINGUE.md).
# «Martin», «Licia» e «Italiano con Martin» non si traducono in nessuna lingua.
STRINGS = {
    "it": {"kind": "Lettura graduata per imparare l'italiano", "levels": "livelli A1-C1", "level": "livello {lv}",
           "howto": "Il testo è in italiano. Sotto ogni brano trovi le parole utili con la traduzione e le domande: scrivi le risposte nei riquadri.",
           "words_head": ("Italiano", "Significato"), "cta_heading": "Lezioni di italiano 1:1",
           "martin": "scienza, tecnologia ed etimologia", "licia": "arte, pazienza e grammatica",
           "book": "Prenota su WhatsApp", "free_material": "letture, grammatica e vocabolario gratuiti"},
    "en": {"kind": "Graded reading to learn Italian", "levels": "levels A1-C1", "level": "level {lv}",
           "howto": "The text is in Italian. Under each passage you will find the key words with their meaning and the questions: write your answers in the boxes.",
           "words_head": ("Italian", "Meaning"), "cta_heading": "1:1 Italian lessons",
           "martin": "science, technology and etymology", "licia": "art, patience and grammar",
           "book": "Book on WhatsApp", "free_material": "free readings, grammar and vocabulary"},
    "es": {"kind": "Lectura graduada para aprender italiano", "levels": "niveles A1-C1", "level": "nivel {lv}",
           "howto": "El texto está en italiano. Debajo de cada pasaje encontrarás las palabras clave con su significado y las preguntas: escribe tus respuestas en los recuadros.",
           "words_head": ("Italiano", "Significado"), "cta_heading": "Clases de italiano 1:1",
           "martin": "ciencia, tecnología y etimología", "licia": "arte, paciencia y gramática",
           "book": "Reserva por WhatsApp", "free_material": "lecturas, gramática y vocabulario gratuitos"},
    "fr": {"kind": "Lecture graduée pour apprendre l'italien", "levels": "niveaux A1-C1", "level": "niveau {lv}",
           "howto": "Le texte est en italien. Sous chaque passage se trouvent les mots utiles avec leur sens et les questions : écris tes réponses dans les cadres.",
           "words_head": ("Italien", "Sens"), "cta_heading": "Cours d'italien 1:1",
           "martin": "sciences, technologie et étymologie", "licia": "art, patience et grammaire",
           "book": "Réserver sur WhatsApp", "free_material": "lectures, grammaire et vocabulaire gratuits"},
    "cs": {"kind": "Odstupňované čtení pro výuku italštiny", "levels": "úrovně A1-C1", "level": "úroveň {lv}",
           "howto": "Text je v italštině. Pod každým úryvkem najdeš užitečná slova s významem a otázky: odpovědi piš do rámečků.",
           "words_head": ("Italsky", "Význam"), "cta_heading": "Individuální lekce italštiny",
           "martin": "věda, technika a etymologie", "licia": "umění, trpělivost a gramatika",
           "book": "Rezervovat přes WhatsApp", "free_material": "čtení, gramatika a slovní zásoba zdarma"},
    "pl": {"kind": "Czytanka z poziomami do nauki włoskiego", "levels": "poziomy A1-C1", "level": "poziom {lv}",
           "howto": "Tekst jest po włosku. Pod każdym fragmentem znajdziesz przydatne słowa ze znaczeniem i pytania: odpowiedzi zapisz w ramkach.",
           "words_head": ("Włoski", "Znaczenie"), "cta_heading": "Lekcje włoskiego 1:1",
           "martin": "nauka, technologia i etymologia", "licia": "sztuka, cierpliwość i gramatyka",
           "book": "Zarezerwuj przez WhatsApp", "free_material": "darmowe czytanki, gramatyka i słownictwo"},
    "tr": {"kind": "İtalyanca öğrenmek için kademeli okuma", "levels": "A1-C1 seviyeleri", "level": "{lv} seviyesi",
           "howto": "Metin İtalyancadır. Her bölümün altında yararlı kelimeler ve anlamları ile sorular var: yanıtlarını kutulara yaz.",
           "words_head": ("İtalyanca", "Anlamı"), "cta_heading": "1:1 İtalyanca dersleri",
           "martin": "bilim, teknoloji ve etimoloji", "licia": "sanat, sabır ve dilbilgisi",
           "book": "WhatsApp'tan rezervasyon yap", "free_material": "ücretsiz okuma, dilbilgisi ve kelime"},
    "de": {"kind": "Gestufter Lesetext zum Italienischlernen", "levels": "Niveaus A1-C1", "level": "Niveau {lv}",
           "howto": "Der Text ist auf Italienisch. Unter jedem Abschnitt stehen die nützlichen Wörter mit ihrer Bedeutung und die Fragen: Schreibe deine Antworten in die Kästchen.",
           "words_head": ("Italienisch", "Bedeutung"), "cta_heading": "Italienischunterricht 1:1",
           "martin": "Wissenschaft, Technik und Etymologie", "licia": "Kunst, Geduld und Grammatik",
           "book": "Über WhatsApp buchen", "free_material": "kostenlose Lesetexte, Grammatik und Wortschatz"},
    "pt": {"kind": "Leitura graduada para aprender italiano", "levels": "níveis A1-C1", "level": "nível {lv}",
           "howto": "O texto está em italiano. Embaixo de cada trecho você encontra as palavras úteis com o significado e as perguntas: escreva as respostas nos quadros.",
           "words_head": ("Italiano", "Significado"), "cta_heading": "Aulas de italiano 1:1",
           "martin": "ciência, tecnologia e etimologia", "licia": "arte, paciência e gramática",
           "book": "Agendar pelo WhatsApp", "free_material": "leituras, gramática e vocabulário grátis"},
    "ja": {"kind": "イタリア語学習のための段階別読解", "levels": "レベル A1〜C1", "level": "レベル {lv}",
           "howto": "本文はイタリア語です。各文章の下に、意味つきの重要単語と質問があります。答えは枠の中に書いてください。",
           "words_head": ("イタリア語", "意味"), "cta_heading": "マンツーマンのイタリア語レッスン",
           "martin": "科学・技術・語源", "licia": "芸術・忍耐・文法",
           "book": "WhatsAppで予約", "free_material": "無料の読解・文法・語彙"},
}


def strings(language):
    return STRINGS.get(language, STRINGS["en"])


def clean(value):
    return re.sub(r"\s+", " ", value or "").strip()


LINE_BREAK = "\ue000"  # carattere privato, mai presente nel testo


def node_text(node, line_breaks=False):
    # Niente spazio artificiale fra i pezzi: <em>Issus</em>. deve restare
    # "Issus." e non "Issus .". La spaziatura corretta e' gia' nell'HTML,
    # clean() si limita a compattare gli a capo dell'indentazione.
    # Fa eccezione <br>: la compressione della build toglie lo spazio che lo
    # segue, e nei riquadri <strong>Presente</strong><br>Penso... etichetta e
    # frase si attaccherebbero. Diventa un a capo (line_breaks) o uno spazio.
    pieces = []

    def walk(element):
        if isinstance(element.tag, str) and element.text:
            pieces.append(element.text)
        for child in element:
            if isinstance(child.tag, str):
                # Elenchi di parole della lezione sulla pronuncia: su una riga, separate da un punto.
                if child.tag.lower() == "li" and "pron-words" in (element.get("class") or "") and child.getprevious() is not None:
                    pieces.append(" · ")
                if child.tag.lower() == "br":
                    pieces.append(LINE_BREAK)
                else:
                    walk(child)
            if child.tail:
                pieces.append(child.tail)

    walk(node)
    text = re.sub(rf"\s*{LINE_BREAK}\s*", LINE_BREAK, clean("".join(pieces))).strip(LINE_BREAK)
    return text if line_breaks else text.replace(LINE_BREAK, " ")


def safe_markup(value):
    # Le emoji (🐢, 🎙) non sono nel font del PDF: si tolgono.
    value = re.sub(r"[\U0001F000-\U0001FFFF]\s?", "", value)
    value = value.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    return value.replace(LINE_BREAK, "<br/>")


def add_node(story, node, style):
    tag = node.tag.lower() if isinstance(node.tag, str) else ""
    text = node_text(node)
    if not text or tag in {"script", "style", "nav", "footer", "header", "button"}:
        return
    if tag in {"h1", "h2"}:
        story.append(Paragraph(safe_markup(text), style["h2"]))
    elif tag == "h3":
        story.append(Paragraph(safe_markup(text), style["h3"]))
    elif tag == "ul" and "pron-words" in (node.get("class") or ""):
        story.append(Paragraph(safe_markup(text), style["body"]))
    elif tag in {"p", "li", "figcaption", "label"} or "example" in (node.get("class") or "").split() or "mistake" in (node.get("class") or "").split():
        prefix = "• " if tag == "li" else ""
        story.append(Paragraph(safe_markup(prefix + node_text(node, line_breaks=True)), style["body"]))
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
    skip_classes = {"language-switcher", "pdf-downloads", "level-nav", "lesson-nav", "conversion-section", "exercise-actions", "score-card", "no-print"}
    nodes = []
    for node in container.xpath(".//*"):
        classes = set((node.get("class") or "").split())
        if classes & skip_classes:
            continue
        if any(set((parent.get("class") or "").split()) & skip_classes for parent in node.iterancestors()):
            continue
        classes = set((node.get("class") or "").split())
        printable = node.tag in {"h2", "h3", "p", "li", "table", "figcaption", "label"} or bool(classes & {"example", "mistake", "pron-words"})
        if node.tag == "li" and "pron-words" in (node.getparent().get("class") or ""):
            printable = False
        if printable and not any(parent.tag == "table" for parent in node.iterancestors()):
            nodes.append(node)
    return nodes


def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(colors.HexColor("#e4d3c2"))
    canvas.setLineWidth(0.5)
    canvas.line(18 * mm, 14 * mm, 192 * mm, 14 * mm)
    canvas.setFont("ICM-Bold", 8.5)
    canvas.setFillColor(colors.HexColor("#18352e"))
    canvas.drawString(18 * mm, 10 * mm, "italianoconmartin.com")
    canvas.linkURL("https://italianoconmartin.com/", (18 * mm, 8.5 * mm, 61 * mm, 13 * mm), relative=0)
    canvas.drawRightString(192 * mm, 10 * mm, str(doc.page))
    canvas.restoreState()


@lru_cache(maxsize=4)
def circular_photo(name="martin-portrait.webp"):
    # PNG con la trasparenza e il bordo smussato: la maschera si disegna a 4x e
    # poi si riduce. Prima era un JPEG su fondo color crema, e la compressione
    # lasciava dei quadratini grigi ai lati del cerchio (Martin, 2026-10-29).
    source = SITE / "assets" / name
    size = 360
    photo = PILImage.open(source).convert("RGB")
    photo = ImageOps.fit(photo, (size, size), method=PILImage.Resampling.LANCZOS, centering=(0.5, 0.34))
    big = PILImage.new("L", (size * 4, size * 4), 0)
    ImageDraw.Draw(big).ellipse((8, 8, size * 4 - 9, size * 4 - 9), fill=255)
    photo.putalpha(big.resize((size, size), PILImage.Resampling.LANCZOS))
    output = BytesIO()
    photo.save(output, format="PNG", optimize=True)
    return output.getvalue()


def whatsapp_button(style, url, label):
    # Un pulsante vero, come sul sito: si vede di più del vecchio link sottolineato.
    text = Paragraph(f'<link href="{url}" color="#ffffff"><b>{safe_markup(label)}</b></link>', ParagraphStyle("Btn", parent=style["small"], fontSize=8.2, leading=10.5, textColor=colors.white))
    from reportlab.pdfbase.pdfmetrics import stringWidth
    button = Table([[text]], colWidths=[stringWidth(label, "ICM-JA-Bold" if style["body"].fontName == "ICM-JA" else "ICM-Bold", 8.2) + 16], hAlign="LEFT")
    button.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#1f7a4d")),
        ("ROUNDEDCORNERS", [6, 6, 6, 6]),
        ("LEFTPADDING", (0, 0), (-1, -1), 7),
        ("RIGHTPADDING", (0, 0), (-1, -1), 7),
        ("TOPPADDING", (0, 0), (-1, -1), 3.5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4.5),
    ]))
    return button


def teacher_cell(style, photo, name, specialty, url, book):
    portrait = Image(BytesIO(circular_photo(photo)), width=22 * mm, height=22 * mm, mask="auto")
    copy = [
        Paragraph(f"<b>{safe_markup(name)}</b>", style["author"]),
        Paragraph(safe_markup(specialty), style["small"]),
        Spacer(1, 1.5 * mm),
        whatsapp_button(style, url, book),
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
    # Chiusura del PDF: chi insegna, con che cosa, e dove si prenota (WhatsApp).
    # Martin e Licia restano non tradotti in ogni lingua (REGOLE_LINGUE.md).
    t = strings(language)
    martin_url, licia_url = whatsapp_urls(language)
    heading = Paragraph(f'<b>{safe_markup(t["cta_heading"])}</b>', style["h3"])
    pair = Table(
        [[
            teacher_cell(style, "martin-portrait.webp", "Martin", t["martin"], martin_url, t["book"]),
            teacher_cell(style, "licia-portrait.webp", "Licia", t["licia"], licia_url, t["book"]),
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
    panel = Table([[heading], [pair], [site]], colWidths=[156 * mm], hAlign="CENTER")
    panel.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#f7eee5")),
        ("ROUNDEDCORNERS", [10, 10, 10, 10]),
        ("LINEABOVE", (0, 2), (-1, 2), 0.5, colors.HexColor("#e4d3c2")),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 12),
        ("RIGHTPADDING", (0, 0), (-1, -1), 12),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, 0), 11),
        ("BOTTOMPADDING", (0, 2), (-1, 2), 11),
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


def answer_box(width=152 * mm, height=17 * mm):
    """Riquadro per scrivere la risposta a mano: stesso segno del riquadro
    di risposta sul sito (bordo chiaro, angoli squadrati, fondo bianco)."""
    box = Table([[""]], colWidths=[width], rowHeights=[height], hAlign="LEFT")
    box.setStyle(TableStyle([
        ("BOX", (0, 0), (-1, -1), 0.6, colors.HexColor("#cdbba8")),
        ("BACKGROUND", (0, 0), (-1, -1), colors.white),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    return box


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
        parts.extend([Spacer(1, 1.5 * mm), answer_box(), Spacer(1, 4 * mm)])
        story.append(KeepTogether(parts))


def render_article(story, article, style, language, minor=False):
    """minor=True per la nota finale: stesso contenuto, peso tipografico da nota."""
    heading = clean("".join(article.xpath(".//header//h2[1]//text()")))
    focus = clean("".join(article.xpath(".//header//p[1]//text()")))
    block = [Paragraph(safe_markup(heading), style["h3" if minor else "h2"])]
    if focus and not minor:
        block.append(Paragraph(safe_markup(focus), style["subtitle_left"]))
    # phrase-list: frasi utili con spiegazioni nella lingua del visitatore (non è materiale di studio).
    for paragraph in article.xpath('.//div[contains(@class, "story-text") or contains(@class, "phrase-list")]/*[self::p or self::h3]'):
        # Sottotitoli dentro il testo delle letture lunghe (dal 2026-10-17).
        if paragraph.tag == "h3":
            block.append(Paragraph(safe_markup(node_text(paragraph)), style["h3"]))
            continue
        # Fonti con il link (dal 2026-10-17): sulla carta l'indirizzo si scrive dopo il titolo.
        for link in paragraph.xpath('.//a[@target="_blank"][starts-with(@href, "http")]'):
            link.tail = f" ({link.get('href')})" + (link.tail or "")
        # line_breaks: nei dialoghi ogni battuta va a capo, come sulla pagina.
        block.append(Paragraph(safe_markup(node_text(paragraph, line_breaks=True)), style["small" if minor else "body"]))
    if minor:
        story.append(KeepTogether(block))
        return
    story.extend(block)
    # Riquadro «La struttura di questo testo» (letture riscritte dal 2026-09-29).
    for box in article.xpath('.//div[contains(@class, "structure-box")]'):
        story.append(Paragraph(safe_markup(clean("".join(box.xpath("./h3[1]//text()")))), style["h3"]))
        for item in box.xpath("./ul/li"):
            story.append(Paragraph("• " + safe_markup(node_text(item)), style["body"]))
        for paragraph in box.xpath("./p"):
            story.append(Paragraph(safe_markup(node_text(paragraph)), style["body"]))
    for column in article.xpath('.//div[contains(@class, "learning-grid")]/div'):
        title = clean("".join(column.xpath("./h3[1]//text()")))
        words = column.xpath("./p[1]")
        questions = column.xpath("./ol[1]")
        if questions:
            questions_block(story, title, questions[0], style)
        elif words:
            words_block(story, title, words[0], style, language)


def cover_block(story, style, language, title, level, canonical, image, present_levels=None):
    t = strings(language)
    scope = t["levels"] if level == "all-levels" else t["level"].format(lv=level.upper())
    story.append(Paragraph(safe_markup(title), style["title"]))
    story.append(Paragraph(f'{safe_markup(t["kind"])} - {safe_markup(scope)}', style["subtitle"]))
    if image:
        story.extend([image, Spacer(1, 5 * mm)])
    story.append(Paragraph(safe_markup(t["howto"]), style["howto"]))
    if level == "all-levels":
        present = present_levels or LEVELS
        story.append(Paragraph(safe_markup(" - ".join(lv.upper() for lv in present)), style["subtitle"]))
    if canonical:
        story.append(Paragraph(f'<link href="{canonical}" color="#b53f27"><u>{safe_markup(canonical)}</u></link>', style["small"]))
    if level == "all-levels":
        story.append(PageBreak())
    else:
        story.append(Spacer(1, 5 * mm))


# --- Lezioni di grammatica (impaginato rifatto il 2026-10-29) -----------------
# Prima le lezioni si stampavano «appiattite»: schede di esempio come righe
# di testo, errori incollati («la mio casaMa: la mia casa»), la briciola di pane,
# «Esercizi con feedback immediato» su carta e nessuna soluzione. Ora ogni
# blocco della pagina ha il suo aspetto e le soluzioni stanno in fondo.

GREEN = colors.HexColor("#18352e")
RED = colors.HexColor("#b53f27")
CREAM = colors.HexColor("#f7eee5")
CARD = colors.HexColor("#fbf6f0")
LINE = colors.HexColor("#e4d3c2")
CONTENT_W = 174 * mm - 12
RIGHT = colors.HexColor("#2f6b4f")

# Testo di servizio delle lezioni e del libro, nella lingua del visitatore.
GRAMMAR_STRINGS = {
    "it": {"kind": "Lezione di grammatica italiana", "exercises": "Esercizi", "howto": "Scrivi la risposta sulla riga. Le soluzioni sono alla fine della lezione.", "solutions": "Soluzioni",
           "book_title": "Grammatica italiana", "book_subtitle": "Dal livello A1 al C1: spiegazioni, tabelle, esempi ed esercizi con le soluzioni", "toc": "Indice", "level": "Livello {lv}", "lessons": "{n} lezioni", "file": "grammatica-italiana-a1-c1.pdf"},
    "en": {"kind": "Italian grammar lesson", "exercises": "Exercises", "howto": "Write the answer on the line. The answers are at the end of the lesson.", "solutions": "Answers",
           "book_title": "Italian Grammar", "book_subtitle": "From A1 to C1: explanations, tables, examples and exercises with answers", "toc": "Contents", "level": "Level {lv}", "lessons": "{n} lessons", "file": "italian-grammar-a1-c1.pdf"},
    "es": {"kind": "Lección de gramática italiana", "exercises": "Ejercicios", "howto": "Escribe la respuesta en la línea. Las soluciones están al final de la lección.", "solutions": "Soluciones",
           "book_title": "Gramática italiana", "book_subtitle": "Del nivel A1 al C1: explicaciones, tablas, ejemplos y ejercicios con soluciones", "toc": "Índice", "level": "Nivel {lv}", "lessons": "{n} lecciones", "file": "gramatica-italiana-a1-c1.pdf"},
    "fr": {"kind": "Leçon de grammaire italienne", "exercises": "Exercices", "howto": "Écrivez la réponse sur la ligne. Les solutions sont à la fin de la leçon.", "solutions": "Solutions",
           "book_title": "Grammaire italienne", "book_subtitle": "Du niveau A1 au C1 : explications, tableaux, exemples et exercices corrigés", "toc": "Sommaire", "level": "Niveau {lv}", "lessons": "{n} leçons", "file": "grammaire-italienne-a1-c1.pdf"},
    "cs": {"kind": "Lekce italské gramatiky", "exercises": "Cvičení", "howto": "Odpověď napište na řádek. Řešení najdete na konci lekce.", "solutions": "Řešení",
           "book_title": "Italská gramatika", "book_subtitle": "Od úrovně A1 po C1: vysvětlení, tabulky, příklady a cvičení s řešením", "toc": "Obsah", "level": "Úroveň {lv}", "lessons": "{n} lekcí", "file": "italska-gramatika-a1-c1.pdf"},
    "pl": {"kind": "Lekcja gramatyki włoskiej", "exercises": "Ćwiczenia", "howto": "Wpisz odpowiedź na linii. Odpowiedzi są na końcu lekcji.", "solutions": "Odpowiedzi",
           "book_title": "Gramatyka włoska", "book_subtitle": "Od poziomu A1 do C1: wyjaśnienia, tabele, przykłady i ćwiczenia z odpowiedziami", "toc": "Spis treści", "level": "Poziom {lv}", "lessons": "{n} lekcji", "file": "gramatyka-wloska-a1-c1.pdf"},
    "tr": {"kind": "İtalyanca dilbilgisi dersi", "exercises": "Alıştırmalar", "howto": "Cevabı satıra yazın. Cevaplar dersin sonundadır.", "solutions": "Cevaplar",
           "book_title": "İtalyanca Dilbilgisi", "book_subtitle": "A1'den C1'e: açıklamalar, tablolar, örnekler ve cevaplı alıştırmalar", "toc": "İçindekiler", "level": "{lv} seviyesi", "lessons": "{n} ders", "file": "italyanca-dilbilgisi-a1-c1.pdf"},
    "de": {"kind": "Lektion italienische Grammatik", "exercises": "Übungen", "howto": "Schreib die Antwort auf die Linie. Die Lösungen stehen am Ende der Lektion.", "solutions": "Lösungen",
           "book_title": "Italienische Grammatik", "book_subtitle": "Von A1 bis C1: Erklärungen, Tabellen, Beispiele und Übungen mit Lösungen", "toc": "Inhalt", "level": "Niveau {lv}", "lessons": "{n} Lektionen", "file": "italienische-grammatik-a1-c1.pdf"},
    "ja": {"kind": "イタリア語文法レッスン", "exercises": "練習問題", "howto": "答えを線の上に書きましょう。解答はレッスンの最後にあります。", "solutions": "解答",
           "book_title": "イタリア語文法", "book_subtitle": "A1からC1まで：説明・表・例文・解答つき練習問題", "toc": "目次", "level": "レベル{lv}", "lessons": "{n}レッスン", "file": "italian-grammar-a1-c1.pdf"},
    "pt": {"kind": "Lição de gramática italiana", "exercises": "Exercícios", "howto": "Escreva a resposta na linha. As respostas estão no final da lição.", "solutions": "Respostas",
           "book_title": "Gramática italiana", "book_subtitle": "Do nível A1 ao C1: explicações, tabelas, exemplos e exercícios com respostas", "toc": "Sumário", "level": "Nível {lv}", "lessons": "{n} lições", "file": "gramatica-italiana-a1-c1.pdf"},
}


def gstrings(language):
    return GRAMMAR_STRINGS.get(language, GRAMMAR_STRINGS["en"])


def grammar_styles(language):
    s = styles_for(language)
    family, bold = s["body"].fontName, s["h2"].fontName
    s.update({
        "g_eyebrow": ParagraphStyle("GEyebrow", parent=s["small"], fontName=bold, fontSize=8, leading=11, textColor=colors.HexColor("#f2c9a8")),
        "g_title": ParagraphStyle("GTitle", parent=s["body"], fontName=bold, fontSize=23, leading=28, textColor=colors.white, spaceAfter=0),
        "g_lead": ParagraphStyle("GLead", parent=s["body"], fontSize=10, leading=14.5, textColor=colors.HexColor("#dbe6e1"), spaceAfter=0),
        "g_h2": ParagraphStyle("GH2", parent=s["h2"], fontSize=14.5, leading=19, textColor=GREEN, spaceBefore=14, spaceAfter=3),
        "g_h3": ParagraphStyle("GH3", parent=s["h3"], fontSize=10.8, leading=14, textColor=RED, spaceBefore=6, spaceAfter=3),
        "g_body": ParagraphStyle("GBody", parent=s["body"], fontSize=9.6, leading=14.2, spaceAfter=5),
        "g_card": ParagraphStyle("GCard", parent=s["body"], fontSize=9.4, leading=13.2, spaceAfter=0),
        "g_note": ParagraphStyle("GNote", parent=s["body"], fontSize=9.2, leading=13.4, spaceAfter=0, textColor=GREEN),
        "g_cell": ParagraphStyle("GCell", parent=s["body"], fontSize=8.8, leading=11.8, spaceAfter=0),
        "g_cell_head": ParagraphStyle("GCellHead", parent=s["body"], fontName=bold, fontSize=8.4, leading=11, spaceAfter=0, textColor=GREEN),
        "g_ex": ParagraphStyle("GEx", parent=s["body"], fontSize=9.6, leading=13, spaceAfter=0),
        "g_sol": ParagraphStyle("GSol", parent=s["body"], fontSize=8.6, leading=12.5, textColor=colors.HexColor("#33454a")),
    })
    s["ja"] = language == "ja"
    return s


def inline(node):
    """Testo di un nodo con grassetto, corsivo e a capo in markup ReportLab."""
    pieces = []

    def esc(text):
        # ❌ e ✓ segnano gli errori in alcune lezioni: restano (vedi mistake_markup); le altre emoji si tolgono.
        text = (text or "").replace("❌", WRONG_MARK).replace("✔", "✓")
        text = re.sub(r"[\U0001F000-\U0001FFFF☀-✒✕-➿️]\s?", "", text)
        return re.sub(r"\s+", " ", text).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")

    def walk(element):
        pieces.append(esc(element.text))
        for child in element:
            if not isinstance(child.tag, str):
                pieces.append(esc(child.tail))
                continue
            tag = child.tag.lower()
            if tag == "br":
                pieces.append("<br/>")
            elif tag in {"input", "button", "script", "style", "img", "audio"} or "feedback" in (child.get("class") or ""):
                pass
            else:
                wrap = {"strong": "b", "b": "b", "em": "i", "i": "i"}.get(tag)
                if wrap:
                    pieces.append(f"<{wrap}>")
                walk(child)
                if wrap:
                    pieces.append(f"</{wrap}>")
            pieces.append(esc(child.tail))

    walk(node)
    text = "".join(pieces).strip()
    text = re.sub(r"\s*<br/>\s*", "<br/>", text)
    text = re.sub(r"^(<br/>)+|(<br/>)+$", "", text)
    return re.sub(r"<(b|i)>\s*</\1>", "", text)


def boxed(flowable_or_text, style, background=CARD, border=LINE, accent=None, width=CONTENT_W, padding=7):
    content = Paragraph(flowable_or_text, style) if isinstance(flowable_or_text, str) else flowable_or_text
    box = Table([[content]], colWidths=[width], hAlign="LEFT")
    commands = [
        ("BACKGROUND", (0, 0), (-1, -1), background),
        ("ROUNDEDCORNERS", [6, 6, 6, 6]),
        ("LEFTPADDING", (0, 0), (-1, -1), padding + (3 if accent else 0)),
        ("RIGHTPADDING", (0, 0), (-1, -1), padding),
        ("TOPPADDING", (0, 0), (-1, -1), padding - 1),
        ("BOTTOMPADDING", (0, 0), (-1, -1), padding),
    ]
    if border:
        commands.append(("BOX", (0, 0), (-1, -1), 0.5, border))
    if accent:
        commands.append(("LINEBEFORE", (0, 0), (0, -1), 3, accent))
    box.setStyle(TableStyle(commands))
    return box


def card_grid(cells, columns, width=CONTENT_W):
    gap = 3 * mm
    col = (width - gap * (columns - 1)) / columns
    rows = [cells[i:i + columns] for i in range(0, len(cells), columns)]
    data = []
    for row in rows:
        line = []
        for index in range(columns):
            line.append(row[index] if index < len(row) else "")
            if index < columns - 1:
                line.append("")
        data.append(line)
    widths = []
    for index in range(columns):
        widths.append(col)
        if index < columns - 1:
            widths.append(gap)
    grid = Table(data, colWidths=widths, hAlign="LEFT")
    grid.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3 * mm),
    ]))
    return grid, col


def styled_table(node, style):
    rows = []
    header_rows = 0
    for row in node.xpath(".//tr"):
        cells = row.xpath("./th|./td")
        if not cells:
            continue
        is_head = all(cell.tag == "th" for cell in cells) and len(rows) == header_rows
        if is_head:
            header_rows += 1
        rows.append([Paragraph(inline(cell), style["g_cell_head" if is_head else "g_cell"]) for cell in cells])
    if not rows:
        return None
    columns = max(len(row) for row in rows)
    rows = [row + [""] * (columns - len(row)) for row in rows]
    table = Table(rows, colWidths=[CONTENT_W / columns] * columns, repeatRows=header_rows, hAlign="LEFT")
    commands = [
        ("GRID", (0, 0), (-1, -1), 0.4, LINE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 5),
        ("RIGHTPADDING", (0, 0), (-1, -1), 5),
        ("TOPPADDING", (0, 0), (-1, -1), 3.5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
        ("ROWBACKGROUNDS", (0, header_rows), (-1, -1), [colors.white, CARD]),
    ]
    if header_rows:
        commands.append(("BACKGROUND", (0, 0), (-1, header_rows - 1), colors.HexColor("#f4e3d0")))
    table.setStyle(TableStyle(commands))
    return table


WRONG_MARK = ""  # carattere privato al posto di ❌


def is_mistake(node):
    return "mistake" in (node.get("class") or "").split() or "❌" in node.text_content()


def mistake_markup(node, style):
    no, yes = ("×", "○") if style["ja"] else ("✗", "✓")
    text = inline(node)
    if WRONG_MARK in text:
        # Schede «❌ i casa<br>✓ le case».
        lines = [line.replace(WRONG_MARK, "").replace("✓", "").strip() for line in text.split("<br/>")]
        wrong, rest = lines[0], " ".join(lines[1:])
    else:
        # Schede «<strong>Non: la mio casa</strong>Ma: la mia casa.»
        wrong_node = node.find("strong")
        wrong = inline(wrong_node) if wrong_node is not None else ""
        rest = text
        if wrong and rest.startswith(f"<b>{wrong}</b>"):
            rest = rest[len(f"<b>{wrong}</b>"):].strip()
    return f'<font color="#b53f27">{no} <strike>{wrong}</strike></font><br/><font color="#2f6b4f">{yes} {rest}</font>'


GRID_CLASSES = {"example-grid": 2, "mistake-grid": 2, "rule-grid": 3, "grid": 2}
CARD_CLASSES = {"example", "rule-card", "card", "mistake"}
SKIP_CLASSES = {"breadcrumbs", "lesson-nav", "pdf-downloads", "score-card", "exercise-actions", "conversion-section", "no-print", "feedback", "lesson-meta", "eyebrow"}


def render_grammar_node(node, flow, style, ctx):
    if not isinstance(node.tag, str):
        return
    tag = node.tag.lower()
    classes = set((node.get("class") or "").split())
    if classes & SKIP_CLASSES or tag in {"script", "style", "nav", "button", "input", "audio", "img", "figure"}:
        return
    if tag == "h2":
        text = gstrings(ctx["language"])["exercises"] if ctx.get("exercise_section") else inline(node)
        flow.append(KeepTogether([Paragraph(text, style["g_h2"]), HRFlowable(width="100%", thickness=1.2, color=RED, spaceBefore=1, spaceAfter=5, hAlign="LEFT")]))
    elif tag in {"h3", "h4"}:
        flow.append(Paragraph(inline(node), style["g_h3"]))
    elif tag == "p" and classes & {"mini-note", "italian-box"}:
        flow.extend([Spacer(1, 1.5 * mm), boxed(inline(node), style["g_note"], background=colors.HexColor("#eef4f1"), border=None, accent=colors.HexColor("#3f7f68")), Spacer(1, 3 * mm)])
    elif tag == "p":
        text = inline(node)
        if text:
            flow.append(Paragraph(text, style["g_body"]))
    elif tag in {"ul", "ol"}:
        for index, item in enumerate(node.xpath("./li"), 1):
            bullet = f"{index}." if tag == "ol" else "•"
            flow.append(Paragraph(inline(item), style["g_body"], bulletText=bullet))
    elif tag == "table":
        table = styled_table(node, style)
        if table:
            flow.extend([table, Spacer(1, 4 * mm)])
    elif classes & set(GRID_CLASSES):
        cards = [child for child in node if isinstance(child.tag, str) and set((child.get("class") or "").split()) & CARD_CLASSES]
        if not cards:
            for child in node:
                render_grammar_node(child, flow, style, ctx)
            return
        columns = next(GRID_CLASSES[c] for c in GRID_CLASSES if c in classes)
        longest = max(len(inline(card)) for card in cards)
        if columns == 3 and longest > 90:
            columns = 2
        if columns == 2 and longest > 120:
            columns = 1
        col = (CONTENT_W - 3 * mm * (columns - 1)) / columns
        boxes = []
        for card in cards:
            markup = mistake_markup(card, style) if is_mistake(card) else inline(card)
            boxes.append(boxed(markup, style["g_card"], width=col))
        grid, _ = card_grid(boxes, columns)
        flow.extend([Spacer(1, 1 * mm), grid])
    elif classes & CARD_CLASSES:
        markup = mistake_markup(node, style) if is_mistake(node) else inline(node)
        flow.extend([boxed(markup, style["g_card"]), Spacer(1, 2 * mm)])
    elif "dialogue" in classes:
        lines = [Paragraph(inline(p), style["g_card"]) for p in node.xpath("./p")]
        if lines:
            inner = Table([[line] for line in lines], colWidths=[CONTENT_W - 20])
            inner.setStyle(TableStyle([("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0), ("TOPPADDING", (0, 0), (-1, -1), 1.5), ("BOTTOMPADDING", (0, 0), (-1, -1), 1.5)]))
            flow.extend([boxed(inner, style["g_card"]), Spacer(1, 3 * mm)])
    elif "exercise" in classes:
        label = node.find("label")
        text = inline(label) if label is not None else inline(node)
        text = re.sub(r"_{2,}", "<u>" + " " * 16 + "</u>", text)
        if "<u>" not in text:
            text += " <u>" + " " * 22 + "</u>"
        flow.append(Paragraph(text, style["g_ex"]))
        flow.append(Spacer(1, 3.2 * mm))
        number = re.match(r"\s*(\d+)\s*[.)]", label.text_content() if label is not None else "")
        ctx["answers"].append((number.group(1) if number else str(len(ctx["answers"]) + 1), clean(node.get("data-answer"))))
    else:
        for child in node:
            render_grammar_node(child, flow, style, ctx)


def grammar_header(document, style, language, canonical, level):
    intro = document.xpath('//section[contains(@class, "page-intro")]')
    scope = intro[0] if intro else document
    title = clean("".join(scope.xpath(".//h1[1]//text()")))
    lead = scope.xpath('.//p[contains(@class, "lead")]')
    eyebrow = f'{safe_markup(gstrings(language)["kind"])} · {level.upper()} · Italiano con Martin'
    rows = [[Paragraph(eyebrow.upper() if language != "ja" else eyebrow, style["g_eyebrow"])], [Paragraph(safe_markup(title), style["g_title"])]]
    if lead:
        rows.append([Paragraph(inline(lead[0]), style["g_lead"])])
    band = Table(rows, colWidths=[CONTENT_W], hAlign="LEFT")
    band.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), GREEN),
        ("ROUNDEDCORNERS", [10, 10, 10, 10]),
        ("LEFTPADDING", (0, 0), (-1, -1), 14),
        ("RIGHTPADDING", (0, 0), (-1, -1), 14),
        ("TOPPADDING", (0, 0), (-1, -1), 2),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
        ("TOPPADDING", (0, 0), (-1, 0), 13),
        ("BOTTOMPADDING", (0, -1), (-1, -1), 14),
    ]))
    flow = [band]
    if canonical:
        flow.append(Spacer(1, 2 * mm))
        flow.append(Paragraph(f'<link href="{canonical}" color="#b53f27">{safe_markup(unquote(canonical))}</link>', style["small"]))
    flow.append(Spacer(1, 2 * mm))
    return title, flow


def render_grammar(document, page, language, level, style):
    """Restituisce (titolo, flowable) di una lezione di grammatica, senza chiusura."""
    canonical = next(iter(document.xpath('//link[@rel="canonical"]/@href')), "")
    title, flow = grammar_header(document, style, language, canonical, level)
    main = document.xpath("//main")[0]
    # La lezione sulla pronuncia ha audio ed esercizi solo per lo schermo: resta sul percorso generico.
    if main.xpath('.//*[contains(@class, "pron-word")]'):
        for node in content_nodes(main):
            if node.xpath('ancestor-or-self::*[contains(@class, "page-intro")]'):
                continue
            add_node(flow, node, style)
        return title, flow
    ctx = {"language": language, "answers": []}
    articles = main.xpath('.//article[contains(@class, "lesson-box") or contains(@class, "box")] | .//section[contains(@class, "lesson-box")]')
    if not articles:
        for node in content_nodes(main):
            if not node.xpath('ancestor-or-self::*[contains(@class, "page-intro")]'):
                add_node(flow, node, style)
        return title, flow
    for article in articles:
        if article.xpath('ancestor::*[contains(@class, "lesson-box") or contains(@class, "box")][self::article or self::section]'):
            continue
        has_exercises = bool(article.xpath('.//div[contains(concat(" ", normalize-space(@class), " "), " exercise ")]'))
        ctx["exercise_section"] = has_exercises
        if has_exercises:
            ctx["answers"] = []
        for child in article:
            render_grammar_node(child, flow, style, ctx)
            if has_exercises and isinstance(child.tag, str) and child.tag == "h2":
                flow.append(Paragraph(f'<i>{safe_markup(gstrings(language)["howto"])}</i>', style["small"]))
                flow.append(Spacer(1, 3 * mm))
        if has_exercises and ctx["answers"]:
            answers = " · ".join(f"<b>{n}.</b> {safe_markup(a)}" for n, a in ctx["answers"])
            flow.append(Spacer(1, 3 * mm))
            flow.append(KeepTogether([
                Paragraph(f'<b>{safe_markup(gstrings(language)["solutions"])}</b>', style["g_h3"]),
                boxed(answers, style["g_sol"], background=colors.HexColor("#f3f1ee"), border=None),
            ]))
    return title, flow


# --- Il libro: tutta la grammatica in un PDF per lingua (2026-10-29) ----------
# Martin: «così se cercano grammatica italiana pdf gratis la trovano».
# Le lezioni seguono l'ordine dell'indice di grammatica della lingua.


class Marker(Spacer):
    """Segnaposto invisibile: dice al libro dove comincia un livello o una lezione."""

    def __init__(self, text, level, key):
        super().__init__(1, 0.1)
        self.text, self.level, self.key = text, level, key


class BookTemplate(SimpleDocTemplate):
    def afterFlowable(self, flowable):
        if isinstance(flowable, Marker):
            self.canv.bookmarkPage(flowable.key)
            self.canv.addOutlineEntry(flowable.text, flowable.key, flowable.level, closed=flowable.level == 0)
            self.notify("TOCEntry", (flowable.level, flowable.text, self.page, flowable.key))


def grammar_index_lessons(language):
    """Lezioni di grammatica nell'ordine dell'indice di quella lingua: [(livello, file)]."""
    italian_index = SITE / "grammatica" / "index.html"
    if language == "it":
        index = italian_index
    else:
        source = html.fromstring(italian_index.read_text(encoding="utf-8"))
        alternates = {node.get("hreflang"): node.get("href") for node in source.xpath('//link[@rel="alternate"]')}
        href = alternates.get(OPTIONAL_LANGUAGES.get(language, language))
        if not href:
            return []
        index = SITE / unquote(urlparse(href).path.lstrip("/")) / "index.html"
    document = html.fromstring(index.read_text(encoding="utf-8"))
    base = "/" + index.parent.relative_to(SITE).as_posix() + "/"
    last = {}
    for position, href in enumerate(document.xpath("//main//a/@href")):
        path = unquote(urlparse(urljoin(base, href)).path)
        match = re.match(re.escape(base) + r"(a1|a2|b1|b2|c1)/[^/]+\.html$", path)
        if match:
            last[path] = (position, match.group(1))
    lessons = []
    for path, (position, level) in sorted(last.items(), key=lambda item: (LEVELS.index(item[1][1]), item[1][0])):
        file = SITE / path.lstrip("/")
        if file.exists() and 'http-equiv="refresh"' not in file.read_text(encoding="utf-8")[:3000]:
            lessons.append((level, file))
    return lessons


def book_cover(story, style, language, count):
    g = gstrings(language)
    white = ParagraphStyle("CoverW", parent=style["g_title"], fontSize=40, leading=46)
    sub = ParagraphStyle("CoverS", parent=style["g_lead"], fontSize=13, leading=19)
    eyebrow = ParagraphStyle("CoverE", parent=style["g_eyebrow"], fontSize=10, leading=14)
    story.append(Spacer(1, 38 * mm))
    story.append(Paragraph("ITALIANO CON MARTIN", eyebrow))
    story.append(Spacer(1, 5 * mm))
    story.append(Paragraph(safe_markup(g["book_title"]), white))
    story.append(Spacer(1, 2 * mm))
    story.append(Paragraph("A1 · A2 · B1 · B2 · C1", ParagraphStyle("CoverL", parent=sub, fontSize=17, leading=22, textColor=colors.HexColor("#f2c9a8"))))
    story.append(Spacer(1, 8 * mm))
    story.append(Paragraph(safe_markup(g["book_subtitle"]), sub))
    story.append(Spacer(1, 3 * mm))
    story.append(Paragraph(safe_markup(g["lessons"].format(n=count)), sub))
    story.append(Spacer(1, 40 * mm))
    photos = Table([[
        Image(BytesIO(circular_photo("martin-portrait.webp")), width=26 * mm, height=26 * mm, mask="auto"),
        Image(BytesIO(circular_photo("licia-portrait.webp")), width=26 * mm, height=26 * mm, mask="auto"),
        Paragraph('<b>Martin &amp; Licia</b><br/><link href="https://italianoconmartin.com/" color="#f2c9a8">italianoconmartin.com</link>', sub),
    ]], colWidths=[30 * mm, 30 * mm, 100 * mm], hAlign="LEFT")
    photos.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "MIDDLE"), ("LEFTPADDING", (0, 0), (-1, -1), 0)]))
    story.extend([photos, PageBreak()])


def cover_background(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(GREEN)
    canvas.rect(0, 0, A4[0], A4[1], stroke=0, fill=1)
    canvas.setFillColor(RED)
    canvas.rect(0, A4[1] - 12 * mm, A4[0], 12 * mm, stroke=0, fill=1)
    canvas.restoreState()


def build_book(language):
    lessons = grammar_index_lessons(language)
    if not lessons:
        return None
    style = grammar_styles(language)
    g = gstrings(language)
    story = []
    book_cover(story, style, language, len(lessons))
    toc = TableOfContents()
    toc.levelStyles = [
        ParagraphStyle("Toc0", parent=style["g_h3"], fontSize=11.5, leading=15, spaceBefore=8, textColor=RED),
        ParagraphStyle("Toc1", parent=style["g_body"], fontSize=9.6, leading=12.5, leftIndent=8 * mm, spaceAfter=1),
    ]
    toc.dotsMinLevel = 1
    story.extend([Paragraph(safe_markup(g["toc"]), style["g_h2"]), HRFlowable(width="100%", thickness=1.2, color=RED, spaceAfter=4), toc, PageBreak()])
    current = None
    for number, (level, page) in enumerate(lessons):
        document = html.fromstring(page.read_text(encoding="utf-8"))
        title, flow = render_grammar(document, page, language, level, style)
        if level != current:
            current = level
            story.append(Marker(g["level"].format(lv=level.upper()), 0, f"level-{level}"))
        story.append(Marker(title, 1, f"lesson-{number}"))
        story.extend(flow)
        story.append(PageBreak())
    story.pop()
    story.append(closing_block(style, language))
    output = PDF_OUT / language / g["file"]
    output.parent.mkdir(parents=True, exist_ok=True)
    pdf = BookTemplate(
        str(output), pagesize=A4, rightMargin=18 * mm, leftMargin=18 * mm, topMargin=17 * mm, bottomMargin=17 * mm,
        title=f'{g["book_title"]} A1-C1 (PDF) - Italiano con Martin', author="Italiano con Martin", subject=g["book_subtitle"],
    )
    pdf.multiBuild(story, onFirstPage=cover_background, onLaterPages=footer)
    return output


def build_pdf(page, language, level, output):
    document = html.fromstring(page.read_text(encoding="utf-8"))
    style = styles_for(language)
    title = clean("".join(document.xpath("//h1[1]//text()"))) or page.stem
    canonical = next(iter(document.xpath('//link[@rel="canonical"]/@href')), "")
    is_reading = any(part in {"letture", "favole", "readings", "stories", "lecturas", "cuentos", "lectures", "histoires", "cteni", "pribehy", "czytanki", "historie", "okumalar", "hikayeler", "lesetexte", "geschichten", "dokkai", "monogatari", "leituras"} for part in page.parts)
    story = []
    if is_reading:
        present = [lv for lv in LEVELS if document.xpath(f'//article[@id="{lv}"]')]
        cover_block(story, style, language, title, level, canonical, editorial_image(document, page), present)
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
        style = grammar_styles(language)
        title, flow = render_grammar(document, page, language, level, style)
        story.extend(flow)
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
        text = italian.read_text(encoding="utf-8")
        if 'http-equiv="refresh"' in text:
            continue
        source = html.fromstring(text)
        alternates = {node.get("hreflang"): node.get("href") for node in source.xpath('//link[@rel="alternate"]')}
        category = italian.relative_to(SITE).parts[0]
        optional = [code for code, hreflang in OPTIONAL_LANGUAGES.items() if hreflang in alternates]
        for language in [*LANGUAGES, *optional]:
            if LANG_ONLY and language not in LANG_ONLY:
                continue
            if language == "it":
                page = italian
            else:
                # Le pagine di reindirizzamento (vecchi URL) non hanno le alternate: niente PDF.
                if OPTIONAL_LANGUAGES.get(language, language) not in alternates:
                    continue
                target = unquote(urlparse(alternates[OPTIONAL_LANGUAGES.get(language, language)]).path.lstrip("/"))
                page = SITE / target
            # Dal 2026-09-29 una lettura può avere solo alcuni livelli: si stampano quelli presenti.
            present = [lv for lv in LEVELS if source.xpath(f'//article[@id="{lv}"]')]
            levels = [italian.relative_to(SITE).parts[1]] if category == "grammatica" else ["all-levels", *present]
            for level in levels:
                yield page, language, level


BOOK_ONLY = "--book" in sys.argv
if BOOK_ONLY or not ONLY:
    # Il libro di grammatica: con --book solo lui, senza --only anche alla fine del giro completo.
    def build_books():
        for language in [*LANGUAGES, *OPTIONAL_LANGUAGES]:
            if LANG_ONLY and language not in LANG_ONLY:
                continue
            output = build_book(language)
            if output:
                print(f"Libro di grammatica: {output.relative_to(ROOT) if output.is_relative_to(ROOT) else output}")
    if BOOK_ONLY:
        build_books()
        raise SystemExit(0)

jobs = list(localized_pages())
for index, (page, language, level) in enumerate(jobs, 1):
    output = PDF_OUT / language / f"{page.stem}-{level}.pdf"
    build_pdf(page, language, level, output)
    if index % 100 == 0:
        print(f"Generated {index}/{len(jobs)} PDFs")
print(f"Generated {len(jobs)} PDFs")
if not ONLY:
    build_books()
