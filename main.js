/* ═══════════════════════════════════════════════════════════════
   Crafted By You — Interactive JS
═══════════════════════════════════════════════════════════════ */

// Multi-language support
let translations = {};
let currentLang = localStorage.getItem("lang") || "en";

async function loadTranslations() {
  try {
    const response = await fetch("translations.json");
    translations = await response.json();
  } catch (err) {
    console.error("Failed to load translations:", err);
  }
}

function t(key) {
  return (translations[currentLang]?.[key]) || (translations["en"]?.[key]) || key;
}

function switchLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  updatePageLanguage();
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

function updatePageLanguage() {
  // Navbar
  const navLinks = document.querySelectorAll(".nav-links a");
  if (navLinks[0]) navLinks[0].textContent = t("nav_services");
  if (navLinks[1]) navLinks[1].textContent = t("nav_workshops");
  if (navLinks[2]) navLinks[2].textContent = t("nav_gallery");
  if (navLinks[3]) navLinks[3].textContent = t("nav_quote");

  // Hero
  const heroP = document.querySelector(".hero p");
  if (heroP) heroP.textContent = t("hero_tagline");

  // Services section
  const servicesTitle = document.querySelector(".services > h2");
  if (servicesTitle) {
    const emoji = servicesTitle.textContent.match(/🌿/)?.[0] || "🌿";
    servicesTitle.textContent = emoji + " " + t("services_title").replace(/🌿 /, "");
  }
  const servicesIntro = document.querySelector(".services > p:nth-of-type(1)");
  if (servicesIntro) servicesIntro.textContent = t("services_intro");
  
  const serviceItems = document.querySelectorAll(".services ul li");
  const servicePairs = [
    ["service_1_title", "service_1_desc"],
    ["service_2_title", "service_2_desc"],
    ["service_3_title", "service_3_desc"],
    ["service_4_title", "service_4_desc"],
    ["service_5_title", "service_5_desc"],
    ["service_6_title", "service_6_desc"]
  ];
  serviceItems.forEach((li, i) => {
    if (servicePairs[i]) {
      const strong = li.querySelector("strong");
      const text = li.textContent.replace(strong?.textContent || "", "").trim();
      if (strong) strong.textContent = t(servicePairs[i][0]);
      const lines = li.innerHTML.split("<br>");
      lines[1] = " " + t(servicePairs[i][1]);
      li.innerHTML = lines.join("<br>");
    }
  });

  const galleryNote = document.querySelector(".services > p:last-child");
  if (galleryNote) galleryNote.textContent = t("services_gallery_note");

  // Workshops section
  const workshopsTitle = document.querySelector(".workshops > h2");
  if (workshopsTitle) workshopsTitle.textContent = t("workshops_title");
  const workshopsIntro = document.querySelector(".workshops > p:first-of-type");
  if (workshopsIntro) workshopsIntro.textContent = t("workshops_intro");

  // Workshop cards
  const cards = document.querySelectorAll(".workshops .card");
  const cardData = [
    ["mosaic_coaster", "mosaic_coaster_desc"],
    ["acrylic_pour", "acrylic_pour_desc"],
    ["fluid_bear", "fluid_bear_desc"],
    ["herbal_fragrance", "herbal_fragrance_desc"],
    ["sand_candle", "sand_candle_desc"],
    ["bath_salt", "bath_salt_desc"],
    ["scented_candle", "scented_candle_desc"],
    ["tufting", "tufting_desc"],
    ["neon_sign", "neon_sign_desc"],
    ["terrarium", "terrarium_desc"],
    ["body_lotion", "body_lotion_desc"],
    ["mosaic_vase", "mosaic_vase_desc"],
    ["cute_charm", "cute_charm_desc"],
    ["spa_scrub", "spa_scrub_desc"],
    ["wellness_mist", "wellness_mist_desc"],
    ["aroma_diffuser", "aroma_diffuser_desc"],
    ["perfume", "perfume_desc"],
    ["diffuser", "diffuser"],
    ["terrazzo_coaster", "terrazzo_coaster"]
  ];
  cards.forEach((card, i) => {
    if (cardData[i]) {
      const h3 = card.querySelector("h3");
      const p = card.querySelector("p");
      if (h3) {
        if (i < 17) {
          h3.textContent = t(cardData[i][0]);
          if (p) p.textContent = t(cardData[i][1]);
        } else {
          h3.textContent = t(cardData[i][0]);
          if (p) p.textContent = t("coming_soon");
        }
      }
    }
  });

  document.querySelectorAll("[data-i18n='request_quote']").forEach(el => {
    el.textContent = t("request_quote");
  });

  const disclaimer = document.querySelector("p[style*='color: red']");
  if (disclaimer) disclaimer.textContent = t("images_disclaimer");

  // Gallery section
  const galleryTitle = document.querySelector(".gallery > h2");
  if (galleryTitle) galleryTitle.textContent = t("gallery_title");
  const galleryIntro = document.querySelector(".gallery > p");
  if (galleryIntro) galleryIntro.textContent = t("gallery_intro");

  // Partner section
  const partnerTitle = document.querySelector(".partner > h2");
  if (partnerTitle) partnerTitle.textContent = t("partner_title");
  const partnerIntro = document.querySelector(".partner > p");
  if (partnerIntro) partnerIntro.textContent = t("partner_intro");
  const partnerBrandCopies = document.querySelectorAll(".partner-brand-copy");
  const partnerCopyKeys = ["partner_brand_copy", "partner_brand_copy_2"];
  partnerBrandCopies.forEach((copy, i) => {
    if (partnerCopyKeys[i]) copy.textContent = t(partnerCopyKeys[i]);
  });
  const partnerTags = document.querySelectorAll(".partner-tags span");
  const partnerTagKeys = [
    "partner_tag_1",
    "partner_tag_2",
    "partner_tag_3",
    "partner_tag_4"
  ];
  partnerTags.forEach((tag, i) => {
    if (partnerTagKeys[i]) tag.textContent = t(partnerTagKeys[i]);
  });

  // Clients section
  const clientsTitle = document.querySelector(".clients > h2");
  if (clientsTitle) clientsTitle.textContent = t("clients_title");
  const clientsIntro = document.querySelector(".clients > p");
  if (clientsIntro) clientsIntro.textContent = t("clients_intro");

  // Footer
  const footerPs = document.querySelectorAll(".footer p, .footer h3");
  footerPs.forEach(p => {
    if (p.textContent.includes("©")) p.textContent = t("footer_copyright");
    if (p.textContent.includes("SC ARTS")) p.textContent = t("footer_studio");
    if (p.textContent.includes("Vila Vista")) p.textContent = t("footer_address");
    if (p.textContent === "Follow Us") p.textContent = t("footer_follow");
    if (p.textContent.includes("WHATSAPP")) p.textContent = t("footer_whatsapp");
  });
}

