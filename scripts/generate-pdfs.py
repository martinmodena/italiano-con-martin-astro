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
from reportlab.platypus import Image, KeepTogether, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / "legacy-html"
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
    }


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


@lru_cache(maxsize=1)
def circular_photo():
    source = SITE / "assets" / "martin-portrait.webp"
    photo = PILImage.open(source).convert("RGB")
    photo = ImageOps.fit(photo, (180, 180), method=PILImage.Resampling.LANCZOS, centering=(0.5, 0.34))
    mask = PILImage.new("L", photo.size, 0)
    ImageDraw.Draw(mask).ellipse((0, 0, photo.width - 1, photo.height - 1), fill=255)
    background = PILImage.new("RGB", photo.size, "#f7eee5")
    background.paste(photo, mask=mask)
    output = BytesIO()
    background.save(output, format="JPEG", quality=82, optimize=True)
    return output.getvalue()


def author_block(style):
    portrait = Image(BytesIO(circular_photo()), width=25 * mm, height=25 * mm)
    copy = [
        Paragraph("<b>Italiano con Martin</b>", style["author"]),
        Paragraph('<link href="https://italianoconmartin.com/" color="#b53f27"><u>italianoconmartin.com</u></link>', style["website"]),
    ]
    panel = Table([[portrait, copy]], colWidths=[31 * mm, 119 * mm], hAlign="CENTER")
    panel.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#f7eee5")),
        ("BOX", (0, 0), (-1, -1), 0.7, colors.HexColor("#ddcbbd")),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
    ]))
    return KeepTogether([Spacer(1, 8 * mm), panel])


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


def build_pdf(page, language, level, output):
    document = html.fromstring(page.read_text(encoding="utf-8"))
    style = styles_for(language)
    title = clean("".join(document.xpath("//h1[1]//text()"))) or page.stem
    canonical = next(iter(document.xpath('//link[@rel="canonical"]/@href')), "")
    level_label = "A1-C1" if level == "all-levels" else level.upper()
    story = [Paragraph(safe_markup(title), style["title"]), Paragraph(safe_markup(f"{language.upper()} - {level_label} - {canonical}"), style["subtitle"])]
    is_reading = any(part in {"letture", "favole", "readings", "stories", "lecturas", "cuentos", "lectures", "histoires", "cteni", "pribehy", "czytanki", "historie", "okumalar", "hikayeler", "lesetexte", "geschichten", "dokkai", "monogatari"} for part in page.parts)
    if is_reading:
        image = editorial_image(document, page)
        if image:
            story.extend([image, Spacer(1, 5 * mm)])
        if level == "all-levels":
            candidates = document.xpath('//section[contains(concat(" ", normalize-space(@class), " "), " compact-top ")]')
        else:
            candidates = document.xpath(f'//article[@id="{level}"]')
        container = candidates[0] if candidates else document.xpath("//main")[0]
    else:
        container = document.xpath("//main")[0]
    for node in content_nodes(container):
        add_node(story, node, style)
    story.append(author_block(style))
    output.parent.mkdir(parents=True, exist_ok=True)
    pdf = SimpleDocTemplate(str(output), pagesize=A4, rightMargin=18 * mm, leftMargin=18 * mm, topMargin=17 * mm, bottomMargin=17 * mm, title=title, author="Italiano con Martin")
    pdf.build(story, onFirstPage=footer, onLaterPages=footer)


def localized_pages():
    italian_resources = [page for category in ["letture", "favole", "grammatica"] for page in (SITE / category).rglob("*.html") if page.name != "index.html"]
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
    output = SITE / "pdf" / language / f"{page.stem}-{level}.pdf"
    build_pdf(page, language, level, output)
    if index % 100 == 0:
        print(f"Generated {index}/{len(jobs)} PDFs")
print(f"Generated {len(jobs)} PDFs")
