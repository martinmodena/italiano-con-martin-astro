// Da Preply a WhatsApp (Martin, 2026-10-13): nessun collegamento ai profili
// Preply di Martin e Licia. Chi vuole fare lezione scrive su WhatsApp; di
// Preply resta solo il link «invita un amico» (`a.preply-signup`).
//
// Lo script è idempotente e lavora sulle sorgenti (src/html e src/pages):
//  1. i pulsanti dei profili (riquadro finale, «Chi siamo», schede della home)
//     diventano pulsanti WhatsApp con il messaggio già scritto nella lingua
//     della pagina e il nome dell'insegnante scelto;
//  2. l'hero delle 10 home: pulsante principale «Prenota la lezione di prova»
//     su WhatsApp, secondo pulsante verso la scelta dell'insegnante, una riga
//     che spiega che cosa succede dopo il messaggio;
//  3. ogni altro link ai profili (piè di pagina) diventa «WhatsApp»;
//  4. via i profili Preply dai dati strutturati e dalle meta description.
//
// Uso: node scripts/whatsapp-conversion.mjs
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const PHONE = '393280555034';
const PROFILE = String.raw`https://preply\.(?:com/it/tutor/5086125|in/LICIA6IT2176799611\?ts=17865248)`;
const LANGS = ['en', 'es', 'pt', 'fr', 'cs', 'pl', 'tr', 'de', 'ja'];

