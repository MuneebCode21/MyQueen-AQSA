/* ==========================================================================
   A LITTLE BIRTHDAY WEBSITE — SCRIPT
   --------------------------------------------------------------------------
   This file is organised as:
     0.  PERSONALIZATION — edit this section, and only this section, to make
         the site yours.
     1.  Small utilities
     2.  Media placeholder fallback
     3.  Chrome (monogram / music / nav menu / favicon)
     4.  Easter eggs
     5.  Note overlay (shared "reveal a message" popup)
     6.  Lightbox (photo viewer)
     7.  Scroll reveal
     8.  Custom cursor + magnetic buttons (desktop only)
     9.  Page renderers (turn CONFIG data into HTML)
     10. Page interactions (home / her / memories / videos / story / letter / final)
     11. Bootstrap
   ========================================================================== */


/* ========================================================================
   0. PERSONALIZATION — EDIT ONLY THIS SECTION
   ======================================================================== */
const CONFIG = {

  // Shown on the hero, the final page, and in the menu.
  girlfriendName: "Aqsa",

  // Optional countdown shown on the home page. Leave countdownEnabled as
  // false until you want it — it stays hidden until then. birthdayDate
  // should be in "YYYY-MM-DD" format.
  countdownEnabled: true,
  birthdayDate: "2026-09-22",

  // Optional background music. Put an mp3 (or similar) in the music/ folder
  // and point to it here. If the file is missing, the music button simply
  // hides itself — nothing breaks. Set musicEnabled to false to remove the
  // music button entirely.
  musicEnabled: true,
  music: "music/Murtaza Qizilbash  Hum  Official Audio - Murtaza Qizilbash.mp3",

  // The big image at the very top of the site (index.html).
  heroImage: "images/IMG_20260317_030241.jpg",

  // The video shown at the very end, after the final-page opening (final.html).
  // Put the MP4 inside the videos/ folder and keep this path exact.
  finalVideo: "videos/lv_7577429960902806789_20260915190229.mp4",

  // Optional fallback image for the final page if needed elsewhere.
  finalImage: "images/final.jpg",

  // ---- her.html, zone 1 — "things I notice about you" ----
  // Add, remove or rewrite as many as you like. "line" is the short phrase
  // that shows first; "detail" is what appears when it's tapped.
  aboutHer: [
    { line: "Your laugh.", detail: "PLACEHOLDER — write a line or two about her laugh. What does it sound like? When does it come out?" },
    { line: "Your morning voice.", detail: "PLACEHOLDER — the first thing she does or says most mornings." },
    { line: "The way you get excited about small things.", detail: "PLACEHOLDER — give a specific, real example." },
    { line: "That look you give me.", detail: "PLACEHOLDER — describe the look, and what it does to you." },
    { line: "How you say my name.", detail: "PLACEHOLDER — is there a certain way she says it that you love?" },
    { line: "Your terrible, wonderful jokes.", detail: "PLACEHOLDER — reference an actual joke of hers here." },
    { line: "The way you take care of people.", detail: "PLACEHOLDER — a moment where she showed this." },
    { line: "How safe I feel around you.", detail: "PLACEHOLDER — say a little more about why." }
  ],

  // ---- her.html, zone 2 — "things I could never fit into one birthday message" ----
  reasons: [
    { title: "Your patience.", detail: "PLACEHOLDER — a moment this showed." },
    { title: "How you make ordinary days feel good.", detail: "PLACEHOLDER — give an example." },
    { title: "The way you believe in me.", detail: "PLACEHOLDER — say more about this." },
    { title: "Your weird little habits.", detail: "PLACEHOLDER — name one, affectionately." },
    { title: "How hard you try, always.", detail: "PLACEHOLDER — give an example." },
    { title: "You, just generally.", detail: "PLACEHOLDER — whatever you want to say here." }
  ],

  // ---- memories.html — the photo scrapbook ----
  // Filenames below are just examples. Name your files anything you like —
  // just make sure "src" matches exactly, including capitalisation.
  memories: [
    { src: "images/photo-01.jpg", caption: "One of my favourites.", date: "2023" },
    { src: "images/photo-02.jpg", caption: "You remember this one?", date: "2023" },
    { src: "images/photo-03.jpg", caption: "PLACEHOLDER caption", date: "DATE" },
    { src: "images/photo-04.jpg", caption: "PLACEHOLDER caption", date: "DATE" },
    { src: "images/photo-05.jpg", caption: "PLACEHOLDER caption", date: "DATE" },
    { src: "images/photo-06.jpg", caption: "PLACEHOLDER caption", date: "DATE" },
    { src: "images/photo-07.jpg", caption: "PLACEHOLDER caption", date: "DATE" },
    { src: "images/photo-08.jpg", caption: "PLACEHOLDER caption", date: "DATE" },
    { src: "images/photo-09.jpg", caption: "PLACEHOLDER caption", date: "DATE" },
    { src: "images/photo-10.jpg", caption: "This deserves its own page.", date: "DATE" }
  ],

  // ---- videos.html — the vertical video feed ----
  // "category" can be anything, but HER / US / MEMORIES / FUNNY / FAVOURITES
  // are the ones the filter bar is tuned for. "featured" adds a small star.
  videos: [
    { src: "videos/lv_7589668455452888336_20260910023831.mp4", caption: "One of my favourites.", category: "FAVOURITES", featured: false },
    { src: "videos/lv_7582950593031900432_20260915180441.mp4", caption: "PLACEHOLDER caption", category: "US", featured: false },
    { src: "videos/lv_7628944377343249665_20260909223758.mp4", caption: "PLACEHOLDER caption", category: "HER", featured: false },
    { src: "videos/video-04.mp4", caption: "PLACEHOLDER caption", category: "FUNNY", featured: false },
    { src: "videos/video-05.mp4", caption: "PLACEHOLDER caption", category: "MEMORIES", featured: false },
    { src: "videos/video-06.mp4", caption: "PLACEHOLDER caption", category: "US", featured: false }
  ],

  // ---- story.html — your relationship timeline ----
  // Leave the last entry's title as "To be continued..." — it's meant to
  // stay open-ended. You can still edit its date/text/image.
  timeline: [
    { date: "PLACEHOLDER DATE", title: "Where it started", text: "PLACEHOLDER — how did the two of you meet? Set the scene a little.", image: "images/story-01.jpg" },
    { date: "PLACEHOLDER DATE", title: "The first time I knew", text: "PLACEHOLDER — a moment you realised this was different.", image: "images/story-02.jpg" },
    { date: "PLACEHOLDER DATE", title: "A trip to remember", text: "PLACEHOLDER — a place you went together.", image: "images/story-03.jpg" },
    { date: "PLACEHOLDER DATE", title: "Through the hard days too", text: "PLACEHOLDER — a harder season you got through together.", image: "images/story-04.jpg" },
    { date: "PLACEHOLDER DATE", title: "Right now", text: "PLACEHOLDER — where things stand today, and how you feel about it.", image: "images/story-05.jpg" },
    { date: "", title: "To be continued...", text: "PLACEHOLDER — one line about the future you're looking forward to.", image: "" }
  ],

  // ---- letter.html — the envelope + full letter ----
  letter: {
    paragraphs: [
      "PLACEHOLDER — start however feels natural. You don't have to be a writer, just be honest.",
      "PLACEHOLDER — say the thing you actually want her to know today.",
      "PLACEHOLDER — end it however feels true to you."
    ],
    signature: "— Me"
  },

  // ---- final.html — the very last message, after "one last thing" ----
  finalMessage: [
    "Your the most beautiful person in the world that I know and I love you so much. I hope you have a wonderful birthday and a great year ahead. You deserve all the happiness in the world."
  ],

  // ---- small hidden discoveries (index, memories, story pages) ----
  easterEggs: [
    { id: "egg-home", message: "PLACEHOLDER — a tiny secret message for the home page discovery." },
    { id: "egg-scrapbook", message: "PLACEHOLDER — a tiny secret message for the memories page discovery." },
    { id: "egg-story", message: "PLACEHOLDER — a tiny secret message for the story page discovery." }
  ]

};


/* ========================================================================
   1. SMALL UTILITIES
   ======================================================================== */

function escapeHTML(str){
  return String(str == null ? "" : str).replace(/[&<>"']/g, function(ch){
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
  });
}

