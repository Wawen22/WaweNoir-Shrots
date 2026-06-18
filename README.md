# PsychoShorts — Studio

Centro di controllo per un canale faceless di YouTube Shorts / TikTok / Instagram Reels sulla **psicologia del comportamento umano**. Video generati con AI (Higgsfield per i visual, ElevenLabs per la voce, Google Flow/Veo 3 per le metafore, CapCut per il montaggio).

Tutto vive in **un solo file**: [`psychoshorts-dashboard.html`](psychoshorts-dashboard.html). Doppio click → si apre nel browser. Nessun build, nessuna dipendenza, nessun server.

---

## Come funziona — il modello "Studio + pipeline"

La dashboard risponde sempre a una domanda: **"a che punto sono e qual è la prossima cosa da fare?"**

- **Studio** (home) — vista d'insieme di tutti i video. Ogni video è una card con una mini-timeline a 6 segmenti che si riempie man mano. Il pulsante **Continua →** ti porta al video e apre lo step giusto.
- **Pagina del singolo video** — è la pipeline guidata. In alto uno **stepper appiccicoso** (la timeline di montaggio: lo step da fare ora è in **oro**, quelli fatti in **verde**). Sotto, 6 stadi che apri/chiudi:

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

Il **Video 1 (Sunk Cost Fallacy)** è il riferimento completo: 9 scene / 12 clip. La pagina "Nuovo video" è il template da duplicare.

---

## Aggiungere un nuovo video

Con Claude Code, scrivi:

> *"Aggiungiamo il Video N. Topic: [X]. Ecco lo script: [...]"*

Claude Code seguirà questo workflow:

1. Pesca/usa il topic e lo script.
2. Crea una nuova `<section id="page-videoN" class="page">` duplicando la struttura di `#page-video1`: stepper, 6 stadi, script per timestamp, scene-card con prompt immagine + animazione (Sara escaped), riepilogo clip.
3. Aggiunge il video all'array `VIDEOS` nello `<script>` (`{id:'vN', page:'videoN', n:N, title:'…', concept:'…'}`) — così appare in automatico nello Studio.
4. Aggiunge la voce in sidebar sotto "Produzione".
5. Verifica l'integrità (vedi sotto).

Per dire "verifica l'integrità della dashboard" → Claude Code ricontrolla i 5 punti qui sotto.

---

## Regole di architettura (rispettarle sempre)

1. **Un solo file HTML.** Niente framework, niente npm, niente build. Deve aprirsi con doppio click.
2. **`<<<SARA_ID>>>` sempre escaped** nel testo visibile: scrivilo come `&lt;&lt;&lt;SARA_ID&gt;&gt;&gt;`. È la regola più importante: i `<` raw rompono il rendering. Il testo viene de-escapato automaticamente al momento della copia.
3. **Colori solo da `:root`.** Usa le variabili CSS (`var(--iris)`, `var(--gold)`, ecc.), mai colori hardcoded. Sistema semantico: **iris/viola** = accento freddo, **oro** = step corrente / azione / termine scientifico, **verde** = completato, **corallo** = warning.
4. **Navigazione e interazioni via `data-action`** (event delegation), non `onclick` inline. Ogni `data-action` deve avere il suo `case` nello switch. Ogni `data-page="X"` deve avere una `#page-X`.
5. **Persistenza:** ogni controllo che deve sopravvivere al refresh usa `data-field` (input/textarea), `data-check` (checklist) o gli stadi/scene tramite `data-stage`/`data-scene`. Lo stato vive nell'oggetto `state` (chiave localStorage `psychoshorts:v2`).

### Controlli d'integrità dopo ogni modifica
- [ ] `<div>` e `<section>` bilanciati.
- [ ] Ogni `data-page="x"` ha una `#page-x` (e viceversa nessuna pagina orfana).
- [ ] Nessun `<<<...>>>` raw non escaped.
- [ ] Ogni `data-action` usato è gestito nello switch JS.
- [ ] Il JS è valido (`node --check`).

---

## Struttura del progetto

```
WaweNoir Shorts/
├── psychoshorts-dashboard.html   ← l'intera app (HTML + CSS + JS inline)
├── README.md                     ← questo file
└── CLAUDE-CODE-INIT.md           ← prompt di bootstrap per Claude Code
```

## Stack di produzione

ChatGPT/Claude (script) · ElevenLabs (voce Liam) · Higgsfield (Sara + scene) · Google Flow / Veo 3 (oggetti/metafore) · CapCut (montaggio) · Pixabay Music · Metricool (scheduling).
