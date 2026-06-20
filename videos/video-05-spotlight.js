/* ───────────────────────────────────────────────────────────────
   VIDEO 05 — The Spotlight Effect (Nobody's Watching)
   <<<SARA_ID>>> in chiaro: il renderer fa l'escaping.
   Registro emotivo: sollievo / liberazione (non dark) — varia il formato del blocco.
   ─────────────────────────────────────────────────────────────── */
PSV.register({
  n: 5,
  title: 'The Spotlight Effect',
  kicker: 'Bias cognitivo · Ansia sociale',
  concept: 'Perché credi che tutti notino i tuoi errori — e la verità che ti libera.',
  sub: 'Perché nessuno ti guarda quanto temi. Registro: sollievo, non dark. 9 scene / 16 clip · da produrre.',
  seed: [],          // nuovo: niente fatto
  // niente voDur: lo annoti dopo aver generato la voce

  cover: {
    prompt:
`Vertical 9:16 viral psychology thumbnail.

<<<SARA_ID>>> center frame, caught in a self-conscious cringe — one hand half-covering her face, shoulders pulled in, an embarrassed wince, eyes glancing away. A single dramatic theatre spotlight beams down on her from above, isolating her in light against the dark. Vulnerable, relatable.

Background: bold solid deep teal (#099268), slightly gradient toward dark teal at the edges. Vivid, saturated, eye-catching.

Text overlay, Montserrat ExtraBold all caps, thick black outline, perfectly sharp and correctly spelled. Exactly two lines, each phrase appears ONCE — no duplicated or repeated words, no extra text:
- TOP, above her head, in white: "WHY NO ONE"
- BOTTOM, huge, in bright yellow: "NOTICES YOU"

No shadows beyond the spotlight beam. High contrast, teal background, white + yellow text. Clean, bold, scroll-stopping. Photorealistic face.`,
    white: 'WHY NO ONE',
    yellow: 'NOTICES YOU',
    alts: ["IT'S ALL IN YOUR HEAD", "THE AUDIENCE ISN'T REAL", 'STOP CRINGING']
  },

  voice: { settings: 'Eleven v3 · Normale · Stability ~45% · Similarity 75%' },

  script: [
    ['0–4s', "You're replaying that embarrassing moment again. Nobody else remembers it. Only you."],
    ['4–14s', "The thing you said that came out wrong. The stain on your shirt. The way your voice shook. You've watched it a hundred times. Everyone else watched it zero."],
    ['14–24s', "You feel like you're on a stage with a spotlight on you. But the truth is, the audience isn't even looking. They're checking their own reflection."],
    ['24–37s', "It has a name. Psychologist Thomas Gilovich ran an experiment: he made students wear an embarrassing shirt into a room full of people. They were sure everyone noticed. In reality, barely half did. He called it the spotlight effect — we wildly overestimate how much people notice us."],
    ['37–48s', "Think of it like this. You are the main character of your own movie. But to everyone else, you're an extra in theirs. They're too busy starring in their own to study yours."],
    ['48–58s', "That's why the shame feels so loud. You're not just remembering the moment — you're imagining an audience that never existed. The spotlight is real, but you're the only one holding it."],
    ['58–67s', "And here's the freedom in that. If no one is watching as closely as you fear, then most of your self-consciousness is a story — not a fact. The judgment you brace for rarely comes."],
    ['67–75s', "So you can do the scary thing. Speak up. Post it. Walk in late. The room you're afraid of forgets you the second you leave. That's not sad — that's permission."],
    ['75–82s', "Drop this in the comments: what's one embarrassing moment you've replayed for years that nobody else even remembers?"]
  ],
  term: 'spotlight effect',
  termCaps: 'THE SPOTLIGHT EFFECT',
  termBeat: '24–37s',
  scriptNote: '~82s reali con il pacing di ElevenLabs',
  scriptHint: 'Hook → Bridge → Core (spotlight effect) → Close',

  pubTitle: "Why Nobody Notices You Like You Think: The Spotlight Effect",
  pubDesc:
`You're replaying that embarrassing moment again — the thing you said wrong, the way your voice shook. You've watched it a hundred times. Everyone else watched it zero.

Psychologist Thomas Gilovich made students wear an embarrassing shirt into a room: they were sure everyone noticed, but barely half did. He called it the spotlight effect — we wildly overestimate how much people notice us. The room you're afraid of forgets you the second you leave. That's not sad — that's permission.

💬 What's a moment you've replayed for years that nobody else remembers? Tell me below.

🧠 Follow for more psychology breakdowns.`,
  hashtags: '#spotlighteffect #socialanxiety #psychology #cognitivebias #confidence #overthinking #psychologyfacts',
  scenesNote: '<b>16 clip totali da generare:</b> 14 con Higgsfield (Sara) + 2 con Flow/Veo 3 (il teatro vuoto, scena 5). Ogni stacco cade su un punto preciso del voiceover.',

  scenes: [
    { id: 's1', time: '0–4s', title: 'Scena 1 — Hook: Sara rivive la figuraccia',
      sub: '"You\'re replaying that embarrassing moment again."',
      clips: [{ tool: 'h',
        image: { spec: '📐 9:16', text: `<<<SARA_ID>>> sitting alone, one hand half-covering her face, eyes shut in a cringe, reliving an embarrassing memory. A small pained wince. Soft indoor light, intimate, slightly desaturated. Vertical 9:16. Photorealistic.` },
        anim: { spec: '⏱ genera 4s → taglia a 3s', text: `Very slow push-in toward her face as the cringe crosses it — a flinch, a shake of the head, eyes squeezing shut. 4 seconds.` },
        tip: 'In CapCut: taglia a 3s. Tieni il momento del cringe / scuotere la testa.' }] },

    { id: 's2a', time: '4–9s', title: 'Scena 2a — La cosa detta male',
      sub: '"The thing you said that came out wrong."',
      clips: [{ tool: 'h',
        image: { spec: '📐 9:16 · clip ~2.5s', text: `<<<SARA_ID>>> in a flashback-style moment mid-conversation, mouth open having just said the wrong thing, a flash of regret on her face. Slightly warmer, dreamlike memory tone. Vertical 9:16. Photorealistic.` },
        anim: { spec: '⏱ genera 4s → usa ~2.5s', text: `She speaks, then her face instantly drops with regret — the "why did I say that" flinch. 4 seconds.` },
        tip: 'Clip breve, tono "ricordo". Genera 4s e scegli il momento del rimpianto.' }] },

    { id: 's2b', time: '9–14s', title: 'Scena 2b — Il dettaglio: la macchia, la voce che trema',
      sub: '"The stain on your shirt. The way your voice shook."',
      clips: [{ tool: 'h',
        image: { spec: '📐 9:16 · clip ~3s', text: `<<<SARA_ID>>> looking down at a small stain on her shirt, fingers anxiously touching it, hyper-aware of it. The tiny detail she's convinced everyone can see. Soft light. Close-up. Vertical 9:16. Photorealistic.` },
        anim: { spec: '⏱ genera 4s → usa ~3s', text: `Her fingers fidget over the small stain, eyes darting as if everyone is staring at it. 4 seconds.` },
        tip: 'Mostra l\'iper-attenzione al dettaglio minuscolo che lei crede enorme.' }] },

    { id: 's3', time: '14–24s', title: 'Scena 3 — Il palco immaginario', badges: [{ cls: 'pill', txt: '2 clip' }],
      sub: '"You feel like you\'re on a stage with a spotlight on you. But the audience isn\'t even looking."',
      clips: [
        { tool: 'h', label: 'CLIP 3.1 — "on a stage with a spotlight on you" · ~5s',
          image: { text: `<<<SARA_ID>>> standing in a crowd or busy room, frozen and self-conscious, feeling watched — as if a spotlight is on her. Her posture small and exposed. Slightly heightened light on her, dimmer around. Vertical 9:16. Photorealistic.` },
          anim: { text: `She stands stiff and exposed, glancing around, certain all eyes are on her. 5 seconds.` },
          tip: 'Primo clip: la sensazione del riflettore addosso.' },
        { tool: 'h', label: 'CLIP 3.2 — "They\'re checking their own reflection" · ~5s',
          image: { text: `Wider shot: <<<SARA_ID>>> in the crowd, but everyone around her is absorbed in themselves — looking at phones, fixing their hair, lost in their own worries. Nobody is looking at her at all. Natural even light. Vertical 9:16. Photorealistic.` },
          anim: { text: `Camera reveals the people around her, each self-absorbed, none looking her way. The spotlight was imaginary. 5 seconds.` },
          tip: 'Lo stacco cade su "the audience isn\'t even looking" — il reveal che nessuno la guarda.' }] },

    { id: 's4a', time: '24–31s', title: 'Scena 4a — Il nome: Gilovich & la maglietta', badges: [{ cls: 'pill pill--gold', txt: '⭐ chiave' }],
      sub: '"Thomas Gilovich made students wear an embarrassing shirt... barely half noticed."',
      clips: [{ tool: 'h', label: 'CLIP 4a · ~7s',
        image: { text: `<<<SARA_ID>>> slowly lifting her gaze — the moment of recognition, like someone just told her the embarrassment was never as visible as she thought. The first hint of relief. Soft warm side light. Vertical 9:16. Photorealistic.` },
        anim: { text: `Very slow push-in toward her face. Her expression shifts from tension toward a dawning, relieving clarity. 6 seconds.` },
        gold: true, tip: '⭐ MOMENTO CHIAVE: in CapCut fai apparire grande in giallo "THE SPOTLIGHT EFFECT" mentre la voce lo pronuncia. È la parola che le persone screenshottano.' }] },

    { id: 's4b', time: '31–37s', title: 'Scena 4b — Sopravvalutiamo quanto ci notano',
      sub: '"We wildly overestimate how much people notice us."',
      clips: [{ tool: 'h', label: 'CLIP 4b · ~6s',
        image: { text: `<<<SARA_ID>>> in a room of people, the camera angle now showing how little attention is actually on her — others chatting, looking elsewhere, indifferent in a neutral, non-hostile way. She begins to notice. Even natural light. Vertical 9:16. Photorealistic.` },
        anim: { text: `Slow drift across the indifferent crowd, then to her face as it registers: nobody's really watching. 6 seconds.` } }] },

    { id: 's5', time: '37–48s', title: 'Scena 5 — Protagonista vs comparsa: il teatro vuoto (metafora)', badges: [{ cls: 'pill', txt: '2 clip' }],
      sub: '"You are the main character of your own movie. But to everyone else, you\'re an extra in theirs."',
      note: 'Unica scena <b>senza Sara in primo piano</b>. Google Flow / Veo 3 per il teatro/cinema e il riflettore su platea vuota.',
      clips: [
        { tool: 'f', label: 'CLIP 5.1 — "the main character of your own movie" · ~5s',
          clip: { text: `Cinematic shot of a single bright theatre spotlight beaming down onto an empty stage in a dark theatre. The cone of light is dramatic, expectant. No people visible. Warm spotlight against deep shadow. 6 seconds.` },
          tip: 'Primo clip: il riflettore sul palco — la sensazione di essere "il protagonista".' },
        { tool: 'f', label: 'CLIP 5.2 — "you\'re an extra in theirs" · ~6s',
          clip: { text: `The camera pulls back from the spotlit stage to reveal rows and rows of completely empty theatre seats in the dark. The audience she feared was never there. Cinematic, lonely-but-freeing tone, warm light fading into empty dark seats. No people. 6 seconds.` },
          tip: 'Secondo clip: la platea vuota. Lo stacco cade su "an extra in theirs" — la rivelazione che il pubblico non c\'è.' }] },

    { id: 's6', time: '48–58s', title: 'Scena 6 — La vergogna e il pubblico immaginario', badges: [{ cls: 'pill', txt: '2 clip' }],
      sub: '"You\'re imagining an audience that never existed. The spotlight is real, but you\'re the only one holding it."',
      clips: [
        { tool: 'h', label: 'CLIP 6.1 — "That\'s why the shame feels so loud" · ~5s',
          image: { text: `<<<SARA_ID>>> alone, hands over her face, the shame visibly loud inside her — but the room around her is empty and quiet. The mismatch between her inner volume and the silent room. Soft light. Vertical 9:16. Photorealistic.` },
          anim: { text: `She winces with internal shame in a completely empty, silent room — the noise is all inside. 5 seconds.` },
          tip: 'Primo clip: la vergogna fortissima dentro, ma stanza vuota fuori.' },
        { tool: 'h', label: 'CLIP 6.2 — "you\'re the only one holding it" · ~5s',
          image: { text: `<<<SARA_ID>>> standing in a small pool of spotlight, and as the camera shows it, she herself is the source — she's holding a small light on her own face. The self-imposed spotlight made literal. Dark around her. Vertical 9:16. Photorealistic.` },
          anim: { text: `The light on her face is revealed to come from her own hand. She slowly realizes she's holding it. 5 seconds.` },
          tip: 'Lo stacco cade su "you\'re the only one holding it" — il riflettore è suo, se lo regge da sola.' }] },

    { id: 's7', time: '58–67s', title: 'Scena 7 — La libertà: storia, non fatto', badges: [{ cls: 'pill', txt: '2 clip' }],
      sub: '"Most of your self-consciousness is a story — not a fact. The judgment you brace for rarely comes."',
      clips: [
        { tool: 'h', label: 'CLIP 7.1 — "here\'s the freedom in that" · ~5s',
          image: { text: `<<<SARA_ID>>> lowering her hand from the spotlight / from her face, shoulders beginning to relax as the weight lifts. The first real ease. Warmer, opening light. Vertical 9:16. Photorealistic.` },
          anim: { text: `She lowers her hand, the self-imposed light softening into natural daylight. Her shoulders drop. 5 seconds.` },
          tip: 'Primo clip: il peso che si alleggerisce, la prima libertà.' },
        { tool: 'h', label: 'CLIP 7.2 — "The judgment you brace for rarely comes" · ~5s',
          image: { text: `<<<SARA_ID>>> walking through a public space now relaxed, people around her simply going about their lives, indifferent and harmless. No judgment arrives. Bright, even, calm daylight. Vertical 9:16. Photorealistic.` },
          anim: { text: `She moves through the space, braced for stares that never come. Nothing happens. Relief settles. 5 seconds.` },
          tip: 'Lo stacco cade su "rarely comes" — il giudizio temuto che non arriva.' }] },

    { id: 's8', time: '67–75s', title: 'Scena 8 — Fai la cosa che spaventa', badges: [{ cls: 'pill', txt: '2 clip' }],
      sub: '"Speak up. Post it. Walk in late. The room forgets you the second you leave."',
      clips: [
        { tool: 'h', label: 'CLIP 8.1 — "So you can do the scary thing" · ~4s',
          image: { text: `<<<SARA_ID>>> taking a confident breath and stepping forward to do something bold — raising her hand to speak, or pushing a door open to walk in. Decisive, a little brave. Bright energetic light. Vertical 9:16. Photorealistic.` },
          anim: { text: `She breathes in, then takes the bold step forward — the moment of acting despite the fear. 4 seconds.` },
          tip: 'Primo clip: il gesto coraggioso, l\'azione nonostante la paura.' },
        { tool: 'h', label: 'CLIP 8.2 — "That\'s not sad — that\'s permission" · ~4s',
          image: { text: `<<<SARA_ID>>> walking away from a room with a light, free expression — unburdened, almost smiling, the fear behind her. Open bright light, freeing tone. Vertical 9:16. Photorealistic.` },
          anim: { text: `She walks away lighter, the weight gone, a faint freed smile beginning. 4 seconds.` },
          tip: 'Lo stacco cade su "that\'s permission" — la liberazione finale. Tono opposto alla scena 1.' }] },

    { id: 's9', time: '75–82s', title: 'Scena 9 — Sara guarda in camera', badges: [{ cls: 'pill pill--done', txt: 'CTA' }],
      sub: '"...what\'s one embarrassing moment you\'ve replayed for years that nobody else even remembers?"',
      clips: [{ tool: 'h', label: 'CLIP 9 · ~7s',
        image: { text: `<<<SARA_ID>>> looking directly into camera for the first time. Expression: warm, light, a knowing half-smile — relieved and reassuring, like she's letting you off the hook too. Soft front light, neutral background, eyes steady. Medium close-up. Vertical 9:16. Photorealistic.` },
        anim: { text: `No camera movement. She holds the gaze directly into camera with a faint, warm half-smile. Very subtle breath. 6 seconds.` },
        tip: 'Diversamente dagli altri video, qui chiudi con un accenno di sorriso: il tono è sollievo, non peso. Se serve 1s, freeze frame in CapCut.' }] }
  ]
});