function prefersReducedMotion(){
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function canHover(){
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

function isDesktopWidth(){
  return window.matchMedia("(min-width: 1024px)").matches;
}

function safeGet(key){
  try{ return window.localStorage.getItem(key); }
  catch(e){ return null; }
}

function safeSet(key, value){
  try{ window.localStorage.setItem(key, value); return true; }
  catch(e){ return false; }
}

/* Keeps Tab/Shift+Tab cycling inside an open overlay instead of escaping
   into the page behind it. Used by the note overlay, the lightbox, and the
   nav menu. Call from each overlay's own keydown listener. */
function trapTabKey(e, container){
  if(e.key !== "Tab" || !container) return;
  const focusable = Array.prototype.slice.call(
    container.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
  );
  if(!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if(e.shiftKey && document.activeElement === first){
    e.preventDefault();
    last.focus();
  } else if(!e.shiftKey && document.activeElement === last){
    e.preventDefault();
    first.focus();
  }
}

const IMAGE_PLACEHOLDER_SVG =
  '<svg class="media-frame__empty-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">' +
  '<rect x="6" y="10" width="36" height="28" rx="3"></rect>' +
  '<circle cx="16" cy="19" r="3"></circle>' +
  '<path d="M42 30l-9.5-9.5a2 2 0 0 0-2.8 0L14 36"></path>' +
  '</svg>';

const VIDEO_PLACEHOLDER_SVG =
  '<svg class="media-frame__empty-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">' +
  '<rect x="6" y="9" width="36" height="30" rx="3"></rect>' +
  '<path d="M20 18l11 6-11 6z" fill="currentColor" stroke="none"></path>' +
  '</svg>';

const CHAPTERS = [
  // Home and "Her" are intentionally omitted from the menu:
  // the home page is already the starting point, and "Her" is no longer
  // presented as a separate chapter in the main navigation.
  { id: "memories", href: "memories.html", label: "Memories" },
  { id: "videos", href: "videos.html", label: "Together" },
  { id: "story", href: "story.html", label: "Our Story" },
  { id: "letter", href: "letter.html", label: "The Letter" },
  { id: "final", href: "final.html", label: "For You" }
];


/* ========================================================================
   2. MEDIA PLACEHOLDER FALLBACK
   ======================================================================== */

function wireMediaFallbacks(){
  document.querySelectorAll("[data-media-frame]").forEach(function(frame){
    const media = frame.querySelector("img, video");
    if(!media) return;
    const markEmpty = function(){ frame.classList.add("is-empty"); };

    if(media.tagName === "IMG"){
      if(media.complete && media.naturalWidth === 0){ markEmpty(); }
      else{ media.addEventListener("error", markEmpty, { once: true }); }
    } else if(media.tagName === "VIDEO"){
      if(media.error){ markEmpty(); }
      else{ media.addEventListener("error", markEmpty, { once: true }); }
    }
  });
}


/* ========================================================================
   3. CHROME — monogram, music toggle, nav menu, favicon
   ======================================================================== */

function setFavicon(){
  /* Keep the favicon defined in the HTML.
     The HTML <link rel="icon"> remains the source of truth. */
  const link = document.querySelector('link[rel="icon"]');

  if(link){
    link.type = "image/jpeg";
  }
}

function applyGirlfriendName(){
  const name = (CONFIG.girlfriendName || "").trim() || "You";
  document.querySelectorAll('[data-cfg="girlfriendName"]').forEach(function(el){
    el.textContent = name;
  });
}

const MUSIC_PREF_KEY = "bday_music_on";

function initMusicToggle(btn){
  if(!btn) return;
  if(!CONFIG.musicEnabled || !CONFIG.music){
    btn.hidden = true;
    return;
  }

  const audio = new Audio(CONFIG.music);
  audio.loop = true;
  audio.preload = "none";

  function reflectUI(){
    const playing = !audio.paused && !audio.ended;
    btn.classList.toggle("is-playing", playing);
    btn.setAttribute("aria-pressed", String(playing));
    btn.setAttribute("aria-label", playing ? "Pause background music" : "Play background music");
  }

  audio.addEventListener("play", reflectUI);
  audio.addEventListener("pause", reflectUI);
  audio.addEventListener("error", function(){ btn.hidden = true; });

  if(safeGet(MUSIC_PREF_KEY) === "1"){
    const p = audio.play();
    if(p && p.catch) p.catch(function(){ /* autoplay blocked — button stays paused, that's fine */ });
  }
  reflectUI();

  btn.addEventListener("click", function(){
    if(audio.paused){
      const p = audio.play();
      if(p && p.then){
        p.then(function(){ safeSet(MUSIC_PREF_KEY, "1"); }).catch(function(){});
      }
    } else {
      audio.pause();
      safeSet(MUSIC_PREF_KEY, "0");
    }
  });
}

function initChrome(){
  const root = document.getElementById("chrome-root");
  if(!root) return;

  const currentPage = document.body.dataset.page || "home";
  root.innerHTML =
    '<div class="grain" aria-hidden="true"></div>' +
    '<a class="chrome-mono" href="index.html" aria-label="Back to the beginning">AQSA</a>' +
    '<div class="chrome-top-right">' +
      '<button class="chrome-music" type="button" data-music-toggle aria-pressed="false" aria-label="Play background music">' +
        '<span class="chrome-music__bars" aria-hidden="true"><i></i><i></i><i></i></span>' +
      '</button>' +
      '<button class="chrome-nav-trigger" type="button" data-nav-trigger aria-haspopup="true" aria-expanded="false" aria-label="Open menu">' +
        '<span class="chrome-nav-trigger__label">MENU</span>' +
        '<span aria-hidden="true"></span><span aria-hidden="true"></span>' +
      '</button>' +
    '</div>' +
    '<nav class="chrome-nav" data-nav aria-hidden="true">' +
      '<div class="chrome-nav__inner">' +
        '<button class="chrome-nav__close" type="button" data-nav-close aria-label="Close menu">\u00D7</button>' +
        '<p class="chrome-nav__eyebrow">a little website for</p>' +
        '<p class="chrome-nav__name">' + escapeHTML(CONFIG.girlfriendName) + '</p>' +
        '<ol class="chrome-nav__list">' +
          CHAPTERS.map(function(c, i){
            return '<li class="chrome-nav__item' + (c.id === currentPage ? " is-current" : "") + '">' +
              '<a href="' + c.href + '"><span class="chrome-nav__index">0' + (i + 1) + '</span><span>' + escapeHTML(c.label) + '</span></a>' +
            '</li>';
          }).join("") +
        '</ol>' +
        '<p class="chrome-nav__eggs" data-eggs-found hidden></p>' +
      '</div>' +
    '</nav>';

  const trigger = root.querySelector("[data-nav-trigger]");
  const nav = root.querySelector("[data-nav]");
  const closeBtn = root.querySelector("[data-nav-close]");

  function openNav(){
    nav.classList.add("is-open");
    nav.setAttribute("aria-hidden", "false");
    trigger.setAttribute("aria-expanded", "true");
    document.body.classList.add("has-overlay-open");
  }
  function closeNav(){
    nav.classList.remove("is-open");
    nav.setAttribute("aria-hidden", "true");
    trigger.setAttribute("aria-expanded", "false");
    document.body.classList.remove("has-overlay-open");
  }

  trigger.addEventListener("click", function(){
    nav.classList.contains("is-open") ? closeNav() : openNav();
  });
  closeBtn.addEventListener("click", closeNav);
  nav.addEventListener("click", function(e){ if(e.target === nav) closeNav(); });
  document.addEventListener("keydown", function(e){
    if(!nav.classList.contains("is-open")) return;
    if(e.key === "Escape"){ closeNav(); return; }
    trapTabKey(e, nav);
  });

  initMusicToggle(root.querySelector("[data-music-toggle]"));
  setFavicon();
  updateEggsFoundDisplay();
}



function initFooter(){
  if(document.querySelector(".site-footer")) return;

  const main = document.querySelector("main");
  if(!main) return;

  const name = (CONFIG.girlfriendName || "Aqsa").trim() || "Aqsa";
  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.setAttribute("aria-label", "End of the site");

  footer.innerHTML =
    '<div class="site-footer__top">' +
      '<div class="site-footer__eyebrow">Personal archive · est. 2026</div>' +
      '<div class="site-footer__grid">' +
        '<div>' +
          '<div class="site-footer__spark" aria-hidden="true"></div>' +
          '<div class="site-footer__title" aria-label="' + escapeHTML(name) + '">' + escapeHTML(name.toUpperCase()) + '</div>' +
        '</div>' +
        '<p class="site-footer__dek">A little corner of the internet, made one chapter at a time, just for you.</p>' +
      '</div>' +
      '<div class="site-footer__rule" aria-hidden="true"></div>' +
    '</div>' +
    '<div class="site-footer__bottom">' +
      '<div class="site-footer__meta">' +
        '<span>Made with love</span>' +
        '<span>For ' + escapeHTML(name) + '</span>' +
        '<span>Always, a little more</span>' +
      '</div>' +
      '<a class="site-footer__top-link" href="#top" aria-label="Back to top">Back to the beginning</a>' +
    '</div>';

  main.appendChild(footer);

  // Give the page a stable target without altering visible page content.
  if(!document.getElementById("top")){
    const anchor = document.createElement("span");
    anchor.id = "top";
    anchor.setAttribute("aria-hidden", "true");
    anchor.style.position = "absolute";
    anchor.style.top = "0";
    anchor.style.left = "0";
    anchor.style.width = "1px";
    anchor.style.height = "1px";
    anchor.style.pointerEvents = "none";
    document.body.prepend(anchor);
  }
}

/* ========================================================================
   4. SCROLL DOT NAVIGATION
   ======================================================================== */
function initScrollDots(){
  if(prefersReducedMotion() && !document.querySelector("main")) return;

  const main = document.querySelector("main");
  if(!main) return;

  const candidates = Array.prototype.slice.call(
    main.querySelectorAll("[data-scroll-section], main > section, .chapters, .story-stop, .page-intro, .final-reveal")
  );

  const sections = [];
  const seen = new Set();
  candidates.forEach(function(el){
    if(seen.has(el) || !el || el.offsetHeight < 80) return;
    seen.add(el);
    sections.push(el);
  });

  // On pages with no semantic sections, use substantial direct children of <main>.
  if(sections.length < 2){
    main.querySelectorAll(":scope > *").forEach(function(el){
      if(seen.has(el) || el.offsetHeight < 180) return;
      if(el.matches(".grain, .lightbox, .note-overlay")) return;
      seen.add(el);
      sections.push(el);
    });
  }

  if(sections.length < 2) return;

  const layer = document.createElement("nav");
  layer.className = "scroll-dots";
  layer.setAttribute("aria-label", "Page sections");

  const dots = [];
  const usedLabels = new Set();

  function labelFor(section, index){
    const custom = section.getAttribute("data-scroll-label") || section.getAttribute("aria-label");
    if(custom) return custom;
    const heading = section.querySelector("h1, h2, h3");
    if(heading && heading.textContent.trim()) return heading.textContent.trim();
    const pageName = (document.body.dataset.page || "page").replace(/[-_]/g, " ");
    return pageName + " " + (index + 1);
  }

  sections.forEach(function(section, index){
    let label = labelFor(section, index);
    let base = label || ("Section " + (index + 1));
    let unique = base;
    let suffix = 2;
    while(usedLabels.has(unique)){ unique = base + " " + suffix++; }
    usedLabels.add(unique);

    const id = section.id || ("scroll-section-" + (index + 1));
    section.id = id;

    const dot = document.createElement("button");
    dot.className = "scroll-dot";
    dot.type = "button";
    dot.setAttribute("aria-label", "Go to " + unique);

    dot.addEventListener("click", function(){
      section.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "center" });
    });

    layer.appendChild(dot);
    dots.push({ dot: dot, section: section });
  });

  document.body.appendChild(layer);

  let activeIndex = -1;
  let ticking = false;

  function setActive(index){
    if(index === activeIndex) return;
    activeIndex = index;
    dots.forEach(function(item, i){
      const active = i === index;
      item.dot.classList.toggle("is-active", active);
      if(active) item.dot.setAttribute("aria-current", "true");
      else item.dot.removeAttribute("aria-current");
    });
  }

  function updateActive(){
    ticking = false;
    const targetY = window.innerHeight * 0.42;
    let closest = 0;
    let closestDistance = Infinity;

    dots.forEach(function(item, index){
      const rect = item.section.getBoundingClientRect();
      const center = rect.top + Math.min(rect.height, window.innerHeight * 0.72) / 2;
      const distance = Math.abs(center - targetY);
      const visible = rect.bottom > 0 && rect.top < window.innerHeight;
      const weighted = visible ? distance * 0.7 : distance + 1000;
      if(weighted < closestDistance){
        closestDistance = weighted;
        closest = index;
      }
    });

    if(window.scrollY <= 12) closest = 0;
    const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 16;
    if(nearBottom) closest = dots.length - 1;
    setActive(closest);
  }

  function requestUpdate(){
    if(ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateActive);
  }

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate, { passive: true });
  requestUpdate();
}

