/* ═══════════════════════════════════════════════════════════════
   Crafted By You — Interactive JS
═══════════════════════════════════════════════════════════════ */

/* Translations removed: site uses static English content in HTML/CSS. */

document.addEventListener("DOMContentLoaded", function () {
  // Translations removed; page content uses static English text.

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
      <li><a href="#services">Services</a></li>
      <li><a href="#workshops">Workshops</a></li>
      <li><a href="#gallery">Gallery</a></li>
      <li><a href="#quotation">Get a Quote ✨</a></li>
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

  /* ── Hero floating emojis (REMOVED: Corporate Aesthetic) ── */

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

  /* ── Cursor sparkle trail (REMOVED: Corporate Aesthetic) ── */

  /* ── Smooth scroll for all in-page links ─────────────────────── */
  document.querySelectorAll("a[href^='#']").forEach(a => {
    a.addEventListener("click", e => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: "smooth" }); }
    });
  });

  /* ── Carousel Scrolling & Desktop Grab ───────────────────────── */
  document.querySelectorAll(".carousel-wrapper").forEach(wrapper => {
    const track = wrapper.querySelector(".carousel-track");
    const prevBtn = wrapper.querySelector(".prev-btn");
    const nextBtn = wrapper.querySelector(".next-btn");
    
    if (!track) return;

    const getScrollAmount = () => {
      const gap = 32; // 2rem
      return track.firstElementChild ? track.firstElementChild.getBoundingClientRect().width + gap : 320;
    };

    if (prevBtn) {
      prevBtn.addEventListener("click", () => track.scrollBy({ left: -getScrollAmount(), behavior: "smooth" }));
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", () => track.scrollBy({ left: getScrollAmount(), behavior: "smooth" }));
    }

    const handleScrollButtons = () => {
      if (prevBtn && nextBtn) {
        prevBtn.style.opacity = track.scrollLeft <= 10 ? "0.3" : "0.9";
        nextBtn.style.opacity = track.scrollLeft >= track.scrollWidth - track.clientWidth - 10 ? "0.3" : "0.9";
      }
    };
    
    track.addEventListener("scroll", handleScrollButtons, { passive: true });
    window.addEventListener("resize", handleScrollButtons);
    setTimeout(handleScrollButtons, 100);

    // Desktop Grab to Swipe Magic
    let isDown = false;
    let startX;
    let scrollLeft;
    let isDragging = false;

    track.addEventListener("mousedown", (e) => {
      isDown = true;
      isDragging = false;
      track.style.scrollSnapType = "none";
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    });

    track.addEventListener("mouseleave", () => {
      isDown = false;
      track.style.scrollSnapType = "x mandatory";
    });

    track.addEventListener("mouseup", () => {
      isDown = false;
      track.style.scrollSnapType = "x mandatory";
    });

    track.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 2;
      if (Math.abs(walk) > 10) isDragging = true;
      track.scrollLeft = scrollLeft - walk;
    });

    track.addEventListener("click", (e) => {
      if (isDragging) {
        e.preventDefault();
        e.stopPropagation();
      }
    }, { capture: true });
  });

});

