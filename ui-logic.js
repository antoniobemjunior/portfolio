import { DADOS } from "./data.js";
import { contrastColor } from "./utils.js";
import { getDOMElements } from "./dom-elements.js";

let currentLang = DADOS.currentLang;

export const closeAllDropdowns = () => {
  document.querySelectorAll(".dropdown-menu").forEach((dropdown) => {
    dropdown.classList.remove("show");
  });
};

export const toggleMenu = (event) => {
  event.stopPropagation();
  closeAllDropdowns();
  const dropdown = event.currentTarget.nextElementSibling;
  dropdown.classList.toggle("show");
};

export const openModal = (event, data, type) => {
  event.preventDefault();
  event.stopPropagation();
  const modal = document.getElementById("modal-saiba-mais");
  if (!modal) return;

  const { translations } = DADOS;
  const t = translations[currentLang];
  const {
    titulo,
    imagem,
    certificadof,
    certificadot,
    descricao,
    descricaoLonga,
    description,
    longDescription,
    aplicacao,
    github,
  } = data;
  if (currentLang === "pt")
    document.getElementById("modal-titulo").innerText =
      titulo ||
      (type === "projeto"
        ? t.projectsTitle
        : String(descricao).replace(".", ""));
  else
    document.getElementById("modal-titulo").innerText =
      titulo ||
      (type === "projeto"
        ? t.projectsTitle
        : String(description).replace(".", ""));
  document.getElementById("modal-titulo").style.textAlign = "center";

  document.getElementById("modal-descricao").innerHTML =
    (currentLang === "en"
      ? longDescription || description
      : descricaoLonga || descricao) || "";

  const modalApp = document.getElementById("modal-app");
  const modalGithub = document.getElementById("modal-github");
  const modalFechar = document.getElementById("modal-fechar");
  const modalImage = document.getElementById("modal-imagem");

  modalApp.innerText = t.menuAbrirApp;
  modalGithub.innerText = t.menuVerGithub;

  modalFechar.innerText = t.menuFechar;
  modalFechar.addEventListener("click", () => {
    closeModal();
  });

  if (type === "certificado") {
    modalApp.style.display = "none";
    modalGithub.style.display = "none";
    const imagesToToggle = [certificadof, certificadot];
    let currentIndex = 0;
    modalImage.src = imagesToToggle[currentIndex];
    modalImage.replaceWith(modalImage.cloneNode(true));
    const newModalImage = document.getElementById("modal-imagem");
    newModalImage.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % imagesToToggle.length;
      newModalImage.src = imagesToToggle[currentIndex];
    });
  } else {
    modalApp.href = aplicacao;
    modalGithub.href = github;
    modalApp.target = "_blank";
    modalGithub.target = "_blank";
    modalApp.style.display = "flex";
    modalGithub.style.display = "flex";
    modalImage.src = imagem;
  }

  modal.style.display = "flex";
};

export const closeModal = () => {
  const modal = document.getElementById("modal-saiba-mais");
  if (modal) modal.style.display = "none";
};