/* ========================================================================
   4. EASTER EGGS
   ======================================================================== */

const EGG_KEY = "bday_eggs_found";

function getFoundEggs(){
  try{ return JSON.parse(safeGet(EGG_KEY) || "[]"); }
  catch(e){ return []; }
}

function markEggFound(id){
  const found = getFoundEggs();
  if(found.indexOf(id) === -1){
    found.push(id);
    safeSet(EGG_KEY, JSON.stringify(found));
  }
}

function updateEggsFoundDisplay(){
  const el = document.querySelector("[data-eggs-found]");
  if(!el) return;
  const found = getFoundEggs();
  const total = (CONFIG.easterEggs && CONFIG.easterEggs.length) || 0;
  if(found.length > 0 && total > 0){
    el.hidden = false;
    el.textContent = "\u2726 " + found.length + " of " + total + " little discoveries found";
  } else {
    el.hidden = true;
  }
}

function initEasterEggs(){
  const found = getFoundEggs();
  document.querySelectorAll("[data-egg]").forEach(function(el){
    const id = el.dataset.egg;
    if(found.indexOf(id) !== -1) el.classList.add("is-found");
    el.addEventListener("click", function(){
      markEggFound(id);
      el.classList.add("is-found");
      const cfg = (CONFIG.easterEggs || []).find(function(e){ return e.id === id; });
      showNote({
        title: "You found one.",
        body: cfg ? cfg.message : "PLACEHOLDER — add a message for this discovery in CONFIG.easterEggs."
      });
      updateEggsFoundDisplay();
    });
  });
}


/* ========================================================================
   5. NOTE OVERLAY (shared "reveal a message" popup)
   ======================================================================== */

let noteOverlayEl = null;
let noteLastFocused = null;

function ensureNoteOverlay(){
  if(noteOverlayEl) return noteOverlayEl;

  noteOverlayEl = document.createElement("div");
  noteOverlayEl.className = "note-overlay";
  noteOverlayEl.innerHTML =
    '<div class="note-card" role="dialog" aria-modal="true" aria-labelledby="note-card-title">' +
      '<button class="note-card__close" type="button" aria-label="Close">\u00D7</button>' +
      '<h3 class="note-card__title" id="note-card-title" data-note-title></h3>' +
      '<p class="note-card__body" data-note-body></p>' +
    '</div>';
  document.body.appendChild(noteOverlayEl);

  noteOverlayEl.addEventListener("click", function(e){
    if(e.target === noteOverlayEl) closeNote();
  });
  noteOverlayEl.querySelector(".note-card__close").addEventListener("click", closeNote);
  document.addEventListener("keydown", function(e){
    if(!noteOverlayEl.classList.contains("is-open")) return;
    if(e.key === "Escape"){ closeNote(); return; }
    trapTabKey(e, noteOverlayEl);
  });

  return noteOverlayEl;
}

function showNote(opts){
  const overlay = ensureNoteOverlay();
  overlay.querySelector("[data-note-title]").textContent = opts.title || "";
  overlay.querySelector("[data-note-body]").textContent = opts.body || "";
  noteLastFocused = document.activeElement;
  overlay.classList.add("is-open");
  document.body.classList.add("has-overlay-open");
  overlay.querySelector(".note-card__close").focus();
}

function closeNote(){
  if(!noteOverlayEl) return;
  noteOverlayEl.classList.remove("is-open");
  document.body.classList.remove("has-overlay-open");
  if(noteLastFocused && typeof noteLastFocused.focus === "function") noteLastFocused.focus();
}


/* ========================================================================
   6. LIGHTBOX (photo viewer, memories.html)
   ======================================================================== */

let lightboxEl = null;
let lightboxItems = [];
let lightboxIndex = 0;
let lightboxLastFocused = null;

function ensureLightbox(){
  if(lightboxEl) return lightboxEl;

  lightboxEl = document.createElement("div");
  lightboxEl.className = "lightbox";
  lightboxEl.setAttribute("role", "dialog");
  lightboxEl.setAttribute("aria-modal", "true");
  lightboxEl.setAttribute("aria-label", "Photo viewer");
  lightboxEl.innerHTML =
    '<button class="lightbox__close" type="button" aria-label="Close">\u00D7</button>' +
    '<button class="lightbox__prev" type="button" aria-label="Previous photo">\u2039</button>' +
    '<div class="lightbox__stage">' +
      '<img class="lightbox__img" alt="">' +
      '<div class="lightbox__meta">' +
        '<span class="lightbox__date" data-lightbox-date></span>' +
        '<p class="lightbox__caption" data-lightbox-caption></p>' +
      '</div>' +
    '</div>' +
    '<button class="lightbox__next" type="button" aria-label="Next photo">\u203A</button>';
  document.body.appendChild(lightboxEl);

  const img = lightboxEl.querySelector(".lightbox__img");
  const stage = lightboxEl.querySelector(".lightbox__stage");
  img.addEventListener("error", function(){ stage.classList.add("is-empty"); });
  img.addEventListener("load", function(){ stage.classList.remove("is-empty"); });

  lightboxEl.querySelector(".lightbox__close").addEventListener("click", closeLightbox);
  lightboxEl.querySelector(".lightbox__prev").addEventListener("click", function(){ stepLightbox(-1); });
  lightboxEl.querySelector(".lightbox__next").addEventListener("click", function(){ stepLightbox(1); });
  lightboxEl.addEventListener("click", function(e){ if(e.target === lightboxEl) closeLightbox(); });

  document.addEventListener("keydown", function(e){
    if(!lightboxEl.classList.contains("is-open")) return;
    if(e.key === "Escape"){ closeLightbox(); return; }
    if(e.key === "ArrowLeft"){ stepLightbox(-1); return; }
    if(e.key === "ArrowRight"){ stepLightbox(1); return; }
    trapTabKey(e, lightboxEl);
  });

  let touchStartX = null;
  lightboxEl.addEventListener("touchstart", function(e){ touchStartX = e.changedTouches[0].clientX; }, { passive: true });
  lightboxEl.addEventListener("touchend", function(e){
    if(touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if(Math.abs(dx) > 40) stepLightbox(dx < 0 ? 1 : -1);
    touchStartX = null;
  }, { passive: true });

  return lightboxEl;
}

function renderLightboxItem(){
  const item = lightboxItems[lightboxIndex];
  if(!item) return;
  const img = lightboxEl.querySelector(".lightbox__img");
  lightboxEl.querySelector(".lightbox__stage").classList.remove("is-empty");
  img.src = item.src;
  img.alt = item.caption || "";
  lightboxEl.querySelector("[data-lightbox-date]").textContent = item.date || "";
  lightboxEl.querySelector("[data-lightbox-caption]").textContent = item.caption || "";
}

function openLightbox(items, startIndex){
  ensureLightbox();
  lightboxItems = items;
  lightboxIndex = startIndex;
  renderLightboxItem();
  lightboxLastFocused = document.activeElement;
  lightboxEl.classList.add("is-open");
  document.body.classList.add("has-overlay-open");
  lightboxEl.querySelector(".lightbox__close").focus();
}

function stepLightbox(delta){
  if(!lightboxItems.length) return;
  lightboxIndex = (lightboxIndex + delta + lightboxItems.length) % lightboxItems.length;
  renderLightboxItem();
}

function closeLightbox(){
  if(!lightboxEl) return;
  lightboxEl.classList.remove("is-open");
  document.body.classList.remove("has-overlay-open");
  if(lightboxLastFocused && typeof lightboxLastFocused.focus === "function") lightboxLastFocused.focus();
}

function initLightbox(){
  const grid = document.querySelector("[data-scrapbook]");
  if(!grid) return;
  grid.addEventListener("click", function(e){
    const btn = e.target.closest(".scrapbook__item button");
    if(!btn) return;
    openLightbox(CONFIG.memories, Number(btn.dataset.index));
  });
}


/* ========================================================================
   7. SCROLL REVEAL
   ======================================================================== */

function initScrollReveal(){
  const items = document.querySelectorAll(".reveal:not(.is-visible)");
  if(!items.length) return;

  if(!("IntersectionObserver" in window)){
    items.forEach(function(el){ el.classList.add("is-visible"); });
    return;
  }

  const observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });

  items.forEach(function(el){ observer.observe(el); });
}


/* ========================================================================
   8. CUSTOM CURSOR + MAGNETIC BUTTONS (desktop only)
   ======================================================================== */

function initCustomCursor(){ 
  if(!canHover()) return; 
 
  document.documentElement.classList.add("has-custom-cursor"); 
 
  const dot = document.createElement("div"); 
  dot.className = "cursor-dot"; 
 
  const ring = document.createElement("div"); 
  ring.className = "cursor-ring"; 
 
  const trail = document.createElement("div"); 
  trail.className = "cursor-trail"; 
  trail.setAttribute("aria-hidden", "true"); 
 
  const trailDots = []; 
  for(let i = 0; i < 5; i++){ 
    const trailDot = document.createElement("span"); 
    trailDot.className = "cursor-trail__dot"; 
    trail.appendChild(trailDot); 
    trailDots.push(trailDot); 
  } 
 
  document.body.append(trail, dot, ring); 
 
  let targetX = window.innerWidth / 2; 
  let targetY = window.innerHeight / 2; 
  let ringX = targetX; 
  let ringY = targetY; 
 
  const trailX = trailDots.map(function(){ return targetX; }); 
  const trailY = trailDots.map(function(){ return targetY; }); 
 
  window.addEventListener("mousemove", function(e){ 
    targetX = e.clientX; 
    targetY = e.clientY; 
 
    /* Keep the main dot locked exactly to the pointer. */ 
    dot.style.transform = "translate3d(" + e.clientX + "px," + e.clientY + "px,0)"; 
  }, { passive: true }); 
 
  function raf(){ 
    ringX += (targetX - ringX) * 0.18; 
    ringY += (targetY - ringY) * 0.18; 
    ring.style.transform = "translate3d(" + ringX + "px," + ringY + "px,0)"; 
 
    /* Slower, smoother trail: each dot eases behind the one ahead of it. */ 
    let leadX = targetX; 
    let leadY = targetY; 
 
    trailDots.forEach(function(trailDot, index){ 
      const ease = 0.22 - (index * 0.014); 
 
      trailX[index] += (leadX - trailX[index]) * ease; 
      trailY[index] += (leadY - trailY[index]) * ease; 
 
      const scale = 0.98 - (index * 0.07); 
      trailDot.style.transform = 
        "translate3d(" + 
        trailX[index].toFixed(2) + "px," + 
        trailY[index].toFixed(2) + "px,0) scale(" + 
        scale.toFixed(2) + ")"; 
 
      leadX = trailX[index]; 
      leadY = trailY[index]; 
    }); 
 
    requestAnimationFrame(raf); 
  } 
 
  requestAnimationFrame(raf); 
 
  const interactiveSelector = "a, button, .scrapbook__item, .notes-field__item, .video-slide, .reason-card__face, [role='button']"; 
 
  function setHoverState(isHovering){ 
    ring.classList.toggle("is-active", isHovering); 
    dot.classList.toggle("is-hovering", isHovering); 
 
    /* When entering an interactive element, snap the outer ring to the 
       pointer once so the dot sits perfectly centered inside it immediately. */ 
    if(isHovering){ 
      ringX = targetX; 
      ringY = targetY; 
      ring.style.transform = "translate3d(" + targetX + "px," + targetY + "px,0)"; 
    } 
  } 
 
  document.addEventListener("mouseover", function(e){ 
    if(e.target.closest(interactiveSelector)) setHoverState(true); 
  }); 
 
  document.addEventListener("mouseout", function(e){ 
    if(e.target.closest(interactiveSelector) && !e.relatedTarget?.closest?.(interactiveSelector)){ 
      setHoverState(false); 
    } 
  }); 
}

