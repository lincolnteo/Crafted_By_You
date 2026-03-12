// Holds all language keys loaded from translations.json.
let translations = {};
let currentLang = localStorage.getItem("lang") || "en";

async function loadTranslations() {
  // Fetch translation keys once at startup.
  try {
    const response = await fetch("translations.json");
    translations = await response.json();
  } catch (error) {
    console.error("Failed to load translations:", error);
    translations = {};
  }
}

function t(key) {
  // Fallback chain: active language -> English -> raw key.
  return translations[currentLang]?.[key] || translations.en?.[key] || key;
}

function updatePageLanguage() {
  // Update page language and all text nodes marked with data-i18n.
  document.documentElement.lang = currentLang;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    node.textContent = t(key);
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });
}

function initLanguageSwitcher() {
  // Wire EN / 中文 buttons and persist choice in localStorage.
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentLang = btn.dataset.lang;
      localStorage.setItem("lang", currentLang);
      updatePageLanguage();
    });
  });
}

function initScrollProgressAndTopButton() {
  // Sync top progress bar and scroll-to-top button visibility.
  const progressBar = document.getElementById("progress-bar");
  const topButton = document.getElementById("scroll-top");

  const onScroll = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
    progressBar.style.width = `${Math.min(progress, 100)}%`;

    if (window.scrollY > 320) {
      topButton.classList.add("visible");
    } else {
      topButton.classList.remove("visible");
    }
  };

  topButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function initPhoneCopy() {
  // One-click copy for WhatsApp number in footer.
  const phoneButton = document.querySelector(".copy-phone");
  if (!phoneButton) return;

  phoneButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(phoneButton.textContent.trim());
      phoneButton.classList.add("copied");
      setTimeout(() => phoneButton.classList.remove("copied"), 1400);
    } catch (error) {
      console.error("Failed to copy phone number:", error);
    }
  });
}

function initRevealObserver() {
  // Reveal animations run once when elements enter viewport.
  const revealElements = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries, revealObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.16 }
  );

  revealElements.forEach((el) => observer.observe(el));
}

function initLightbox() {
  // Gallery lightbox with next/prev and keyboard support.
  const galleryImages = Array.from(document.querySelectorAll(".gallery-grid img"));
  const lightbox = document.getElementById("lightbox");
  if (!galleryImages.length || !lightbox) return;

  const lightboxImage = lightbox.querySelector(".lightbox-image");
  const closeButton = lightbox.querySelector(".lightbox-close");
  const prevButton = lightbox.querySelector(".lightbox-prev");
  const nextButton = lightbox.querySelector(".lightbox-next");
  const counter = lightbox.querySelector(".lightbox-counter");

  let currentIndex = 0;

  const open = (index) => {
    // Keep index wrapped within image array bounds.
    currentIndex = ((index % galleryImages.length) + galleryImages.length) % galleryImages.length;
    lightboxImage.src = galleryImages[currentIndex].src;
    lightboxImage.alt = galleryImages[currentIndex].alt;
    counter.textContent = `${currentIndex + 1} / ${galleryImages.length}`;
    lightbox.classList.add("active");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    lightbox.classList.remove("active");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => open(index));
  });

  prevButton.addEventListener("click", () => open(currentIndex - 1));
  nextButton.addEventListener("click", () => open(currentIndex + 1));
  closeButton.addEventListener("click", close);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) close();
  });

  document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("active")) return;
    if (event.key === "Escape") close();
    if (event.key === "ArrowLeft") open(currentIndex - 1);
    if (event.key === "ArrowRight") open(currentIndex + 1);
  });
}

function initSmoothAnchors() {
  // Smoothly scroll to in-page sections for nav and CTA links.
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      const target = document.querySelector(href);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  // App bootstrap order: data first, then UI behavior hooks.
  await loadTranslations();
  updatePageLanguage();
  initLanguageSwitcher();
  initScrollProgressAndTopButton();
  initPhoneCopy();
  initRevealObserver();
  initLightbox();
  initSmoothAnchors();
});
