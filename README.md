# A Little Birthday Website

A small, cinematic, just-for-her birthday website. Seven quiet chapters —
her, memories, videos, your story, a letter, and one last thing — built
entirely from plain HTML, CSS, and JavaScript, with no build step, no
server, and no dependencies. It's meant to be opened on her phone.

Everything personal (her name, your photos, your captions, your letter)
lives in one clearly-marked place, so you don't need to understand the
whole project to make it yours. That place is explained below.

---

## What's inside

- A minimal, intriguing opening sequence before anything is revealed
- A full-screen cinematic hero with her name
- **Her** — a scattered collection of things you notice about her, plus a
  set of little pinned notes that unfold when tapped
- **Memories** — an irregular, editorial photo scrapbook with a fullscreen
  lightbox (swipe, arrow keys, captions, dates)
- **Together** — an immersive vertical video feed on mobile (one video per
  screen, autoplay-on-scroll, tasteful sound toggle, category filters)
  that becomes a focused multi-video carousel on desktop
- **Our Story** — a relationship timeline that scrolls horizontally on
  desktop and vertically on mobile
- **The Letter** — a CSS envelope that opens into a full letter
- **The final reveal** — stars, confetti, her photo, and your closing
  message
- 3 small hidden "easter eggs" scattered around the site
- Optional background music and an optional birthday countdown (both off
  by default)
- Fully responsive, mobile-first, keyboard accessible, and respectful of
  the "reduce motion" accessibility setting
- No React, no build tools, no npm, no backend — just files. Works by
  opening `index.html` directly, and works on GitHub Pages.

## Project structure

```
birthday-website/
│
├── index.html          ← homepage: opening sequence + hero + chapter list
├── her.html
├── memories.html
├── videos.html
├── story.html
├── letter.html
├── final.html
│
├── css/
│   └── style.css        ← every style in the site
│
├── js/
│   └── script.js         ← CONFIG (your content) + all interactivity
│
├── images/               ← put your photos here
├── videos/               ← put your video clips here
├── music/                ← put one song here (optional)
│
├── robots.txt            ← asks search engines not to index the site
└── README.md              ← you are here
```

---

## The one file that matters most: `js/script.js`

Open `js/script.js` in any text editor. Right at the top you'll find:

```js
// ========================================
// PERSONALIZATION — EDIT ONLY THIS SECTION
// ========================================
const CONFIG = { ... };
```

Almost everything you'll want to change — her name, the countdown, music,
the photo list, the video list, the timeline, the letter, the final
message, and the easter-egg messages — lives inside that one `CONFIG`
object. You genuinely don't need to read the rest of the file.

A few short lines of copy (the opening "Hey, you." sequence, page
headings like "Our story, so far.", small hints like "Tap anything.")
live directly in the HTML files instead, because they each only appear
once, in one place — for those, just open the relevant `.html` file and
edit the text between the tags. It's plain, readable text; there's
nothing to break.

---

## Adding photos

1. Put your image files in the `images/` folder.
2. Open `js/script.js` and find the `memories` list inside `CONFIG`:

   ```js
   memories: [
     { src: "images/photo-01.jpg", caption: "One of my favourites.", date: "2023" },
     ...
   ],
   ```

3. Change `src` to match your filename exactly (capitalisation matters —
   `Photo-01.JPG` is not the same as `photo-01.jpg`), and write your own
   `caption` and `date`.
4. Add more entries or delete extras — the scrapbook grid rebuilds itself
   from however many items are in the list, from 1 to as many as you
   like. (More than ~10-12 photos is still fully supported — it just
   scrolls further.)

The same idea applies to:

- `heroImage` and `finalImage` at the top of `CONFIG` (the top-of-site
  and end-of-site photos),
- the `image` field on each entry in `timeline` (story.html).

**If a file is missing or misnamed**, that photo simply shows a soft,
intentional-looking placeholder with the expected filename printed on it
— the layout never breaks. That's by design, so you can build and test
the whole site before you have final media.

## Adding videos

1. Put your clips in the `videos/` folder. Vertical/portrait (9:16) clips
   look best, since that's the shape the feed is built around.