function initMagneticButtons(){
  if(!canHover()) return;
  document.querySelectorAll("[data-magnetic]").forEach(function(btn){
    btn.addEventListener("mousemove", function(e){
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      btn.style.transform = "translate(" + (x * 0.22).toFixed(1) + "px," + (y * 0.32).toFixed(1) + "px)";
    });
    btn.addEventListener("mouseleave", function(){ btn.style.transform = ""; });
  });
}


/* ========================================================================
   9. PAGE RENDERERS
   ======================================================================== */

function renderAboutHer(){
  const container = document.querySelector("[data-about-her]");
  if(!container) return;
  if(!CONFIG.aboutHer || !CONFIG.aboutHer.length){
    container.innerHTML = '<p class="empty-note">Add a few lines to the <code>aboutHer</code> list in js/script.js to fill this section.</p>';
    return;
  }
  container.innerHTML = (CONFIG.aboutHer || []).map(function(item, i){
    return '<button class="notes-field__item reveal" type="button" style="--i:' + i + '" data-index="' + i + '">' +
      '<span class="notes-field__line">' + escapeHTML(item.line) + '</span>' +
    '</button>';
  }).join("");
}

function initAboutHerInteractions(){
  const container = document.querySelector("[data-about-her]");
  if(!container) return;
  container.addEventListener("click", function(e){
    const btn = e.target.closest(".notes-field__item");
    if(!btn) return;
    const item = CONFIG.aboutHer[Number(btn.dataset.index)];
    if(!item) return;
    showNote({ title: item.line, body: item.detail });
  });
}

function renderReasons(){
  const grid = document.querySelector("[data-reasons]");
  if(!grid) return;
  if(!CONFIG.reasons || !CONFIG.reasons.length){
    grid.innerHTML = '<p class="empty-note">Add a few notes to the <code>reasons</code> list in js/script.js to fill this section.</p>';
    return;
  }
  grid.innerHTML = (CONFIG.reasons || []).map(function(r, i){
    return '<div class="reason-card reveal" style="--i:' + i + '">' +
      '<button type="button" class="reason-card__face" aria-expanded="false">' +
        '<span class="reason-card__pin" aria-hidden="true"></span>' +
        '<span class="reason-card__title">' + escapeHTML(r.title) + '</span>' +
        '<span class="reason-card__plus" aria-hidden="true">+</span>' +
      '</button>' +
      '<div class="reason-card__detail"><p>' + escapeHTML(r.detail) + '</p></div>' +
    '</div>';
  }).join("");
}

function initReasons(){
  const grid = document.querySelector("[data-reasons]");
  if(!grid) return;
  grid.addEventListener("click", function(e){
    const btn = e.target.closest(".reason-card__face");
    if(!btn) return;
    const card = btn.closest(".reason-card");
    const isOpen = card.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(isOpen));
  });
}

function renderMemories(){
  const grid = document.querySelector("[data-scrapbook]");
  if(!grid) return;
  const items = CONFIG.memories || [];

  if(!items.length){
    grid.innerHTML = '<p class="empty-note">Add a few photos to the <code>memories</code> list in js/script.js to fill this page.</p>';
    return;
  }

  grid.innerHTML = items.map(function(item, i){
    return '<div class="scrapbook__item reveal" style="--i:' + i + '">' +
      '<button type="button" data-index="' + i + '" aria-label="Open photo: ' + escapeHTML(item.caption || "memory") + '">' +
        '<div class="media-frame" data-media-frame>' +
          '<img class="media-frame__media" src="' + escapeHTML(item.src) + '" alt="' + escapeHTML(item.caption || "") + '" loading="lazy" decoding="async">' +
          '<div class="media-frame__empty" aria-hidden="true">' + IMAGE_PLACEHOLDER_SVG +
            '<span class="media-frame__empty-label">' + escapeHTML(item.src) + '</span>' +
          '</div>' +
        '</div>' +
      '</button>' +
      '<div class="scrapbook__caption">' +
        '<span>' + escapeHTML(item.caption || "") + '</span>' +
        (item.date ? '<time>' + escapeHTML(item.date) + '</time>' : "") +
      '</div>' +
    '</div>';
  }).join("");

  const egg = document.createElement("button");
  egg.className = "egg egg--scrapbook";
  egg.type = "button";
  egg.dataset.egg = "egg-scrapbook";
  egg.setAttribute("aria-label", "A tiny hidden something");
  egg.innerHTML = '<span aria-hidden="true">\u2726</span>';
  grid.appendChild(egg);
}

function renderVideos(){
  const feed = document.querySelector("[data-video-feed]");
  if(!feed) return;
  const items = CONFIG.videos || [];
  const bar = document.querySelector("[data-filter-bar]");

  if(!items.length){
    feed.innerHTML = '<p class="empty-note" style="margin:auto;color:var(--muted-on-dark);">Add a few clips to the <code>videos</code> list in js/script.js to fill this page.</p>';
    if(bar) bar.hidden = true;
    return;
  }

  feed.innerHTML = items.map(function(v, i){
    return '<div class="video-slide" data-category="' + escapeHTML(v.category || "MEMORIES") + '" style="--i:' + i + '" aria-label="' + escapeHTML(v.caption || "video") + '">' +
      '<div class="media-frame video-slide__media" data-media-frame>' +
        '<video class="media-frame__media" src="' + escapeHTML(v.src) + '" muted playsinline loop preload="metadata"></video>' +
        '<div class="media-frame__empty" aria-hidden="true">' + VIDEO_PLACEHOLDER_SVG +
          '<span class="media-frame__empty-label">' + escapeHTML(v.src) + '</span>' +
        '</div>' +
      '</div>' +
      '<div class="video-slide__scrim" aria-hidden="true"></div>' +
      '<div class="video-slide__meta">' +
        '<span class="video-slide__category">' + escapeHTML(v.category || "") + (v.featured ? ' <span class="video-slide__star">\u2605</span>' : "") + '</span>' +
        '<p class="video-slide__caption">' + escapeHTML(v.caption || "") + '</p>' +
      '</div>' +
    '</div>';
  }).join("");

  if(bar){
    const seen = [];
    items.forEach(function(v){
      const cat = v.category || "MEMORIES";
      if(seen.indexOf(cat) === -1) seen.push(cat);
    });
    const cats = ["ALL"].concat(seen);
    bar.innerHTML = cats.map(function(c, i){
      return '<button type="button" class="filter-bar__chip' + (i === 0 ? " is-active" : "") + '" aria-pressed="' + (i === 0 ? "true" : "false") + '" data-category="' + escapeHTML(c) + '">' + escapeHTML(c) + '</button>';
    }).join("");
  }
}

function renderTimeline(){
  const track = document.querySelector("[data-story-track]");
  if(!track) return;
  const items = CONFIG.timeline || [];

  document.querySelectorAll(".story-pin").forEach(function(el){
    el.style.setProperty("--stop-count", items.length);
  });

  if(!items.length){
    track.innerHTML = '<p class="empty-note">Add a few moments to the <code>timeline</code> list in js/script.js to fill this page.</p>';
    return;
  }

  const EGG_MARKUP = '<button type="button" class="egg egg--story" data-egg="egg-story" aria-label="A tiny hidden something"><span aria-hidden="true">\u2726</span></button>';

  track.innerHTML = items.map(function(stop, i){
    const isCoda = i === items.length - 1;
    return '<article class="story-stop reveal' + (isCoda ? " story-stop--coda" : "") + '" style="--i:' + i + '">' +
      (stop.date ? '<p class="story-stop__date">' + escapeHTML(stop.date) + '</p>' : "") +
      '<h3 class="story-stop__title">' + escapeHTML(stop.title) + '</h3>' +
      (stop.image ? (
        '<div class="media-frame story-stop__media" data-media-frame>' +
          '<img class="media-frame__media" src="' + escapeHTML(stop.image) + '" alt="' + escapeHTML(stop.title) + '" loading="lazy" decoding="async">' +
          '<div class="media-frame__empty" aria-hidden="true">' + IMAGE_PLACEHOLDER_SVG +
            '<span class="media-frame__empty-label">' + escapeHTML(stop.image) + '</span>' +
          '</div>' +
        '</div>'
      ) : "") +
      '<p class="story-stop__text">' + escapeHTML(stop.text) + '</p>' +
      /* The hidden discovery lives inside the final (coda) stop itself,
         positioned absolutely there — never as an extra flex item in the
         track, which would otherwise get counted as one more horizontally-
         scrolled "slide" and throw off the desktop scroll-width math. */
      (isCoda ? EGG_MARKUP : "") +
    '</article>';
  }).join("");
}

function renderLetter(){
  const body = document.querySelector("[data-letter-body]");
  if(body){
    const paragraphs = (CONFIG.letter && CONFIG.letter.paragraphs) || [];
    body.innerHTML = paragraphs.length
      ? paragraphs.map(function(p){ return "<p>" + escapeHTML(p) + "</p>"; }).join("")
      : '<p class="empty-note">Add your letter to <code>letter.paragraphs</code> in js/script.js.</p>';
  }
  const sig = document.querySelector("[data-letter-signature]");
  if(sig) sig.textContent = (CONFIG.letter && CONFIG.letter.signature) || "";
}

function renderFinalMessage(){
  const el = document.querySelector("[data-final-message]");
  if(!el) return;
  const messages = CONFIG.finalMessage || [];
  el.innerHTML = messages.length
    ? messages.map(function(p){ return "<p>" + escapeHTML(p) + "</p>"; }).join("")
    : '<p class="empty-note">Add your closing message to <code>finalMessage</code> in js/script.js.</p>';
}


/* ========================================================================
   10. PAGE INTERACTIONS
   ======================================================================== */

