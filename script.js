
/**
 * portfolio.js
 * Arquivo JavaScript completo para gerar os cards de projeto dinamicamente
 * e inicializar comportamentos de UI (tradução, tema, observer, scroll suave).
 *
 * Principais correções/recursos:
 * - Gera qualquer número de projetos dinamicamente.
 * - Verificações defensivas para evitar erros quando elementos não existem.
 * - Cores automáticas para badges com cálculo de contraste para texto.
 * - Usa 'class' nas imagens (não repete ids) e 'id' só para títulos/descrições.
 * - Inicialização feita dentro de DOMContentLoaded.
 *
 * Coloque este arquivo e referencie no HTML:
 * <script src="portfolio.js" defer></script>
 *
 * Autoria: Antonio (adaptado)
 */

/* ================== DADOS ================== */
let currentLang = "pt";

const projetos = [
  {
    titulo: "Alura Books",
    imagem: "https://raw.githubusercontent.com/antoniobemjunior/portfolio/refs/heads/main/projeto1.png",
    descricao: "Caso de estudo de uma livraria digital.",
    tecnologias: ["HTML", "CSS"]
  },
  {
    titulo: "Alura Newsletter",
    imagem: "https://raw.githubusercontent.com/antoniobemjunior/portfolio/refs/heads/main/projeto2.png",
    descricao: "Caso de estudo de um portal de newsletter.",
    tecnologias: ["HTML", "CSS"]
  },
  {
    titulo: "Alura Play",
    imagem: "https://raw.githubusercontent.com/antoniobemjunior/portfolio/refs/heads/main/projeto3.png",
    descricao: "Caso de estudo de um site de streaming de vídeos.",
    tecnologias: ["HTML", "CSS"]
  },
  {
    titulo: "Alura Plus",
    imagem: "https://raw.githubusercontent.com/antoniobemjunior/portfolio/refs/heads/main/projeto4.png",
    descricao: "Caso de estudo de uma landing page de venda de um serviço.",
    tecnologias: ["HTML", "CSS"]
  },
  {
    titulo: "Byte Bank",
    imagem: "https://raw.githubusercontent.com/antoniobemjunior/portfolio/refs/heads/main/projeto5.png",
    descricao: "Caso de estudo de um gerenciador financeiro.",
    tecnologias: ["HTML", "CSS", "JavaScript"]
  },
  {
    titulo: "Calmaria Spa",
    imagem: "https://raw.githubusercontent.com/antoniobemjunior/portfolio/refs/heads/main/projeto6.png",
    descricao: "Caso de estudo de uma landing page de venda de um serviço.",
    tecnologias: ["HTML", "CSS", "SCSS", "Sass"]
  },
  {
    titulo: "Lista de Tarefas",
    imagem: "https://raw.githubusercontent.com/antoniobemjunior/portfolio/refs/heads/main/projeto7.png",
    descricao: "Caso de estudo de uma lista de tarefas com dados persistentes.",
    tecnologias: ["HTML", "CSS", "JavaScript"]
  },
  {
    titulo: "Lista de Tarefas",
    imagem: "https://raw.githubusercontent.com/antoniobemjunior/portfolio/refs/heads/main/projeto8.png",
    descricao: "Caso de estudo de uma lista de tarefas com dados persistentes.",
    tecnologias: ["HTML", "CSS", "JavaScript"]
  },
  {
    titulo: "Wave Cast",
    imagem: "https://raw.githubusercontent.com/antoniobemjunior/portfolio/refs/heads/main/projeto9.png",
    descricao: "Caso de estudo de uma plataforma de podcasts.",
    tecnologias: ["HTML", "CSS"]
  }
];

const techColors = {
  HTML: "#E44D26",
  CSS: "#1572B6",
  JavaScript: "#F7DF1E",
  SCSS: "#C6538C",
  Sass: "#CF649A",
  TypeScript: "#3178C6",
  Python: "#3776AB",
  C: "#A8B9CC",
  "C#": "#239120",
  "C++": "#00599C",
  SQL: "#00648B"
};

