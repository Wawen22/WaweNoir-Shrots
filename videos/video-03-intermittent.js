/* ───────────────────────────────────────────────────────────────
   VIDEO 03 — Intermittent Reinforcement (Hot & Cold)
   <<<SARA_ID>>> in chiaro: il renderer fa l'escaping.
   ─────────────────────────────────────────────────────────────── */
PSV.register({
  n: 3,
  title: 'Intermittent Reinforcement',
  kicker: 'Dark psychology · Relazioni',
  concept: 'Perché ti leghi proprio a chi è caldo e freddo: la stessa trappola che costruisce le dipendenze da gioco.',
  sub: 'Perché non riesci a lasciare chi ti tratta in modo incostante. 9 scene / 16 clip · da produrre.',
  seed: [],          // nuovo: niente fatto
  // niente voDur: lo annoti dopo aver generato la voce

  cover: {
    prompt:
`Vertical 9:16 viral psychology thumbnail.

<<<SARA_ID>>> off-center, staring at a phone screen in the dark, the screen light on her face — caught between hope and anxiety, lips parted, waiting for a reply that may not come. One hand gripping the phone tight near her chest. Vulnerable, tense, relatable.

Background: bold solid hot magenta (#D6336C), slightly gradient toward dark magenta at the edges. Vivid, saturated, eye-catching.

Text overlay, Montserrat ExtraBold all caps, thick black outline, perfectly sharp and correctly spelled. Exactly two lines, each phrase appears ONCE — no duplicated or repeated words, no extra text:
- TOP, above her head, in white: "WHY YOU'RE HOOKED"
- BOTTOM, huge, in bright yellow: "ON HOT & COLD"

No shadows. High contrast, magenta background, white + yellow text. Clean, bold, scroll-stopping. Photorealistic face.`,
    white: "WHY YOU'RE HOOKED",
    yellow: 'ON HOT & COLD',
    alts: ["IT'S NOT LOVE", 'THE SLOT MACHINE EFFECT', "WHY YOU CAN'T LET GO"]
  },

  voice: { settings: 'Eleven v3 · Normale · Stability ~45% · Similarity 75%' },

  script: [
    ['0–4s', "The less someone gives you, the more you want them. And you hate that it's true."],
    ['4–14s', "One day they're warm — texting back in seconds, making you feel chosen. The next day, nothing. Cold. Distant. And you spend the whole time replaying what you did to lose them."],
    ['14–24s', "You're not crazy, and you're not needy. You're caught in the most powerful reward pattern psychology has ever found — the same one that builds gambling addictions."],
    ['24–37s', "It has a name. Psychologist B.F. Skinner called it intermittent reinforcement. When a reward comes at random — sometimes yes, sometimes no — your brain doesn't lose interest. It becomes obsessed. Certainty is boring. Unpredictability is a hook."],
    ['37–48s', "Think of a slot machine. If it paid out every time, you'd stop. If it never paid out, you'd stop. It's the maybe that keeps your hand on the lever for hours."],
    ['48–58s', "That's what hot and cold does to you. The good days aren't the problem. The problem is you never know when they're coming. So you keep pulling the lever."],
    ['58–67s', "And here's the trap. The inconsistency itself feels like intensity. Your body reads anxiety as passion. The relief when they come back feels like love. It isn't."],
    ['67–75s', "Real safety feels calm — not like a comeback. If someone has to disappear for the reunion to feel good, you're not addicted to them. You're addicted to the gap."],
    ['75–82s', "Drop this in the comments: have you ever mistaken anxiety for love — and how long did it take you to see it?"]
  ],
  term: 'intermittent reinforcement',
  termCaps: 'INTERMITTENT REINFORCEMENT',
  termBeat: '24–37s',
  scriptNote: '~82s reali con il pacing di ElevenLabs',
  scriptHint: 'Hook → Bridge → Core (intermittent reinforcement) → Close',

  pubTitle: "Why You're Hooked on Hot & Cold People (Intermittent Reinforcement)",
  pubDesc:
`The less someone gives you, the more you want them — and you hate that it's true. Warm one day, cold the next, and you spend the whole time wondering what you did wrong.

Psychologist B.F. Skinner called it intermittent reinforcement: when a reward comes at random, your brain doesn't lose interest — it becomes obsessed. It's the same pattern that builds gambling addictions. The good days aren't the problem. The unpredictability is the hook.

💬 Have you ever mistaken anxiety for love? Tell me below.

🧠 Follow for more dark psychology breakdowns.`,
  hashtags: '#intermittentreinforcement #darkpsychology #attachment #anxiousattachment #relationships #psychology #psychologyfacts',
  scenesNote: '<b>16 clip totali da generare:</b> 14 con Higgsfield (Sara) + 2 con Flow/Veo 3 (la slot machine, scena 5). Ogni stacco cade su un punto preciso del voiceover.',

  scenes: [
    { id: 's1', time: '0–4s', title: 'Scena 1 — Hook: Sara aspetta una risposta al buio',
      sub: '"The less someone gives you, the more you want them."',
      clips: [{ tool: 'h',
        image: { spec: '📐 9:16', text: `<<<SARA_ID>>> sitting alone on a bed in a dark room, holding her phone, the screen glow lighting her face. She is staring at it, waiting — hope and anxiety mixed. The reply isn't coming. Cinematic, shallow depth of field, cold desaturated tones with the phone's blue glow. Vertical 9:16. Photorealistic.` },
        anim: { spec: '⏱ genera 4s → taglia a 3s', text: `Very slow push-in toward her face lit by the phone. The screen light flickers once as if a notification almost arrived. She doesn't move. Barely visible breath. 4 seconds.` },
        tip: 'In CapCut: taglia a 3s esatti. Tieni il momento in cui la luce del telefono le illumina il volto in attesa.' }] },

    { id: 's2a', time: '4–9s', title: 'Scena 2a — Il giorno caldo: si sente scelta',
      sub: '"One day they\'re warm — texting back in seconds, making you feel chosen."',
      clips: [{ tool: 'h',
        image: { spec: '📐 9:16 · clip ~2s', text: `<<<SARA_ID>>> smiling softly at her phone, glowing, a little giddy — she just got the message she was hoping for. Warm golden light, slightly saturated, intimate. Close-up on her face and the phone. Vertical 9:16. Photorealistic.` },
        anim: { spec: '⏱ genera 4s → usa ~2s', text: `Slow drift toward her face as a genuine smile spreads. Warm light blooms. 4 seconds.` },
        tip: 'Clip breve nel video finale (~2s). Genera 4s e scegli il momento del sorriso in CapCut.' }] },

    { id: 's2b', time: '9–14s', title: 'Scena 2b — Il giorno freddo: silenzio e dubbio',
      sub: '"The next day, nothing. Cold... replaying what you did to lose them."',
      clips: [{ tool: 'h',
        image: { spec: '📐 9:16 · clip ~3s', text: `<<<SARA_ID>>> in the same spot but now the phone is face-down on the bed beside her. She stares at it, anxious, chewing the inside of her cheek, the warmth gone. Cold desaturated light, the golden glow replaced by grey. Vertical 9:16. Photorealistic.` },
        anim: { spec: '⏱ genera 4s → usa ~3s', text: `Camera holds on her face as it falls from hope to quiet worry. Her eyes flick to the silent phone, then away. 4 seconds.` },
        tip: 'Il contrasto caldo→freddo tra 2a e 2b è il cuore del bridge. Stesso luogo, luce opposta.' }] },

    { id: 's3', time: '14–24s', title: 'Scena 3 — Non riesce a concentrarsi', badges: [{ cls: 'pill', txt: '2 clip' }],
      sub: '"You\'re not crazy... caught in the most powerful reward pattern psychology has ever found."',
      clips: [
        { tool: 'h', label: 'CLIP 3.1 — "You\'re not crazy, you\'re not needy" · ~5s',
          image: { text: `<<<SARA_ID>>> trying to do something else — making coffee, looking out a window — but her eyes keep drifting back toward where the phone is. Restless, distracted, unable to settle. Muted morning light, desaturated. Vertical 9:16. Photorealistic.` },
          anim: { text: `She moves through a small action but her gaze pulls back toward the phone off-frame. Subtle, repeated. 5 seconds.` },
          tip: 'Mostra la distrazione: il pensiero che ritorna sempre lì.' },
        { tool: 'h', label: 'CLIP 3.2 — "...the same one that builds gambling addictions" · ~5s',
          image: { text: `<<<SARA_ID>>> finally picking the phone back up, thumb hovering to check it again. The compulsion is visible — she knows she shouldn't keep looking, she looks anyway. Close-up hand and face. Cool light. Vertical 9:16. Photorealistic.` },
          anim: { text: `Close-up: her thumb swipes to check, finds nothing, the small drop of disappointment. 5 seconds.` },
          tip: 'Lo stacco cade su "gambling addictions" — il gesto compulsivo di ricontrollare anticipa la metafora della slot.' }] },

    { id: 's4a', time: '24–31s', title: 'Scena 4a — Il nome: Skinner & intermittent reinforcement', badges: [{ cls: 'pill pill--gold', txt: '⭐ chiave' }],
      sub: '"Psychologist B.F. Skinner called it intermittent reinforcement."',
      clips: [{ tool: 'h', label: 'CLIP 4a · ~7s',
        image: { text: `<<<SARA_ID>>> sitting still, lifting her gaze slowly — the moment of recognition, like someone just named the thing she's been living inside. Quiet understanding mixed with discomfort. Soft side light, slightly desaturated. Vertical 9:16. Photorealistic.` },
        anim: { text: `Very slow push-in toward her face. Her expression shifts from confusion to a quiet, uneasy clarity. 6 seconds.` },
        gold: true, tip: '⭐ MOMENTO CHIAVE: in CapCut fai apparire grande in giallo "INTERMITTENT REINFORCEMENT" mentre la voce lo pronuncia. È la frase che le persone screenshottano.' }] },

    { id: 's4b', time: '31–37s', title: 'Scena 4b — La spiegazione: ricompensa casuale',
      sub: '"Certainty is boring. Unpredictability is a hook."',
      clips: [{ tool: 'h', label: 'CLIP 4b · ~6s',
        image: { text: `<<<SARA_ID>>> seen from the side, the phone in her hand showing only a blank screen — the uncertainty made visible. She stares into the void of it. Cool desaturated light, cinematic. Vertical 9:16. Photorealistic.` },
        anim: { text: `Slow drift from the blank screen up to her face. The emptiness holds her attention more than a full screen would. 6 seconds.` } }] },

    { id: 's5', time: '37–48s', title: 'Scena 5 — La slot machine (metafora)', badges: [{ cls: 'pill', txt: '2 clip' }],
      sub: '"Think of a slot machine... It\'s the maybe that keeps your hand on the lever."',
      note: 'Unica scena <b>senza Sara</b>. Google Flow / Veo 3 gestisce meglio l\'oggetto fisico e il movimento dei rulli.',
      clips: [
        { tool: 'f', label: 'CLIP 5.1 — "Think of a slot machine" · ~5s',
          clip: { text: `Extreme close-up of a vintage slot machine, reels spinning, lights flashing in the dark. A single hand pulls the lever down. Cinematic macro shot, warm neon glow against black. No faces. 6 seconds.` },
          tip: 'Primo clip: stabilisce la slot e il gesto della leva.' },
        { tool: 'f', label: 'CLIP 5.2 — "the maybe that keeps your hand on the lever" · ~6s',
          clip: { text: `The slot machine reels slow to a stop — almost a match, then one symbol off. So close. The hand reaches for the lever again. The near-miss that keeps you playing. Cinematic macro, neon glow, slow motion. No faces. 6 seconds.` },
          tip: 'Secondo clip: il "quasi vincita". Lo stacco cade su "the maybe" — è la psicologia del near-miss.' }] },

    { id: 's6', time: '48–58s', title: 'Scena 6 — Caldo e freddo: continua a tirare la leva', badges: [{ cls: 'pill', txt: '2 clip' }],
      sub: '"The good days aren\'t the problem... you never know when they\'re coming."',
      clips: [
        { tool: 'h', label: 'CLIP 6.1 — "That\'s what hot and cold does to you" · ~5s',
          image: { text: `<<<SARA_ID>>> on a couch, phone in hand, her face cycling between a flicker of hope and a sink of disappointment — the emotional whiplash made visible. Dim warm-then-cold light. Vertical 9:16. Photorealistic.` },
          anim: { text: `Her expression rises with hope, then drops. The light subtly shifts warm to cool with the emotion. 5 seconds.` },
          tip: 'Primo clip: l\'altalena emotiva del caldo/freddo.' },
        { tool: 'h', label: 'CLIP 6.2 — "So you keep pulling the lever" · ~5s',
          image: { text: `<<<SARA_ID>>> close-up, refreshing her phone with her thumb in a repeated, almost mechanical motion — the same compulsion as a hand on a slot lever. Tired eyes. Cool light. Vertical 9:16. Photorealistic.` },
          anim: { text: `Close-up on the repeated refresh gesture, echoing the slot lever. Her face stays locked on the screen. 5 seconds.` },
          tip: 'Lo stacco cade su "pulling the lever" — rima visiva con la slot della scena 5.' }] },

    { id: 's7', time: '58–67s', title: 'Scena 7 — L\'ansia scambiata per passione', badges: [{ cls: 'pill', txt: '2 clip' }],
      sub: '"Your body reads anxiety as passion. The relief when they come back feels like love. It isn\'t."',
      clips: [
        { tool: 'h', label: 'CLIP 7.1 — "the inconsistency itself feels like intensity" · ~5s',
          image: { text: `<<<SARA_ID>>> hand pressed to her chest, feeling her own racing heartbeat, eyes wide — mistaking the anxiety in her body for passion. Dramatic side light, purple and blue tones. Vertical 9:16. Photorealistic.` },
          anim: { text: `Very subtle pulse of light in rhythm with a heartbeat as her hand rests on her chest. 5 seconds.` },
          tip: 'Primo clip: il corpo in allerta, letto come "intensità".' },
        { tool: 'h', label: 'CLIP 7.2 — "The relief when they come back feels like love" · ~5s',
          image: { text: `<<<SARA_ID>>> exhaling with sudden relief as her phone finally lights up — her whole body softening. But there's a shadow of exhaustion under the relief. Warm glow returning. Vertical 9:16. Photorealistic.` },
          anim: { text: `The phone lights up, her held breath releases, shoulders drop. Relief washes over — tinged with weariness. 5 seconds.` },
          tip: 'Lo stacco cade su "feels like love" — il sollievo intenso che il cervello confonde con amore.' }] },

    { id: 's8', time: '67–75s', title: 'Scena 8 — La calma vera vs il vuoto', badges: [{ cls: 'pill', txt: '2 clip' }],
      sub: '"Real safety feels calm — not like a comeback... You\'re addicted to the gap."',
      clips: [
        { tool: 'h', label: 'CLIP 8.1 — "Real safety feels calm" · ~4s',
          image: { text: `<<<SARA_ID>>> setting the phone down, face-down, and looking away from it toward soft natural daylight from a window. A first breath of calm. Warm, even, gentle light — no anxiety in it. Vertical 9:16. Photorealistic.` },
          anim: { text: `She places the phone down and turns toward the light. The frantic energy drains into stillness. 4 seconds.` },
          tip: 'Primo clip: il contrasto della calma vera, luce piena e stabile.' },
        { tool: 'h', label: 'CLIP 8.2 — "You\'re addicted to the gap" · ~4s',
          image: { text: `<<<SARA_ID>>> seen from a wider angle, sitting quietly with the phone out of reach across the room. The gap between her and it visible. She looks at it but doesn't move. Quiet recognition. Cinematic. Vertical 9:16. Photorealistic.` },
          anim: { text: `Static wider shot. She holds still, the phone far away. The pull is still there but she doesn't act on it. 4 seconds.` },
          tip: 'Il cambio ad angolo wide mostra "the gap" letteralmente — lo spazio tra lei e il telefono.' }] },

    { id: 's9', time: '75–82s', title: 'Scena 9 — Sara guarda in camera', badges: [{ cls: 'pill pill--done', txt: 'CTA' }],
      sub: '"...have you ever mistaken anxiety for love?"',
      clips: [{ tool: 'h', label: 'CLIP 9 · ~7s',
        image: { text: `<<<SARA_ID>>> looking directly into camera for the first time. Expression: calm, knowing, a little vulnerable — like she's asking because she's lived it herself. Soft front light, neutral background, eyes steady. Medium close-up. Vertical 9:16. Photorealistic.` },
        anim: { text: `No camera movement. She holds the gaze directly into camera. Very subtle breath. Complete stillness. 6 seconds.` },
        tip: 'La stillness dopo tutta l\'agitazione è il punto. Se serve 1s in più, freeze frame sull\'ultimo fotogramma in CapCut.' }] }
  ]
});