/* ---- Cute entry security question (index.html) ---- */
function initEntrySecurityQuestion(root, onSuccess){
  if(!root) return;

  /* Re-use the same modal when Enter is pressed again after closing it.
     This avoids creating duplicate overlays/listeners while keeping the
     question available for another try. */
  if(typeof root._entrySecurityOpen === "function"){
    root._entrySecurityOpen();
    return;
  }

  let overlay = null;
  let input = null;
  let submitBtn = null;
  let message = null;
  let title = null;
  let prompt = null;
  let closeBtn = null;
  let gateEnterBtn = root.querySelector("[data-gate-enter]");
  let lastFocused = null;
  let successTimer = null;

  function ensureSecurityModal(){
    if(overlay) return overlay;

    overlay = document.createElement("div");
    overlay.className = "entry-security";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-labelledby", "entry-security-title");
    overlay.setAttribute("aria-describedby", "entry-security-prompt");
    overlay.hidden = true;

    overlay.innerHTML =
      '<div class="entry-security__card">' +
        '<button class="entry-security__close" type="button" aria-label="Close">×</button>' +
        '<p class="entry-security__eyebrow">one little question ♡</p>' +
        '<h2 class="entry-security__title" id="entry-security-title">Before you come in...</h2>' +
        '<p class="entry-security__prompt" id="entry-security-prompt">What do you like to call me the most?</p>' +
        '<label class="entry-security__label" for="entrySecurityAnswer">Your answer</label>' +
        '<input class="entry-security__input" id="entrySecurityAnswer" type="text" autocomplete="off" spellcheck="false" placeholder="type it here..." maxlength="40">' +
        '<button class="entry-security__submit" type="button">Let me in ♡</button>' +
        '<p class="entry-security__message" aria-live="polite"></p>' +
      '</div>';

    document.body.appendChild(overlay);

    input = overlay.querySelector("#entrySecurityAnswer");
    submitBtn = overlay.querySelector(".entry-security__submit");
    message = overlay.querySelector(".entry-security__message");
    title = overlay.querySelector(".entry-security__title");
    prompt = overlay.querySelector(".entry-security__prompt");
    closeBtn = overlay.querySelector(".entry-security__close");

    function closeModal(){
      if(!overlay || overlay.hidden) return;
      if(successTimer) clearTimeout(successTimer);
      overlay.classList.remove("is-open", "is-success", "is-error");
      if(gateEnterBtn && !root.dataset.securityPassed){
        gateEnterBtn.disabled = false;
      }
      document.documentElement.classList.remove("entry-security-open");
      window.setTimeout(function(){
        if(overlay){
          overlay.hidden = true;
          document.body.classList.remove("has-overlay-open");
        }
      }, 260);
      if(lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
    }

    function showSuccess(){
      overlay.classList.remove("is-error");
      overlay.classList.add("is-success");
      title.textContent = "YAYYYYYYYYYYYYYYYYY :) ♡";
      prompt.textContent = "Okay... I know it's you. Come on in. ✨";
      input.hidden = true;
      submitBtn.hidden = true;
      overlay.querySelector(".entry-security__label").hidden = true;
      message.textContent = "Correct answer.";

      successTimer = window.setTimeout(function(){
        /* Mark the gate as passed BEFORE closing so the Enter button stays
           disabled until the original gate begins its exit animation. */
        root.dataset.securityPassed = "true";
        closeModal();
        window.setTimeout(function(){
          if(typeof onSuccess === "function") onSuccess();
        }, 300);
      }, 1000);
    }

    function checkAnswer(){
      const answer = (input.value || "").trim().toLowerCase();
      if(answer === "batman"){
        showSuccess();
        return;
      }

      overlay.classList.remove("is-success");
      overlay.classList.add("is-error");
      message.textContent = "Hmm... that's not it ♡ Try again.";
      input.focus();
      input.select();
    }

    submitBtn.addEventListener("click", checkAnswer);
    input.addEventListener("keydown", function(e){
      if(e.key === "Enter"){
        e.preventDefault();
        checkAnswer();
      }
    });
    closeBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", function(e){
      if(e.target === overlay) closeModal();
    });
    document.addEventListener("keydown", function(e){
      if(!overlay || overlay.hidden) return;
      if(e.key === "Escape"){
        e.preventDefault();
        closeModal();
        return;
      }
      trapTabKey(e, overlay);
    });

    overlay._open = function(){
      lastFocused = document.activeElement;
      overlay.hidden = false;
      overlay.classList.remove("is-success", "is-error");
      title.textContent = "Before you come in...";
      prompt.textContent = "What do you like to call me the most?";
      input.hidden = false;
      submitBtn.hidden = false;
      overlay.querySelector(".entry-security__label").hidden = false;
      message.textContent = "";
      input.value = "";
      document.body.classList.add("has-overlay-open");
      document.documentElement.classList.add("entry-security-open");
      requestAnimationFrame(function(){
        overlay.classList.add("is-open");
        /* Make keyboard entry reliable even when the custom cursor is active. */
        input.focus({ preventScroll: true });
        input.select();
      });
    };

    return overlay;
  }

  const modal = ensureSecurityModal();
  root._entrySecurityOpen = modal._open;
  modal._open();
}

/* ---- Gate sequence (shared by index.html and final.html) ---- */
function initGateSequence(root, opts){
  if(!root) return;
  opts = opts || {};

  const lines = Array.prototype.slice.call(root.querySelectorAll("[data-gate-line]"));
  const enterBtn = root.querySelector("[data-gate-enter]");
  let step = 0;
  let autoTimer = null;

  // Restore the original home-page cinematic flower shower.
  // It only appears on the main entry gate, never on the final reveal.
  const isHomeGate = root.matches("[data-gate]") && !root.matches("[data-final-gate]");

  function buildGateFloaters(){
    if(!isHomeGate) return;
    if(root.querySelector(".gate__floaters")) return;

    // Romantic flower/petal shower used on the main cinematic entry.
    // It falls from above, fades through the screen, and is intentionally
    // kept separate from the final-page reveal.
    const symbols = ["✿", "❀", "❁", "✾", "✽", "✿", "❀", "♡", "✦"];
    const types = ["", "--soft", "--gold"];
    const wrap = document.createElement("div");
    wrap.className = "gate__floaters";
    wrap.setAttribute("aria-hidden", "true");

    const frag = document.createDocumentFragment();
    const reduced = prefersReducedMotion();
    const count = window.matchMedia && window.matchMedia("(max-width: 700px)").matches ? 24 : 38;

    for(let i = 0; i < count; i++){
      const floater = document.createElement("span");
      floater.className = "gate__floater gate__floater" + types[i % types.length];
      floater.textContent = symbols[i % symbols.length];
      floater.style.setProperty("--x", (1 + Math.random() * 98).toFixed(2) + "%");
      floater.style.setProperty("--s", (0.62 + Math.random() * 1.45).toFixed(2) + "rem");
      floater.style.setProperty("--d", (6.2 + Math.random() * 7.2).toFixed(2) + "s");
      floater.style.setProperty("--delay", (-Math.random() * 8).toFixed(2) + "s");
      floater.style.setProperty("--drift", (Math.random() * 180 - 90).toFixed(0) + "px");
      floater.style.setProperty("--r", (Math.random() * 100 - 50).toFixed(0) + "deg");
      frag.appendChild(floater);
    }

    wrap.appendChild(frag);
    root.appendChild(wrap);

    // Keep the shower visible even when the user has reduced-motion enabled:
    // the CSS simply switches it to a gentle, non-moving atmospheric state.
    if(reduced) wrap.classList.add("is-static");
  }

  buildGateFloaters();

  function showStep(i){
    lines.forEach(function(l, idx){ l.classList.toggle("is-active", idx === i); });
    if(enterBtn){
      const atEnd = i >= lines.length - 1;
      enterBtn.classList.toggle("is-visible", atEnd);
      enterBtn.disabled = !atEnd;
    }
  }

  function advance(){
    if(step < lines.length - 1){
      step++;
      showStep(step);
      if(step >= lines.length - 1 && autoTimer){ clearInterval(autoTimer); }
    }
  }

  showStep(0);

  if(!prefersReducedMotion()){
    autoTimer = setInterval(function(){
      if(step >= lines.length - 1){ clearInterval(autoTimer); return; }
      advance();
    }, 1700);
  } else {
    // Reduced motion: skip straight to the final line and button.
    step = lines.length - 1;
    showStep(step);
  }

  root.addEventListener("click", function(e){
    if(enterBtn && e.target.closest("[data-gate-enter]")) return;
    if(autoTimer) clearInterval(autoTimer);
    advance();
  });

  if(enterBtn){
    enterBtn.addEventListener("click", function(){
      /* The main home gate gets one playful question before it opens. */
      if(isHomeGate && !root.dataset.securityPassed){
        enterBtn.disabled = true;
        initEntrySecurityQuestion(root, function(){
          root.dataset.securityPassed = "true";
          root.classList.add("is-leaving");
          window.setTimeout(function(){
            root.hidden = true;
            if(typeof opts.onEnter === "function") opts.onEnter();
          }, 750);
        });
        return;
      }

      root.classList.add("is-leaving");
      window.setTimeout(function(){
        root.hidden = true;
        if(typeof opts.onEnter === "function") opts.onEnter();
      }, 750);
    });
  }
}

/* ---- Home page (index.html) ---- */
function applyHeroImage(){
  const hero = document.querySelector("[data-hero]");
  if(!hero || !CONFIG.heroImage) return;

  const img = hero.querySelector(".hero__media img");
  if(!img) return;

  // CONFIG is the single source of truth for the hero image.
  img.src = CONFIG.heroImage;
  img.alt = CONFIG.girlfriendName ? CONFIG.girlfriendName + " — birthday photo" : "Birthday photo";
  img.loading = "eager";
  img.decoding = "async";

  const frame = img.closest("[data-media-frame]");
  img.addEventListener("load", function(){
    if(frame) frame.classList.remove("is-empty");
  }, { once: true });
  img.addEventListener("error", function(){
    console.warn("Hero image could not be loaded:", CONFIG.heroImage);
    if(frame) frame.classList.add("is-empty");
  }, { once: true });
}

function initHomePage(){
  const gate = document.querySelector("[data-gate]");
  const hero = document.querySelector("[data-hero]");

  // Prime the hero to fade/rise in the instant the gate dismisses, rather
  // than having sat there fully visible (just hidden behind the gate) the
  // whole time. Added here, in JS, so a no-JS visitor never sees a hero
  // that's stuck invisible — see .hero.is-priming in style.css.
  if(hero) hero.classList.add("is-priming");

  applyHeroImage();

  initGateSequence(gate, {
    onEnter: function(){
      if(hero){
        hero.classList.remove("is-priming");
        const name = hero.querySelector(".hero__name");
        if(name){
          name.setAttribute("tabindex", "-1");
          name.focus();
        }
      }
    }
  });
}