const translations = {
  pt: {
    nav: { projetos: "Projetos", habilidades: "Habilidades", contato: "Contato" },
    header: "Olá sou Antônio de Bem Junior, um desenvolvedor de sistemas trainee!",
    projectsTitle: "Projetos",
    projectsDescPrefix: "Descrição do projeto",
    skillsTitle: "Habilidades",
    frontend: "HTML, CSS e JavaScript.",
    backend: "C, C++, C#, Python, SQL e TypeScript.",
    outras: "Outras",
    contactTitle: "Contato",
    access: "Acessar",
    footer: "© " + new Date().getFullYear() + " Antonio de Bem Junior. Desenvolvido com ♥.",
    backToTop: "Voltar ao início",
    langButton: "Idioma Inglês",
    themeLight: "Tema Claro",
    themeDark: "Tema Escuro"
  },
  en: {
    nav: { projetos: "Projects", habilidades: "Skills", contato: "Contact" },
    header: "Hello I'm Antônio de Bem Junior, a trainee systems developer!",
    projectsTitle: "Projects",
    projectsDescPrefix: "Description of project",
    skillsTitle: "Skills",
    frontend: "HTML, CSS and JavaScript.",
    backend: "C, C++, C#, Python, SQL and TypeScript.",
    outras: "Others",
    contactTitle: "Contact",
    access: "Access",
    footer: "© " + new Date().getFullYear() + " Antonio de Bem Junior. Developed with ♥.",
    backToTop: "Back to home",
    langButton: "Portuguese language",
    themeLight: "Light Theme",
    themeDark: "Dark Theme"
  }
};


/* ================== UTIL ================== */
/**
 * Converte hex para RGB.
 * Aceita formatos: #RRGGBB ou #RGB (com ou sem '#').
 */
function hexToRgb(hex) {
  if (!hex) return null;
  const h = hex.replace("#", "");
  if (h.length === 3) {
    return {
      r: parseInt(h[0] + h[0], 16),
      g: parseInt(h[1] + h[1], 16),
      b: parseInt(h[2] + h[2], 16)
    };
  }
  if (h.length === 6) {
    return {
      r: parseInt(h.substring(0, 2), 16),
      g: parseInt(h.substring(2, 4), 16),
      b: parseInt(h.substring(4, 6), 16)
    };
  }
  return null;
}

/**
 * Calcula luminância relativa (0..1) a partir de RGB.
 * Fórmula sRGB usada para decidir contraste do texto.
 */
function relativeLuminance({ r, g, b }) {
  const srgb = [r / 255, g / 255, b / 255].map(c => {
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
}

/**
 * Retorna '#000' ou '#fff' dependendo do contraste com a cor de fundo.
 */
function contrastColor(hex) {
  const rgb = hexToRgb(hex);
  if (!rgb) return "#fff";
  const lum = relativeLuminance(rgb);
  // threshold entre 0.5 e 0.7 é bom; 0.65 funciona para nossos badges
  return lum > 0.65 ? "#000" : "#fff";
}


/* ================== GERAÇÃO DE CARDS ================== */
function gerarProjetos(lista, containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`gerarProjetos: container com id "${containerId}" não encontrado.`);
    return;
  }
  container.innerHTML = "";

  lista.forEach((projeto, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.index = index + 1;

    // Título
    const titulo = document.createElement("h3");
    titulo.id = `projeto${index + 1}`;
    titulo.textContent = projeto.titulo || `Projeto ${index + 1}`;

    // Imagem (usar class para evitar ids duplicados)
    const img = document.createElement("img");
    img.className = "projeto-foto";
    img.src = projeto.imagem || "";
    img.alt = projeto.titulo || `Projeto ${index + 1}`;
    img.loading = "lazy";

    // Descrição
    const descricao = document.createElement("p");
    descricao.id = `projeto${index + 1}-descricao`;
    descricao.className = "projeto-descricao";
    descricao.textContent = projeto.descricao || "";

    // Tecnologias / badges
    const techContainer = document.createElement("div");
    techContainer.className = "project-techs";
    (projeto.tecnologias || []).forEach(tech => {
      const span = document.createElement("span");
      span.className = "badge";
      span.textContent = tech;

      if (techColors[tech]) {
        span.style.backgroundColor = techColors[tech];
        span.style.color = contrastColor(techColors[tech]);
      }
      techContainer.appendChild(span);
    });

    // Monta
    card.appendChild(titulo);
    card.appendChild(img);
    card.appendChild(descricao);
    card.appendChild(techContainer);

    container.appendChild(card);
  });
}


