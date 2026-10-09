# wawelab.ai: sito ufficiale

Sito statico (HTML, CSS, JS senza build). Si pubblica così com'è su Vercel, Netlify, GitHub Pages o Cloudflare Pages.

- Anteprima locale: `cd site && python3 -m http.server 4320` → http://localhost:4320
- Token visivi: da `brand/DESIGN_TOKENS.json` (carta, nero, arancio; Anton, Inter, IBM Plex Mono self-hosted).
- Modalità scura automatica (`prefers-color-scheme`); la sezione Metodo è l'unica inversione voluta.
- Movimento rispetta `prefers-reduced-motion`.

## Cosa aggiornare quando esce un reperto
1. Scheda in `#reperti` (codice, serie, titolo, parola del fascicolo).
2. Video: `ffmpeg -i render/WL-0XX_vN_ig.mp4 -vf scale=540:-2 -c:v libx264 -crf 27 -c:a aac -b:a 96k -movflags +faststart site/assets/video/wl-0xx.mp4` + poster.
3. Fascicolo: PDF in `site/f/wl-0xx-parola.pdf`. È il link da mettere al posto di `[LINK FASCICOLO]` nei DM.
