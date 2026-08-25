# Regole delle lingue

Come si mescolano italiano e lingua del visitatore in una pagina localizzata.
Queste regole valgono **sempre**, in tutte e 9 le lingue (`it`, `en`, `es`, `fr`, `cs`, `pl`, `tr`, `de`, `ja`) e in ogni tipo di pagina.
Registro delle decisioni: [DECISIONI_SITO.md](./DECISIONI_SITO.md) · Manuale operativo: [AGENTS.md](./AGENTS.md).

---

## 1. Il principio: due lingue, due ruoli

Ogni pagina localizzata contiene due lingue che fanno due lavori diversi.

| Ruolo              | Lingua                   | Cos'è                                                            |
| ------------------ | ------------------------ | ---------------------------------------------------------------- |
| **Lingua-oggetto** | italiano                 | Ciò che lo studente deve imparare: è il contenuto della lezione. |
| **Lingua-veicolo** | la lingua del visitatore | Ciò che spiega, istruisce, orienta e vende.                      |

**Test da applicare a ogni singola stringa:**

> Se traduco questa frase, la pagina insegna ancora la stessa cosa?
>
> - **Sì** → è lingua-veicolo: **va tradotta**, sempre, al 100%.
> - **No** (o peggio: insegnerebbe un italiano falso) → è lingua-oggetto: **resta in italiano**, sempre.

Il difetto peggiore non è avere due lingue nella stessa pagina: è **avere la lingua sbagliata nel posto sbagliato**. Tradurre `parlare → hablar` dentro una tabella di coniugazione non è un'imprecisione, è una lezione falsa.

---

## 2. Resta SEMPRE in italiano

Anche quando l'intera pagina è in spagnolo, giapponese o turco.

- I **brani di studio**: letture, favole, dialoghi (`.story-text`, `.dialogue`).
- Le **frasi di esempio** e le frasi modello (`.example-grid`, `.cols`, `.card`, `.italian-box`).
- Le **tabelle di coniugazione e di forme**, comprese le desinenze `-o`, `-i`, `-e`, `-isco` (`.conj-table`, `table.tbl`).
- Gli **articoli, i pronomi, le preposizioni, i verbi** citati come oggetto della lezione: `il`, `lo`, `la`, `l'`, `un'`, `io`, `tu`, `voi`, `parlare`, `credere`, `dormire`, `pulire`.
- Le **forme sbagliate** negli errori tipici (`.mistake`): `❌ Io è italiano` resta così com'è.
- I **testi degli esercizi da completare** (`.exercise label`, `data-answer`, `data-alt`).
- I **suggerimenti degli esercizi** (`data-hint`): mostrano la forma italiana da usare («Con “io” usiamo “sono”», «Essere: che lui sia»). Tradotti diventano falsi: indicano una forma che in italiano non esiste.
- Le **parole del vocabolario** e le loro frasi di esempio (`.word-card h2`, `.word-examples`).
- Le **soluzioni proposte** degli esercizi di traduzione (`.proposed-solution strong`): sono la risposta in italiano.
- I **titoli interni dei blocchi per livello**: «Il leone e il topo — livello A1» resta in italiano con `lang="it"` (decisione 2026-08-12).
- I **nomi delle persone dentro le frasi italiane**: Martin, Anna, Luca, Marta non diventano Martín, Anne o マルティン dentro un esempio italiano.

---

## 3. Va SEMPRE nella lingua del visitatore

- **Menu, header, footer, selettore lingua, briciole di pane** (`.breadcrumbs`).
- **Titolo H1, sottotitolo, `title`, meta description, Open Graph, JSON-LD.**
- **Tutte le spiegazioni grammaticali e le note.**
- **Tutte le istruzioni**: «Scrivi la forma corretta», «Mostra la soluzione», «Ricomincia».
- **Etichette e intestazioni di servizio**: `Persona`, `Forma`, `Esempio`, `Infinito`, `Uso`, `Quando`, `Tipo`, `Struttura`, `Verbo`, `Tempo`, `Singolare`, `Plurale`, `Maschile`, `Femminile`, `Participio`.
- **Etichette dei riquadri di esempio**: `Identità`, `Nazionalità`, `Caratteristica`, `Posizione`, `Presente`, `Passato`, `Attiva`, `Passiva`.
- **Le parole `Errato:` / `Corretto:`** davanti agli errori tipici (la forma sbagliata invece resta italiana).
- **Le glosse del vocabolario e i titoli delle schede.**
- **Le frasi di partenza degli esercizi di traduzione libera**: chi legge in spagnolo traduce **dallo spagnolo** verso l'italiano, non dall'inglese. L'inglese come lingua di partenza è corretto **solo** nella versione inglese e in quella italiana.
- **Gli attributi testuali di servizio**: `alt`, `aria-label`, `placeholder`, `title`.
- **I testi dei pulsanti e delle call to action.**