export const createCardSection = (list, containerId, cardType) => {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with id "${containerId}" not found.`);
    return;
  }
  container.innerHTML = "";

  const { translations, techColors } = DADOS;
  const t = translations[currentLang];
  const isProject = cardType === "projeto";

  list.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.index = index + 1;

    const cardHeader = document.createElement("div");
    cardHeader.className = "card-header";

    const title = document.createElement("h3");
    if (cardType === "projeto") {
      title.id = `${cardType}${index + 1}`;
      title.textContent = item.titulo || `${cardType} ${index + 1}`;
    }

    const menuContainer = document.createElement("div");
    menuContainer.className = "menu-container";

    const menuBtn = document.createElement("button");
    menuBtn.className = "menu-btn";
    menuBtn.innerHTML = "&#8942;";
    menuBtn.onclick = toggleMenu;

    const dropdownMenu = document.createElement("ul");
    dropdownMenu.className = "dropdown-menu";

    const saibaMaisItem = document.createElement("li");
    const saibaMaisLink = document.createElement("a");
    saibaMaisLink.href = "#";
    saibaMaisLink.innerText = t.menuSaibaMais;
    saibaMaisLink.onclick = (e) => {
      openModal(e, item, cardType);
      closeAllDropdowns();
    };
    saibaMaisItem.appendChild(saibaMaisLink);
    dropdownMenu.appendChild(saibaMaisItem);

    if (isProject) {
      const links = [
        {
          text: t.menuAbrirApp,
          href: item.aplicacao,
        },
        {
          text: t.menuVerGithub,
          href: item.github,
        },
      ];
      links.forEach(({ text, href }) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = href;
        a.target = "_blank";
        a.innerText = text;
        a.onclick = () => closeAllDropdowns();
        li.appendChild(a);
        dropdownMenu.appendChild(li);
      });
    }

    menuContainer.append(menuBtn, dropdownMenu);
    cardHeader.append(title, menuContainer);
    card.append(cardHeader);

    const img = document.createElement("img");
    img.className = isProject ? "projeto-foto" : "certificado";
    img.src = isProject ? item.imagem : item.certificadof;
    img.addEventListener("click", () => {
      img.src = img.src.includes(certificadof) ? certificadot : certificadof;
    });
    img.alt = item.titulo || `${cardType} ${index + 1}`;
    img.loading = "lazy";
    card.appendChild(img);

    const description = document.createElement("p");
    description.id = `${cardType}${index + 1}-descricao`;
    description.className = isProject
      ? "projeto-descricao"
      : "certificado-descricao";
    description.style.textAlign = "justify";
    description.textContent =
      item[currentLang === "pt" ? "descricao" : "description"] || "";
    card.appendChild(description);

    if (isProject && item.tecnologias && item.tecnologias.length > 0) {
      const techContainer = document.createElement("div");
      techContainer.className = "project-techs";
      item.tecnologias.forEach((tech) => {
        const span = document.createElement("span");
        span.className = "badge";
        span.textContent = tech;
        if (techColors[tech]) {
          span.style.backgroundColor = techColors[tech];
          span.style.color = contrastColor(techColors[tech]);
        }
        techContainer.appendChild(span);
      });
      card.appendChild(techContainer);
    }

    container.appendChild(card);
  });
};

export const applyDynamicTranslations = (lang) => {
  currentLang = lang;
  const { projetos, certificados, translations } = DADOS;
  const t = translations[currentLang];
  const el = getDOMElements();

  if (el.navProjetos) el.navProjetos.innerText = t.nav.projetos;
  if (el.navHabilidades) el.navHabilidades.innerText = t.nav.habilidades;
  if (el.navCertificados) el.navCertificados.innerText = t.nav.certificados;
  if (el.navAbout) el.navAbout.innerText = t.nav.sobre;
  if (el.navContato) el.navContato.innerText = t.nav.contato;
  if (el.headerTitle) el.headerTitle.innerText = t.header;
  if (el.projectsTitle) el.projectsTitle.innerText = t.projectsTitle;
  if (el.skillsTitle) el.skillsTitle.innerText = t.skillsTitle;
  if (el.certificatesTitle)
    el.certificatesTitle.innerText = t.certificatesTitle;
  if (el.aboutMe) el.aboutMe.innerHTML = t.aboutMe;
  if (el.aboutMeTitle) el.aboutMeTitle.innerText = t.aboutTitle;

  el.projectTitles.forEach((p, i) => {
    if (p) p.innerText = projetos[i]?.titulo || `Projeto ${i + 1}`;
  });
  el.certificatesTitles.forEach((c, i) => {
    if (c) c.innerText = certificados[i]?.titulo || `Certificado ${i + 1}`;
  });
  el.projectDescs.forEach((d, i) => {
    if (d)
      d.innerText =
        projetos[i]?.[currentLang === "pt" ? "descricao" : "description"] || "";
  });
  el.certificatesDescs.forEach((d, i) => {
    if (d)
      d.innerText =
        certificados[i]?.[currentLang === "pt" ? "descricao" : "description"] ||
        "";
  });

  if (el.frontendItens) el.frontendItens.innerText = t.frontend;
  if (el.backendItens) el.backendItens.innerText = t.backend;
  if (el.outras) el.outras.innerText = t.outras;
  if (el.contactTitle) el.contactTitle.innerText = t.contactTitle;
  if (el.linkedinText) el.linkedinText.innerText = t.access;
  if (el.githubText) el.githubText.innerText = t.access;
  if (el.footer) el.footer.innerText = t.footer;
  if (el.backToTopBtn) el.backToTopBtn.innerText = t.backToTop;
  if (el.langToggle) el.langToggle.innerText = t.langButton;
  if (el.themeToggle) {
    const isDarkMode = document.body.classList.contains("dark-mode");
    el.themeToggle.innerText = isDarkMode ? t.themeDark : t.themeLight;
    const color = "#0a84ff";
    el.themeToggle.style.borderColor = color;
    el.themeToggle.style.color = color;
    el.langToggle.style.borderColor = color;
    el.langToggle.style.color = color;
  }

  createCardSection(DADOS.projetos, "projetos-container", "projeto");
  createCardSection(
    DADOS.certificados,
    "certificados-container",
    "certificado"
  );

  reobserveCards();
};

let observer;
export const reobserveCards = () => {
  if (observer) {
    observer.disconnect();
  }

  const el = getDOMElements();
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.target === el.navTrigger) {
          el.nav.classList.toggle("visible", !entry.isIntersecting);
        } else if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.12,
    }
  );

  if (el.navTrigger) observer.observe(el.navTrigger);
  document.querySelectorAll(".card").forEach((card) => observer.observe(card));
};