/* ---- Countdown (index.html) ---- */
function initCountdown(){
  if(!CONFIG.countdownEnabled || !CONFIG.birthdayDate) return;
  const el = document.querySelector("[data-countdown]");
  if(!el) return;

  const target = new Date(CONFIG.birthdayDate).getTime();
  if(Number.isNaN(target)) return;

  el.hidden = false;

  function render(){
    const diff = target - Date.now();
    if(diff <= 0){
      el.innerHTML = '<p class="countdown__label">it\u2019s today \u2726</p>';
      clearInterval(timer);
      return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor(diff / 3600000) % 24;
    const m = Math.floor(diff / 60000) % 60;
    const s = Math.floor(diff / 1000) % 60;
    const dEl = el.querySelector("[data-cd-d]");
    const hEl = el.querySelector("[data-cd-h]");
    const mEl = el.querySelector("[data-cd-m]");
    const sEl = el.querySelector("[data-cd-s]");
    if(dEl) dEl.textContent = String(d);
    if(hEl) hEl.textContent = String(h).padStart(2, "0");
    if(mEl) mEl.textContent = String(m).padStart(2, "0");
    if(sEl) sEl.textContent = String(s).padStart(2, "0");
  }

  render();
  const timer = setInterval(render, 1000);
}


/* ---- Birthday age calculator (final.html) ---- */
function initAgeCalculator(){
  const input = document.getElementById("birthdayDateInput");
  const button = document.getElementById("calculateAgeBtn");
  const result = document.getElementById("birthdayAgeResult");

  if(!input || !button || !result) return;

  button.addEventListener("click", function(){
    const value = input.value;

    if(!value){
      result.hidden = false;
      result.innerHTML = "<strong>Please choose your date of birth first. ♡</strong>";
      return;
    }

    const parts = value.split("-").map(Number);

    if(parts.length !== 3 || parts.some(Number.isNaN)){
      result.hidden = false;
      result.innerHTML = "<strong>Please choose a valid date. ♡</strong>";
      return;
    }

    const birthYear = parts[0];
    const birthMonth = parts[1] - 1;
    const birthDay = parts[2];

    const today = new Date();

    const birthDate = new Date(
      birthYear,
      birthMonth,
      birthDay
    );

    /* Reject impossible dates that JavaScript would otherwise normalize. */
    if(
      birthDate.getFullYear() !== birthYear ||
      birthDate.getMonth() !== birthMonth ||
      birthDate.getDate() !== birthDay
    ){
      result.hidden = false;
      result.innerHTML = "<strong>Please choose a valid date. ♡</strong>";
      return;
    }

    if(birthDate > today){
      result.hidden = false;
      result.innerHTML = "<strong>That birthday hasn't happened yet. ✨</strong>";
      return;
    }

    let years = today.getFullYear() - birthYear;
    let months = today.getMonth() - birthMonth;
    let days = today.getDate() - birthDay;

    if(days < 0){
      months--;

      const previousMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      );

      days += previousMonth.getDate();
    }

    if(months < 0){
      years--;
      months += 12;
    }

    result.hidden = false;
    result.innerHTML =
      "<strong>You are " +
      years +
      " years, " +
      months +
      " months, and " +
      days +
      " days old. 🎂♡</strong>";
  });
}


/* ---- MAIN VIDEO FEED (videos.html) ----
   Handles:
   - Main/active video detection
   - Automatic playback
   - Tap video = play / pause
   - Video sound toggle
   - Next / Previous navigation
   - Keyboard arrow navigation
   - Category filters
   - Desktop horizontal wheel scrolling
   ------------------------------------------------------------ */
/* ---- MAIN VIDEO FEED (videos.html) ----
   Handles:
   - One stable MAIN / ACTIVE video
   - Automatic playback when a video becomes centered
   - Tap video = play / pause
   - Video sound toggle
   - Next / Previous navigation
   - Keyboard arrow navigation
   - Category filters
   - Desktop horizontal wheel scrolling

   NOTE:
   This version intentionally does NOT use IntersectionObserver.
   The observer could repeatedly change .is-active while smooth
   scrolling was happening, which caused videos to visually
   jump between large/small states.
   ------------------------------------------------------------ */
function initVideoFeed(){
  const feed = document.querySelector("[data-video-feed]");
  if(!feed) return;

  const soundBtn = document.querySelector("[data-video-sound]");

  let soundOn = true;
  let manuallyPaused = false;
  let activeSlide = null;
  let navigationInProgress = false;
  let scrollTimer = null;
  let animationFrame = null;

  function getSlides(){
    return Array.prototype.slice.call(
      feed.querySelectorAll(".video-slide")
    );
  }

  function getVisibleSlides(){
    return getSlides().filter(function(slide){
      return !slide.classList.contains("is-filtered-out");
    });
  }

  /* ------------------------------------------------------------
     Pause every video except the selected MAIN video.
     ------------------------------------------------------------ */
  function pauseAllExcept(selectedSlide){
    getSlides().forEach(function(slide){
      const video = slide.querySelector("video");

      if(!video) return;

      if(slide !== selectedSlide){
        video.pause();
      }
    });
  }

  /* ------------------------------------------------------------
     Set exactly ONE video as the MAIN / ACTIVE video.
     This is what controls the desktop scale/opacity.
     ------------------------------------------------------------ */
  function setActiveSlide(slide, shouldPlay){
    if(!slide) return;

    const slides = getSlides();

    slides.forEach(function(other){
      other.classList.toggle(
        "is-active",
        other === slide
      );
    });

    activeSlide = slide;

    pauseAllExcept(slide);

    const video = slide.querySelector("video");

    if(!video) return;

    video.muted = !soundOn;

    if(shouldPlay){
      manuallyPaused = false;

      const playPromise = video.play();

      if(playPromise && playPromise.catch){
        playPromise.catch(function(){});
      }
    }
  }

  /* ------------------------------------------------------------
     Find the video closest to the CENTER of the feed.
     Works for both:
       - mobile vertical layout
       - desktop horizontal layout
     ------------------------------------------------------------ */
  function findCenteredSlide(){

    const visible = getVisibleSlides();

    if(!visible.length) return null;

    const feedRect =
      feed.getBoundingClientRect();

    const feedCenterX =
      feedRect.left + feedRect.width / 2;

    const feedCenterY =
      feedRect.top + feedRect.height / 2;

    let closest = null;
    let closestDistance = Infinity;

    visible.forEach(function(slide){

      const rect =
        slide.getBoundingClientRect();

      const slideCenterX =
        rect.left + rect.width / 2;

      const slideCenterY =
        rect.top + rect.height / 2;

      /*
        Desktop is horizontal, mobile is vertical.
        Use the appropriate axis.
      */
      let distance;

      if(isDesktopWidth()){
        distance =
          Math.abs(
            slideCenterX - feedCenterX
          );
      } else {
        distance =
          Math.abs(
            slideCenterY - feedCenterY
          );
      }

      if(distance < closestDistance){
        closestDistance = distance;
        closest = slide;
      }
    });

    return closest;
  }

  /* ------------------------------------------------------------
     After scrolling settles, identify the centered/main video.
     ------------------------------------------------------------ */
  function updateActiveFromScroll(){

    if(navigationInProgress){
      return;
    }

    const centered =
      findCenteredSlide();

    if(!centered) return;

    if(centered === activeSlide){
      return;
    }

    setActiveSlide(
      centered,
      !manuallyPaused
    );
  }

  /* ------------------------------------------------------------
     Watch scrolling.

     We wait until scrolling has settled before changing the
     active video. This prevents the large/small state from
     flickering during smooth scrolling.
     ------------------------------------------------------------ */
  function handleScroll(){

    if(navigationInProgress){
      return;
    }

    if(animationFrame){
      cancelAnimationFrame(animationFrame);
    }

    animationFrame =
      requestAnimationFrame(function(){

        animationFrame = null;

        clearTimeout(scrollTimer);

        scrollTimer =
          setTimeout(function(){

            updateActiveFromScroll();

          }, 120);
      });
  }

  feed.addEventListener(
    "scroll",
    handleScroll,
    { passive: true }
  );

  /* ------------------------------------------------------------
     VIDEO CLICK = PLAY / PAUSE
     ------------------------------------------------------------ */
  getSlides().forEach(function(slide){

    const video =
      slide.querySelector("video");

    if(!video) return;

    video.addEventListener(
      "click",
      function(){

        /*
          Only allow the actual MAIN video to be controlled.
        */
        if(slide !== activeSlide){
          setActiveSlide(
            slide,
            true
          );

          return;
        }

        if(video.paused){

          manuallyPaused = false;

          video.muted =
            !soundOn;

          const playPromise =
            video.play();

          if(
            playPromise &&
            playPromise.catch
          ){
            playPromise.catch(
              function(){}
            );
          }

        } else {

          manuallyPaused = true;

          video.pause();
        }
      }
    );
  });

  /* ------------------------------------------------------------
     SOUND BUTTON
     ------------------------------------------------------------ */
  if(soundBtn){

    soundBtn.addEventListener(
      "click",
      function(){

        soundOn = !soundOn;

        soundBtn.classList.toggle(
          "is-on",
          soundOn
        );

        soundBtn.setAttribute(
          "aria-pressed",
          String(soundOn)
        );

        soundBtn.setAttribute(
          "aria-label",
          soundOn
            ? "Mute video sound"
            : "Play video sound"
        );

        if(activeSlide){

          const video =
            activeSlide.querySelector(
              "video"
            );

          if(video){
            video.muted =
              !soundOn;
          }
        }
      }
    );
  }

  /* ============================================================
     GO TO ANOTHER VIDEO
     ============================================================ */
  function goToVideo(index){

    const visible =
      getVisibleSlides();

    if(!visible.length) return;

    index = Math.max(
      0,
      Math.min(
        index,
        visible.length - 1
      )
    );

    const target =
      visible[index];

    if(!target) return;

    /*
      Stop the current video FIRST and reset every other video.
      This navigation-only reset means that when the user returns
      to a previous video, it starts again from 0:00.
    */
    getSlides().forEach(function(slide){
      if(slide === target) return;

      const video = slide.querySelector("video");
      if(!video) return;

      video.pause();

      try{
        video.currentTime = 0;
      } catch(e){
        /* Ignore a reset failure while media is still loading. */
      }
    });

    /*
      Prevent the scroll handler from trying to
      change the active state halfway through
      the smooth scrolling animation.
    */
    navigationInProgress = true;
    manuallyPaused = false;

    /*
      Make the target the MAIN video.
    */
    setActiveSlide(
      target,
      false
    );

    /*
      Move it into the proper snap position.
    */
    target.scrollIntoView({
      behavior:
        prefersReducedMotion()
          ? "auto"
          : "smooth",

      inline: "center",
      block: "nearest"
    });

    /*
      Wait for the visual movement to settle,
      then start the new MAIN video.
    */
    window.setTimeout(
      function(){

        navigationInProgress = false;

        /*
          Make sure the target is still the active video.
        */
        setActiveSlide(
          target,
          true
        );

      },
      prefersReducedMotion()
        ? 50
        : 650
    );
  }

  /* ------------------------------------------------------------
     NEXT / PREVIOUS BUTTONS
     ------------------------------------------------------------ */
  document
    .querySelectorAll("[data-video-nav]")
    .forEach(function(btn){

      btn.addEventListener(
        "click",
        function(){

          const visible =
            getVisibleSlides();

          if(!visible.length) return;

          let currentIndex =
            visible.findIndex(
              function(slide){
                return slide === activeSlide;
              }
            );

          /*
            If no active video has been detected yet,
            use the first video.
          */
          if(currentIndex === -1){
            currentIndex = 0;
          }

          const direction =
            btn.dataset.videoNav === "next"
              ? 1
              : -1;

          const targetIndex =
            currentIndex + direction;

          /*
            Don't go beyond first/last video.
          */
          if(
            targetIndex < 0 ||
            targetIndex >= visible.length
          ){
            return;
          }

          goToVideo(
            targetIndex
          );
        }
      );
    });

  /* ------------------------------------------------------------
     KEYBOARD ARROW NAVIGATION
     ------------------------------------------------------------ */
  feed.addEventListener(
    "keydown",
    function(e){

      if(
        e.key !== "ArrowRight" &&
        e.key !== "ArrowLeft"
      ){
        return;
      }

      const visible =
        getVisibleSlides();

      if(!visible.length) return;

      let currentIndex =
        visible.findIndex(
          function(slide){
            return slide === activeSlide;
          }
        );

      if(currentIndex === -1){
        currentIndex = 0;
      }

      const direction =
        e.key === "ArrowRight"
          ? 1
          : -1;

      const targetIndex =
        currentIndex + direction;

      if(
        targetIndex < 0 ||
        targetIndex >= visible.length
      ){
        return;
      }

      e.preventDefault();

      goToVideo(
        targetIndex
      );
    }
  );

  /* ------------------------------------------------------------
     CATEGORY FILTERS
     ------------------------------------------------------------ */
  const filterBar =
    document.querySelector(
      "[data-filter-bar]"
    );

  if(filterBar){

    filterBar.addEventListener(
      "click",
      function(e){

        const chip =
          e.target.closest(
            "[data-category]"
          );

        if(!chip) return;

        filterBar
          .querySelectorAll(
            "[data-category]"
          )
          .forEach(
            function(button){

              const selected =
                button === chip;

              button.classList.toggle(
                "is-active",
                selected
              );

              button.setAttribute(
                "aria-pressed",
                String(selected)
              );
            }
          );

        const category =
          chip.dataset.category;

        const slides =
          getSlides();

        slides.forEach(
          function(slide){

            const show =
              category === "ALL" ||
              slide.dataset.category === category;

            slide.classList.toggle(
              "is-filtered-out",
              !show
            );

            if(!show){

              const video =
                slide.querySelector("video");

              if(video){
                video.pause();
              }
            }
          }
        );

        const firstVisible =
          getVisibleSlides()[0];

        if(firstVisible){

          navigationInProgress = true;
          manuallyPaused = false;

          setActiveSlide(
            firstVisible,
            false
          );

          firstVisible.scrollIntoView({
            behavior:
              prefersReducedMotion()
                ? "auto"
                : "smooth",

            inline: "center",
            block: "nearest"
          });

          window.setTimeout(
            function(){

              navigationInProgress = false;

              setActiveSlide(
                firstVisible,
                true
              );

            },
            prefersReducedMotion()
              ? 50
              : 650
          );
        }
      }
    );
  }

  /* ------------------------------------------------------------
     DESKTOP MOUSE WHEEL
     ------------------------------------------------------------ */
  feed.addEventListener(
    "wheel",
    function(e){

      if(!isDesktopWidth()) return;

      const atStart =
        feed.scrollLeft <= 0;

      const atEnd =
        Math.ceil(
          feed.scrollLeft +
          feed.clientWidth
        ) >= feed.scrollWidth;

      if(
        (atStart && e.deltaY < 0) ||
        (atEnd && e.deltaY > 0)
      ){
        return;
      }

      e.preventDefault();

      feed.scrollLeft += e.deltaY;
    },
    {
      passive: false
    }
  );

  /* ------------------------------------------------------------
     INITIAL MAIN VIDEO
     ------------------------------------------------------------ */
  window.setTimeout(
    function(){

      const first =
        getVisibleSlides()[0];

      if(first){

        setActiveSlide(
          first,
          true
        );
      }

    },
    50
  );
}