---

## 4. Non si traduce MAI, in nessuna lingua

| Elemento                      | Forma unica                                                         |
| ----------------------------- | ------------------------------------------------------------------- |
| Marchio                       | **Italiano con Martin** — mai tradotto, mai adattato, mai accentato |
| Nome dell'insegnante          | **Martin** — mai «Martín»                                           |
| Nome della seconda insegnante | **Licia**                                                           |
| Dominio                       | **italianoconmartin.com**                                           |

Unica eccezione ammessa: in giapponese le **etichette sotto le fotografie** usano マルティン e リチア (decisione 2026-08-25). Il marchio nell'header, nel footer, nel `title` e nell'`eyebrow` resta comunque `Italiano con Martin` in caratteri latini.

---

## 5. Blocchi misti: etichetta tradotta, esempio italiano

Molti riquadri contengono le due cose insieme. Vanno trattati **elemento per elemento**, mai in blocco.

```html
<!-- pagina spagnola, riquadro di esempio -->
<div class="example">
  <strong>Identidad</strong><br />
  <!-- etichetta → spagnolo -->
  <span lang="it">Io sono Martin.</span>
  <!-- esempio → italiano -->
</div>

<!-- pagina spagnola, scheda di regola -->
<div class="rule-card">
  <strong lang="it">lo</strong><br />
  <!-- forma italiana → italiano -->
  delante de s + consonante, z, ps, gn, x, y<br />
  <!-- spiegazione → spagnolo -->
  <em lang="it">lo studente</em>
  <!-- esempio → italiano -->
</div>

<!-- pagina spagnola, errore tipico -->
<div class="mistake">
  <strong>❌ <span lang="it">Io è italiano.</span></strong>
  ✓ <span lang="it">Io sono italiano.</span>
</div>
```

Le classi che contengono **sempre** blocchi misti: `.rule-card`, `.example`, `.mistake`, `.cols`, `.grid .card`, `.italian-box`, `.conj-table`, `table.tbl`, e le descrizioni `.lesson-card p` negli indici.

---

## 6. Marcatura tecnica

- Ogni frammento italiano dentro una pagina localizzata va marcato: `<span lang="it">`, `<em lang="it">`, `<strong lang="it">`, `<td lang="it">`.
  Serve a Google (capisce che non è spagnolo scritto male) e alla sintesi vocale (pronuncia italiana, non spagnola).
- Non mettere `lang="it"` su testo tradotto: è una marcatura di lingua, non una formattazione.
- Sulla pagina italiana `lang="it"` è ridondante e non va aggiunto.
- Le emoji-bandiera seguono il contenuto, non la pagina: il riquadro «angolo italiano» porta 🇮🇹 anche nella versione spagnola. Non deve mai diventare 🇬🇧.

---

## 7. Come si cita un termine italiano dentro il testo tradotto

Regola unica, per non avere tre stili diversi nella stessa pagina.

| Dove                                         | Come                                          | Esempio                                                                 |
| -------------------------------------------- | --------------------------------------------- | ----------------------------------------------------------------------- |
| `title`, H1, H2, titoli delle schede, link   | **Senza virgolette e senza corsivo**          | `El verbo italiano essere (ser y estar)`                                |
| Testo corrente, spiegazioni                  | **Corsivo** con `<em lang="it">`              | `Usamos el verbo <em lang="it">essere</em> para…`                       |
| Forma isolata dentro un'istruzione o un hint | **Virgolette curve “ ”** + `<span lang="it">` | `Con “<span lang="it">io</span>” usamos “<span lang="it">sono</span>”.` |

Perché senza virgolette nei titoli: nel `<title>` e nei risultati di Google le virgolette fanno rumore, a volte vengono troncate e non aggiungono informazione, perché la parola «italiano» accanto al termine chiarisce già che è una parola straniera. Nel corpo del testo il corsivo è invece la convenzione standard per le parole in lingua straniera, e va usato.

