import { DADOS } from "./data.js";
import { getDOMElements } from "./dom-elements.js";
import {
  applyDynamicTranslations,
  closeAllDropdowns,
  createCardSection,
  reobserveCards,
  closeModal,
} from "./ui-logic.js";

let currentLang = DADOS.currentLang;

document.addEventListener("DOMContentLoaded", () => {
  createCardSection(DADOS.projetos, "projetos-container", "projeto");
  createCardSection(DADOS.certificados, "certificados-container", "certificado");

  const el = getDOMElements();
  reobserveCards();

  el.links.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = e.currentTarget.getAttribute("data-target");
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: "smooth" });
        el.navLeft?.classList.remove("open");
      }
    });
  });

  window.addEventListener("scroll", () => {
    el.backToTopBtn?.classList.toggle("visible", window.scrollY > 300);
  });

  el.backToTopBtn?.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );

  el.hamburgerBtn?.addEventListener("click", () =>
    el.navLeft?.classList.toggle("open")
  );
  el.threeDotsBtn?.addEventListener("click", () =>
    el.menuItems?.classList.toggle("open")
  );

  document.addEventListener("click", (event) => {
    if (
      el.navLeft &&
      !el.navLeft.contains(event.target) &&
      !el.hamburgerBtn.contains(event.target)
    ) {
      el.navLeft.classList.remove("open");
    }
    if (
      el.menuItems &&
      !el.menuItems.contains(event.target) &&
      !el.threeDotsBtn.contains(event.target)
    ) {
      el.menuItems.classList.remove("open");
    }
    if (
      event.target.tagName !== "BUTTON" &&
      !event.target.classList.contains("menu-btn")
    ) {
      closeAllDropdowns();
    }
  });

  el.langToggle?.addEventListener("click", () => {
    currentLang = currentLang === "pt" ? "en" : "pt";
    applyDynamicTranslations(currentLang);
  });

  el.themeToggle?.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    applyDynamicTranslations(currentLang);
  });

  // Fecha modal
  const modal = document.getElementById("modal-saiba-mais");
  const modalFecharBtn = document.getElementById("modal-fechar");
  if (modalFecharBtn) modalFecharBtn.addEventListener("click", closeModal);
  if (modal) {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeModal();
    });
  }

  applyDynamicTranslations(currentLang);

  console.info("Projetos:", DADOS.projetos.length);
  console.info("Certificados:", DADOS.certificados.length);
});
