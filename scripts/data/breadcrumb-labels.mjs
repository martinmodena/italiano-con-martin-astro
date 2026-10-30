// Etichette fisse delle briciole di pane (2026-10-30): «Home» in ogni lingua e i nomi delle sezioni presi
// dal menu di src/data/i18n.json. Le usano add-breadcrumbs.mjs e create-reading-categories.mjs, così la
// briciola non dipende da quella che c'era (build-pt.mjs ne lascia solo il titolo).
import fs from 'node:fs';

export const HOME = { it: 'Home', en: 'Home', es: 'Inicio', pt: 'Início', fr: 'Accueil', cs: 'Domů', pl: 'Strona główna', tr: 'Ana sayfa', de: 'Startseite', ja: 'ホーム' };
const NAV = JSON.parse(fs.readFileSync('src/data/i18n.json', 'utf8')).ui;
export const homeUrl = (lang) => (lang === 'it' ? '/' : `/${lang}/`);
export const langOf = (home) => (home === '/' ? 'it' : home.slice(1, -1));
export const navLabel = (lang, href) => (NAV[lang].nav.match(new RegExp(`<a href="${href}">([^<]*)</a>`)) || [])[1];