Sulla domanda concreta: **`El verbo italiano essere (ser y estar)`**, non `El verbo italiano "essere" (ser y estar)`.

---

## 8. Termini grammaticali intraducibili

Molti nomi di tempi verbali italiani non hanno un equivalente esatto. Tradurli inventa una corrispondenza che non esiste e confonde lo studente.

**Regola in tre punti:**

1. Il **nome italiano è la forma principale**, sempre: `passato prossimo`, `imperfetto`, `congiuntivo`, `passato remoto`.
2. Alla **prima occorrenza nella pagina** si può aggiungere fra parentesi l'equivalente locale, **solo se è davvero equivalente**. Dopo la prima volta si usa solo il nome italiano.
3. Se un equivalente esatto non esiste, si mette una **descrizione breve**, non un falso equivalente.

| Termine italiano   | ✅ Corretto (esempio spagnolo)                      | ❌ Da non usare                       |
| ------------------ | --------------------------------------------------- | ------------------------------------- |
| `passato prossimo` | `passato prossimo (el pasado compuesto italiano)`   | `presente perfecto`                   |
| `imperfetto`       | `imperfetto (el imperfecto italiano)`               | solo `imperfecto`, senza il nome vero |
| `passato remoto`   | `passato remoto (tiempo del relato literario)`      | `pasado remoto`                       |
| `congiuntivo`      | `congiuntivo (el subjuntivo italiano)`              | solo `subjuntivo`                     |
| `ci` / `ne`        | `ci` e `ne`, senza traduzione, solo con spiegazione | qualsiasi equivalente inventato       |

Lo stesso termine deve avere **lo stesso trattamento in tutta la pagina**: non si può leggere `sin passato remoto` in un blocco e `pasado remoto` in quello subito sotto.

**Titolo H1 e SEO.** Il termine italiano deve comparire **sempre nella meta description**, perché è il nome che lo studente incontrerà nei materiali italiani. Nel **titolo H1 e nello slug** vale una distinzione:

- I nomi **senza equivalente esatto** (`essere`, `avere`, `passato prossimo`, `imperfetto`, `passato remoto`, `congiuntivo`, `condizionale`, `futuro semplice`) restano in italiano anche nel titolo: «İtalyanca imperfetto zamanı», «El congiuntivo presente italiano».
- Le **categorie universali** (`imperativo`, `infinito`, `participio`, `gerundio`) possono usare il nome locale nel titolo, perché è quello che il visitatore cerca su Google: «İtalyanca emir kipi», «イタリア語の命令法». Il nome italiano compare comunque nella descrizione e nel corpo della lezione.

Lo verifica `npm run audit:languages`.

---

## 9. Domande di comprensione

Le domande sono un **esercizio sul testo italiano**, non un'istruzione: sono lingua-oggetto.

- **Le domande sono in italiano**, marcate `lang="it"`, in tutte le lingue del sito.
- Nei blocchi **A1 e A2** sotto ogni domanda va la traduzione di servizio nella lingua del visitatore, in stile discreto: senza, uno studente principiante non capisce che cosa gli viene chiesto.
- Nei blocchi **B1, B2 e C1** solo italiano: a quel livello la traduzione è una stampella che toglie valore all'esercizio.
- Il titolo del blocco («Comprensione» / «Comprensión» / «Comprehension») è un'etichetta di servizio e **va tradotto**.
- Le etichette dei campi di risposta («La tua risposta») vanno tradotte.

```html
<h3>Comprensión</h3>
<!-- etichetta → spagnolo -->
<ol>
  <li>
    <span lang="it">Che cosa piace all'imperatore?</span>
    <span class="q-gloss">¿Qué le gusta al emperador?</span>
    <!-- solo A1 e A2 -->
  </li>
</ol>
```

---

## 10. Link e navigazione

- Da una pagina localizzata si linka **sempre** la versione nella stessa lingua: da `/es/` si va a `/es/sobre-nosotros/`, mai a `/chi-siamo/`.
- Il messaggio precompilato di WhatsApp è nella lingua della pagina.
- Il selettore lingua porta alla stessa pagina nell'altra lingua, mai alla home.

---

## 11. Controllo prima di pubblicare

```bash
npm run audit:languages
```

