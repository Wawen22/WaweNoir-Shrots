/* ───────────────────────────────────────────────────────────────
   VIDEO 01 — Sunk Cost Fallacy
   Dati della produzione. Si registra da solo nello Studio.
   Il prompt usa <<<SARA_ID>>> in chiaro: il renderer fa l'escaping.
   ─────────────────────────────────────────────────────────────── */
PSV.register({
  n: 1,
  title: 'Sunk Cost Fallacy',
  kicker: 'Bias cognitivo · Riferimento',
  concept: 'Perché finisci cose che ti fanno male, "per non sprecare" ciò che hai già investito.',
  sub: 'Voiceover reale 82s · personaggio Sara · 12 clip su 9 scene. Modello completo da cui copiare i prossimi.',
  seed: ['script', 'voice', 'scenes', 'edit'],   // stadi già fatti (pronto da pubblicare)
  voDur: '82',

  cover: {
    prompt:
`Vertical 9:16 viral psychology thumbnail.

<<<SARA_ID>>> center frame, medium close-up, eyes wide open looking directly into camera with a trapped, haunted realization — like she just understood she stayed somewhere far too long. Mouth slightly open. High energy.

Background: bold solid crimson red (#E63946), slightly gradient toward dark red at the edges. Vivid, saturated, eye-catching.

Text overlay, Montserrat ExtraBold all caps, perfectly sharp:
- TOP: "WHY YOU CAN'T" in large white letters, thick black outline, wide letter-spacing.
- CENTER BOTTOM (below face): "WALK AWAY" in massive bright yellow letters, even larger, thick black outline.

No shadows. High contrast. Colors: red background, white + yellow text. Clean, bold, scroll-stopping. Photorealistic face.`,
    white: "WHY YOU CAN'T",
    yellow: 'WALK AWAY',
    alts: ['YOU ALREADY KNEW', 'THE TRAP IN YOUR BRAIN', 'WHY YOU STAYED']
  },

  voice: { file: 'sunk-cost-v1.mp3 · 1:22 (82s)', settings: 'Eleven v3 · Normale · Stability ~45% · Similarity 75%' },

  script: [
    ['0–4s', 'You finished something bad just so it "wasn\'t a waste."'],
    ['4–13s', 'Maybe it was a movie you hated an hour in. Maybe it was a job that was grinding you into dust. Maybe it was a relationship that stopped working years before it ended.'],
    ['13–24s', 'And the whole time, some part of you knew. But you stayed. You kept going. Because leaving felt like losing everything you\'d already put in.'],
    ['24–37s', 'That feeling has a name. Psychologist Daniel Kahneman — who won the Nobel Prize for this — called it the sunk cost fallacy. Your brain treats time and money you\'ve already spent as a reason to keep spending more.'],
    ['37–48s', 'Think of it like a leaking bucket. You don\'t pour more water in to save the water that already fell out. But that\'s exactly what your brain tells you to do.'],
    ['48–58s', 'Here\'s the disturbing part. The more you\'ve invested, the harder it becomes to leave. Not easier. The pain of quitting scales with how long you stayed.'],
    ['58–67s', 'So your brain isn\'t being loyal. It\'s not being strong. It\'s running a glitch — confusing past cost with future value. Two completely different things.'],
    ['67–75s', 'The years don\'t justify the next year. The money doesn\'t justify more money. The suffering doesn\'t justify more suffering.'],
    ['75–82s', 'Drop this in the comments: what\'s one thing you stayed in way too long — and what was the story you told yourself to justify it?']
  ],
  term: 'sunk cost fallacy',
  termCaps: 'SUNK COST FALLACY',
  termBeat: '24–37s',
  scriptNote: 'lo script completo con i timestamp reali',

  pubTitle: "Why You Can't Walk Away: The Sunk Cost Fallacy",
  pubDesc:
`You finished something bad just so it "wasn't a waste." The bad job. The dead relationship. The movie you hated an hour in.

Nobel-winning psychologist Daniel Kahneman called it the sunk cost fallacy: your brain treats what you've already spent as a reason to keep spending more. But the past cost doesn't justify the future one — that's the glitch.

💬 What's one thing you stayed in way too long? Tell me below.

🧠 Follow for more dark psychology breakdowns.`,
  hashtags: '#sunkcostfallacy #darkpsychology #psychology #cognitivebias #mindset #relationships #psychologyfacts',
  scenesNote: '<b>5 clip nuovi da generare:</b> 3.2, 5.2, 6.2, 7.2, 8.2 — tutti gli altri li hai già. Ogni clip nuovo cade su un punto preciso del voiceover.',

  scenes: [
    { id: 's1', time: '0–4s', title: 'Scena 1 — Hook: Sara intorpidita davanti alla TV',
      sub: '"You finished something bad just so it wasn\'t a waste."',
      clips: [{ tool: 'h',
        image: { spec: '📐 9:16', text: `<<<SARA_ID>>> sitting alone in a dark room, face lit only by the cold blue light of a TV screen. She is staring forward, expression empty and exhausted. Not watching — just enduring. Eyes open but emotionally absent. Cinematic, shallow depth of field, desaturated blue tones. Vertical 9:16. Photorealistic.` },
        anim: { spec: '⏱ genera 4s → taglia a 3s', text: `Very slow push-in toward her face. The TV light flickers faintly on her skin. She doesn't move. Barely visible breath. Slight handheld camera drift. Duration 4 seconds.` },
        tip: 'In CapCut: taglia il clip a 3 secondi esatti. Tieni i primi 3s dove la luce del TV flicka sul suo volto.' }] },

    { id: 's2a', time: '4–7s', title: 'Scena 2a — Il film: mano sul telecomando',
      sub: '"Maybe it was a movie you hated an hour in."',
      clips: [{ tool: 'h',
        image: { spec: '📐 9:16 · clip 1.5–2s', text: `<<<SARA_ID>>> on a couch, remote control in her hand, thumb hovering over it but not pressing. She is looking at the TV screen with tired resignation. She knows she should turn it off. She doesn't. Warm living room light, slightly desaturated. Close-up on hand and face. Vertical 9:16. Photorealistic.` },
        anim: { spec: '⏱ genera 4s → usa 1.5–2s', text: `Close-up drift from her hand holding the remote to her face. Slow and heavy. 4 seconds.` },
        tip: 'Questo clip è breve nel video finale (1.5s). Genera 4s e scegli il momento migliore in CapCut.' }] },

    { id: 's2b', time: '7–10s', title: 'Scena 2b — Il lavoro: fissare lo schermo',
      sub: '"Maybe it was a job that was grinding you into dust."',
      clips: [{ tool: 'h',
        image: { spec: '📐 9:16 · clip 1.5s', text: `<<<SARA_ID>>> at a desk, staring at a laptop screen, both hands flat on the desk. Not typing — just staring. Expression: hollowed out, drained, the energy slowly gone. Fluorescent office light. Slightly cold tones. Face visible. Vertical 9:16. Photorealistic.` },
        anim: { spec: '⏱ genera 4s → usa 1.5s', text: `Camera holds still on her face. Her eyes don't blink for a long moment — then a slow, heavy blink. 4 seconds.` } }] },

    { id: 's2c', time: '10–13s', title: 'Scena 2c — La relazione: distanza sul divano',
      sub: '"Maybe it was a relationship that stopped working years before it ended."',
      clips: [{ tool: 'h',
        image: { spec: '📐 9:16 · clip 1.5s', text: `<<<SARA_ID>>> sitting on one end of a couch, a man sitting on the other end. They are not touching, not looking at each other. The distance between them feels heavy. Both looking away. Warm but desaturated living room. Evening light. Cinematic. Vertical 9:16. Photorealistic.` },
        anim: { spec: '⏱ genera 4s → usa 1.5s', text: `Very slow zoom out to reveal the space between them on the couch. The distance feels larger as the camera pulls back. 4 seconds.` } }] },

    { id: 's3', time: '13–24s', title: 'Scena 3 — Sara alla finestra di notte', badges: [{ cls: 'pill', txt: '2 clip' }],
      sub: '"And the whole time, some part of you knew. But you stayed. You kept going..."',
      clips: [
        { tool: 'h', label: 'CLIP 3.1 — "...some part of you knew" · ~5s · hai già',
          image: { text: `<<<SARA_ID>>> standing at a window at night, looking outside. Her reflection visible in the glass — two versions of her, one looking out, one looking back at us. Expression: the quiet weight of someone who already knows the answer but isn't ready to act on it. Side light. Desaturated. Vertical 9:16. Photorealistic.` },
          anim: { text: `Very slow zoom into her reflection in the glass. The outside world stays blurred — only her reflection grows sharper. 5 seconds.` },
          tip: 'Questo è il clip da 6-7s che hai già generato — copre la prima metà del blocco. Va benissimo così.' },
        { tool: 'h', label: 'CLIP 3.2 — "But you stayed. You kept going..." · ~6s · da generare',
          image: { text: `<<<SARA_ID>>> turning away from the window, sitting down slowly on the edge of a bed in the dark. She doesn't leave the room. She stays. Her shoulders carry the weight of the decision not to act. Dim warm light. Desaturated. Vertical 9:16. Photorealistic.` },
          anim: { text: `Slow camera follows her as she sits down. She settles into stillness, looking at the floor. 6 seconds. Heavy, resigned.` },
          tip: 'Nuovo clip: mostra l\'atto di "restare". Lo stacco tra i due clip cade su "But you stayed".' }] },

    { id: 's4a', time: '24–31s', title: 'Scena 4a — Il nome: Kahneman & sunk cost fallacy', badges: [{ cls: 'pill pill--gold', txt: '⭐ chiave' }],
      sub: '"That feeling has a name. Psychologist Daniel Kahneman... called it the sunk cost fallacy."',
      clips: [{ tool: 'h', label: 'CLIP 4a · ~7s',
        image: { text: `<<<SARA_ID>>> sitting at a table, looking down at her hands, then slowly lifting her gaze. Expression: the moment of recognition — like someone just named something she has felt for years but never had words for. Quiet relief mixed with understanding. Soft warm light from one side. Slightly desaturated. Vertical 9:16. Photorealistic.` },
        anim: { text: `Very slow push-in toward her face. Her expression shifts almost imperceptibly from heaviness to a quiet moment of clarity. 6 seconds.` },
        gold: true, tip: '⭐ MOMENTO CHIAVE: in CapCut fai apparire il testo grande "SUNK COST FALLACY" in giallo mentre la voce lo pronuncia. È la parola che le persone screenshottano.' }] },

    { id: 's4b', time: '31–37s', title: 'Scena 4b — La spiegazione: tempo e denaro già spesi',
      sub: '"Your brain treats time and money you\'ve already spent as a reason to keep spending more."',
      clips: [{ tool: 'h', label: 'CLIP 4b · ~6s',
        image: { text: `<<<SARA_ID>>> seen from the side, looking at a desk covered with scattered receipts, an old clock, and a calendar. Symbols of time and money already spent. She stares at them with quiet weight. Cool desaturated light. Cinematic. Vertical 9:16. Photorealistic.` },
        anim: { text: `Slow camera drift across the objects on the desk — the clock, the receipts — then settling on her face. 6 seconds.` } }] },

    { id: 's5', time: '37–48s', title: 'Scena 5 — Il secchio che perde (metafora)', badges: [{ cls: 'pill', txt: '2 clip' }],
      sub: '"Think of it like a leaking bucket. You don\'t pour more water in to save the water that already fell out."',
      note: 'Unica scena <b>senza Sara</b>. Google Flow / Veo 3 gestisce meglio gli oggetti fisici con acqua.',
      clips: [
        { tool: 'f', label: 'CLIP 5.1 — "Think of it like a leaking bucket" · ~5s · hai già',
          clip: { text: `Extreme close-up of a metal bucket with a crack at the bottom. Water drips steadily out from the crack. Cinematic macro shot. Slow motion. Cool blue-grey tones. No faces. 6 seconds.` },
          tip: 'Primo clip: stabilisce il secchio e la perdita. Il clip che hai già va bene qui.' },
        { tool: 'f', label: 'CLIP 5.2 — "You don\'t pour more water in..." · ~6s · da generare',
          clip: { text: `A pair of female hands — no face visible — slowly pours more water into the leaking bucket from the top. The water keeps falling out below as more is added above. The futility is visible. Cinematic macro shot. Slow motion. Cool blue-grey tones. 6 seconds.` },
          tip: 'Secondo clip: l\'atto di versare ancora acqua — il comportamento irrazionale. Lo stacco cade su "You don\'t pour more water in".' }] },

    { id: 's6', time: '48–58s', title: 'Scena 6 — Sara sulla soglia, non riesce ad andarsene', badges: [{ cls: 'pill', txt: '2 clip' }],
      sub: '"The more you\'ve invested, the harder it becomes to leave. Not easier."',
      clips: [
        { tool: 'h', label: 'CLIP 6.1 — "Here\'s the disturbing part..." · ~5s · hai già',
          image: { text: `<<<SARA_ID>>> standing in a doorway, one hand on the door frame, body half-turned to leave but feet still planted. She is looking back into the dark room behind her. The light comes from ahead — outside, unseen, warm. The room behind is cold and heavy. Silhouette light from the front. Cinematic. Vertical 9:16. Photorealistic.` },
          anim: { text: `Her hand tightens slightly on the door frame. She doesn't move forward or back. Camera holds still. 5 seconds.` },
          tip: 'Primo clip: la soglia, la tensione del non riuscire ad andarsene.' },
        { tool: 'h', label: 'CLIP 6.2 — "Not easier. The pain of quitting scales..." · ~5s · da generare',
          image: { text: `<<<SARA_ID>>> close-up of her face in the doorway light, eyes closed for a moment, jaw tense. The weight of years visible in her expression. A single moment of almost-leaving that passes. Cinematic, dramatic side light. Vertical 9:16. Photorealistic.` },
          anim: { text: `Extreme slow push to her face. Her eyes open again, resigned. 5 seconds.` },
          tip: 'Lo stacco cade su "Not easier." — la frase più dura del video. Il cambio visivo improvviso la sottolinea.' }] },

    { id: 's7', time: '58–67s', title: 'Scena 7 — Il cervello in glitch', badges: [{ cls: 'pill', txt: '2 clip' }],
      sub: '"It\'s running a glitch — confusing past cost with future value."',
      clips: [
        { tool: 'h', label: 'CLIP 7.1 — "So your brain isn\'t being loyal..." · ~5s · hai già',
          image: { text: `<<<SARA_ID>>> sitting, head slightly bowed, eyes closed. Around her head, barely visible, a faint pattern of light like neurons firing — subtle, not cartoonish. Dark background. Purple and blue tones. Cinematic. Vertical 9:16. Photorealistic.` },
          anim: { text: `The light pattern around her head pulses slowly once. Her expression doesn't change. 5 seconds.` },
          tip: 'Primo clip: il cervello "in glitch".' },
        { tool: 'f', label: 'CLIP 7.2 — "confusing past cost with future value..." · ~5s · da generare',
          clip: { text: `Abstract split visual: on one side an old clock and scattered receipts (the past), on the other side an empty open road stretching forward (the future). A faint glitch effect separates them. Dark cinematic tones, purple and blue. No face. Vertical 9:16. Photorealistic.` },
          tip: 'Lo stacco cade su "confusing past cost with future value" — il visual mostra letteralmente i due concetti separati.' }] },

    { id: 's8', time: '67–75s', title: 'Scena 8 — Sara sul pavimento, esausta', badges: [{ cls: 'pill', txt: '2 clip' }],
      sub: '"The years don\'t justify the next year. The money doesn\'t justify more money..."',
      clips: [
        { tool: 'h', label: 'CLIP 8.1 — "The years don\'t justify the next year..." · ~4s · hai già',
          image: { text: `<<<SARA_ID>>> sitting on the floor, back against a wall, knees pulled to her chest. Head slightly bowed. Not dramatic — quiet, exhausted acceptance. Harsh side light casting a long shadow beside her. Near monochrome, desaturated. Vertical 9:16. Photorealistic.` },
          anim: { text: `Camera very slowly pulls back, revealing the empty space around her. Her shadow stretches. 4 seconds.` },
          tip: 'Primo clip: Sara esausta sul pavimento.' },
        { tool: 'h', label: 'CLIP 8.2 — "...the suffering doesn\'t justify more suffering." · ~4s · da generare',
          image: { text: `<<<SARA_ID>>> same position on the floor but seen from a wider, higher angle — she looks small in a large empty room. The isolation is total. Cold desaturated light. Cinematic. Vertical 9:16. Photorealistic.` },
          anim: { text: `Static high wide shot. Almost no movement — just the stillness of exhaustion. 4 seconds.` },
          tip: 'Il cambio di angolo (da vicino a wide dall\'alto) amplifica l\'isolamento mentre la frase si ripete tre volte. Climax visivo.' }] },

    { id: 's9', time: '75–82s', title: 'Scena 9 — Sara guarda in camera per la prima volta', badges: [{ cls: 'pill pill--done', txt: 'CTA' }],
      sub: '"Drop this in the comments: what\'s one thing you stayed in way too long?"',
      clips: [{ tool: 'h', label: 'CLIP 9 · ~7s',
        image: { text: `<<<SARA_ID>>> looking directly into camera for the first time. Expression: calm, knowing, slightly vulnerable — like she's asking you something personal because she's been through it herself. Soft front light. Neutral background. Eyes sharp and steady. Medium close-up. Vertical 9:16. Photorealistic.` },
        anim: { text: `No camera movement. She holds the gaze directly into camera. Very subtle breath. Complete stillness. 6 seconds.` },
        tip: 'La stillness dopo tutto il movimento è il punto. Se serve 1s in più, in CapCut tieni l\'ultimo fotogramma fermo (freeze frame).' }] }
  ]
});