const T = {
  it: {
    martinMsg: 'Ciao Martin, vorrei prenotare una lezione di prova di italiano.',
    liciaMsg: 'Ciao, vorrei prenotare una lezione di prova di italiano con Licia.',
    bothMsg: 'Ciao, vorrei prenotare una lezione di prova di italiano con Martin o Licia.',
    bookMartin: 'Prenota con Martin',
    bookLicia: 'Prenota con Licia',
    heroCta: 'Prenota la lezione di prova',
    heroNote: 'Scrivici su WhatsApp: ti mandiamo i giorni e gli orari liberi di Martin e Licia.',
  },
  en: {
    martinMsg: "Hi Martin, I'd like to book an Italian trial lesson.",
    liciaMsg: "Hi, I'd like to book an Italian trial lesson with Licia.",
    bothMsg: "Hi, I'd like to book an Italian trial lesson with Martin or Licia.",
    bookMartin: 'Book with Martin',
    bookLicia: 'Book with Licia',
    heroCta: 'Book a trial lesson',
    heroNote: 'Message us on WhatsApp and we’ll send you the days and times when Martin and Licia are free.',
  },
  es: {
    martinMsg: 'Hola Martin, quisiera reservar una clase de prueba de italiano.',
    liciaMsg: 'Hola, quisiera reservar una clase de prueba de italiano con Licia.',
    bothMsg: 'Hola, quisiera reservar una clase de prueba de italiano con Martin o Licia.',
    bookMartin: 'Reserva con Martin',
    bookLicia: 'Reserva con Licia',
    heroCta: 'Reserva una clase de prueba',
    heroNote: 'Escríbenos por WhatsApp y te enviamos los días y horarios libres de Martin y Licia.',
  },
  pt: {
    martinMsg: 'Olá Martin, gostaria de marcar uma aula experimental de italiano.',
    liciaMsg: 'Olá, gostaria de marcar uma aula experimental de italiano com a Licia.',
    bothMsg: 'Olá, gostaria de marcar uma aula experimental de italiano com Martin ou Licia.',
    bookMartin: 'Agendar com Martin',
    bookLicia: 'Agendar com Licia',
    heroCta: 'Agende uma aula experimental',
    heroNote: 'Escreva para a gente no WhatsApp e enviamos os dias e horários livres de Martin e Licia.',
  },
  fr: {
    martinMsg: 'Bonjour Martin, je voudrais réserver un cours d’essai d’italien.',
    liciaMsg: 'Bonjour, je voudrais réserver un cours d’essai d’italien avec Licia.',
    bothMsg: 'Bonjour, je voudrais réserver un cours d’essai d’italien avec Martin ou Licia.',
    bookMartin: 'Réserver avec Martin',
    bookLicia: 'Réserver avec Licia',
    heroCta: 'Réservez un cours d’essai',
    heroNote: 'Écrivez-nous sur WhatsApp : nous vous envoyons les jours et horaires libres de Martin et Licia.',
  },
  cs: {
    martinMsg: 'Dobrý den, Martine, chtěl(a) bych si rezervovat zkušební lekci italštiny.',
    liciaMsg: 'Dobrý den, chtěl(a) bych si rezervovat zkušební lekci italštiny s Licií.',
    bothMsg: 'Dobrý den, chtěl(a) bych si rezervovat zkušební lekci italštiny s Martinem nebo Licií.',
    bookMartin: 'Rezervovat u Martina',
    bookLicia: 'Rezervovat u Licie',
    heroCta: 'Rezervujte si zkušební lekci',
    heroNote: 'Napište nám na WhatsApp a pošleme vám volné dny a časy Martina a Licie.',
  },
  pl: {
    martinMsg: 'Dzień dobry, chciał(a)bym zarezerwować lekcję próbną włoskiego z Martinem.',
    liciaMsg: 'Dzień dobry, chciał(a)bym zarezerwować lekcję próbną włoskiego z Licią.',
    bothMsg: 'Dzień dobry, chciał(a)bym zarezerwować lekcję próbną włoskiego z Martinem lub Licią.',
    bookMartin: 'Zarezerwuj u Martina',
    bookLicia: 'Zarezerwuj u Licii',
    heroCta: 'Zarezerwuj lekcję próbną',
    heroNote: 'Napisz do nas na WhatsAppie, a wyślemy Ci wolne dni i godziny Martina i Licii.',
  },
  tr: {
    martinMsg: 'Merhaba Martin, İtalyanca deneme dersi almak istiyorum.',
    liciaMsg: 'Merhaba, Licia ile İtalyanca deneme dersi almak istiyorum.',
    bothMsg: 'Merhaba, Martin veya Licia ile İtalyanca deneme dersi almak istiyorum.',
    bookMartin: 'Martin ile ders ayırt',
    bookLicia: 'Licia ile ders ayırt',
    heroCta: 'Deneme dersi ayırt',
    heroNote: 'WhatsApp’tan bize yaz, Martin ve Licia’nın boş gün ve saatlerini gönderelim.',
  },
  de: {
    martinMsg: 'Hallo Martin, ich möchte eine Probestunde Italienisch buchen.',
    liciaMsg: 'Hallo, ich möchte eine Probestunde Italienisch bei Licia buchen.',
    bothMsg: 'Hallo, ich möchte eine Probestunde Italienisch bei Martin oder Licia buchen.',
    bookMartin: 'Bei Martin buchen',
    bookLicia: 'Bei Licia buchen',
    heroCta: 'Probestunde buchen',
    heroNote: 'Schreib uns auf WhatsApp – wir schicken dir die freien Tage und Uhrzeiten von Martin und Licia.',
  },
  ja: {
    martinMsg: 'Martinさん、こんにちは。イタリア語の体験レッスンを予約したいです。',
    liciaMsg: 'こんにちは。Liciaさんのイタリア語の体験レッスンを予約したいです。',
    bothMsg: 'こんにちは。MartinさんかLiciaさんのイタリア語の体験レッスンを予約したいです。',
    bookMartin: 'Martinに予約する',
    bookLicia: 'Liciaに予約する',
    heroCta: '体験レッスンを予約する',
    heroNote: 'WhatsAppでご連絡ください。MartinとLiciaの空いている日時をお送りします。',
  },
};

const META = {
  'profili Preply e contatto WhatsApp': 'lezione di prova su WhatsApp',
  'Preply profiles and WhatsApp contact': 'trial lesson via WhatsApp',
  'perfiles de Preply y contacto por WhatsApp': 'clase de prueba por WhatsApp',
  'perfis no Preply e contato pelo WhatsApp': 'aula experimental pelo WhatsApp',
  'profils Preply et contact WhatsApp': 'cours d’essai via WhatsApp',
  'Einzelunterricht für 12 Euro, Preply-Profile und WhatsApp-Kontakt': 'Einzelunterricht für 14 Euro, Probestunde über WhatsApp',
  'profile Preply i kontakt WhatsApp': 'lekcja próbna przez WhatsApp',
  'profily Preply a kontakt přes WhatsApp': 'zkušební lekce přes WhatsApp',
  'Preply profilleri ve WhatsApp iletişimi': 'WhatsApp üzerinden deneme dersi',
  'Preplyプロフィール、WhatsAppでのお問い合わせ': 'WhatsAppで体験レッスンを予約できます',
  // Pagina «contact» (solo italiano).
  'Puoi prenotare direttamente una lezione su Preply oppure scrivermi su WhatsApp se vuoi prima capire quale percorso è più adatto al tuo livello.':
    'Scrivimi su WhatsApp: ti mando i giorni e gli orari liberi e scegliamo insieme il percorso più adatto al tuo livello.',
};