2. Open `js/script.js` and find the `videos` list inside `CONFIG`:

   ```js
   videos: [
     { src: "videos/video-01.mp4", caption: "One of my favourites.", category: "FAVOURITES", featured: true },
     ...
   ],
   ```

3. `category` can be anything, but `HER`, `US`, `MEMORIES`, `FUNNY`, and
   `FAVOURITES` are the ones the built-in filter chips are tuned for.
   `featured: true` adds a small star next to the category.
4. **Compress your videos first.** Phone videos are often huge. A tool
   like [HandBrake](https://handbrake.fr) (free) set to something like
   "Fast 1080p30" will shrink files dramatically with barely any visible
   quality loss — this matters a lot for load time on mobile data.
   Individual files well under 100MB are required by GitHub itself; aim
   much lower (10-25MB) for a fast, smooth feel.

## Adding music

1. Put one audio file in the `music/` folder (`song.mp3` by default).
2. In `js/script.js`, make sure `music` points to it and `musicEnabled`
   is `true`:

   ```js
   musicEnabled: true,
   music: "music/song.mp3",
   ```

3. Set `musicEnabled: false` if you don't want a music button at all.

Browsers don't allow websites to play sound automatically — she'll
always need to tap the small music icon once herself. That's a browser
rule, not a bug. Because this site is several separate pages rather than
one app, the music also restarts if she moves to the next chapter; the
button always accurately shows whether sound is currently playing on the
page she's on.

---

## Personalization checklist

Everything below is inside the `CONFIG` object in `js/script.js`, unless
noted otherwise.

| What | Where |
|---|---|
| Her name (shown on the hero, the final page, and the menu) | `girlfriendName` |
| Birthday countdown | `countdownEnabled` (`true`/`false`) and `birthdayDate` ("YYYY-MM-DD") |
| Background music | `musicEnabled`, `music` |
| Top-of-site / end-of-site photo | `heroImage`, `finalImage` |
| "Things I notice about you" notes | `aboutHer` list |
| "Things I could never fit into one message" notes | `reasons` list |
| Photo scrapbook | `memories` list |
| Video feed | `videos` list |
| Relationship timeline | `timeline` list |
| The letter | `letter.paragraphs` and `letter.signature` |
| The final message | `finalMessage` list |
| Hidden discovery messages | `easterEggs` list |
| Page headings and short one-off lines (e.g. "Hey, you.", "Our story, so far.") | directly inside each `.html` file |
| Page browser-tab titles | the `<title>` tag near the top of each `.html` file |

### Changing colors

All colors are defined once, at the very top of `css/style.css`, as CSS
variables:

```css
:root{
  --ivory: #F8F3EC;
  --paper: #FFFCF7;
  --charcoal: #2A2420;
  --wine: #6B2C3A;
  --gold: #B08D57;
  --rose: #D9AFA6;
  ...
}
```

Change a value there and it updates everywhere that color is used across
every page. You don't need to hunt through the rest of the file.

### Turning down the animation

The site already automatically shows a calmer, largely-static version of
itself to anyone whose device has "Reduce Motion" turned on in their
system accessibility settings — nothing extra is needed for that.

If you'd rather turn down the motion for everyone, regardless of their
device settings, paste this at the very end of `css/style.css`:

```css
*, *::before, *::after{
  animation-duration: .001ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: .2s !important;
  scroll-behavior: auto !important;
}
.story-track{ transform: none !important; }
```

---

## Running it locally (before you send it)

Because this is a set of plain files, you can just double-click
`index.html` to open it in a browser and click through the whole site.

There's one small catch: some browsers block videos and certain effects
when a page is opened directly from your file system (a `file://`
address) rather than served over `http://`. If videos on `videos.html`
don't seem to load while testing locally, use a tiny local server
instead — it takes one command and needs no installation beyond Python,
which most computers already have:

```bash
# from inside the birthday-website folder
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser. Press Ctrl+C in the
terminal to stop it when you're done. (This step is only for testing on
your own computer — GitHub Pages serves the site correctly on its own,
with no server needed from you.)

---

## Putting it on GitHub Pages

1. Go to [github.com](https://github.com) and create a new repository
   (for example, named `birthday-website`). It can be public or private
   — GitHub Pages works either way, though see the privacy note below.
2. Upload the **contents** of this folder into that repository — not the
   `birthday-website` folder itself, but everything inside it
   (`index.html`, `her.html`, `css/`, `js/`, `images/`, and so on) so
   that `index.html` ends up sitting directly in the root of the
   repository. The easiest way: on your new repo's GitHub page, click
   "Add file" → "Upload files," then drag in everything from inside this
   folder.
3. Commit the upload.
4. In your repository, go to **Settings**.
5. In the left sidebar, click **Pages**.
6. Under "Build and deployment," set the source to **Deploy from a
   branch**, choose the `main` branch and the `/ (root)` folder, then
   **Save**.
7. Wait a minute or two for GitHub to publish it.
8. Your site will be live at:

   ```
   https://YOUR-USERNAME.github.io/YOUR-REPOSITORY-NAME/
   ```

   That URL shape (with your repository name in the path) is normal for
   this kind of GitHub Pages site — every link and file in this project
   is written to work correctly at that kind of address.

### A privacy note

GitHub Pages sites are public to anyone who has the link — there's no
password option on the free tier, even if the repository itself is
private. This project includes a `robots.txt` file asking search engines
not to index it, which keeps it out of Google, but it doesn't make the
link secret. If you'd like a bit more privacy, give the repository a
name that isn't easy to guess, and only share the link directly with
her.

## Updating the site after it's live

1. Edit the files on your computer (add photos, tweak `CONFIG`, whatever
   you need).
2. Go back to your repository on GitHub and upload the changed files
   again the same way (or use `git push` from the command line, if
   you're comfortable with Git).
3. GitHub Pages automatically republishes within a minute or two of any
   change — there's no separate "deploy" step to remember.

---

## Troubleshooting

**A photo or video isn't showing up.**
Check the filename in `js/script.js` matches the actual file exactly,
including capitalisation and file extension (`.jpg` vs `.JPG` vs
`.jpeg` are all different to a web server, even though your computer
might not care). Until it matches, you'll see a soft placeholder frame
instead of a broken image — that's intentional, not an error.

**A link between pages gives a 404.**
Double-check every `.html` file made it into the repository, and that
you uploaded the *contents* of this folder rather than the folder
itself (see step 2 of the deployment guide above).

**GitHub is showing my README instead of the website.**
This means `index.html` isn't in the root of the repository — it's
probably nested inside an extra folder. Move the files up so `index.html`
sits directly at the top level of the repo, next to `README.md`.

**Something worked locally but not on GitHub Pages.**
This is almost always a path or capitalisation mismatch. GitHub Pages'
servers are case-sensitive about filenames in a way your own computer
might not be — `Hero.jpg` and `hero.jpg` are different files there.

**The music won't play.**
She needs to tap the little music icon once — browsers don't allow
websites to start sound on their own. If the icon isn't showing up at
all, check `musicEnabled` is `true` and that the file at the `music` path
in `CONFIG` actually exists.

**Videos won't play while testing locally.**
See "Running it locally" above — use the one-line local server instead
of opening the file directly. This isn't an issue once the site is on
GitHub Pages.

---

## A few notes on how this was built

- This is a genuinely static, multi-page site — seven separate HTML
  pages linked together, rather than one "app." That was a deliberate
  choice for reliability on GitHub Pages and to keep the code readable,
  at the small cost that background music and video sound don't carry
  over between pages (each page starts fresh).
- The scattered, editorial-feeling layouts (the notes on `her.html`, the
  scrapbook on `memories.html`) are built with CSS Grid rather than
  hand-placed random positioning, so they'll never actually overlap or
  break, no matter how many items you add.
- Nothing here calls any external service, tracker, or analytics — the
  only external requests the site makes are for its two Google Fonts
  (Fraunces and Inter, plus Caveat for the letter's signature).
- If JavaScript somehow fails to load, each page falls back to a plain,
  fully-readable version of itself (headings and text simply appear
  immediately, with a small notice at the top) rather than showing a
  blank screen or a stuck button — this matters most on the opening and
  final pages, where the "Enter" / "One last thing" buttons are disabled
  until JavaScript enables them.

That's everything. Add your photos, your videos, your words — and it's
ready.