/* ================== INICIALIZAÇÃO ================== */
document.addEventListener("DOMContentLoaded", () => {
  // Consultas ao DOM (feitas APÓS o DOM estar pronto)
  const el = {
    nav: document.getElementById("nav"),
    navTrigger: document.getElementById("nav-trigger"),
    backToTopBtn: document.getElementById("backToTop"),
    langToggle: document.getElementById("langToggle"),
    themeToggle: document.getElementById("themeToggle"),
    menuToggle: document.getElementById("menu-toggle"),
    menuItems: document.getElementById("menu-items"),
    navProjetos: document.getElementById("nav-projetos"),
    navHabilidades: document.getElementById("nav-habilidades"),
    navContato: document.getElementById("nav-contato"),
    headerTitle: document.getElementById("header-title"),
    projectsTitle: document.getElementById("projects-title"),
    skillsTitle: document.getElementById("skills-title"),
    frontendItens: document.getElementById("frontend-itens"),
    backendItens: document.getElementById("backend-itens"),
    outras: document.getElementById("outras"),
    contactTitle: document.getElementById("contact-title"),
    linkedinText: document.getElementById("linkedin-text"),
    githubText: document.getElementById("github-text"),
    footer: document.getElementById("footer"),
    links: document.querySelectorAll("a[data-target]")
  };

  // 1) Gerar projetos dinamicamente (container id usado no HTML: 'projetos-container')
  gerarProjetos(projetos, "projetos-container");

  // 2) Agora que os cards existem, capturamos referências dependentes
  el.cards = document.querySelectorAll(".card");

  const projectCount = projetos.length;
  const projectTitles = Array.from({ length: projectCount }, (_, i) => document.getElementById(`projeto${i + 1}`));
  const projectDescs = Array.from({ length: projectCount }, (_, i) => document.getElementById(`projeto${i + 1}-descricao`));

  // Função que aplica tradução e textos dinâmicos
  function applySettings(lang = currentLang) {
    currentLang = lang;
    const t = translations[currentLang] || translations.pt;

    if (el.navProjetos) el.navProjetos.innerText = t.nav.projetos;
    if (el.navHabilidades) el.navHabilidades.innerText = t.nav.habilidades;
    if (el.navContato) el.navContato.innerText = t.nav.contato;
    if (el.headerTitle) el.headerTitle.innerText = t.header;
    if (el.projectsTitle) el.projectsTitle.innerText = t.projectsTitle || t.projectsTitle;
    if (el.skillsTitle) el.skillsTitle.innerText = t.skillsTitle;

    // Para títulos/descrições de projetos: se quiser usar traduções específicas,
    // adicione arrays t.projects e t.projectsDesc; caso contrário usamos os dados em `projetos`.
    projectTitles.forEach((p, i) => {
      if (!p) return;
      // Prioriza título traduzido (se existir) — senão usa o projeto real
      if (t.projects && t.projects[i]) p.innerText = t.projects[i];
      else p.innerText = projetos[i] ? projetos[i].titulo : `Projeto ${i + 1}`;
    });

    projectDescs.forEach((d, i) => {
      if (!d) return;
      if (t.projectsDesc && t.projectsDesc[i]) d.innerText = t.projectsDesc[i];
      else d.innerText = projetos[i] ? projetos[i].descricao : `${t.projectsDescPrefix || ""} ${i + 1}.`;
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
    if (el.themeToggle) el.themeToggle.innerText = document.body.classList.contains("dark-mode") ? t.themeLight : t.themeDark;
  }

  // IntersectionObserver para nav visível e animação dos cards
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (el.navTrigger && entry.target === el.navTrigger && el.nav) {
        // mostra nav quando o trigger NÃO está visível (ou seja, rolou para baixo)
        el.nav.classList.toggle("visible", !entry.isIntersecting);
      } else if (entry.target.classList && entry.target.classList.contains("card") && entry.isIntersecting) {
        entry.target.classList.add("show"); // classe 'show' usada para animação CSS
      }
    });
  }, { threshold: 0.12 });

  if (el.navTrigger) observer.observe(el.navTrigger);
  if (el.cards && el.cards.length) el.cards.forEach(card => observer.observe(card));

  // Scroll suave para links com data-target
  if (el.links && el.links.length) {
    el.links.forEach(link => {
      link.addEventListener("click", e => {
        const targetId = e.currentTarget.getAttribute("data-target");
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }

  // Botão voltar ao topo
  if (el.backToTopBtn) {
    window.addEventListener("scroll", () => {
      el.backToTopBtn.classList.toggle("visible", window.scrollY > 300);
    });
    el.backToTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  // Trocar idioma
  if (el.langToggle) {
    el.langToggle.addEventListener("click", () => {
      applySettings(currentLang === "pt" ? "en" : "pt");
    });
  }

  // Trocar tema
  if (el.themeToggle) {
    el.themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      applySettings();
    });
  }

  // Menu mobile / clique fora
  if (el.menuToggle && el.menuItems) {
    el.menuToggle.addEventListener("click", () => el.menuItems.classList.toggle("active"));
    document.addEventListener("click", e => {
      if (!el.menuItems.contains(e.target) && !el.menuToggle.contains(e.target)) {
        el.menuItems.classList.remove("active");
      }
    });
  }

  // Aplicar configurações iniciais
  applySettings();

  console.info("portfolio.js inicializado — projetos gerados:", projetos.length);
});
