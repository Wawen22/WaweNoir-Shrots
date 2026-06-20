/* ───────────────────────────────────────────────────────────────
   VIDEO 04 — The Zeigarnik Effect (Open Loops)
   <<<SARA_ID>>> in chiaro: il renderer fa l'escaping.
   ─────────────────────────────────────────────────────────────── */
PSV.register({
  n: 4,
  title: 'The Zeigarnik Effect',
  kicker: 'Bias cognitivo · Mente',
  concept: 'Perché le cose lasciate a metà ti ossessionano e non riesci a spegnere il cervello.',
  sub: 'Perché non riesci a rilassarti finché tutto resta "aperto". 9 scene / 16 clip · da produrre.',
  seed: [],          // nuovo: niente fatto
  // niente voDur: lo annoti dopo aver generato la voce

  cover: {
    prompt:
`Vertical 9:16 viral psychology thumbnail.

<<<SARA_ID>>> off-center, lying awake in bed in the dark, eyes wide open staring at the ceiling, unable to sleep — mind clearly racing. One hand on her forehead. Exhausted but wired. Relatable, tense.

Background: bold solid electric purple (#7048E8), slightly gradient toward dark purple at the edges. Vivid, saturated, eye-catching.

Text overlay, Montserrat ExtraBold all caps, thick black outline, perfectly sharp and correctly spelled. Exactly two lines, each phrase appears ONCE — no duplicated or repeated words, no extra text:
- TOP, above her head, in white: "WHY YOU CAN'T"
- BOTTOM, huge, in bright yellow: "SWITCH OFF"

No shadows. High contrast, purple background, white + yellow text. Clean, bold, scroll-stopping. Photorealistic face.`,
    white: "WHY YOU CAN'T",
    yellow: 'SWITCH OFF',
    alts: ["YOUR BRAIN WON'T REST", 'TOO MANY OPEN TABS', "WHY YOU CAN'T RELAX"]
  },

  voice: { settings: 'Eleven v3 · Normale · Stability ~45% · Similarity 75%' },

  script: [
    ['0–4s', "Your brain won't let you rest — because of all the things you started and never finished."],
    ['4–14s', "The message you didn't reply to. The project sitting half-done. The conversation that ended without an ending. They follow you to bed and wait for you in the dark."],
    ['14–24s', "Finished tasks go quiet. Unfinished ones keep screaming. And it's not a flaw in you — it's a feature of how your memory was built."],
    ['24–37s', "It has a name. Psychologist Bluma Zeigarnik noticed that waiters remembered complex orders perfectly — until the bill was paid. The moment a task was done, it vanished from memory. She called it the Zeigarnik effect: open loops stay loud, closed ones disappear."],
    ['37–48s', "Think of your mind like a browser with too many tabs open. Each unfinished thing is a tab still running in the background — quietly draining you, even when you're not looking at it."],
    ['48–58s', "That's why you can't relax. It's not that you have too much to do. It's that too much is left open — and your brain refuses to close a loop on its own."],
    ['58–67s', "And here's the twist. The task itself is often tiny. Two minutes of work. But left unfinished, it costs you hours of mental noise. The weight isn't the task. It's the openness."],
    ['67–75s', "So you don't always need to do more. Sometimes you just need to close the loop — finish it, schedule it, or decide to drop it on purpose. The brain only lets go of what it marks as done."],
    ['75–82s', "Drop this in the comments: what's one open loop in your head right now that you could close today?"]
  ],
  term: 'Zeigarnik effect',
  termCaps: 'THE ZEIGARNIK EFFECT',
  termBeat: '24–37s',
  scriptNote: '~82s reali con il pacing di ElevenLabs',
  scriptHint: 'Hook → Bridge → Core (Zeigarnik effect) → Close',

  pubTitle: "Why You Can't Switch Off: The Zeigarnik Effect",
  pubDesc:
`Your brain won't let you rest — because of everything you started and never finished. The unread message. The half-done project. The conversation with no ending. They follow you to bed and wait in the dark.

Psychologist Bluma Zeigarnik found that waiters remembered complex orders perfectly — until the bill was paid, then it vanished. Open loops stay loud; closed ones disappear. You don't always need to do more — sometimes you just need to close the loop.

💬 What's one open loop you could close today? Tell me below.

🧠 Follow for more psychology breakdowns.`,
  hashtags: '#zeigarnikeffect #psychology #overthinking #productivity #cognitivebias #mentalhealth #psychologyfacts',
  scenesNote: '<b>16 clip totali da generare:</b> 14 con Higgsfield (Sara) + 2 con Flow/Veo 3 (i tab del browser, scena 5). Ogni stacco cade su un punto preciso del voiceover.',

  scenes: [
    { id: 's1', time: '0–4s', title: 'Scena 1 — Hook: Sara sveglia che fissa il soffitto',
      sub: '"Your brain won\'t let you rest..."',
      clips: [{ tool: 'h',
        image: { spec: '📐 9:16', text: `<<<SARA_ID>>> lying awake in bed at night, eyes wide open, staring at the ceiling. Exhausted but unable to sleep, her mind clearly running. One hand resting on her chest. Cold blue night tones, shallow depth of field. Vertical 9:16. Photorealistic.` },
        anim: { spec: '⏱ genera 4s → taglia a 3s', text: `Very slow push-in toward her face. Her eyes don't close. A faint flicker of thought crosses her expression. Barely visible breath. 4 seconds.` },
        tip: 'In CapCut: taglia a 3s. Tieni il momento in cui gli occhi restano fissi e aperti.' }] },

    { id: 's2a', time: '4–9s', title: 'Scena 2a — Il messaggio non risposto',
      sub: '"The message you didn\'t reply to."',
      clips: [{ tool: 'h',
        image: { spec: '📐 9:16 · clip ~2.5s', text: `<<<SARA_ID>>> glancing at her phone showing an unanswered message thread, a faint guilt on her face. She means to reply, she hasn't. Dim warm bedside light. Close-up on phone and face. Vertical 9:16. Photorealistic.` },
        anim: { spec: '⏱ genera 4s → usa ~2.5s', text: `Her eyes scan the unread thread, then look away as if to ignore it — but the thought stays. 4 seconds.` },
        tip: 'Clip breve nel video finale. Genera 4s e scegli il momento migliore.' }] },

    { id: 's2b', time: '9–14s', title: 'Scena 2b — Il progetto lasciato a metà',
      sub: '"The project sitting half-done. The conversation that ended without an ending."',
      clips: [{ tool: 'h',
        image: { spec: '📐 9:16 · clip ~3s', text: `<<<SARA_ID>>> at a desk with a half-finished project — papers, an open laptop, a notebook with unfinished notes. She looks at it with the weight of something incomplete. Cool desaturated office light. Vertical 9:16. Photorealistic.` },
        anim: { spec: '⏱ genera 4s → usa ~3s', text: `Slow drift across the half-done work, settling on her tired face. The unfinished pile sits heavy. 4 seconds.` },
        tip: 'Mostra l\'incompiuto fisicamente: il disordine di qualcosa lasciato a metà.' }] },

    { id: 's3', time: '14–24s', title: 'Scena 3 — Le cose la seguono a letto', badges: [{ cls: 'pill', txt: '2 clip' }],
      sub: '"Finished tasks go quiet. Unfinished ones keep screaming."',
      clips: [
        { tool: 'h', label: 'CLIP 3.1 — "they follow you to bed" · ~5s',
          image: { text: `<<<SARA_ID>>> back in bed, eyes open in the dark, the faint glow of the phone and the desk still visible behind her in the room. The unfinished things linger in the background, just out of focus. Cold night tones. Vertical 9:16. Photorealistic.` },
          anim: { text: `Camera holds on her face; behind her the out-of-focus objects seem to faintly pulse, as if calling. 5 seconds.` },
          tip: 'Primo clip: le cose incompiute che la "seguono" nel buio.' },
        { tool: 'h', label: 'CLIP 3.2 — "a feature of how your memory was built" · ~5s',
          image: { text: `<<<SARA_ID>>> sitting up slightly in bed, pressing fingertips to her temple, the mental noise visible in her tense brow. She can't quiet it. Subtle cool light. Vertical 9:16. Photorealistic.` },
          anim: { text: `She presses her temple, eyes closing for a second then opening — the noise won't stop. 5 seconds.` },
          tip: 'Lo stacco cade su "how your memory was built" — passa dalla sensazione alla causa.' }] },

    { id: 's4a', time: '24–31s', title: 'Scena 4a — Il nome: Zeigarnik & i camerieri', badges: [{ cls: 'pill pill--gold', txt: '⭐ chiave' }],
      sub: '"Psychologist Bluma Zeigarnik noticed that waiters could remember complex orders perfectly — until the bill was paid."',
      clips: [{ tool: 'h', label: 'CLIP 4a · ~7s',
        image: { text: `<<<SARA_ID>>> sitting, slowly lifting her gaze — the moment of recognition, like someone just explained the thing that's been happening in her head for years. Quiet clarity. Soft warm side light, slightly desaturated. Vertical 9:16. Photorealistic.` },
        anim: { text: `Very slow push-in toward her face. Her expression shifts from tired confusion to a calm understanding. 6 seconds.` },
        gold: true, tip: '⭐ MOMENTO CHIAVE: in CapCut fai apparire grande in giallo "THE ZEIGARNIK EFFECT" mentre la voce lo pronuncia. È la parola che le persone screenshottano.' }] },

    { id: 's4b', time: '31–37s', title: 'Scena 4b — Open loops vs closed loops',
      sub: '"Open loops stay loud. Closed ones disappear."',
      clips: [{ tool: 'h', label: 'CLIP 4b · ~6s',
        image: { text: `<<<SARA_ID>>> seen from the side near a corkboard or list where some items are crossed out (closed) and others are not (open). Her eyes rest on the open ones. Cool desaturated light, cinematic. Vertical 9:16. Photorealistic.` },
        anim: { text: `Slow drift across the list — past the crossed-out items, lingering on the unfinished ones, then to her face. 6 seconds.` } }] },

    { id: 's5', time: '37–48s', title: 'Scena 5 — Troppi tab aperti (metafora)', badges: [{ cls: 'pill', txt: '2 clip' }],
      sub: '"Think of your mind like a browser with too many tabs open."',
      note: 'Unica scena <b>senza Sara</b>. Google Flow / Veo 3 gestisce meglio l\'astratto digitale e il movimento delle interfacce.',
      clips: [
        { tool: 'f', label: 'CLIP 5.1 — "a browser with too many tabs open" · ~5s',
          clip: { text: `Abstract cinematic visual: a screen filling with dozens of glowing browser tabs, more and more opening until the bar is overcrowded and unreadable. Dark background, cool blue glow. No faces. 6 seconds.` },
          tip: 'Primo clip: l\'accumulo dei tab, il sovraccarico visivo.' },
        { tool: 'f', label: 'CLIP 5.2 — "quietly draining you, even when you\'re not looking" · ~6s',
          clip: { text: `Close-up on the overcrowded tabs, each one faintly pulsing and consuming a glowing energy bar that slowly drains in the background. The cost of keeping everything open made visible. Dark cinematic, cool blue glow. No faces. 6 seconds.` },
          tip: 'Secondo clip: i tab che "consumano energia" anche in background. Lo stacco cade su "quietly draining you".' }] },

    { id: 's6', time: '48–58s', title: 'Scena 6 — Non riesce a rilassarsi', badges: [{ cls: 'pill', txt: '2 clip' }],
      sub: '"It\'s not that you have too much to do. It\'s that too much is left open."',
      clips: [
        { tool: 'h', label: 'CLIP 6.1 — "That\'s why you can\'t relax" · ~5s',
          image: { text: `<<<SARA_ID>>> trying to relax on a couch with tea, but her body is tense, eyes unfocused, not present. The attempt at rest that isn't working. Warm light that should feel cozy but doesn't reach her. Vertical 9:16. Photorealistic.` },
          anim: { text: `She holds the cup but stares past it, unable to settle into the calm around her. 5 seconds.` },
          tip: 'Primo clip: il riposo che non arriva, il corpo che non si spegne.' },
        { tool: 'h', label: 'CLIP 6.2 — "your brain refuses to close a loop on its own" · ~5s',
          image: { text: `<<<SARA_ID>>> close-up, eyes flicking as if mentally cycling through an endless list, lips slightly moving. The brain stuck in a loop it won't release. Cool light. Vertical 9:16. Photorealistic.` },
          anim: { text: `Subtle, repetitive eye movement — looping — her brow tightening. The loop won't close. 5 seconds.` },
          tip: 'Lo stacco cade su "refuses to close a loop" — il ciclo che non si chiude.' }] },

    { id: 's7', time: '58–67s', title: 'Scena 7 — Compito minuscolo, peso enorme', badges: [{ cls: 'pill', txt: '2 clip' }],
      sub: '"The task itself is often tiny... The weight isn\'t the task. It\'s the openness."',
      clips: [
        { tool: 'h', label: 'CLIP 7.1 — "The task itself is often tiny. Two minutes of work" · ~5s',
          image: { text: `<<<SARA_ID>>> looking at one small thing — a single unsent text, a tiny note — that is clearly trivial, yet she stares at it as if it's heavy. The disproportion is the point. Soft light. Vertical 9:16. Photorealistic.` },
          anim: { text: `Close-up on the tiny task, then to her face carrying it like a weight far bigger than it is. 5 seconds.` },
          tip: 'Primo clip: il compito piccolo che pesa in modo sproporzionato.' },
        { tool: 'f', label: 'CLIP 7.2 — "it costs you hours of mental noise" · ~5s',
          clip: { text: `Abstract visual: a single small glowing dot that emits expanding ripples of static noise filling the whole dark frame. One tiny source, enormous noise. Cool blue-grey tones. No faces. Vertical 9:16. Photorealistic.` },
          tip: 'Lo stacco cade su "hours of mental noise" — la piccola fonte che genera rumore enorme. Veo 3 per l\'astratto.' }] },

    { id: 's8', time: '67–75s', title: 'Scena 8 — Chiudere il loop', badges: [{ cls: 'pill', txt: '2 clip' }],
      sub: '"Sometimes you just need to close the loop... The brain only lets go of what it marks as done."',
      clips: [
        { tool: 'h', label: 'CLIP 8.1 — "you just need to close the loop" · ~4s',
          image: { text: `<<<SARA_ID>>> decisively crossing one item off a list with a pen, a small exhale of relief. The act of closing a loop. Warmer, clearer light arriving. Close-up on hand and face. Vertical 9:16. Photorealistic.` },
          anim: { text: `She draws the line through the item, then a visible breath out. A small weight lifts. 4 seconds.` },
          tip: 'Primo clip: il gesto fisico di chiudere — la penna che cancella.' },
        { tool: 'h', label: 'CLIP 8.2 — "The brain only lets go of what it marks as done" · ~4s',
          image: { text: `<<<SARA_ID>>> finally relaxing back, shoulders dropping, eyes softening — genuine calm now that the loop is closed. Even, warm, settled light. Vertical 9:16. Photorealistic.` },
          anim: { text: `Her whole body settles. The tension that ran through the video releases. Stillness, but peaceful this time. 4 seconds.` },
          tip: 'Il contrasto con la scena 1: stessa quiete, ma ora è riposo vero, non insonnia.' }] },

    { id: 's9', time: '75–82s', title: 'Scena 9 — Sara guarda in camera', badges: [{ cls: 'pill pill--done', txt: 'CTA' }],
      sub: '"...what\'s one open loop in your head right now that you could close today?"',
      clips: [{ tool: 'h', label: 'CLIP 9 · ~7s',
        image: { text: `<<<SARA_ID>>> looking directly into camera for the first time. Expression: calm, clear, gently encouraging — like she's offering you a way out she just found herself. Soft front light, neutral background, eyes steady. Medium close-up. Vertical 9:16. Photorealistic.` },
        anim: { text: `No camera movement. She holds the gaze directly into camera. Very subtle breath. Complete stillness. 6 seconds.` },
        tip: 'La stillness calma chiude il video. Se serve 1s in più, freeze frame sull\'ultimo fotogramma in CapCut.' }] }
  ]
});
