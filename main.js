// WaweLab | Archivio del Futuro
// Motion leggero e motivato: entrata del collage, timbri, parole che si "accendono" in lettura,
// anteprima delle serie. Niente librerie, niente listener di scroll: solo IntersectionObserver e pointer.
(() => {
  const root = document.documentElement;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  root.classList.add("js");

  // Ordine di entrata dell'hero
  document.querySelectorAll("[data-load]").forEach((el) => el.style.setProperty("--i", el.dataset.load));
  const pieces = [".collage__paper", ".piece--newspaper", ".piece--computer", ".tape--a", ".piece--hand", ".piece--tube", ".piece--sphere", ".tape--b"];
  pieces.forEach((sel, i) => document.querySelector(sel)?.style.setProperty("--d", 350 + i * 120));
  requestAnimationFrame(() => requestAnimationFrame(() => root.classList.add("is-loaded")));

  // Bordo della nav quando la pagina non è più in cima
  const nav = document.querySelector("[data-nav]");
  const sentinel = document.createElement("div");
  sentinel.style.cssText = "position:absolute;top:0;height:1px;width:1px";
  document.body.prepend(sentinel);
  new IntersectionObserver(([e]) => nav.classList.toggle("is-stuck", !e.isIntersecting)).observe(sentinel);

  // Reveal on scroll, con piccolo ritardo a cascata dentro lo stesso gruppo
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("is-in");
      io.unobserve(e.target);
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -6% 0px" });
  document.querySelectorAll(".reveal, [data-stamp], [data-stations]").forEach((el) => {
    const siblings = [...el.parentElement.children].filter((c) => c.classList.contains("reveal"));
    const idx = siblings.indexOf(el);
    if (idx > 0) el.style.setProperty("--rd", Math.min(idx, 5) * 90);
    io.observe(el);
  });

  // Manifesto: le parole si accendono man mano che il testo sale nello schermo
  const manifesto = document.querySelector("[data-words]");
  if (manifesto) {
    const walk = (node) => {
      [...node.childNodes].forEach((n) => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.append(part); return; }
            const s = document.createElement("span");
            s.className = "w";
            s.textContent = part;
            frag.append(s);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1 && n.tagName !== "svg") walk(n);
      });
    };
    walk(manifesto);
    const words = [...manifesto.querySelectorAll(".w")];
    const marks = manifesto.querySelectorAll(".mark-circle, .mark-strike");
    if (reduce) {
      words.forEach((w) => w.classList.add("is-lit"));
      marks.forEach((m) => m.classList.add("is-drawn"));
    } else {
      // Una "linea di lettura" a metà schermo: ogni parola che la supera si accende.
      const wordIO = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          // Una volta lette, le parole restano accese
          if (e.boundingClientRect.top < window.innerHeight * 0.62) e.target.classList.add("is-lit");
        });
        marks.forEach((m) => {
          const all = [...m.querySelectorAll(".w")];
          if (all.length && all.every((w) => w.classList.contains("is-lit"))) m.classList.add("is-drawn");
        });
      }, { rootMargin: "0px 0px -38% 0px", threshold: 0 });
      words.forEach((w) => wordIO.observe(w));
    }
  }

  // Parallax del collage: segue il puntatore (solo dispositivi con mouse)
  const collage = document.querySelector("[data-collage]");
  if (collage && !reduce && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    const layers = [...collage.querySelectorAll("[data-depth]")].map((el) => ({ el, d: parseFloat(el.dataset.depth) }));
    let tx = 0, ty = 0, cx = 0, cy = 0, raf = 0;
    const tick = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      layers.forEach(({ el, d }) => {
        el.style.setProperty("--px", `${(cx * d * 18).toFixed(2)}px`);
        el.style.setProperty("--py", `${(cy * d * 14).toFixed(2)}px`);
      });
      raf = Math.abs(tx - cx) + Math.abs(ty - cy) > 0.001 ? requestAnimationFrame(tick) : 0;
    };
    const hero = document.querySelector(".hero");
    hero.addEventListener("pointermove", (e) => {
      const r = hero.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
      if (!raf) raf = requestAnimationFrame(tick);
    });
    hero.addEventListener("pointerleave", () => { tx = 0; ty = 0; if (!raf) raf = requestAnimationFrame(tick); });
  }

  // Serie: la riga attiva cambia la copertina di anteprima
  const rows = document.querySelectorAll("[data-serie]");
  const previews = document.querySelectorAll("[data-preview]");
  const activate = (key) => {
    rows.forEach((r) => r.classList.toggle("is-active", r.dataset.serie === key));
    previews.forEach((p) => p.classList.toggle("is-on", p.dataset.preview === key));
  };
  rows.forEach((r) => {
    r.addEventListener("pointerenter", () => activate(r.dataset.serie));
    r.addEventListener("focus", () => activate(r.dataset.serie));
  });
  // Senza mouse: la riga al centro dello schermo è quella attiva
  if (!window.matchMedia("(hover: hover)").matches) {
    const rowIO = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && activate(e.target.dataset.serie));
    }, { rootMargin: "-45% 0px -45% 0px" });
    rows.forEach((r) => rowIO.observe(r));
  }
  if (rows[0]) activate(rows[0].dataset.serie);

  // Video dei reperti: uno alla volta, con audio, controlli nativi dopo il primo play
  const players = [...document.querySelectorAll("[data-player]")];
  document.querySelectorAll("[data-play]").forEach((btn) => {
    const card = btn.closest(".card");
    const video = card.querySelector("video");
    btn.addEventListener("click", () => {
      players.forEach((v) => { if (v !== video) v.pause(); });
      video.controls = true;
      video.play();
      card.classList.add("is-playing");
    });
    video.addEventListener("ended", () => { video.controls = false; card.classList.remove("is-playing"); video.load(); });
  });
})();
