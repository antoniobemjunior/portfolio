import { DADOS } from "./data.js";

export const getDOMElements = () => {
  return {
    nav: document.getElementById("nav"),
    navTrigger: document.getElementById("nav-trigger"),
    backToTopBtn: document.getElementById("backToTop"),
    langToggle: document.getElementById("langToggle"),
    themeToggle: document.getElementById("themeToggle"),
    menuToggle: document.getElementById("menu-toggle"),
    menuItems: document.getElementById("menu-items"),
    navProjetos: document.getElementById("nav-projetos"),
    navHabilidades: document.getElementById("nav-habilidades"),
    navCertificados: document.getElementById("nav-certificados"),
    navAbout: document.getElementById("nav-sobre"),
    navCurriculo: document.getElementById("nav-curriculo"),
    navContato: document.getElementById("nav-contato"),
    headerTitle: document.getElementById("header-title"),
    projectsTitle: document.getElementById("projects-title"),
    skillsTitle: document.getElementById("skills-title"),
    certificatesTitle: document.getElementById("certificates-title"),
    frontendItens: document.getElementById("frontend-itens"),
    backendItens: document.getElementById("backend-itens"),
    outras: document.getElementById("outras"),
    contactTitle: document.getElementById("contact-title"),
    linkedinText: document.getElementById("linkedin-text"),
    githubText: document.getElementById("github-text"),
    footer: document.getElementById("footer"),
    links: document.querySelectorAll("a[data-target]"),
    hamburgerBtn: document.querySelector(".hamburger-menu-btn"),
    threeDotsBtn: document.querySelector(".three-dots-menu-btn"),
    navLeft: document.getElementById("nav-left"),
    aboutMe: document.getElementById("about-text"),
    aboutMeTitle: document.getElementById("about-title"),
    projectTitles: Array.from(
      {
        length: DADOS.projetos.length,
      },
      (_, i) => document.getElementById(`projeto${i + 1}`)
    ),
    projectDescs: Array.from(
      {
        length: DADOS.projetos.length,
      },
      (_, i) => document.getElementById(`projeto${i + 1}-descricao`)
    ),
    certificatesTitles: Array.from(
      {
        length: DADOS.certificados.length,
      },
      (_, i) => document.getElementById(`certificado${i + 1}`)
    ),
    certificatesDescs: Array.from(
      {
        length: DADOS.certificados.length,
      },
      (_, i) => document.getElementById(`certificado${i + 1}-descricao`)
    ),
  };
};
