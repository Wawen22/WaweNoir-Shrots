# Prompt di inizializzazione per Claude Code

Copia tutto il blocco qui sotto e incollalo come primo messaggio in Claude Code, nella cartella dove hai messo `psychoshorts-dashboard.html`.

---

```
Sto costruendo un sistema di produzione per un canale di YouTube Shorts / TikTok / Instagram Reels sulla psicologia del comportamento umano. I video sono faceless, generati con AI (Higgsfield per i visual, ElevenLabs per la voce, Google Flow/Veo 3 per le metafore, CapCut per il montaggio).

In questa cartella trovi `psychoshorts-dashboard.html` — una dashboard a pagina singola (HTML/CSS/JS vanilla, nessuna dipendenza, nessun build) che uso come centro di controllo. È già funzionante. Voglio che tu la mantenga e la espanda nel tempo.

PRIMA COSA DA FARE:
1. Leggi tutto `psychoshorts-dashboard.html` e fai un riassunto della sua architettura: quali pagine ci sono, come funziona la navigazione (showPage), come sono strutturate le scene dei video, e quali funzioni JS esistono.
2. Crea un file `README.md` che documenti: struttura del progetto, come aggiungere un nuovo video, e le convenzioni da rispettare.

ARCHITETTURA DELLA DASHBOARD (rispettala sempre):
- È data-driven: lo shell `psychoshorts-dashboard.html` contiene stili + pagine di riferimento + motore di rendering. Ogni video è un file separato in `videos/` che chiama `PSV.register({...})`. Niente framework/npm/build: si apre con doppio click (gli `<script src>` classici funzionano da file://). Tieni shell + cartella `videos/` insieme.
- Le pagine video vengono generate a runtime dentro `#video-pages`; le voci della sidebar dei video dentro `#nav-videos`. Le pagine di riferimento (studio, playbook, ecc.) restano HTML statico: ogni `data-page="x"` statico deve avere una `#page-x`.
- Interazioni via `data-action` (event delegation), non onclick inline. Ogni `data-action` deve avere un `case` nello switch.
- Le variabili CSS dei colori sono in `:root` (es. `var(--iris)`, `var(--gold)`). Mai colori hardcoded.
- `<<<SARA_ID>>>`: NEI FILE DATI scrivilo in chiaro, il renderer (`esc()`) lo escapa da solo. NELL'HTML STATICO dello shell scrivilo escaped (&lt;&lt;&lt;SARA_ID&gt;&gt;&gt;).

REGOLE DI QUALITÀ:
- Dopo OGNI modifica: `node --check` sui file `videos/*.js` e sullo script dello shell; poi render-test in Node (vm) per verificare HTML generato bilanciato, nessun `<<<` raw, ogni `data-action` gestito; nello shell statico div/section bilanciati e ogni data-page statico ha la sua pagina.
- Non rompere mai le pagine/video esistenti quando ne aggiungi di nuovi.
- Mantieni lo stile coerente (dark theme, classi esistenti: .card, .pill, .stage, .scene, .prompt--img/--anim/--clip).

CONTESTO DEL CONTENUTO (per capire cosa scriviamo):
- Tema ombrello del canale: "the psychology behind why people do what they do" — relazioni, dark psychology, bias cognitivi, neuroscienze.
- Personaggio ricorrente: Sara (donna 28 anni, Reference Element salvato in Higgsfield). Appare in tutte le scene dei video tranne le metafore con oggetti.
- Voce fissa: Liam (ElevenLabs, Eleven v3, modalità Normale).
- Struttura video: Hook (dolore riconoscibile) → Bridge (fai sentire visto) → Core (una idea + nome scientifico) → Close (domanda per i commenti).
- ATTENZIONE TIMING: ElevenLabs legge a ~60 caratteri/secondo. Uno script "da 55 secondi" sulla carta diventa ~80 secondi reali. Le scene vanno sempre mappate sul timing reale dell'audio generato.
- Il Video 1 (Sunk Cost Fallacy) è il riferimento completo, in `videos/video-01-sunk-cost.js`. Ogni video include anche una Copertina (prompt thumbnail virale: volto + sfondo a tinta unita acceso + testo bianco sopra / giallo enorme sotto, incluso nel prompt).

WORKFLOW PER AGGIUNGERE UN NUOVO VIDEO (quando te lo chiederò):
1. Ti darò il topic e lo script.
2. Copi un file dati esistente in `videos/video-NN-slug.js` e riempi l'oggetto `PSV.register({...})`: n, title, kicker, concept, cover, voice, script (array [timestamp, testo]), term/termCaps/termBeat, pubTitle, hashtags, scenes. `<<<SARA_ID>>>` in chiaro.
3. Aggiungi una riga `<script src="videos/video-NN-slug.js"></script>` nello shell, accanto agli altri include.
4. Studio, sidebar, stepper e pipeline si generano da soli. Lo stato iniziale degli stadi si imposta col campo `seed`.
5. Verifichi l'integrità (regole di qualità sopra).

Conferma che hai letto e capito, poi procedi con il punto 1 e 2 della "PRIMA COSA DA FARE".
```

---

## Note d'uso

- Tieni `psychoshorts-dashboard.html` e questo file nella stessa cartella quando apri Claude Code.
- Ogni volta che vuoi un nuovo video, dì semplicemente: *"Aggiungiamo il Video N. Topic: [X]. Ecco lo script: [...]"* e Claude Code seguirà il workflow.
- Se qualcosa si rompe, chiedi: *"Verifica l'integrità della dashboard"* — sa già cosa controllare grazie alle regole di qualità.
- Apri il file nel browser dopo ogni modifica per controllare visivamente.
