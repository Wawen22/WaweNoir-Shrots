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
- È un singolo file HTML. Niente framework, niente npm, niente build step. Deve aprirsi con doppio click nel browser.
- Navigazione: ogni voce della sidebar chiama `showPage('id', this)`. Ogni pagina è un `<div id="page-XXX" class="page">`. Il target di showPage DEVE sempre avere una pagina corrispondente, altrimenti crasha.
- Le variabili CSS dei colori sono in `:root`. Usa sempre quelle (es. `var(--accent)`), mai colori hardcoded.
- I placeholder dei prompt come <<<SARA_ID>>> nel testo visibile DEVONO essere scritti come entità HTML escaped (&lt;&lt;&lt;SARA_ID&gt;&gt;&gt;) altrimenti il browser li interpreta come tag e rompe il rendering. Questa è la regola più importante.
- Le scene dei video usano la struttura `.scene-card` con header cliccabile (toggleScene) e body espandibile.
- I prompt copiabili usano `.prompt-box` con un `.copy-btn` che chiama `copyP(this)`.

REGOLE DI QUALITÀ:
- Dopo OGNI modifica, verifica che: (a) i div siano bilanciati, (b) ogni showPage('x') abbia una pagina #page-x, (c) non ci siano <<<...>>> raw non escaped, (d) ogni onclick punti a una funzione che esiste.
- Non rompere mai le pagine esistenti quando ne aggiungi di nuove.
- Mantieni lo stile visivo coerente (dark theme, le classi esistenti come .card, .badge, .step-row, .scene-card).

CONTESTO DEL CONTENUTO (per capire cosa scriviamo):
- Tema ombrello del canale: "the psychology behind why people do what they do" — relazioni, dark psychology, bias cognitivi, neuroscienze.
- Personaggio ricorrente: Sara (donna 28 anni, Reference Element salvato in Higgsfield). Appare in tutte le scene dei video tranne le metafore con oggetti.
- Voce fissa: Liam (ElevenLabs, Eleven v3, modalità Normale).
- Struttura video: Hook (dolore riconoscibile) → Bridge (fai sentire visto) → Core (una idea + nome scientifico) → Close (domanda per i commenti).
- ATTENZIONE TIMING: ElevenLabs legge a ~60 caratteri/secondo. Uno script "da 55 secondi" sulla carta diventa ~80 secondi reali. Le scene vanno sempre mappate sul timing reale dell'audio generato.
- Il Video 1 (Sunk Cost Fallacy) è già completo nella dashboard e serve da riferimento. La pagina "Nuovo video" è il template da duplicare.

WORKFLOW PER AGGIUNGERE UN NUOVO VIDEO (quando te lo chiederò):
1. Ti darò il topic e lo script.
2. Tu crei una nuova pagina `#page-videoN` duplicando la struttura di `#page-video1`, con: script diviso per timestamp, lista scene con prompt immagine + animazione (Sara escaped), riepilogo clip.
3. Aggiungi la voce nella sidebar sotto "Produzione video".
4. Aggiorni il contatore "Video pubblicati" in basso nella sidebar.
5. Verifichi l'integrità (le 4 regole di qualità sopra).

Conferma che hai letto e capito, poi procedi con il punto 1 e 2 della "PRIMA COSA DA FARE".
```

---

## Note d'uso

- Tieni `psychoshorts-dashboard.html` e questo file nella stessa cartella quando apri Claude Code.
- Ogni volta che vuoi un nuovo video, dì semplicemente: *"Aggiungiamo il Video N. Topic: [X]. Ecco lo script: [...]"* e Claude Code seguirà il workflow.
- Se qualcosa si rompe, chiedi: *"Verifica l'integrità della dashboard"* — sa già cosa controllare grazie alle regole di qualità.
- Apri il file nel browser dopo ogni modifica per controllare visivamente.
