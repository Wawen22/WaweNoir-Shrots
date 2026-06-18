/* ───────────────────────────────────────────────────────────────
   VIDEO 02 — The Fawn Response
   ─────────────────────────────────────────────────────────────── */
PSV.register({
  n: 2,
  title: 'The Fawn Response',
  kicker: 'Dark psychology',
  concept: 'Perché ti scusi anche quando non hai fatto niente di sbagliato: la quarta risposta al trauma.',
  sub: 'Perché ti scusi anche quando non hai fatto niente di sbagliato. Topic #1 della banca · 9 scene / 16 clip · da produrre.',
  seed: [],          // nuovo: niente fatto
  // niente voDur: lo annoti dopo aver generato la voce

  cover: {
    prompt:
`Vertical 9:16 viral psychology thumbnail.

<<<SARA_ID>>> off-center, caught in a small apologetic cringe — one hand half-raised near her chest in a placating "sorry" gesture, shoulders pulled inward, an anxious wince and an uneasy half-smile, eyes glancing slightly away from the camera. Vulnerable, tense, relatable.

Background: bold solid electric blue (#1E6FE8), slightly gradient toward dark blue at the edges. Vivid, saturated.

Text overlay, Montserrat ExtraBold all caps, thick black outline, perfectly sharp and correctly spelled. Exactly two lines, each phrase appears ONCE — no duplicated or repeated words, no extra text:
- TOP, above her head, in white: "WHY YOU ALWAYS"
- BOTTOM, huge, in bright yellow: "SAY SORRY" — this bottom text sits BEHIND the subject: her shoulder and raised hand cross in front of the top of the yellow letters (magazine-cover depth effect), the text still fully readable.

No shadows. High contrast, blue background, white + yellow text. Clean, bold, scroll-stopping. Photorealistic face.`,
    white: 'WHY YOU ALWAYS',
    yellow: 'SAY SORRY',
    alts: ['IT WAS NEVER YOUR FAULT', 'STOP APOLOGIZING', 'YOUR BRAIN LEARNED THIS']
  },

  voice: { settings: 'Eleven v3 · Normale · Stability ~45% · Similarity 75%' },

  script: [
    ['0–4s', 'You apologized again. For something that wasn\'t even your fault.'],
    ['4–14s', 'Maybe someone bumped into you, and you said sorry. Maybe a friend was cold all day, and you spent the night wondering what you did wrong. Maybe you smoothed things over before anyone even raised their voice.'],
    ['14–24s', 'You weren\'t keeping the peace. You were managing a threat. And some part of you learned to do it long before you could choose.'],
    ['24–37s', 'There\'s a name for this. Therapist Pete Walker called it the fawn response. Most people know fight, flight, and freeze. Fawn is the fourth one — when your nervous system decides the safest thing to do with danger is to please it.'],
    ['37–48s', 'Think of a small animal that can\'t run and can\'t win. So it goes soft. It makes itself agreeable, harmless, easy to like. Your apology is that same instinct, wearing human clothes.'],
    ['48–58s', 'That\'s why it\'s automatic. You\'re not weak, and you\'re not too sensitive. You\'re running a survival strategy that once kept you safe — with people who aren\'t dangerous anymore.'],
    ['58–67s', 'So when you over-apologize, you\'re not being polite. You\'re flinching. Treating a frown like a raised hand.'],
    ['67–75s', 'The apology was never about being wrong. It was about staying safe. And safe and wrong are not the same thing.'],
    ['75–82s', 'Drop this in the comments: what\'s something you say sorry for that you know — deep down — was never your fault?']
  ],
  term: 'fawn response',
  termCaps: 'FAWN RESPONSE',
  termBeat: '24–31s',
  scriptNote: '~82s reali con il pacing di ElevenLabs',
  scriptHint: 'Hook → Bridge → Core (fawn response) → Close',

  pubTitle: "Why You Always Say Sorry (Even When It's Not Your Fault)",
  pubDesc:
`You apologized again — for something that wasn't even your fault. Someone bumped into you, and you said sorry.

Therapist Pete Walker called it the fawn response: the 4th trauma response after fight, flight, freeze. When your nervous system decides the safest thing to do with danger is to please it. You're not too sensitive — you're running an old survival strategy with people who aren't dangerous anymore.

💬 What do you say sorry for that was never your fault? Tell me below.

🧠 Follow for more dark psychology breakdowns.`,
  hashtags: '#fawnresponse #peoplepleasing #traumaresponse #darkpsychology #psychology #boundaries #psychologyfacts',
  scenesNote: '<b>16 clip totali da generare:</b> 13 con Higgsfield (Sara) + 3 con Flow/Veo 3 (cervo 5.1/5.2 e l\'ombra astratta 7.2). Ogni stacco cade su un punto preciso del voiceover.',

  scenes: [
    { id: 's1', time: '0–4s', title: 'Scena 1 — Hook: la scusa automatica',
      sub: '"You apologized again. For something that wasn\'t even your fault."',
      clips: [{ tool: 'h',
        image: { spec: '📐 9:16', text: `<<<SARA_ID>>> standing in a plain room, caught in the middle of a small, reflexive apology. Shoulders drawing inward, a faint apologetic half-smile that doesn't reach her eyes, one hand lifting slightly in a placating gesture. Cold soft light, desaturated. Cinematic, shallow depth of field. Vertical 9:16. Photorealistic.` },
        anim: { spec: '⏱ genera 4s → taglia a 3s', text: `Very slow push-in toward her face as she gives a tiny automatic nod and an apologetic flinch of a smile. Barely there. 4 seconds.` },
        tip: 'Il volto del "sorry" automatico. L\'hook deve fermare lo scroll: taglia a 3s tenendo il micro-flinch del sorriso.' }] },

    { id: 's2a', time: '4–7s', title: 'Scena 2a — Ti urtano, ti scusi tu',
      sub: '"Maybe someone bumped into you, and you said sorry."',
      clips: [{ tool: 'h',
        image: { spec: '📐 9:16 · clip 1.5–2s', text: `<<<SARA_ID>>> on a busy sidewalk, a stranger brushes past and bumps her shoulder. Her instant reaction is to raise a hand and apologize — even though it wasn't her fault. Mild, reflexive, automatic. Cool city light, slightly desaturated. Close on her face and gesture. Vertical 9:16. Photorealistic.` },
        anim: { spec: '⏱ genera 4s → usa 1.5–2s', text: `Quick handheld moment: the bump, then her immediate apologetic hand-raise and a silent "sorry" mouth shape. 4 seconds.` },
        tip: 'Clip breve. Genera 4s e scegli l\'istante esatto del "sorry".' }] },

    { id: 's2b', time: '7–11s', title: 'Scena 2b — L\'amica fredda tutto il giorno',
      sub: '"Maybe a friend was cold all day, and you spent the night wondering what you did wrong."',
      clips: [{ tool: 'h',
        image: { spec: '📐 9:16 · clip 2s', text: `<<<SARA_ID>>> sitting across a table from a friend who looks away, distant and cold. Sara searches the friend's face, anxious, quietly replaying what she might have done wrong. Warm but desaturated café light. Face visible. Vertical 9:16. Photorealistic.` },
        anim: { spec: '⏱ genera 4s → usa 2s', text: `Camera holds on Sara as her eyes scan the other person, brow tightening with worry. 4 seconds.` } }] },

    { id: 's2c', time: '11–14s', title: 'Scena 2c — Calmi tutto prima che alzino la voce',
      sub: '"Maybe you smoothed things over before anyone even raised their voice."',
      clips: [{ tool: 'h',
        image: { spec: '📐 9:16 · clip 2s', text: `<<<SARA_ID>>> standing between two tense people in a room, hands slightly raised in a calming, placating gesture, stepping in to smooth things over before anyone raises their voice. Cool desaturated light. Cinematic. Vertical 9:16. Photorealistic.` },
        anim: { spec: '⏱ genera 4s → usa 2s', text: `Slow drift toward Sara's placating hands and her careful, watchful expression. 4 seconds.` } }] },

    { id: 's3', time: '14–24s', title: 'Scena 3 — Non era pace, era gestire una minaccia', badges: [{ cls: 'pill', txt: '2 clip' }],
      sub: '"You weren\'t keeping the peace. You were managing a threat..."',
      clips: [
        { tool: 'h', label: 'CLIP 3.1 — "You weren\'t keeping the peace..." · ~5s',
          image: { text: `<<<SARA_ID>>> alone afterward, leaning against a wall, the social mask dropping. The exhaustion of someone who has been scanning a room for danger all day. Dim cold light. Desaturated. Vertical 9:16. Photorealistic.` },
          anim: { text: `Very slow push-in as her performed calm fades into quiet vigilance. 5 seconds.` } },
        { tool: 'h', label: 'CLIP 3.2 — "...learned long before you could choose" · ~5s',
          image: { text: `<<<SARA_ID>>> seen small in the frame, sitting on the floor of a large dim hallway, making herself smaller, knees drawn close. A sense of an old habit formed long ago. No other people. Soft side light. Desaturated, near monochrome. Vertical 9:16. Photorealistic.` },
          anim: { text: `Camera slowly pulls back, making her look smaller in the empty space. 5 seconds.` },
          tip: 'Lo stacco cade su "managing a threat". L\'idea dell\'infanzia si rende con lo spazio vuoto e il farsi piccola — niente minori nel frame.' }] },

    { id: 's4a', time: '24–31s', title: 'Scena 4a — Il nome: Pete Walker & fawn response', badges: [{ cls: 'pill pill--gold', txt: '⭐ chiave' }],
      sub: '"There\'s a name for this. Therapist Pete Walker called it the fawn response."',
      clips: [{ tool: 'h', label: 'CLIP 4a · ~7s',
        image: { text: `<<<SARA_ID>>> sitting at a table, slowly lifting her gaze — the moment of recognition, like someone just named something she has done her whole life without a word for it. Quiet relief mixed with understanding. Soft warm light from one side. Slightly desaturated. Vertical 9:16. Photorealistic.` },
        anim: { text: `Very slow push-in toward her face as heaviness shifts into a quiet moment of clarity. 6 seconds.` },
        gold: true, tip: '⭐ MOMENTO CHIAVE: fai apparire "FAWN RESPONSE" in giallo grande mentre la voce lo pronuncia. È la parola che le persone screenshottano.' }] },

    { id: 's4b', time: '31–37s', title: 'Scena 4b — La quarta risposta: please the danger',
      sub: '"Fawn is the fourth one — your nervous system decides the safest thing to do with danger is to please it."',
      clips: [{ tool: 'h', label: 'CLIP 4b · ~6s',
        image: { text: `<<<SARA_ID>>> standing still, calm but quietly alert, a faint abstract pattern of light around her suggesting the nervous system. The idea of a fourth option beyond fight, flight, freeze. Cool blue and violet tones. Cinematic. Vertical 9:16. Photorealistic.` },
        anim: { text: `Subtle and slow. The faint light settles around her once. She stays still. 6 seconds.` },
        tip: 'In CapCut puoi mostrare "FIGHT · FLIGHT · FREEZE · FAWN" e accendere in giallo solo "FAWN" mentre la voce lo dice.' }] },

    { id: 's5', time: '37–48s', title: 'Scena 5 — L\'animale che si fa morbido (metafora)', badges: [{ cls: 'pill', txt: '2 clip' }],
      sub: '"Think of a small animal that can\'t run and can\'t win. So it goes soft."',
      note: 'Unica scena <b>senza Sara</b>. Oggetti/animali → Google Flow / Veo 3.',
      clips: [
        { tool: 'f', label: 'CLIP 5.1 — "...a small animal that can\'t run" · ~5s',
          clip: { text: `Extreme close-up of a small wild animal — a young deer — frozen completely still in tall grass at dusk, unable to run. Wide, fearful eye, body rigid. Cinematic macro, slow motion. Cool blue-grey desaturated tones. No people. 6 seconds.` },
          tip: 'Primo clip: stabilisce l\'animale che non può scappare.' },
        { tool: 'f', label: 'CLIP 5.2 — "So it goes soft. It makes itself agreeable" · ~6s',
          clip: { text: `The same small deer slowly lowers its head and softens its posture, making itself small and non-threatening, ears gently flattening. A gesture of surrender, not aggression. Cinematic slow motion. Cool desaturated tones. No people. 6 seconds.` },
          tip: '"Going soft" = il fawn. Lo stacco cade su "So it goes soft" — il visual segue la frase.' }] },

    { id: 's6', time: '48–58s', title: 'Scena 6 — È automatico: una strategia di sopravvivenza', badges: [{ cls: 'pill', txt: '2 clip' }],
      sub: '"You\'re running a survival strategy that once kept you safe — with people who aren\'t dangerous anymore."',
      clips: [
        { tool: 'h', label: 'CLIP 6.1 — "That\'s why it\'s automatic. You\'re not weak..." · ~5s',
          image: { text: `<<<SARA_ID>>> giving the same small apologetic gesture as the opening, but now the camera lingers — we understand it isn't politeness, it's reflex. Cold soft light. Desaturated. Vertical 9:16. Photorealistic.` },
          anim: { text: `Slow push-in on the automatic gesture, then her face as she notices herself doing it. 5 seconds.` },
          tip: 'Richiama il gesto dell\'hook: ora lo capiamo come riflesso, non cortesia.' },
        { tool: 'h', label: 'CLIP 6.2 — "...people who aren\'t dangerous anymore" · ~5s',
          image: { text: `<<<SARA_ID>>> standing in a calm, safe, ordinary room with soft daylight — visibly safe surroundings — yet her body still carries an old wary tension. The mismatch between a safe present and a wired body. Vertical 9:16. Photorealistic.` },
          anim: { text: `Static gentle shot; her shoulders slowly, only partly, release. 5 seconds.` },
          tip: 'Il contrasto è il punto: ambiente sicuro, corpo ancora in allerta. Lo stacco cade su "survival strategy".' }] },

    { id: 's7', time: '58–67s', title: 'Scena 7 — Non sei gentile, stai trasalendo', badges: [{ cls: 'pill', txt: '2 clip' }],
      sub: '"You\'re flinching. Treating a frown like a raised hand."',
      clips: [
        { tool: 'h', label: 'CLIP 7.1 — "You\'re not being polite. You\'re flinching." · ~5s',
          image: { text: `<<<SARA_ID>>> close-up, a tiny involuntary flinch crossing her face as someone off-screen frowns at her. The micro-flinch of bracing for impact. Dramatic cold side light. Desaturated. Vertical 9:16. Photorealistic.` },
          anim: { text: `Hold on her face; one small, quick flinch, then a forced soft smile. 5 seconds.` } },
        { tool: 'f', label: 'CLIP 7.2 — "Treating a frown like a raised hand" · ~5s · astratto',
          clip: { text: `Abstract cinematic shot: a faint disapproving frown on a dimly lit face, and its shadow on the wall slowly grows into the looming shape of a raised hand. The mind mistaking displeasure for danger. Dark blue and violet tones. Slow, subtle. Only shadow — no violence shown. 5 seconds.` },
          tip: 'Visualizza letteralmente "a frown like a raised hand" con l\'ombra che incombe. Niente violenza esplicita, solo l\'ombra.' }] },

    { id: 's8', time: '67–75s', title: 'Scena 8 — Sicuro e sbagliato non sono la stessa cosa',
      sub: '"The apology was never about being wrong. It was about staying safe."',
      clips: [{ tool: 'h', label: 'CLIP 8 · ~7s',
        image: { text: `<<<SARA_ID>>> in three-quarter profile, facing an out-of-frame person to her side, standing a little taller — the apology not coming this time. She holds the other person's gaze calmly, NOT looking at camera. A quiet, steady refusal to over-explain herself. Medium-wide shot, more of the room visible. Soft balanced light, slightly less desaturated than before. Vertical 9:16. Photorealistic.` },
        anim: { text: `Very slow push-in. She holds still in profile, calm, choosing not to apologize to the person beside her. 6 seconds.` },
        tip: 'Primo momento in cui Sara NON si scusa — di profilo, davanti a un interlocutore off-screen, MAI in camera (quello è riservato alla scena 9). Inquadratura più larga e luce un filo più calda la distinguono dalla 9.' }] },

    { id: 's9', time: '75–82s', title: 'Scena 9 — Sara guarda in camera', badges: [{ cls: 'pill pill--done', txt: 'CTA' }],
      sub: '"What\'s something you say sorry for that you know was never your fault?"',
      clips: [{ tool: 'h', label: 'CLIP 9 · ~7s',
        image: { text: `<<<SARA_ID>>> looking directly into camera for the first time. Calm, knowing, a little vulnerable — asking something personal because she has lived it. Soft front light. Neutral background. Eyes steady. Medium close-up. Vertical 9:16. Photorealistic.` },
        anim: { text: `No camera movement. She holds the gaze into camera. Subtle breath. Complete stillness. 6 seconds.` },
        tip: 'La stillness finale chiude il video come nel Video 1. Se serve 1s in più, freeze frame in CapCut.' }] }
  ]
});
