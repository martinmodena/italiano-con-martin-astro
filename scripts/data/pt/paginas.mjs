// Pagine che esistono in portoghese brasiliano: pagina italiana → percorso
// portoghese. Le costruisce scripts/pt/build-pt.mjs dalla versione spagnola.
// Fase 1 (2026-10-09): home, Chi siamo, indici, grammatica A1, Emma.

export const PAGES = [
  { it: 'index.html', pt: 'pt/index.html' },
  { it: 'chi-siamo/index.html', pt: 'pt/sobre-nos/index.html' },

  // Grammatica A1
  { it: 'grammatica/index.html', pt: 'pt/gramatica/index.html' },
  { it: 'grammatica/a1/verbo-essere.html', pt: 'pt/gramatica/a1/o-verbo-essere-em-italiano.html' },
  { it: 'grammatica/a1/verbo-avere.html', pt: 'pt/gramatica/a1/o-verbo-avere-em-italiano.html' },
  { it: 'grammatica/a1/articoli-determinativi.html', pt: 'pt/gramatica/a1/artigos-definidos-em-italiano.html' },
  { it: 'grammatica/a1/articoli-indeterminativi.html', pt: 'pt/gramatica/a1/artigos-indefinidos-em-italiano.html' },
  { it: 'grammatica/a1/genere-e-numero.html', pt: 'pt/gramatica/a1/genero-e-numero-dos-substantivos-italianos.html' },
  { it: 'grammatica/a1/aggettivi-qualificativi.html', pt: 'pt/gramatica/a1/adjetivos-qualificativos-em-italiano.html' },
  {
    it: 'grammatica/a1/aggettivi-e-pronomi-possessivi.html',
    pt: 'pt/gramatica/a1/adjetivos-e-pronomes-possessivos-em-italiano.html',
  },
  {
    it: 'grammatica/a1/presente-indicativo-verbi-regolari.html',
    pt: 'pt/gramatica/a1/presente-do-indicativo-dos-verbos-regulares-em-italiano.html',
  },
  {
    it: 'grammatica/a1/presente-verbi-irregolari.html',
    pt: 'pt/gramatica/a1/presente-dos-verbos-irregulares-em-italiano.html',
  },
  { it: 'grammatica/a1/verbi-riflessivi.html', pt: 'pt/gramatica/a1/verbos-reflexivos-em-italiano.html' },
  { it: 'grammatica/a1/ce-ci-sono.html', pt: 'pt/gramatica/a1/ce-e-ci-sono-em-italiano.html' },
  { it: 'grammatica/a1/preposizioni-semplici.html', pt: 'pt/gramatica/a1/preposicoes-simples-em-italiano.html' },
  {
    it: 'grammatica/a1/preposizioni-articolate.html',
    pt: 'pt/gramatica/a1/preposicoes-articuladas-em-italiano.html',
  },
  { it: 'grammatica/a1/numeri.html', pt: 'pt/gramatica/a1/os-numeros-em-italiano.html' },
  { it: 'grammatica/a1/che-ore-sono.html', pt: 'pt/gramatica/a1/as-horas-em-italiano.html' },
  { it: 'grammatica/a1/giorni-mesi-date.html', pt: 'pt/gramatica/a1/dias-meses-e-datas-em-italiano.html' },
  { it: 'grammatica/a1/avverbi-di-frequenza.html', pt: 'pt/gramatica/a1/adverbios-de-frequencia-em-italiano.html' },

  // Letture: la serie «Emma in Italia»
  { it: 'letture/index.html', pt: 'pt/leituras/index.html' },
  { it: 'letture/a1/index.html', pt: 'pt/leituras/a1/index.html' },
  { it: 'letture/storia-del-caffe-in-italia.html', pt: 'pt/leituras/a-historia-do-cafe-na-italia.html' },
  { it: 'letture/emma-il-biglietto-del-treno.html', pt: 'pt/leituras/emma-a-passagem-de-trem.html' },
  { it: 'letture/emma-al-mercato.html', pt: 'pt/leituras/emma-na-feira.html' },
  { it: 'letture/emma-chiuso-per-pranzo.html', pt: 'pt/leituras/emma-fechado-para-o-almoco.html' },
  { it: 'letture/emma-in-farmacia.html', pt: 'pt/leituras/emma-na-farmacia.html' },
  { it: 'letture/emma-il-pranzo-della-nonna.html', pt: 'pt/leituras/emma-o-almoco-da-avo.html' },
  { it: 'letture/emma-cena-da-amici.html', pt: 'pt/leituras/emma-jantar-com-amigos.html' },
  { it: 'letture/emma-il-lavandino-misterioso.html', pt: 'pt/leituras/emma-a-pia-misteriosa.html' },
];
