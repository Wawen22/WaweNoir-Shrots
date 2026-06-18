# PsychoShorts — Studio

Centro di controllo per un canale faceless di YouTube Shorts / TikTok / Instagram Reels sulla **psicologia del comportamento umano**. Video generati con AI (Higgsfield per i visual, ElevenLabs per la voce, Google Flow/Veo 3 per le metafore, CapCut per il montaggio).

Architettura **data-driven**: lo shell [`psychoshorts-dashboard.html`](psychoshorts-dashboard.html) contiene stili, pagine di riferimento e il motore di rendering; **ogni video è un file separato** in [`videos/`](videos/) che si auto-registra. Doppio click sullo shell → si apre nel browser. Nessun build, nessuna dipendenza, nessun server (gli `<script src>` classici funzionano da `file://`). Aggiungere un video **non** fa più crescere lo shell.

---

## Come funziona — il modello "Studio + pipeline"

La dashboard risponde sempre a una domanda: **"a che punto sono e qual è la prossima cosa da fare?"**

- **Studio** (home) — vista d'insieme di tutti i video. Ogni video è una card con una mini-timeline a 6 segmenti che si riempie man mano. Il pulsante **Continua →** ti porta al video e apre lo step giusto.
- **Pagina del singolo video** — è la pipeline guidata. In cima un blocco **Copertina** (prompt immagine + testo gancio per il thumbnail che ferma lo scroll). Sotto, uno **stepper appiccicoso** (la timeline di montaggio: lo step da fare ora è in **oro**, quelli fatti in **verde**) e i 6 stadi che apri/chiudi:

  | # | Stadio | Cosa contiene |
  |---|--------|---------------|
  | 1 | **Script** | Script completo con timestamp, copiabile. Termine scientifico chiave evidenziato. |
  | 2 | **Voce** | Settaggi ElevenLabs + campo "durata reale" (salvato). |
  | 3 | **Scene** | Una scene-card per blocco. Ogni prompt (immagine/animazione) ha la sua icona **⧉ copia**. Toggle "scena fatta" per ognuna. |
  | 4 | **Montaggio** | Checklist CapCut. |
  | 5 | **Pubblica** | Export, titolo, hashtag copiabili + checklist piattaforme. |
  | 6 | **Analisi** | Campo retention + note dai commenti. |

- **Riferimento** — sezioni fisse che non cambiano: Playbook & Regole, Workflow 6 step, Banca Topic (20 idee), Hook & Script (5 tipi), Tool Stack, Calendario, Monetizzazione.