document.addEventListener("DOMContentLoaded", async function () {
  await loadTranslations();

  /* ── Language Selector ───────────────────────────────────────── */
  const langSelector = document.createElement("div");
  langSelector.id = "language-selector";
  langSelector.innerHTML = `
    <button class="lang-btn" data-lang="en">EN</button>
    <button class="lang-btn" data-lang="zh">中文</button>
  `;
  document.body.prepend(langSelector);

  langSelector.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
    btn.addEventListener("click", () => switchLanguage(btn.dataset.lang));
  });

  // Initialize page language
  updatePageLanguage();

  /* ── Phone copy ──────────────────────────────────────────────── */
  const phoneElement = document.querySelector(".copy-phone");
  if (phoneElement) {
    phoneElement.addEventListener("click", function () {
      navigator.clipboard.writeText(this.textContent.trim()).then(() => {
        phoneElement.classList.add("copied");
        setTimeout(() => phoneElement.classList.remove("copied"), 2000);
      }).catch(err => console.error("Failed to copy:", err));
    });
  }

  /* ── Scroll progress bar ─────────────────────────────────────── */
  const progressBar = document.createElement("div");
  progressBar.id = "progress-bar";
  document.body.prepend(progressBar);

  /* ── Sticky navbar ───────────────────────────────────────────── */
  const nav = document.createElement("nav");
  nav.id = "sticky-nav";
  nav.innerHTML = `
    <img src="assets/Website/branding/logo.png" alt="Crafted By You" class="nav-logo" />
    <ul class="nav-links">
      <li><a href="#services">${t("nav_services")}</a></li>
      <li><a href="#workshops">${t("nav_workshops")}</a></li>
      <li><a href="#gallery">${t("nav_gallery")}</a></li>
      <li><a href="#quotation">${t("nav_quote")}</a></li>
    </ul>`;
  document.body.prepend(nav);

  // Assign IDs to sections (quotation already has one in HTML)
  [["section.services", "services"],
   ["section.workshops", "workshops"], ["section.gallery", "gallery"]
  ].forEach(([sel, id]) => {
    const el = document.querySelector(sel);
    if (el && !el.id) el.id = id;
  });

  // Smooth scroll for navbar links
  nav.querySelectorAll("a[href^='#']").forEach(a => {
    a.addEventListener("click", e => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: "smooth" }); }
    });
  });

  /* ── Scroll-to-top button ────────────────────────────────────── */
  const topBtn = document.createElement("button");
  topBtn.id = "scroll-top";
  topBtn.innerHTML = "↑";
  topBtn.title = "Back to top";
  document.body.appendChild(topBtn);
  topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ── Unified scroll listener ─────────────────────────────────── */
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    // progress bar
    progressBar.style.width = Math.round((scrollY / maxScroll) * 100) + "%";
    // sticky nav
    nav.classList.toggle("visible", scrollY > 120);
    // scroll-top button
    topBtn.classList.toggle("visible", scrollY > 400);
  }, { passive: true });

  /* ── Hero floating emojis ────────────────────────────────────── */
  const hero = document.querySelector(".hero");
  if (hero) {
    const emojis = ["✂️","🎨","🖌️","🌸","⭐","✨","🕯️","🌿","💎","🌺","🎭","🧵","🪡","🌷"];
    for (let i = 0; i < 14; i++) {
      const span = document.createElement("span");
      span.className = "hero-emoji";
      span.textContent = emojis[i % emojis.length];
      span.style.cssText = `
        left: ${5 + Math.random() * 90}%;
        top: ${5 + Math.random() * 85}%;
        font-size: ${13 + Math.random() * 18}px;
        animation-duration: ${3.5 + Math.random() * 3.5}s;
        animation-delay: ${Math.random() * 3}s;`;
      hero.appendChild(span);
    }
  }

  /* ── Scroll reveal (IntersectionObserver) ────────────────────── */
  function staggerReveal(selector, delay = 0.07) {
    const parent = document.querySelector(selector);
    if (!parent) return;
    [...parent.children].forEach((child, i) => {
      child.classList.add("reveal");
      child.style.transitionDelay = `${i * delay}s`;
    });
  }
  staggerReveal(".workshop-grid", 0.06);
  staggerReveal(".client-grid",   0.07);
  staggerReveal(".gallery-grid",  0.05);
  staggerReveal(".services ul",   0.08);

  // Generic reveal observer
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach(el => {
    // Instantly reveal if already in viewport (avoids flash on above-fold elements)
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) {
      el.style.transition = "none";
      el.classList.add("visible");
      requestAnimationFrame(() => el.style.transition = "");
    } else {
      revealObserver.observe(el);
    }
  });

  // h2 underline animation observer
  const h2Observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("line-visible");
        h2Observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  document.querySelectorAll("h2").forEach(el => h2Observer.observe(el));

  /* ── Photo gallery lightbox ──────────────────────────────────── */
  const galleryGrid = document.querySelector(".gallery-grid");
  if (galleryGrid) {
    const imgs = [...galleryGrid.querySelectorAll("img")];

    // Wrap each image in a .gallery-item div
    imgs.forEach(img => {
      const wrap = document.createElement("div");
      wrap.className = "gallery-item";
      img.parentNode.insertBefore(wrap, img);
      wrap.appendChild(img);
    });

    // Build lightbox DOM
    const overlay = document.createElement("div");
    overlay.className = "lightbox-overlay";
    overlay.innerHTML = `
      <button class="lb-close" aria-label="Close">✕</button>
      <button class="lb-nav lb-prev" aria-label="Previous">&#8249;</button>
      <img class="lb-img" src="" alt="Gallery photo" />
      <button class="lb-nav lb-next" aria-label="Next">&#8250;</button>
      <div class="lb-counter"></div>`;
    document.body.appendChild(overlay);

    let current = 0;
    const lbImg     = overlay.querySelector(".lb-img");
    const lbCounter = overlay.querySelector(".lb-counter");

    function openLightbox(idx) {
      current = ((idx % imgs.length) + imgs.length) % imgs.length;
      lbImg.src  = imgs[current].src;
      lbImg.alt  = imgs[current].alt;
      lbCounter.textContent = `${current + 1} / ${imgs.length}`;
      overlay.classList.add("active");
      document.body.style.overflow = "hidden";
    }
    function closeLightbox() {
      overlay.classList.remove("active");
      document.body.style.overflow = "";
    }

    imgs.forEach((img, i) => img.parentElement.addEventListener("click", () => openLightbox(i)));
    overlay.querySelector(".lb-close").addEventListener("click", closeLightbox);
    overlay.querySelector(".lb-next").addEventListener("click", () => openLightbox(current + 1));
    overlay.querySelector(".lb-prev").addEventListener("click", () => openLightbox(current - 1));
    overlay.addEventListener("click", e => { if (e.target === overlay) closeLightbox(); });

    // Keyboard navigation
    document.addEventListener("keydown", e => {
      if (!overlay.classList.contains("active")) return;
      if (e.key === "Escape")      closeLightbox();
      if (e.key === "ArrowRight")  openLightbox(current + 1);
      if (e.key === "ArrowLeft")   openLightbox(current - 1);
    });

    // Touch/swipe support for lightbox
    let touchStartX = 0;
    overlay.addEventListener("touchstart", e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    overlay.addEventListener("touchend", e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) openLightbox(diff > 0 ? current + 1 : current - 1);
    });
  }

  /* ── Ripple effect on buttons & CTA card ────────────────────── */
  function addRipple(e) {
    const rect = this.getBoundingClientRect();
    const rpl  = document.createElement("span");
    rpl.className = "ripple";
    const size = Math.max(rect.width, rect.height);
    Object.assign(rpl.style, {
      width:  size + "px",
      height: size + "px",
      left:   (e.clientX - rect.left - size / 2) + "px",
      top:    (e.clientY - rect.top  - size / 2) + "px",
    });
    this.appendChild(rpl);
    setTimeout(() => rpl.remove(), 700);
  }
  document.querySelectorAll("button, .highlight, .request-quote-btn").forEach(el => el.addEventListener("click", addRipple));

  /* ── Cursor sparkle trail (mouse only) ───────────────────────── */
  const sparkleColors = ["#ff6b9d","#ffb84d","#ff6600","#9b59b6","#3498db","#2ecc71","#e91e99"];
  document.addEventListener("mousemove", e => {
    if (Math.random() > 0.32) return; // throttle to ~32% of events
    const dot = document.createElement("div");
    dot.className = "cursor-sparkle";
    const sz = 5 + Math.random() * 7;
    Object.assign(dot.style, {
      left:       e.clientX + "px",
      top:        e.clientY + "px",
      width:      sz + "px",
      height:     sz + "px",
      background: sparkleColors[Math.floor(Math.random() * sparkleColors.length)],
      "--tx":     (Math.random() * 54 - 27) + "px",
      "--ty":     (Math.random() * 54 - 27) + "px",
    });
    document.body.appendChild(dot);
    setTimeout(() => dot.remove(), 900);
  });

  /* ── Smooth scroll for all in-page links ─────────────────────── */
  document.querySelectorAll("a[href^='#']").forEach(a => {
    a.addEventListener("click", e => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: "smooth" }); }
    });
  });

});

