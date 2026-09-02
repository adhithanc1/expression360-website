# Expression 360 — Website

Marketing site for **Expression 360 Services India Ltd.**

Built with Vite, React 19 and TypeScript. Static output, no backend, no
third-party runtime dependencies — fonts and icons are bundled.

---

## Quick start

Requires Node 22 (see `.nvmrc`).

```bash
npm install
npm run dev        # http://localhost:5173
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Typecheck, then build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run typecheck` | TypeScript only, no emit |
| `npm run lint` | ESLint |

---

## Deploying to Netlify

`netlify.toml` is already configured, so both routes below need no extra setup.

**Drag and drop.** Run `npm run build`, then drag the **`dist`** folder onto
<https://app.netlify.com/drop>. Live in about twenty seconds. Note you drag
`dist`, not the project root.

**Connect a Git repo** (better — redeploys on every push):

```bash
git init
git add .
git commit -m "Expression 360 website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/expression360.git
git push -u origin main
```

Then in Netlify: **Add new site → Import an existing project**, pick the repo,
and accept the detected settings (`npm run build`, publish `dist`).

### After the first deploy

- **Newsletter form** — the signup uses Netlify Forms. Enable **Forms** in your
  site settings and submissions appear in the dashboard. No backend required.
- **Custom domain** — Site settings → Domain management. HTTPS is automatic.
- **Update the canonical URL** — `index.html` and `public/sitemap.xml` both
  reference `https://expression360.in`. Change them if the domain differs.

---

## Editing content

All copy and imagery lives in `src/data/`. You should rarely need to touch a
component to change what the site says.

| File | Contains |
| --- | --- |
| `site.ts` | Brand name, tagline, nav menus, social links, all seven office addresses, footer columns |
| `content.ts` | Clients, about copy, services, stats, projects, careers values, awards, team, journey, process, testimonials, blog posts |
| `types.ts` | The shape of every content record |

Adding a project, for instance, means appending one object to the `projects`
array — the grid, numbering and tags follow automatically.

Images go in `public/assets/` and are referenced from the data files by their
public path (`/assets/proj-ongc.jpg`). Purely decorative images used only by CSS
(section backgrounds, icon masks) are tokenised in `src/styles/assets.css`.

### Still placeholder copy

Two blocks are carried over from the original template and are marked with
comments in `content.ts`. Replace them before launch:

- **`testimonials`** — lorem ipsum quotes with stock avatars
- **`posts`** — three dummy articles dated December 2022

The social links in `site.ts` are all `#` placeholders too.

---

## Architecture

```
public/assets/        images, video, poster (served as-is)
src/
  data/               typed content — the only place copy lives
  components/
    layout/           Header, MobileDrawer, Footer, BackToTop
    sections/         the 14 page sections, barrel-exported
    ui/               Reveal, SectionHead, Media, PlayButton,
                      VideoLightbox, SocialIcons, Tags, TextLink, Eyebrow
  hooks/              useInView, useCountUp, useScrollFlag,
                      useReducedMotion, useBodyScrollLock
  styles/
    tokens.css        design tokens (colour, type scale, spacing)
    assets.css        CSS-only image tokens
    base.css          reset
    primitives.css    container, section, eyebrow, link, button, reveal
    sections/*.css    one file per section
    responsive.css    breakpoints
    motion.css        prefers-reduced-motion overrides
```

Styling is plain CSS with custom properties rather than a utility framework —
the design was ported from Figma at fixed measurements, and tokens keep those
values in one place without a build step in the way.

### Design tokens

| Token | Value |
| --- | --- |
| Torch Red | `#FF0E47` |
| Cod Gray | `#181616` |
| Mercury | `#E9E9E9` |
| Display face | Syne — 500 / 700 / 800 |
| Body face | DM Sans — 400 / 500 |

Type scale: H1 65/104 · H2 45/63 · H3 25/38 · H4 22/34 · body 15/27 ·
eyebrow 16/24 at 5px tracking · links 14/14 at 1px tracking.

---

## Animation

Scroll reveals, stat count-ups, animated value bars, the awards carousel,
grayscale-to-colour photography, team photo cross-fades and the hero treatment.

Every one of them is disabled under `prefers-reduced-motion: reduce`. The
count-up derives its final value instead of animating, and the awards carousel
stops auto-advancing.

---

## Performance notes

Assets were reduced from 88 MB to 14.5 MB:

- 34 MB of files nothing referenced were removed
- `About Us image.png` — a 5880×3312 PNG at 6.5 MB — is now a 101 KB JPEG
- the showreel was 4K at 46 MB; it is now 720p at 11 MB with a poster frame and
  `preload="none"`, so it only downloads when someone presses play

Build output is roughly 74 KB gzipped JS and 8 KB gzipped CSS. React is split
into its own chunk, and `netlify.toml` sets immutable cache headers on the
hashed files.

---

## Verified

Checked in a headless Chromium against the production build:

- all 14 sections render; no console errors; no broken images
- counters, value bars and every scroll reveal fire correctly
- mobile drawer and video lightbox open and close, including via `Escape`;
  the video pauses and rewinds on close
- no horizontal overflow at 1920 / 1440 / 1280 / 1024 / 834 / 768 / 430 / 390 / 360
- white text over the contact background measures 6.79:1 against the brightest
  3% of the image, past the WCAG AA threshold of 4.5:1
- `tsc -b` and `eslint .` both clean
