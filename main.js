// WaweLab | Archivio del Futuro
// Motion: GSAP + ScrollTrigger + Lenis (in assets/vendor). Ogni animazione racconta l'archivio:
// apertura del cassetto, collage che si smonta, parole che si accendono, reperti che scorrono, timbri.
// Senza GSAP o con "riduci movimento" la pagina resta completa e statica.
(() => {
  const root = document.documentElement;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const hasGsap = !!(window.gsap && window.ScrollTrigger) && !reduce;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  // ---------- utilità di testo ----------
  const splitChars = (el) => {
    const out = [];
    const walk = (node) => {
      [...node.childNodes].forEach((n) => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.append(" "); return; }
            const w = document.createElement("span");
            w.className = "word";
            [...part].forEach((ch) => {
              const c = document.createElement("span");
              c.className = "char";
              c.textContent = ch;
              w.append(c);
              out.push(c);
            });
            frag.append(w);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1 && n.tagName !== "svg" && n.tagName !== "I") walk(n);
      });
    };
    walk(el);
    return out;
  };
  const splitWords = (el, cls = "w") => {
    const out = [];
    const walk = (node) => {
      [...node.childNodes].forEach((n) => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.append(" "); return; }
            const s = document.createElement("span");
            s.className = cls;
            s.textContent = part;
            frag.append(s);
            out.push(s);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1 && n.tagName !== "svg") walk(n);
      });
    };
    walk(el);
    return out;
  };
  const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/-";
  const scramble = (el, duration = 0.9) => {
    const final = el.dataset.final || (el.dataset.final = el.textContent);
    const state = { p: 0 };
    return gsap.to(state, {
      p: 1, duration, ease: "none",
      onUpdate() {
        const n = Math.floor(state.p * final.length);
        el.textContent = final.split("").map((ch, i) => (i < n || ch === " " ? ch : GLYPHS[(Math.random() * GLYPHS.length) | 0])).join("");
      },
      onComplete() { el.textContent = final; },
    });
  };

  // ---------- comportamenti che valgono sempre ----------
  const players = $$("[data-player]");
  $$("[data-play]").forEach((btn) => {
    const card = btn.closest(".card");
    const video = $("video", card);
    btn.addEventListener("click", () => {
      players.forEach((v) => v !== video && v.pause());
      video.controls = true;
      video.play();
      card.classList.add("is-playing");
    });
    video.addEventListener("ended", () => { video.controls = false; card.classList.remove("is-playing"); video.load(); });
  });

  const rows = $$("[data-serie]");
  const previews = $$("[data-preview]");
  const activate = (key) => {
    rows.forEach((r) => r.classList.toggle("is-active", r.dataset.serie === key));
    previews.forEach((p) => p.classList.toggle("is-on", p.dataset.preview === key));
  };
  rows.forEach((r) => {
    r.addEventListener("pointerenter", () => activate(r.dataset.serie));
    r.addEventListener("focus", () => activate(r.dataset.serie));
  });
  $(".serie__list")?.addEventListener("pointerleave", () => activate(null));

  $$("[data-folder]").forEach((f) => {
    f.addEventListener("click", () => f.classList.toggle("is-open"));
    f.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); f.classList.toggle("is-open"); } });
  });

  // Spotlight sulle tessere (solo mouse)
  if (fine) $$("[data-spot]").forEach((t) => t.addEventListener("pointermove", (e) => {
    const r = t.getBoundingClientRect();
    t.style.setProperty("--mx", `${e.clientX - r.left}px`);
    t.style.setProperty("--my", `${e.clientY - r.top}px`);
  }));

  // Onde sonore e parole della timeline (deterministiche, niente dati inventati: è un'illustrazione)
  $$("[data-wave]").forEach((w) => {
    const seed = +w.dataset.wave;
    const n = seed === 4 ? 110 : 64;
    for (let i = 0; i < n; i++) {
      const v = Math.abs(Math.sin(i * 0.47 + seed) * Math.cos(i * 0.13 + seed * 2)) * 0.8 + 0.12;
      const b = document.createElement("i");
      b.style.setProperty("--h", `${Math.round(v * 100)}%`);
      w.append(b);
    }
  });
  const chipBox = $("[data-chips]");
  const liveWords = $$("[data-live] span");
  if (chipBox) liveWords.forEach((w, i) => {
    const c = document.createElement("span");
    c.textContent = w.textContent.replace(/[.,]/g, "").toLowerCase();
    c.style.setProperty("--x", `${(i / liveWords.length) * 92}%`);
    c.style.top = i % 2 ? "18px" : "0px";
    chipBox.append(c);
  });

  // ---------- versione statica ----------
  if (!hasGsap) {
    root.classList.remove("intro-pending");
    $("[data-pan]")?.classList.add("is-native");
    const nav = $("[data-nav]");
    const s = document.createElement("div");
    s.style.cssText = "position:absolute;top:0;height:1px;width:1px";
    document.body.prepend(s);
    new IntersectionObserver(([e]) => nav.classList.toggle("is-stuck", !e.isIntersecting)).observe(s);
    return;
  }

  // ---------- versione animata ----------
  root.classList.add("has-gsap");
  gsap.registerPlugin(ScrollTrigger);

  // Scroll morbido
  let lenis = null;
  if (window.Lenis) {
    lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1 });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  }
  $$('a[href^="#"]').forEach((a) => a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    const target = id === "#top" ? 0 : $(id);
    if (target === null) return;
    e.preventDefault();
    if (lenis) lenis.scrollTo(target, { offset: -60, duration: 1.4 });
    else window.scrollTo({ top: target ? target.offsetTop - 60 : 0, behavior: "smooth" });
  }));

  // Nastro di avanzamento + nav che si nasconde scendendo
  const bar = $("[data-progress]");
  const nav = $("[data-nav]");
  ScrollTrigger.create({
    start: 0, end: "max",
    onUpdate: (self) => {
      gsap.set(bar, { scaleX: self.progress });
      const y = self.scroll();
      nav.classList.toggle("is-stuck", y > 10);
      nav.classList.toggle("is-hidden", self.direction === 1 && y > 500);
    },
  });
  $$(".nav__links a").forEach((a) => {
    const sec = $(a.getAttribute("href"));
    if (sec) ScrollTrigger.create({ trigger: sec, start: "top 50%", end: "bottom 50%", onToggle: (s) => a.classList.toggle("is-current", s.isActive) });
  });

  // ---------- HERO ----------
  const titleChars = [];
  $$(".hero__title .line").forEach((line) => titleChars.push(splitChars(line)));
  gsap.set(titleChars.flat(), { yPercent: 115 });
  gsap.set("[data-hero-fade]", { opacity: 0, y: 24 });
  const pieces = $$(".collage [data-fly]");
  gsap.set(pieces, { opacity: 0, scale: 1.25 });
  const heroCode = $(".hero [data-scramble]");
  gsap.set(heroCode, { opacity: 0 });

  const heroIn = () => {
    const tl = gsap.timeline();
    tl.set(heroCode, { opacity: 1 })
      .add(scramble(heroCode, 0.8), 0)
      .to(titleChars[0], { yPercent: 0, duration: 0.9, ease: "power4.out", stagger: 0.025 }, 0.05)
      .to(titleChars[1], { yPercent: 0, duration: 0.9, ease: "power4.out", stagger: 0.022 }, 0.18)
      .to(titleChars[2], { yPercent: 0, duration: 0.9, ease: "power4.out", stagger: 0.03 }, 0.34)
      .to("[data-hero-fade]", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.1 }, 0.55)
      .to(pieces, { opacity: 1, scale: 1, duration: 0.7, ease: "power3.out", stagger: 0.09 }, 0.2)
      .fromTo("[data-stamp-hero]", { opacity: 0, scale: 2.4, rotation: -18 }, { opacity: 1, scale: 1, rotation: -6, duration: 0.32, ease: "power4.in" }, 1.25)
      .to(".collage", { x: 6, y: -4, duration: 0.05, yoyo: true, repeat: 3, ease: "none" }, 1.57)
      .set(".collage", { x: 0, y: 0 });
    return tl;
  };

  // Il collage si smonta mentre si scende
  pieces.forEach((p) => {
    const [x, y, r] = p.dataset.fly.split(",").map(Number);
    const base = gsap.getProperty(p, "rotation");
    gsap.to(p, {
      x, y, rotation: base + r, ease: "none",
      scrollTrigger: { trigger: "[data-hero]", start: "top top", end: "bottom top", scrub: 0.7 },
    });
  });
  gsap.to("[data-hero-copy]", { y: -90, ease: "none", scrollTrigger: { trigger: "[data-hero]", start: "top top", end: "bottom top", scrub: true } });

  // Parallax sul puntatore (strati a profondità diverse)
  if (fine) {
    const hero = $("[data-hero]");
    const layers = $$(".collage [data-depth]").map((el) => ({
      d: parseFloat(el.dataset.depth),
      xTo: gsap.quickTo(el, "xPercent", { duration: 0.9, ease: "power3.out" }),
      yTo: gsap.quickTo(el, "yPercent", { duration: 0.9, ease: "power3.out" }),
    }));
    hero.addEventListener("pointermove", (e) => {
      const r = hero.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;
      layers.forEach(({ d, xTo, yTo }) => { xTo(nx * d * 9); yTo(ny * d * 7); });
    });
    hero.addEventListener("pointerleave", () => layers.forEach(({ xTo, yTo }) => { xTo(0); yTo(0); }));
  }

  // ---------- INTRO: apertura dell'archivio ----------
  const intro = $("[data-intro]");
  let seen = false;
  try { seen = sessionStorage.getItem("wl-intro") === "1"; } catch (_) {}
  if (!seen && intro) {
    intro.classList.add("is-on");
    root.classList.remove("intro-pending");
    lenis?.stop();
    const num = $("[data-intro-num]");
    const wordChars = splitChars($("[data-intro-word]"));
    gsap.set(wordChars, { yPercent: 110 });
    const codes = { v: 0 };
    const tl = gsap.timeline({
      onComplete() {
        intro.classList.remove("is-on");
        lenis?.start();
        try { sessionStorage.setItem("wl-intro", "1"); } catch (_) {}
      },
    });
    tl.to(codes, {
      v: 1, duration: 0.7, ease: "none",
      onUpdate() { num.textContent = codes.v < 1 ? String((Math.random() * 999) | 0).padStart(3, "0") : "000"; },
      onComplete() { num.textContent = "000"; },
    })
      .to(wordChars, { yPercent: 0, duration: 0.7, ease: "power4.out", stagger: 0.04 }, 0.15)
      .fromTo("[data-intro-stamp]", { opacity: 0, scale: 2.4, rotation: -20 }, { opacity: 1, scale: 1, rotation: -6, duration: 0.3, ease: "power4.in" }, 0.85)
      .to(".intro__inner", { x: 5, y: -3, duration: 0.05, yoyo: true, repeat: 3, ease: "none" }, 1.15)
      .to(intro, { clipPath: "inset(0 0 100% 0)", duration: 0.85, ease: "power4.inOut" }, 1.55)
      .add(heroIn(), 1.85);
    intro.addEventListener("click", () => tl.progress(1));
  } else {
    root.classList.remove("intro-pending");
    heroIn();
  }

  // ---------- NASTRO: segue la velocità dello scroll ----------
  const track = $("[data-marquee]");
  const loop = gsap.to(track, { xPercent: -50, duration: 32, ease: "none", repeat: -1 });
  loop.totalTime(loop.duration() * 100);
  const skewTo = gsap.quickTo(track, "skewX", { duration: 0.4, ease: "power3.out" });
  ScrollTrigger.create({
    start: 0, end: "max",
    onUpdate(self) {
      const v = self.getVelocity();
      const boost = 1 + Math.min(Math.abs(v) / 300, 5);
      gsap.to(loop, { timeScale: self.direction * boost, duration: 0.2, overwrite: true });
      gsap.to(loop, { timeScale: self.direction, duration: 1.2, delay: 0.2, ease: "power2.out" });
      skewTo(gsap.utils.clamp(-10, 10, v / -180));
    },
  });

  // ---------- MANIFESTO: fissato, parole che si accendono ----------
  const words = splitWords($("[data-words]"));
  gsap.set(words, { opacity: 0.16 });
  gsap.set(".manifesto__text .w", { color: "inherit" });
  const circle = $(".mark-circle path");
  const strike = $(".mark-strike");
  const mtl = gsap.timeline({
    scrollTrigger: { trigger: "[data-manifesto]", start: "top top", end: "+=140%", pin: true, scrub: 0.6 },
  });
  mtl.to(words, { opacity: 1, stagger: 0.12, ease: "none", duration: 0.4 })
    .to(circle, { strokeDashoffset: 0, duration: 1.2, ease: "power2.out" }, "-=0.6")
    .to(strike, { "--s": 1, duration: 0.8, ease: "power2.out" }, "-=0.2");

  // ---------- REPERTI: il cassetto scorre di lato ----------
  const pan = $("[data-pan]");
  const panTrack = $("[data-pan-track]");
  const mmq = gsap.matchMedia();
  mmq.add("(min-width: 900px) and (hover: hover)", () => {
    const dist = () => panTrack.scrollWidth - window.innerWidth;
    const panTween = gsap.to(panTrack, {
      x: () => -dist(), ease: "none",
      scrollTrigger: { trigger: pan, start: "top top", end: () => `+=${dist()}`, pin: true, scrub: 1, invalidateOnRefresh: true },
    });
    gsap.to("[data-pan-bar]", { scaleX: 1, ease: "none", scrollTrigger: { trigger: pan, start: "top top", end: () => `+=${dist()}`, scrub: true, invalidateOnRefresh: true } });
    $$("[data-card]", panTrack).forEach((card, i) => {
      const rot = i % 2 ? 1.4 : -1.6;
      gsap.fromTo(card, { rotation: rot + (i % 2 ? 9 : -9), y: 90, scale: 0.92 }, {
        rotation: rot, y: 0, scale: 1, ease: "none",
        scrollTrigger: { containerAnimation: panTween, trigger: card, start: "left 100%", end: "center 55%", scrub: true },
      });
    });
    gsap.from(".panel--outro .panel__big", {
      xPercent: 30, opacity: 0, ease: "none",
      scrollTrigger: { containerAnimation: panTween, trigger: ".panel--outro", start: "left 100%", end: "left 50%", scrub: true },
    });
  });
  mmq.add("(max-width: 899px), (hover: none)", () => {
    pan.classList.add("is-native");
    return () => pan.classList.remove("is-native");
  });

  // ---------- Titoli e blocchi che entrano ----------
  $$("[data-reveal-title]").forEach((t) => {
    const chars = splitChars(t);
    $$(".word", t).forEach((w) => { w.style.overflow = "hidden"; w.style.verticalAlign = "top"; w.style.paddingBottom = "0.04em"; });
    gsap.set(chars, { yPercent: 110 });
    gsap.to(chars, { yPercent: 0, duration: 0.9, ease: "power4.out", stagger: 0.018, scrollTrigger: { trigger: t, start: "top 85%" } });
  });
  ScrollTrigger.batch("[data-reveal]", {
    start: "top 88%",
    onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.09, overwrite: true }),
  });
  $$("[data-scramble]").forEach((el) => {
    if (el.closest(".hero")) return;
    ScrollTrigger.create({ trigger: el, start: "top 90%", once: true, onEnter: () => scramble(el) });
  });

  // ---------- SERIE: copertina che segue il puntatore ----------
  const follow = $("[data-follow]");
  const serieSec = $("[data-serie-section]");
  if (fine && follow) {
    gsap.set(follow, { xPercent: -50, yPercent: -50, scale: 0.6 });
    const fx = gsap.quickTo(follow, "x", { duration: 0.55, ease: "power3.out" });
    const fy = gsap.quickTo(follow, "y", { duration: 0.55, ease: "power3.out" });
    const fr = gsap.quickTo(follow, "rotation", { duration: 0.6, ease: "power3.out" });
    let lastX = 0;
    serieSec.addEventListener("pointermove", (e) => {
      const r = serieSec.getBoundingClientRect();
      const x = e.clientX - r.left;
      fx(x); fy(e.clientY - r.top);
      fr(gsap.utils.clamp(-14, 14, (x - lastX) * 0.6));
      lastX = x;
    });
    const list = $(".serie__list");
    list.addEventListener("pointerenter", () => gsap.to(follow, { opacity: 1, scale: 1, duration: 0.45, ease: "power3.out" }));
    list.addEventListener("pointerleave", () => gsap.to(follow, { opacity: 0, scale: 0.6, duration: 0.35, ease: "power3.in" }));
  }
  gsap.from(".serie__row", { y: 70, opacity: 0, duration: 0.9, ease: "power3.out", stagger: 0.08, scrollTrigger: { trigger: ".serie__list", start: "top 85%" } });

  // ---------- FASCICOLI ----------
  gsap.fromTo("[data-zoom] img", { scale: 1.3 }, { scale: 1, ease: "none", scrollTrigger: { trigger: "[data-zoom]", start: "top bottom", end: "bottom top", scrub: true } });
  gsap.from("[data-folder]", { y: 120, rotation: (i) => (i ? 6 : -6), opacity: 0, duration: 1, ease: "power3.out", stagger: 0.15, scrollTrigger: { trigger: ".folders", start: "top 85%" } });
  // Le cartelline si aprono da sole una volta, per far capire che si possono aprire
  ScrollTrigger.create({
    trigger: ".folders", start: "top 60%", once: true,
    onEnter: () => {
      const fs = $$("[data-folder]");
      fs.forEach((f, i) => setTimeout(() => f.classList.add("is-open"), 500 + i * 220));
      if (fine) setTimeout(() => fs.forEach((f) => f.classList.remove("is-open")), 2400);
    },
  });

  // ---------- METODO: lo studio, una stazione alla volta ----------
  const studio = $("[data-studio]");
  if (studio) {
    const scenes = $$("[data-scene]", studio);
    const railItems = $$(".rail__item", studio);
    const rail = $("[data-rail]", studio);
    const label = $("[data-stage-label]", studio);
    const meter = $("[data-stage-meter]", studio);
    const names = ["Ricerca", "Testo", "Voce", "Montaggio"];
    const marks = [0, 1.35, 2.85, 4.15];
    gsap.set(scenes, { autoAlpha: 0 });
    gsap.set(scenes[0], { autoAlpha: 1 });

    // Testo: lettere da "battere a macchina" + cursore
    const lines = $$("[data-type]", studio).map((p) => {
      const chars = [];
      [...p.textContent].forEach((ch) => {
        const c = document.createElement("span");
        c.className = "tc";
        c.textContent = ch;
        chars.push(c);
      });
      p.textContent = "";
      p.append(...chars);
      const caret = document.createElement("span");
      caret.className = "caret";
      p.append(caret);
      gsap.set(caret, { autoAlpha: 0 });
      return { chars, caret };
    });

    const clips = $$(".clip", studio);
    const good = clips.filter((c) => c.dataset.clip === "ok");
    const bad = clips.filter((c) => c.dataset.clip === "bad");
    const vHead = $("[data-voce-head]", studio);
    const tHead = $("[data-tl-head]", studio);
    const takes = $$(".take", studio);
    const chips = $$("[data-chips] span", studio);
    const stamp = $("[data-stage-stamp]", studio);
    const waveW = () => $(".take .wave", studio).offsetWidth;
    const tlW = () => $(".tl__chips", studio).offsetWidth;

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    // 01 RICERCA: le fonti cadono sul tavolo, due vengono scartate
    const baseRot = (c) => parseFloat(getComputedStyle(c).getPropertyValue("--r")) || 0;
    tl.fromTo(clips, { yPercent: -220, opacity: 0, rotation: (i, c) => baseRot(c) + 24 }, { yPercent: 0, opacity: 1, rotation: (i, c) => baseRot(c), duration: 0.45, stagger: 0.1, ease: "power3.out" }, 0)
      .fromTo($$(".clip__ok", studio), { opacity: 0, scale: 2.4, rotation: -30 }, { opacity: 1, scale: 1, rotation: 0, duration: 0.15, stagger: 0.05, ease: "power4.in" }, 0.62)
      .fromTo($$(".clip__stamp", studio), { opacity: 0, scale: 2.6 }, { opacity: 1, scale: 1, duration: 0.15, stagger: 0.06, ease: "power4.in" }, 0.74)
      .fromTo(bad, { y: 0, x: 0 }, { y: 420, x: (i) => (i ? -80 : 140), rotation: (i, c) => baseRot(c) + (i ? -50 : 45), opacity: 0, immediateRender: false, duration: 0.35, ease: "power2.in" }, 0.95)
      .fromTo(good, { rotation: (i, c) => baseRot(c) }, { rotation: 0, immediateRender: false, duration: 0.25 }, 1.0)
      .fromTo(".scene__foot", { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.2 }, 1.05)
      // passaggio
      .to(scenes[0], { autoAlpha: 0, y: -24, duration: 0.15 }, 1.25)
      .fromTo(scenes[1], { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.2 }, 1.35)
      .fromTo($$(".sline__tag", studio), { scale: 0, rotation: -12 }, { scale: 1, rotation: 0, duration: 0.15, stagger: 0.42, ease: "power3.out" }, 1.4);
    // 02 TESTO: si scrive riga per riga
    lines.forEach(({ chars, caret }, i) => {
      const at = 1.45 + i * 0.42;
      tl.set(caret, { autoAlpha: 1 }, at).to(chars, { opacity: 1, duration: 0.01, stagger: 0.36 / chars.length, ease: "none" }, at);
      if (i < lines.length - 1) tl.set(caret, { autoAlpha: 0 }, at + 0.4);
    });
    tl.to(scenes[1], { autoAlpha: 0, y: -24, duration: 0.15 }, 2.75)
      .fromTo(scenes[2], { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.2 }, 2.85)
      // 03 VOCE: tre take, una sola resta
      .fromTo(takes.map((t) => $$(".wave i", t)).flat(), { scaleY: 0 }, { scaleY: 1, duration: 0.3, stagger: 0.003 }, 2.9)
      .fromTo(vHead, { x: 0 }, { x: () => waveW(), duration: 0.6, ease: "none" }, 3.15)
      .fromTo(takes[0], { "--x": 0, opacity: 1 }, { "--x": 1, opacity: 0.45, duration: 0.12 }, 3.55)
      .fromTo(takes[1], { "--x": 0, opacity: 1 }, { "--x": 1, opacity: 0.45, duration: 0.12 }, 3.68)
      .fromTo($(".take__stamp", studio), { opacity: 0, scale: 2.6, rotation: -24 }, { opacity: 1, scale: 1, rotation: -8, duration: 0.15, ease: "power4.in" }, 3.82)
      .to(scenes[2], { autoAlpha: 0, y: -24, duration: 0.15 }, 4.05)
      .fromTo(scenes[3], { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.2 }, 4.15)
      // 04 MONTAGGIO: la testina scorre, le parole compaiono sulla voce
      .fromTo(".phone", { yPercent: 20, rotation: -6, opacity: 0 }, { yPercent: 0, rotation: 0, opacity: 1, duration: 0.25 }, 4.15)
      .fromTo(tHead, { x: 0 }, { x: () => tlW(), duration: 1.0, ease: "none" }, 4.35)
      .fromTo(liveWords, { opacity: 0, yPercent: 60, scale: 1.3 }, { opacity: 1, yPercent: 0, scale: 1, duration: 0.06, stagger: 1.0 / liveWords.length, ease: "power3.out" }, 4.35)
      .fromTo(chips, { backgroundColor: "#2A2926", color: "#F1EBDD" }, { backgroundColor: "#E46A3A", color: "#151515", duration: 0.04, stagger: 1.0 / chips.length }, 4.35)
      .fromTo(stamp, { opacity: 0, scale: 2.6, rotation: -24 }, { opacity: 1, scale: 1, rotation: -6, duration: 0.18, ease: "power4.in" }, 5.45)
      .to(".stage", { x: 5, duration: 0.02, yoyo: true, repeat: 3, ease: "none" }, 5.63)
      .to({}, { duration: 0.35 });

    let current = -1;
    const setStep = (i) => {
      if (i === current) return;
      current = i;
      railItems.forEach((r, k) => { r.classList.toggle("is-active", k === i); r.classList.toggle("is-done", k < i); });
      label.textContent = `WL-002 / ${names[i].toUpperCase()}`;
    };
    setStep(0);
    ScrollTrigger.create({
      trigger: studio, start: "top top", end: () => `+=${window.innerHeight * 4.6}`,
      pin: true, scrub: 0.8, animation: tl, invalidateOnRefresh: true,
    });
    // lo stato segue la timeline (che con lo scrub arriva un attimo dopo lo scroll)
    tl.eventCallback("onUpdate", () => {
      const t = tl.time();
      let i = 0;
      marks.forEach((m, k) => { if (t >= m - 0.05) i = k; });
      setStep(i);
      const pr = tl.progress();
      gsap.set(meter, { scaleX: pr });
      rail.style.setProperty("--rp", pr.toFixed(3));
    });
  }

  // ---------- REPERTO ZERO: la scheda segue il puntatore ----------
  const fig = $("[data-tilt] .zero__photo");
  if (fig && fine) {
    const zone = $("[data-tilt]");
    gsap.set(fig, { transformPerspective: 900 });
    const rx = gsap.quickTo(fig, "rotationX", { duration: 0.6, ease: "power3.out" });
    const ry = gsap.quickTo(fig, "rotationY", { duration: 0.6, ease: "power3.out" });
    zone.addEventListener("pointermove", (e) => {
      const r = zone.getBoundingClientRect();
      ry(((e.clientX - r.left) / r.width - 0.5) * 16);
      rx(((e.clientY - r.top) / r.height - 0.5) * -12);
    });
    zone.addEventListener("pointerleave", () => { rx(0); ry(0); });
  }
  gsap.from(".zero__photo", { y: 80, rotation: -10, opacity: 0, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: ".zero", start: "top 75%" } });
  gsap.from(".spec > div", { x: 40, opacity: 0, duration: 0.7, ease: "power3.out", stagger: 0.08, scrollTrigger: { trigger: "[data-spec]", start: "top 85%" } });

  // ---------- AZIENDE ----------
  gsap.from(".tile", { y: 80, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.12, scrollTrigger: { trigger: ".bento", start: "top 85%" } });
  gsap.from(".tile__img", { scale: 0.6, rotation: -20, duration: 1.2, ease: "power3.out", stagger: 0.12, scrollTrigger: { trigger: ".bento", start: "top 80%" } });

  // ---------- FOOTER ----------
  const footChars = splitChars($("[data-letters]"));
  gsap.from(footChars, { yPercent: 105, duration: 1, ease: "power4.out", stagger: 0.05, scrollTrigger: { trigger: "[data-letters]", start: "top 95%" } });
  if (fine) footChars.forEach((c) => c.addEventListener("pointerenter", () => {
    gsap.timeline().to(c, { yPercent: -14, rotation: gsap.utils.random(-6, 6), duration: 0.25, ease: "power3.out" }).to(c, { yPercent: 0, rotation: 0, duration: 0.6, ease: "power3.inOut" });
  }));
  gsap.fromTo("[data-stamp]", { opacity: 0, scale: 2.4, rotation: -20 }, { opacity: 1, scale: 1, rotation: -6, duration: 0.32, ease: "power4.in", scrollTrigger: { trigger: "[data-stamp]", start: "top 90%" } });

  // ---------- Bottoni magnetici ----------
  if (fine) $$("[data-magnetic]").forEach((b) => {
    const xTo = gsap.quickTo(b, "x", { duration: 0.5, ease: "power3.out" });
    const yTo = gsap.quickTo(b, "y", { duration: 0.5, ease: "power3.out" });
    b.addEventListener("pointermove", (e) => {
      const r = b.getBoundingClientRect();
      xTo((e.clientX - r.left - r.width / 2) * 0.25);
      yTo((e.clientY - r.top - r.height / 2) * 0.35);
    });
    b.addEventListener("pointerleave", () => { xTo(0); yTo(0); });
  });

  // ---------- INDICATORE DI SCROLL ----------
  const cue = $("[data-cue]");
  if (cue) {
    const fill = $("[data-cue-fill]", cue);
    const text = $("[data-cue-text]", cue);
    const arrow = $("[data-cue-arrow]", cue);
    const spin = gsap.to(text, { rotation: 360, duration: 16, repeat: -1, ease: "none", transformOrigin: "50% 50%" });
    const bob = gsap.to(arrow, { y: 5, duration: 0.7, yoyo: true, repeat: -1, ease: "sine.inOut" });
    let mode = "down";
    const setMode = (m) => {
      if (m === mode) return;
      mode = m;
      gsap.to(arrow, { rotation: m === "right" ? -90 : m === "up" ? 180 : 0, duration: 0.5, ease: "power3.out" });
      cue.setAttribute("aria-label", m === "up" ? "Torna all'inizio" : "Scorri la pagina");
    };
    let inPan = false;
    ScrollTrigger.create({
      start: 0, end: "max",
      onUpdate(self) {
        gsap.set(fill, { strokeDashoffset: 1 - self.progress });
        const v = Math.abs(self.getVelocity());
        gsap.to(spin, { timeScale: 1 + Math.min(v / 250, 8), duration: 0.2, overwrite: true });
        gsap.to(spin, { timeScale: 1, duration: 1.4, delay: 0.25, ease: "power2.out" });
        setMode(self.progress > 0.985 ? "up" : inPan ? "right" : "down");
      },
    });
    const panSec = $("[data-pan]");
    if (panSec) ScrollTrigger.create({ trigger: panSec, start: "top top", end: () => `+=${Math.max(1, $("[data-pan-track]").scrollWidth - window.innerWidth)}`, onToggle: (s) => { inPan = s.isActive && !panSec.classList.contains("is-native"); setMode(inPan ? "right" : "down"); } });
    ScrollTrigger.create({ trigger: ".metodo", start: "top bottom-=70", end: "bottom bottom-=70", toggleClass: { targets: cue, className: "on-dark" } });
    cue.addEventListener("click", () => {
      if (mode === "up") { lenis ? lenis.scrollTo(0, { duration: 1.6 }) : window.scrollTo({ top: 0, behavior: "smooth" }); return; }
      const to = window.scrollY + window.innerHeight * 0.85;
      lenis ? lenis.scrollTo(to, { duration: 1 }) : window.scrollTo({ top: to, behavior: "smooth" });
    });
    gsap.from(cue, { scale: 0, rotation: -120, duration: 0.9, ease: "power4.out", delay: seen ? 1.4 : 3.4 });
    void bob;
  }

  // Ricalcolo quando i font sono pronti (cambiano le misure)
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
  window.addEventListener("load", () => ScrollTrigger.refresh());
})();
