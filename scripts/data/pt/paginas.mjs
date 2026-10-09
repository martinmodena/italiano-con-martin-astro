// Pagine che esistono in portoghese brasiliano: pagina italiana → percorso
// portoghese. Le costruisce scripts/pt/build-pt.mjs dalla versione spagnola.
// Fase 1 (2026-10-09): home, Chi siamo, indici, grammatica A1, Emma.
// Fase 2 (2026-10-09): tutte le letture e le favole.
// Fase 3 (2026-10-09): grammatica A2–C1.

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

  // Fase 2 (2026-10-09): letture di scienza e cultura, favole
  { it: 'letture/a2/index.html', pt: 'pt/leituras/a2/index.html' },
  { it: 'letture/api-linguaggio-e-caratteristiche.html', pt: 'pt/leituras/abelhas-caracteristicas-e-linguagem.html' },
  { it: 'letture/come-funziona-la-memoria-umana.html', pt: 'pt/leituras/como-funciona-a-memoria-humana.html' },
  { it: 'letture/come-preparare-una-pizza.html', pt: 'pt/leituras/como-preparar-uma-pizza.html' },
  { it: 'letture/futuro-intelligenza-artificiale.html', pt: 'pt/leituras/o-futuro-da-inteligencia-artificial.html' },
  { it: 'letture/i-corvi-non-dimenticano-una-faccia.html', pt: 'pt/leituras/os-corvos-nao-esquecem-um-rosto.html' },
  {
    it: 'letture/il-castoro-ingegnere-dai-denti-arancioni.html',
    pt: 'pt/leituras/o-castor-engenheiro-de-dentes-laranja.html',
  },
  { it: 'letture/il-colibri-cuore-velocissimo.html', pt: 'pt/leituras/o-beija-flor-coracao-velocissimo.html' },
  { it: 'letture/il-mistero-dell-anguilla.html', pt: 'pt/leituras/o-misterio-da-enguia.html' },
  {
    it: 'letture/il-picchio-e-la-lingua-intorno-al-cervello.html',
    pt: 'pt/leituras/o-pica-pau-e-a-lingua-em-volta-do-cerebro.html',
  },
  { it: 'letture/il-polpo-tre-cuori-nove-cervelli.html', pt: 'pt/leituras/o-polvo-tres-coracoes-nove-cerebros.html' },
  { it: 'letture/il-sonar-del-delfino.html', pt: 'pt/leituras/o-sonar-do-golfinho.html' },
  { it: 'letture/insetto-con-gli-ingranaggi.html', pt: 'pt/leituras/o-inseto-com-engrenagens.html' },
  { it: 'letture/integratori-per-la-palestra.html', pt: 'pt/leituras/suplementos-para-a-academia.html' },
  {
    it: 'letture/l-ornitorinco-animale-fatto-a-pezzi.html',
    pt: 'pt/leituras/o-ornitorrinco-animal-feito-de-pecas.html',
  },
  { it: 'letture/la-biblioteca-nell-androne.html', pt: 'pt/leituras/a-biblioteca-no-hall-do-predio.html' },
  { it: 'letture/la-meraviglia-del-dna.html', pt: 'pt/leituras/a-maravilha-do-dna.html' },
  { it: 'letture/la-rana-che-si-congela.html', pt: 'pt/leituras/a-ra-que-congela.html' },
  {
    it: 'letture/la-tela-del-ragno-piu-forte-dell-acciaio.html',
    pt: 'pt/leituras/a-teia-de-aranha-mais-forte-que-o-aco.html',
  },
  { it: 'letture/latte-materno.html', pt: 'pt/leituras/leite-materno.html' },
  { it: 'letture/orsetto-d-acqua-tardigrado.html', pt: 'pt/leituras/o-urso-dagua-tardigrado.html' },
  { it: 'letture/proteine-quante-ne-servono.html', pt: 'pt/leituras/quanta-proteina-precisamos.html' },
  { it: 'letture/storia-della-mafia-in-italia.html', pt: 'pt/leituras/a-historia-da-mafia-na-italia.html' },
  { it: 'letture/tecniche-di-memoria.html', pt: 'pt/leituras/tecnicas-de-memoria.html' },
  { it: 'letture/wood-wide-web-alberi-parlano.html', pt: 'pt/leituras/wood-wide-web-as-arvores-conversam.html' },
  { it: 'favole/index.html', pt: 'pt/fabulas/index.html' },
  { it: 'favole/i-vestiti-nuovi-dellimperatore.html', pt: 'pt/fabulas/a-roupa-nova-do-imperador.html' },
  { it: 'favole/il-brutto-anatroccolo.html', pt: 'pt/fabulas/o-patinho-feio.html' },
  { it: 'favole/il-cane-e-losso.html', pt: 'pt/fabulas/o-cachorro-e-o-osso.html' },
  { it: 'favole/il-leone-e-il-topo.html', pt: 'pt/fabulas/o-leao-e-o-rato.html' },
  { it: 'favole/il-lupo-e-i-tre-porcellini.html', pt: 'pt/fabulas/o-lobo-e-os-tres-porquinhos.html' },
  { it: 'favole/il-mugnaio-suo-figlio-e-lasino.html', pt: 'pt/fabulas/o-moleiro-seu-filho-e-o-burro.html' },
  { it: 'favole/il-pastorello-bugiardo.html', pt: 'pt/fabulas/o-pastorzinho-mentiroso.html' },
  {
    it: 'favole/il-topo-di-citta-e-il-topo-di-campagna.html',
    pt: 'pt/fabulas/o-rato-da-cidade-e-o-rato-do-campo.html',
  },
  { it: 'favole/la-cicala-e-la-formica.html', pt: 'pt/fabulas/a-cigarra-e-a-formiga.html' },
  { it: 'favole/la-formichina-wow.html', pt: 'pt/fabulas/a-formiguinha-wow.html' },
  { it: 'favole/la-lepre-e-la-tartaruga.html', pt: 'pt/fabulas/a-lebre-e-a-tartaruga.html' },
  { it: 'favole/la-volpe-e-luva.html', pt: 'pt/fabulas/a-raposa-e-as-uvas.html' },

  // Fase 3 (2026-10-09): grammatica A2–C1
  { it: 'grammatica/a2/avverbi-in-mente.html', pt: 'pt/gramatica/a2/os-adverbios-em-mente-em-italiano.html' },
  { it: 'grammatica/a2/futuro-semplice.html', pt: 'pt/gramatica/a2/o-futuro-semplice-italiano.html' },
  { it: 'grammatica/a2/gia-ancora-appena.html', pt: 'pt/gramatica/a2/os-adverbios-gia-ancora-appena-em-italiano.html' },
  { it: 'grammatica/a2/imperfetto.html', pt: 'pt/gramatica/a2/o-imperfetto-italiano.html' },
  {
    it: 'grammatica/a2/participi-passati-irregolari.html',
    pt: 'pt/gramatica/a2/participios-irregulares-em-italiano.html',
  },
  { it: 'grammatica/a2/passato-prossimo-o-imperfetto.html', pt: 'pt/gramatica/a2/passato-prossimo-ou-imperfetto.html' },
  { it: 'grammatica/a2/passato-prossimo.html', pt: 'pt/gramatica/a2/o-passato-prossimo-italiano.html' },
  { it: 'grammatica/a2/pronomi-diretti.html', pt: 'pt/gramatica/a2/pronomes-diretos-em-italiano.html' },
  { it: 'grammatica/a2/stare-gerundio.html', pt: 'pt/gramatica/a2/stare-e-gerundio-em-italiano.html' },
  { it: 'grammatica/a2/verbi-modali.html', pt: 'pt/gramatica/a2/verbos-modais-italianos-potere-volere-dovere.html' },
  {
    it: 'grammatica/b1/comparativo-e-superlativo.html',
    pt: 'pt/gramatica/b1/comparativo-e-superlativo-em-italiano.html',
  },
  { it: 'grammatica/b1/condizionale-presente.html', pt: 'pt/gramatica/b1/o-condizionale-presente-italiano.html' },
  { it: 'grammatica/b1/connettivi.html', pt: 'pt/gramatica/b1/conectivos-em-italiano.html' },
  { it: 'grammatica/b1/imperativo.html', pt: 'pt/gramatica/b1/o-imperativo-italiano.html' },
  { it: 'grammatica/b1/pronomi-combinati.html', pt: 'pt/gramatica/b1/pronomes-combinados-em-italiano.html' },
  { it: 'grammatica/b2/congiuntivo-presente.html', pt: 'pt/gramatica/b2/o-congiuntivo-presente-italiano.html' },
  { it: 'grammatica/b2/periodo-ipotetico.html', pt: 'pt/gramatica/b2/o-periodo-ipotetico-em-italiano.html' },
  { it: 'grammatica/c1/congiuntivo-imperfetto.html', pt: 'pt/gramatica/c1/o-congiuntivo-imperfetto-italiano.html' },
  { it: 'grammatica/c1/forma-passiva.html', pt: 'pt/gramatica/c1/a-voz-passiva-em-italiano.html' },
];