/* ---- Story timeline scroll (story.html) ---- */
function initStoryScroll(){
  const pin = document.querySelector(".story-pin");
  const track = document.querySelector("[data-story-track]");
  if(!pin || !track) return;

  function isPinnedLayout(){
    return isDesktopWidth() && !prefersReducedMotion();
  }

  let ticking = false;

  function update(){
    ticking = false;
    if(!isPinnedLayout()){
      track.style.transform = "";
      return;
    }
    const rect = pin.getBoundingClientRect();
    const total = pin.offsetHeight - window.innerHeight;
    if(total <= 0) return;
    const progress = Math.min(Math.max(-rect.top / total, 0), 1);
    const maxTranslate = Math.max(track.scrollWidth - track.clientWidth, 0);
    track.style.transform = "translate3d(" + (-progress * maxTranslate) + "px,0,0)";
  }

  function onScroll(){
    if(!ticking){
      requestAnimationFrame(update);
      ticking = true;
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  update();
}

/* ---- Envelope (letter.html) ---- */
function initEnvelope(){
  const envelope = document.querySelector(".envelope");
  const intro = document.querySelector("[data-envelope]");
  const reading = document.querySelector("[data-letter-reading]");
  if(!envelope || !reading) return;

  const openBtn = envelope.querySelector("[data-envelope-open]");
  const openHint = document.querySelector(".letter-intro__line--2");
  if(!openBtn) return;

  let opened = false;
  function openEnvelope(){
    if(opened) return;
    opened = true;
    envelope.classList.add("is-open");
    window.setTimeout(function(){
      if(intro) intro.classList.add("is-leaving");
      reading.hidden = false;
      // .letter-intro fading to opacity:0 doesn't remove it from the page's
      // layout flow, so without an explicit scroll the newly-revealed
      // letter would sit just off-screen, below a now-invisible section.
      reading.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
      requestAnimationFrame(function(){
        reading.classList.add("is-visible");
        const heading = reading.querySelector(".letter-reading__paper");
        if(heading){
          heading.setAttribute("tabindex", "-1");
          heading.focus({ preventScroll: true });
        }
      });
    }, 900);
  }

  openBtn.addEventListener("click", openEnvelope);

  // "Open it." is part of the invitation to open the letter, so make it
  // share the same larger, more forgiving tap target on mobile.
  if(openHint){
    openHint.addEventListener("click", openEnvelope);
    openHint.setAttribute("role", "button");
    openHint.setAttribute("tabindex", "0");
    openHint.addEventListener("keydown", function(e){
      if(e.key === "Enter" || e.key === " "){
        e.preventDefault();
        openEnvelope();
      }
    });
  }
}

/* ---- Final gate + reveal (final.html) ---- */
/* ---- Final video (final.html) ----
   Loads CONFIG.finalVideo into the final-page video element.
   Native browser controls stay OFF. The video is controlled only by
   clicking/tapping the video itself: click once to pause, click again to play.
   */
function applyFinalVideo(){
  const reveal = document.querySelector("[data-final-reveal]");
  if(!reveal || !CONFIG.finalVideo) return;

  const video = reveal.querySelector(".final-reveal__video video");
  if(!video) return;

  // Keep the final video completely stopped while the opening gate is showing.
  // It must NOT start in the background and build up seconds before the reveal.
  video.controls = false;
  video.removeAttribute("controls");
  video.autoplay = false;
  video.removeAttribute("autoplay");
  video.loop = true;
  video.playsInline = true;
  video.preload = "auto";
  video.muted = true;
  video.setAttribute("playsinline", "");
  video.setAttribute("disablepictureinpicture", "");
  video.setAttribute("disableremoteplayback", "");
  video.src = CONFIG.finalVideo;
  video.load();

  video.style.cursor = "pointer";
  video.style.userSelect = "none";
  video.setAttribute("aria-label", "Birthday video. Click to pause or resume.");

  // Always keep the video at the first frame until the final reveal actually opens.
  if(video.readyState > 0){
    try{ video.currentTime = 0; }catch(e){}
  }

  video.addEventListener("loadedmetadata", function(){
    try{ video.currentTime = 0; }catch(e){}
  }, { once: true });

  // One click/tap toggles playback. No visible native controls are needed.
  if(!video.dataset.finalToggleReady){
    video.dataset.finalToggleReady = "true";
    video.addEventListener("click", function(e){
      e.preventDefault();
      if(video.paused || video.ended){
        const p = video.play();
        if(p && p.catch) p.catch(function(){});
      } else {
        video.pause();
      }
    });
  }
}

/* ---- Falling flowers on the FINAL opening gate ---- */
function buildFinalGateFloaters(gate){
  if(!gate || gate.querySelector(".final-gate-floaters")) return;

  const wrap = document.createElement("div");
  wrap.className = "final-gate-floaters";
  wrap.setAttribute("aria-hidden", "true");

  const symbols = ["✿", "❀", "❁", "✾", "✽", "♡", "✦"];
  const types = ["", "--soft", "--gold"];
  const count = window.matchMedia && window.matchMedia("(max-width: 700px)").matches ? 24 : 40;
  const frag = document.createDocumentFragment();

  for(let i = 0; i < count; i++){
    const floater = document.createElement("span");
    floater.className = "final-gate-floater final-gate-floater" + types[i % types.length];
    floater.textContent = symbols[i % symbols.length];
    floater.style.setProperty("--x", (1 + Math.random() * 98).toFixed(2) + "%");
    floater.style.setProperty("--s", (0.62 + Math.random() * 1.45).toFixed(2) + "rem");
    floater.style.setProperty("--d", (6.2 + Math.random() * 7.2).toFixed(2) + "s");
    floater.style.setProperty("--delay", (-Math.random() * 8).toFixed(2) + "s");
    floater.style.setProperty("--drift", (Math.random() * 180 - 90).toFixed(0) + "px");
    floater.style.setProperty("--r", (Math.random() * 100 - 50).toFixed(0) + "deg");
    frag.appendChild(floater);
  }

  wrap.appendChild(frag);
  gate.appendChild(wrap);

  if(prefersReducedMotion()) wrap.classList.add("is-static");
}

function spawnStars(container, count){
  if(!container) return;
  const frag = document.createDocumentFragment();
  for(let i = 0; i < count; i++){
    const s = document.createElement("span");
    s.className = "star";
    const size = (Math.random() * 2 + 1).toFixed(2);
    s.style.left = (Math.random() * 100).toFixed(2) + "%";
    s.style.top = (Math.random() * 70).toFixed(2) + "%";
    s.style.width = size + "px";
    s.style.height = size + "px";
    s.style.setProperty("--delay", (Math.random() * 4).toFixed(2) + "s");
    s.style.setProperty("--duration", (2.5 + Math.random() * 2.5).toFixed(2) + "s");
    frag.appendChild(s);
  }
  container.appendChild(frag);
}

function spawnConfetti(container, count){
  if(!container) return;
  const colors = ["var(--rose)", "var(--gold)", "var(--wine)", "var(--ivory)"];
  const frag = document.createDocumentFragment();
  for(let i = 0; i < count; i++){
    const c = document.createElement("span");
    c.className = "confetti-piece";
    c.style.left = (Math.random() * 100).toFixed(2) + "%";
    c.style.background = colors[i % colors.length];
    c.style.setProperty("--fall-duration", (2.6 + Math.random() * 1.6).toFixed(2) + "s");
    c.style.setProperty("--drift", (Math.random() * 80 - 40).toFixed(0) + "px");
    c.style.setProperty("--rotate", (Math.random() * 540 - 270).toFixed(0) + "deg");
    c.style.animationDelay = (Math.random() * 0.4).toFixed(2) + "s";
    c.addEventListener("animationend", function(){ c.remove(); });
    frag.appendChild(c);
  }
  container.appendChild(frag);
}

function initFinalPage(){
  const gate = document.querySelector("[data-final-gate]");
  const reveal = document.querySelector("[data-final-reveal]");
  if(!reveal) return;

  buildFinalGateFloaters(gate);

  // Load the final video, but do NOT start it while the opening gate is visible.
  // It will be reset to 0 and started only when the final reveal opens.
  applyFinalVideo();

  initGateSequence(gate, {
    onEnter: function(){
      reveal.hidden = false;

      const finalVideo = reveal.querySelector(".final-reveal__video video");
      if(finalVideo){
        // Hard reset every time the final reveal is entered so it can never
        // inherit playback time accumulated behind the gate.
        try{ finalVideo.pause(); }catch(e){}
        try{ finalVideo.currentTime = 0; }catch(e){}
        finalVideo.muted = false;

        const startFinalVideo = function(){
          try{ finalVideo.currentTime = 0; }catch(e){}

          const p = finalVideo.play();
          if(p && p.catch){
            p.catch(function(){
              // Some browsers still reject audible autoplay after a delayed
              // visual transition. Fall back to muted playback, still from 0.
              finalVideo.muted = true;
              try{ finalVideo.currentTime = 0; }catch(e){}
              const fallback = finalVideo.play();
              if(fallback && fallback.catch) fallback.catch(function(){});
            });
          }
        };

        if(finalVideo.readyState >= 1){
          startFinalVideo();
        } else {
          finalVideo.addEventListener("loadedmetadata", startFinalVideo, { once: true });
        }
      }

      requestAnimationFrame(function(){ reveal.classList.add("is-open"); });

      spawnStars(reveal.querySelector("[data-stars]"), 50);
      if(!prefersReducedMotion()){
        spawnConfetti(reveal.querySelector("[data-confetti]"), 44);
      }
      const title = reveal.querySelector(".final-reveal__title");
      if(title){
        title.setAttribute("tabindex", "-1");
        title.focus();
      }
    }
  });
}


/* ========================================================================
   11. BOOTSTRAP
   ======================================================================== */

document.addEventListener("DOMContentLoaded", function(){
  initChrome();

  const page = document.body.dataset.page;

  // Render dynamic content from CONFIG first.
  if(page === "her"){ renderAboutHer(); renderReasons(); }
  if(page === "memories"){ renderMemories(); }
  if(page === "videos"){ renderVideos(); }
  if(page === "story"){ renderTimeline(); }
  if(page === "letter"){ renderLetter(); }
  if(page === "final"){ renderFinalMessage(); }

  initFooter();
  applyGirlfriendName();
  wireMediaFallbacks();
  initScrollReveal();
  initScrollDots();
  initEasterEggs();
  initCustomCursor();
  initMagneticButtons();

  // Page-specific interaction wiring, after rendering.
  if(page === "home"){ initHomePage(); initCountdown(); }
  if(page === "her"){ initAboutHerInteractions(); initReasons(); }
  if(page === "memories"){ initLightbox(); }
  if(page === "videos"){ initVideoFeed(); }
  if(page === "story"){ initStoryScroll(); }
  if(page === "letter"){ initEnvelope(); }
  if(page === "final"){
    initFinalPage();
    initAgeCalculator();
  }
});

/* ============================================================================
   12. AQSA CINEMATIC ART DIRECTION — ambient layers, depth and polish
   ============================================================================ */
function initAqsaAtmosphere(){
  if(document.querySelector('.aqsa-ambient-light')) return;

  const light = document.createElement('div');
  light.className = 'aqsa-ambient-light';
  light.setAttribute('aria-hidden', 'true');

  const vignette = document.createElement('div');
  vignette.className = 'aqsa-ambient-vignette';
  vignette.setAttribute('aria-hidden', 'true');

  const guides = document.createElement('div');
  guides.className = 'aqsa-guides';
  guides.setAttribute('aria-hidden', 'true');

  document.body.append(light, vignette, guides);

  if(prefersReducedMotion()) return;

  let raf = null;
  let targetX = window.innerWidth * .5;
  let targetY = window.innerHeight * .5;
  let currentX = targetX;
  let currentY = targetY;

  window.addEventListener('pointermove', function(e){
    targetX = (e.clientX / window.innerWidth) * 100;
    targetY = (e.clientY / window.innerHeight) * 100;
    if(raf === null) raf = requestAnimationFrame(tick);
  }, { passive: true });

  function tick(){
    raf = null;
    currentX += (targetX - currentX) * .08;
    currentY += (targetY - currentY) * .08;
    light.style.setProperty('--mx', currentX + '%');
    light.style.setProperty('--my', currentY + '%');

    const hero = document.querySelector('.hero');
    if(hero){
      const progress = Math.min(Math.max(window.scrollY / Math.max(hero.offsetHeight, 1), 0), 1);
      hero.style.setProperty('--hero-shift-y', (-progress * 34) + 'px');
      hero.style.setProperty('--hero-scale', (1.035 + progress * .035).toFixed(3));
    }

    document.querySelectorAll('.media-frame, .video-slide, .reason-card, .scrapbook__item').forEach(function(card){
      const r = card.getBoundingClientRect();
      if(r.right < -50 || r.left > window.innerWidth + 50 || r.bottom < -50 || r.top > window.innerHeight + 50) return;
      const px = ((targetX / 100) * window.innerWidth - r.left) / Math.max(r.width, 1) * 100;
      const py = ((targetY / 100) * window.innerHeight - r.top) / Math.max(r.height, 1) * 100;
      const ry = Math.max(-4, Math.min(4, (50 - px) * .055));
      const rx = Math.max(-4, Math.min(4, (py - 50) * .045));
      card.style.setProperty('--rx', rx.toFixed(2) + 'deg');
      card.style.setProperty('--ry', ry.toFixed(2) + 'deg');
      card.style.setProperty('--spot-x', Math.max(0, Math.min(100, px)) + '%');
      card.style.setProperty('--spot-y', Math.max(0, Math.min(100, py)) + '%');
    });
  }

  window.addEventListener('scroll', function(){
    if(raf === null) raf = requestAnimationFrame(tick);
  }, { passive: true });
  window.addEventListener('resize', function(){
    if(raf === null) raf = requestAnimationFrame(tick);
  }, { passive: true });

  tick();
}

function initFooterOrb(){
  const footer = document.querySelector('.site-footer');
  if(!footer || footer.querySelector('.site-footer__orb')) return;
  const orb = document.createElement('div');
  orb.className = 'site-footer__orb';
  orb.setAttribute('aria-hidden', 'true');
  footer.appendChild(orb);
}

function initAqsaPageTransitions(){
  if(prefersReducedMotion()) return;
  document.body.classList.add('aqsa-page-enter');
  window.setTimeout(function(){ document.body.classList.remove('aqsa-page-enter'); }, 950);

  document.addEventListener('click', function(e){
    const link = e.target.closest('a[href]');
    if(!link) return;
    const href = link.getAttribute('href');
    if(!href || href.charAt(0) === '#' || link.target === '_blank') return;
    if(/^https?:\/\//i.test(href) && new URL(href, window.location.href).origin !== window.location.origin) return;
    document.body.classList.add('aqsa-page-leaving');
  });
}

function initAqsaHeadingMotion(){
  if(prefersReducedMotion()) return;
  document.querySelectorAll('h1, h2').forEach(function(heading){
    if(heading.dataset.aqsaHeadingReady) return;
    if(!heading.textContent.trim() || heading.children.length) return;
    heading.dataset.aqsaHeadingReady = 'true';
    const text = heading.textContent.trim();
    const words = text.split(/\s+/);
    if(words.length < 2) return;
    heading.innerHTML = words.map(function(word, i){
      return '<span class="aqsa-heading-word" style="--i:' + i + '">' + escapeHTML(word) + '</span>';
    }).join(' ');
    heading.querySelectorAll('.aqsa-heading-word').forEach(function(word){
      word.style.display = 'inline-block';
    });
    heading.classList.add('aqsa-heading');
  });
}

/* Decorative enhancement for the existing scroll rail: animate its active dot
   as a tiny pulse rather than changing the navigation structure. */
function initAqsaDotPulse(){
  const rail = document.querySelector('.scroll-dots');
  if(!rail || prefersReducedMotion()) return;
  rail.addEventListener('mouseenter', function(){ rail.classList.add('is-hovering'); });
  rail.addEventListener('mouseleave', function(){ rail.classList.remove('is-hovering'); });
}

/* Run the art direction after the original site bootstrap so every existing
   renderer and interaction remains the source of truth. */
(function initAqsaCreativeLayer(){
  function run(){
    initAqsaAtmosphere();
    initFooterOrb();
    initAqsaPageTransitions();
    initAqsaHeadingMotion();
    initAqsaDotPulse();
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', run, { once: true });
  } else {
    run();
  }
})();