Confronta ogni pagina localizzata con la rispettiva pagina italiana e segnala:
materiale di studio tradotto, etichette rimaste in italiano, attributi in inglese,
frasi da tradurre non localizzate, domande di comprensione fuori posto, marchio
adattato, link alla versione italiana e termini italiani spariti dalla SEO.
Gira anche in CI con `--strict` prima della build: se fallisce, il sito non si pubblica.

Controllo a occhio, per ogni pagina toccata:

1. **Leggi solo le parti italiane.** Sono italiano corretto e reale? Se compare `hablar-o`, `sprechen-o` o `-yo` al posto di `-i`, la pagina è rotta.
2. **Leggi solo le parti tradotte.** Restano parole italiane o inglesi? (`Esempio`, `Persona`, `PDF downloads`, `to be`)
3. **Ogni frammento italiano ha `lang="it"`?**
4. **Il marchio è «Italiano con Martin»** in ogni punto della pagina?
5. **I link puntano alla stessa lingua?**
6. `npm run build` e gli audit elencati in [AGENTS.md](./AGENTS.md).

**Mai tradurre una pagina intera con uno strumento automatico senza proteggere in anticipo i blocchi della lingua-oggetto.** È così che sono nati i difetti corretti il 2026-08-25. La lista dei blocchi protetti sta in `preserveSelectors`, dentro `scripts/generate-localized-resources.mjs`, e va tenuta allineata al capitolo 2.

---

## 12. Che cosa è stato corretto il 2026-08-25

Confrontando le 432 pagine localizzate con la rispettiva pagina italiana sono stati
riparati **469 file** con `node scripts/migrate/fix-language-mix.mjs`.

### Materiale di studio che era stato tradotto (insegnava italiano falso)

| Difetto                                                                                                                   | Interventi |
| ------------------------------------------------------------------------------------------------------------------------- | ---------- |
| Suggerimenti degli esercizi (`data-hint`) tradotti: «Essere: che lui sia» → «Ser: para que él sea»                        | 2208       |
| `.rule-card`: gli articoli `il / lo / la / l'` erano diventati `el / yo / el / el`                                        | 448        |
| Forme italiane nel testo discorsivo (`essere` → «ser», `non` → «no»)                                                      | 641        |
| Prefissi `Errato:` / `Non:` tradotti insieme alla forma sbagliata che li segue                                            | 576        |
| Celle di tabella: `parlare → hablar`, `credere → credibilidad`, desinenza `-i → -yo`                                      | 279        |
| Domande di comprensione riportate in italiano, con glossa locale in A1 e A2                                               | 1016       |
| `.grid .card` e `.cols .card` con preposizioni ed esempi tradotti                                                         | 280        |
| Riquadri «angolo italiano», bandiera 🇬🇧 tornata 🇮🇹                                                                        | 64         |
| Minidialoghi ripristinati in italiano                                                                                     | 24         |
| Nomi italiani dei tempi verbali nella riga di livello: «Imperfecto y presente perfecto» → «Imperfetto y passato prossimo» | 393        |

### Lingua del visitatore che era rimasta in italiano o in inglese

| Difetto                                                                                                | Interventi |
| ------------------------------------------------------------------------------------------------------ | ---------- |
| Intestazioni di tabella ed etichette di esempio tradotte                                               | 678        |
| Celle di tabella che spiegano («consonante normale», «plurale di il») tradotte, forme italiane intatte | 286        |
| `aria-label="PDF downloads"` tradotto in tutte le lingue                                               | 395        |
| Frasi di traduzione libera portate dall'inglese alla lingua di pagina                                  | 364        |
| Voci di navigazione della lezione («mesa» → «Tabla»)                                                   | 289        |
| Titoli con maiuscola o punto finale sbagliati                                                          | 280        |
| Descrizioni delle schede negli indici di grammatica                                                    | 173        |
| Meta description SEO riscritte con il nome italiano del tempo verbale                                  | 80         |
| Link `/chi-siamo/` portati alla pagina nella lingua giusta                                             | 8          |
| «Martín» riportato a «Martin»                                                                          | 6          |

### Che cosa resta fuori da questa correzione

La riparazione automatica ha rimesso a posto **la lingua** di ogni blocco, non la
**qualità di scrittura** delle spiegazioni tradotte. Restano frasi tradotte in modo
goffo dalla vecchia traduzione automatica (per esempio, in spagnolo, «“è” quiere el
acento» invece di «“è” lleva acento»). Non sono errori di lingua-oggetto e non
insegnano niente di falso: si correggono a mano, una lingua alla volta, quando si
rivede una pagina.