const waHref = (text) => `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
const isLicia = (label, href) => /Lici|リチア/.test(label) || (!/Martin|マルティン/.test(label) && /preply\.in/.test(href));
const escAttr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');

function langOf(file) {
  const parts = relative(ROOT, file).split(sep);
  const seg = parts[2];
  return LANGS.includes(seg) ? seg : 'it';
}

function transform(src, lang, file) {
  const t = T[lang];
  let out = src;
  // Nelle pagine .astro i frammenti stanno in stringhe JSON: le virgolette sono \".
  const q = String.raw`\\?"`;

  // 2. Hero delle home: [primario Preply][secondario WhatsApp] -> [WhatsApp][scegli l'insegnante].
  const heroRe = new RegExp(
    String.raw`<div class="actions">\s*<a class="button primary hero-cta" href="${PROFILE}"[^>]*>[^<]*</a>\s*<a class="button secondary hero-cta whatsapp-cta"[^>]*>[^<]*</a>\s*</div>`,
  );
  if (heroRe.test(out)) {
    const teachers = out.match(/<h2 id="teachers-title">([^<]*)<\/h2>/);
    const second = teachers
      ? `<a class="button secondary hero-cta" href="#teachers-title">${teachers[1]}</a>`
      : '';
    const note = teachers ? `<p class="hero-note">${t.heroNote}</p>` : '';
    out = out.replace(
      heroRe,
      `<div class="actions"><a class="button primary hero-cta" href="${escAttr(waHref(t.bothMsg))}" target="_blank" rel="noopener">${t.heroCta}</a>${second}</div>${note}`,
    );
  }

  // 1. Pulsanti dei profili.
  out = out.replace(
    new RegExp(String.raw`<a class=${q}button (light|primary)${q} href=${q}(${PROFILE})${q} target=${q}_blank${q} rel=${q}noopener${q}>([^<]*)</a>`, 'g'),
    (m, kind, href, label) => {
      const licia = isLicia(label, href);
      const isProfileLabel = /profil|プロフィール/i.test(label);
      const text = isProfileLabel ? (licia ? t.bookLicia : t.bookMartin) : label;
      const quote = m.includes('\\"') ? '\\"' : '"';
      const link = escAttr(waHref(licia ? t.liciaMsg : t.martinMsg));
      return `<a class=${quote}button ${kind}${quote} href=${quote}${link}${quote} target=${quote}_blank${quote} rel=${quote}noopener${quote}>${text}</a>`;
    },
  );

  // 3. Ogni altro link ai profili (piè di pagina): «WhatsApp».
  out = out.replace(
    new RegExp(String.raw`<a href=(${q})${PROFILE}${q}([^>]*)>[^<]*</a>`, 'g'),
    (m, quote, rest) => `<a href=${quote}${escAttr(waHref(t.bothMsg))}${quote}${rest}>WhatsApp</a>`,
  );

  // 4a. Dati strutturati: niente url/sameAs verso i profili.
  out = out.replace(
    new RegExp(String.raw`,(?:\\n)?\s*\\"sameAs\\":\s*\[(?:\\n)?\s*\\"${PROFILE}\\",(?:\\n)?\s*\\"${PROFILE}\\"(?:\\n)?\s*\]`, 'g'),
    '',
  );
  out = out.replace(new RegExp(String.raw`,(?:\\n)?\s*\\"(?:url|sameAs)\\":\s*\\"${PROFILE}\\"`, 'g'), '');

  // 4b. Meta description.
  for (const [from, to] of Object.entries(META)) out = out.split(from).join(to);

  if (new RegExp(PROFILE).test(out)) throw new Error(`profilo Preply rimasto in ${relative(ROOT, file)}`);
  return out;
}

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) yield* walk(p);
    else if (/\.(html|astro)$/.test(name)) yield p;
  }
}

{
  let changed = 0;
  for (const dir of ['src/html', 'src/pages']) {
    for (const file of walk(join(ROOT, dir))) {
      const src = readFileSync(file, 'utf8');
      if (!/preply/i.test(src)) continue;
      const out = transform(src, langOf(file), file);
      if (out !== src) {
        writeFileSync(file, out);
        changed++;
      }
    }
  }
  console.log(`whatsapp-conversion: ${changed} file aggiornati.`);
}