### Tutto si salva da solo
Spunte, scene completate, step della pipeline, durate, retention e note sono salvati nel **localStorage del browser**: chiudi e riapri, ritrovi tutto. (Il salvataggio è legato al browser e al percorso del file. Se sposti il file in un'altra cartella, lo stato riparte da zero.)

### Copia con un click
Ogni campo copiabile ha l'icona **⧉**. Cliccala e il testo va negli appunti — niente selezione manuale. Per i prompt di Sara viene copiato il placeholder reale `<<<SARA_ID>>>` (nella pagina è mostrato escaped, ma copi quello giusto).

---

## Contenuto del canale

- **Tema ombrello:** "the psychology behind why people do what they do" — relazioni, dark psychology, bias cognitivi, neuroscienze.
- **Personaggio ricorrente:** Sara (Reference Element Higgsfield). Stesso volto in ogni scena via `<<<SARA_ID>>>`. Appare in tutte le scene tranne le metafore con oggetti.
- **Voce fissa:** Liam (ElevenLabs, Eleven v3, Normale).
- **Struttura video:** Hook (dolore riconoscibile) → Bridge (fai sentire visto) → Core (una idea + nome scientifico) → Close (domanda per i commenti).
- **Timing reale:** ElevenLabs legge a ~60 caratteri/secondo. Uno script "da 55s" diventa ~80s reali. Le scene si mappano sempre sul timing reale dell'audio generato.

Il **Video 1 (Sunk Cost Fallacy)** è il riferimento completo: 9 scene / 12 clip. I video sono file separati in [`videos/`](videos/) — copia `videos/video-01-sunk-cost.js` come modello.

---

## Aggiungere un nuovo video

Con Claude Code, scrivi: *"Aggiungiamo il Video N. Topic: [X]. Ecco lo script: [...]"*. Il flusso è:

1. **Copia un file dati** esistente: `videos/video-01-sunk-cost.js` → `videos/video-NN-slug.js`.
2. **Modifica l'oggetto** `PSV.register({...})`: `n`, `title`, `kicker`, `concept`, `cover` (prompt + `white`/`yellow` + `alts`), `voice`, `script` (array di `['timestamp', 'testo']`), `term`/`termCaps`/`termBeat`, `pubTitle`, `hashtags`, e `scenes`. Scrivi `<<<SARA_ID>>>` **in chiaro** nei prompt: il renderer fa l'escaping da solo.
3. **Aggiungi una riga** nello shell `psychoshorts-dashboard.html`, accanto agli altri include:
   ```html
   <script src="videos/video-NN-slug.js"></script>
   ```
4. Fatto. Studio, sidebar, stepper, pipeline e copertina si **generano da soli** dai dati. Lo stato di avanzamento (stadi fatti di default) si imposta col campo `seed` nel file dati.

Per dire "verifica l'integrità della dashboard" → Claude Code ricontrolla i punti qui sotto.

### Schema di una scena (dentro `scenes: [...]`)
```js
{ id:'s1', time:'0–4s', title:'Scena 1 — ...', sub:'"frase del voiceover"',
  badges:[{cls:'pill pill--gold', txt:'⭐ chiave'}],   // opzionale
  note:'testo nota (es. scena senza Sara)',            // opzionale
  clips:[
    { tool:'h',                       // 'h' = Higgsfield, 'f' = Flow/Veo 3
      label:'CLIP 1.2 — "..." · ~5s', // opzionale (multi-clip)
      image:{ spec:'📐 9:16', text:'<<<SARA_ID>>> ...' },   // box arancione IMMAGINE
      anim:{ spec:'⏱ genera 4s', text:'Very slow push-in...' }, // box ciano ANIMAZIONE
      clip:{ spec:'~5s', text:'Extreme close-up...' },     // box teal CLIP VIDEO (Veo)
      tip:'consiglio', gold:true }                          // gold:true = tip oro
  ] }
```

---

## Regole di architettura (rispettarle sempre)

1. **Shell + file dati.** Lo shell `psychoshorts-dashboard.html` (stili + pagine di riferimento + motore di rendering) non cambia quasi mai; ogni video è un file in `videos/` che chiama `PSV.register({...})`. Niente framework, niente npm, niente build: doppio click sullo shell (gli `<script src>` classici si caricano da `file://`). **Tieni la cartella insieme** (shell + `videos/`): se sposti solo l'HTML, i video non si caricano.
2. **`<<<SARA_ID>>>`** — nei **file dati** scrivilo **in chiaro** (`<<<SARA_ID>>>`): il renderer (`esc()`) lo escapa da solo, e la copia lo restituisce corretto. Nell'**HTML statico** dello shell (es. il template "Nuovo video"), invece, scrivilo escaped (`&lt;&lt;&lt;SARA_ID&gt;&gt;&gt;`), perché lì non passa dal renderer.
3. **Colori solo da `:root`.** Usa le variabili CSS (`var(--iris)`, `var(--gold)`, ecc.), mai colori hardcoded. Sistema semantico: **iris/viola** = accento freddo, **oro** = step corrente / azione / termine scientifico, **verde** = completato, **corallo** = warning.
4. **Navigazione e interazioni via `data-action`** (event delegation), non `onclick` inline. Ogni `data-action` deve avere il suo `case` nello switch. Ogni `data-page="X"` deve avere una `#page-X`.
5. **Persistenza:** ogni controllo che deve sopravvivere al refresh usa `data-field` (input/textarea), `data-check` (checklist) o gli stadi/scene tramite `data-stage`/`data-scene`. Lo stato vive nell'oggetto `state` (chiave localStorage `psychoshorts:v2`).

### Controlli d'integrità dopo ogni modifica
- [ ] `node --check` su ogni file in `videos/` e sullo script dello shell.
- [ ] **Render-test in Node** (senza browser): eseguire i file dati + il motore via `vm`, generare le pagine video e verificare `<div>`/`<section>`/`<button>` bilanciati, **nessun `<<<` raw** (l'escaping deve aver agito), e che ogni `data-action` generato sia gestito nello switch.
- [ ] Nello shell statico: `<div>`/`<section>` bilanciati e ogni `data-page` statico (studio, playbook, …) ha la sua `#page-x` (le pagine `videoN` si generano a runtime).
- [ ] Colori solo da `:root`.

---

## Struttura del progetto

```
WaweNoir Shorts/
├── psychoshorts-dashboard.html   ← shell: stili, pagine di riferimento, motore di rendering
├── videos/
│   ├── video-01-sunk-cost.js     ← dati Video 1 (PSV.register)
│   └── video-02-fawn.js          ← dati Video 2
├── Video generati/               ← i tuoi file video montati (ignorato da git)
├── README.md                     ← questo file
└── CLAUDE-CODE-INIT.md           ← prompt di bootstrap per Claude Code
```

## Stack di produzione

ChatGPT/Claude (script) · ElevenLabs (voce Liam) · Higgsfield (Sara + scene) · Google Flow / Veo 3 (oggetti/metafore) · CapCut (montaggio) · Pixabay Music · Metricool (scheduling).
