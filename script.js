
/* ================== DADOS ================== */
let currentLang = "pt";

const projetos = [
  {
    titulo: "Alura Books",
    imagem: "https://raw.githubusercontent.com/antoniobemjunior/portfolio/refs/heads/main/projeto1.png",
    descricao: "Livraria digital.",
    description: "Digital bookstore.",
    tecnologias: ["HTML", "CSS"]
  },
  {
    titulo: "Wave Cast",
    imagem: "https://raw.githubusercontent.com/antoniobemjunior/portfolio/refs/heads/main/projeto9.png",
    descricao: "Plataforma de podcasts.",
    description: "Podcast platform.",
    tecnologias: ["HTML", "CSS"]
  },
  {
    titulo: "Alura Play",
    imagem: "https://raw.githubusercontent.com/antoniobemjunior/portfolio/refs/heads/main/projeto3.png",
    descricao: "Site de streaming de vídeos.",
    description: "Video streaming site.",
    tecnologias: ["HTML", "CSS"]
  },
  {
    titulo: "Alura Plus",
    imagem: "https://raw.githubusercontent.com/antoniobemjunior/portfolio/refs/heads/main/projeto4.png",
    descricao: "Landing page de venda de um serviço.",
    description: "Landing page for selling a service.",
    tecnologias: ["HTML", "CSS"]
  },
  {
    titulo: "Calmaria Spa",
    imagem: "https://raw.githubusercontent.com/antoniobemjunior/portfolio/refs/heads/main/projeto6.png",
    descricao: "Landing page de venda de um serviço.",
    description: "Landing page for selling a service.",
    tecnologias: ["HTML", "CSS", "SCSS", "Sass"]
  },
  {
    titulo: "Byte Bank",
    imagem: "https://raw.githubusercontent.com/antoniobemjunior/portfolio/refs/heads/main/projeto5.png",
    descricao: "Gerenciador financeiro.",
    description: "Financial manager.",
    tecnologias: ["HTML", "CSS", "JavaScript"]
  },
  {
    titulo: "Alura Newsletter",
    imagem: "https://raw.githubusercontent.com/antoniobemjunior/portfolio/refs/heads/main/projeto2.png",
    descricao: "Portal de newsletter.",
    description: "Newsletter portal.",
    tecnologias: ["HTML", "CSS"]
  },
  {
    titulo: "Lista de Tarefas",
    imagem: "https://raw.githubusercontent.com/antoniobemjunior/portfolio/refs/heads/main/projeto7.png",
    descricao: "Lista de tarefas com dados persistentes.",
    description: "Task list with persistent data.",
    tecnologias: ["HTML", "CSS", "JavaScript"]
  },
  {
    titulo: "Lista de Tarefas",
    imagem: "https://raw.githubusercontent.com/antoniobemjunior/portfolio/refs/heads/main/projeto8.png",
    descricao: "Lista de tarefas com dados persistentes.",
    description: "Task list with persistent data.",
    tecnologias: ["HTML", "CSS", "JavaScript"]
  }
];

const certificados = [
  {
    titulo: "Certificado",
    certificado: "https://raw.githubusercontent.com/antoniobemjunior/portfolio/refs/heads/main/projeto1.png",
    descricao: "Descrição do certificado",
    description: "Newsletter portal."
  },
  {
    titulo: "Certificado",
    certificado: "https://raw.githubusercontent.com/antoniobemjunior/portfolio/refs/heads/main/projeto1.png",
    descricao: "Descrição do certificado",
    description: "Newsletter portal."
  },
  {
    titulo: "Certificado",
    certificado: "https://raw.githubusercontent.com/antoniobemjunior/portfolio/refs/heads/main/projeto1.png",
    descricao: "Descrição do certificado",
    description: "Newsletter portal."
  },
  {
    titulo: "Certificado",
    certificado: "https://raw.githubusercontent.com/antoniobemjunior/portfolio/refs/heads/main/projeto1.png",
    descricao: "Descrição do certificado",
    description: "Newsletter portal."
  },
  {
    titulo: "Certificado",
    certificado: "https://raw.githubusercontent.com/antoniobemjunior/portfolio/refs/heads/main/projeto1.png",
    descricao: "Descrição do certificado",
    description: "Newsletter portal."
  },
  {
    titulo: "Certificado",
    certificado: "https://raw.githubusercontent.com/antoniobemjunior/portfolio/refs/heads/main/projeto1.png",
    descricao: "Descrição do certificado",
    description: "Newsletter portal."
  },
  {
    titulo: "Certificado",
    certificado: "https://raw.githubusercontent.com/antoniobemjunior/portfolio/refs/heads/main/projeto1.png",
    descricao: "Descrição do certificado",
    description: "Newsletter portal."
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
    nav: { projetos: "Projetos", habilidades: "Habilidades", contato: "Contato", certificados: "Certificados" },
    header: "Olá sou Antônio de Bem Junior, um desenvolvedor de sistemas trainee!",
    projectsTitle: "Projetos",
    projectsDescPrefix: "Descrição do projeto",
    skillsTitle: "Habilidades",
    certificatesTitle: "Certificados",
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
    nav: { projetos: "Projects", habilidades: "Skills", contato: "Contact", certificados: "Certificates" },
    header: "Hello I'm Antônio de Bem Junior, a trainee systems developer!",
    projectsTitle: "Projects",
    projectsDescPrefix: "Description of project",
    skillsTitle: "Skills",
    certificatesTitle: "Certificates",
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

function relativeLuminance({ r, g, b }) {
  const srgb = [r / 255, g / 255, b / 255].map(c => {
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
}

function contrastColor(hex) {
  const rgb = hexToRgb(hex);
  if (!rgb) return "#fff";
  const lum = relativeLuminance(rgb);
  // threshold entre 0.5 e 0.7 é bom; 0.65 funciona para nossos badges
  return lum > 0.65 ? "#000" : "#fff";
}

/* ================== GERAÇÃO DE PROJETOS ================== */
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

/* ================== GERAÇÃO DE CERTIFICADOS ================== */
function gerarCertificados(lista, containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`gerarCertificados: container com id "${containerId}" não encontrado.`);
    return;
  }
  container.innerHTML = "";

  lista.forEach((certificado, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.index = index + 1;

    // Título
    const titulo = document.createElement("h3");
    titulo.id = `certificado${index + 1}`;
    titulo.textContent = certificado.titulo || `Certificado ${index + 1}`;

    // Imagem (usar class para evitar ids duplicados)
    const img = document.createElement("img");
    img.className = "certificado";
    img.src = certificado.certificado || "";
    img.alt = certificado.titulo || `Certificado ${index + 1}`;
    img.loading = "lazy";

    // Descrição
    const descricao = document.createElement("p");
    descricao.id = `certificado${index + 1}-descricao`;
    descricao.className = "certificado-descricao";
    descricao.textContent = certificado.descricao || "";

    // Monta
    card.appendChild(titulo);
    card.appendChild(img);
    card.appendChild(descricao);

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
    navCertificados: document.getElementById("nav-certificados"),
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
    links: document.querySelectorAll("a[data-target]")
  };

  gerarProjetos(projetos, "projetos-container");
  gerarCertificados(certificados, "certificados-container");

  // 2) Agora que os cards existem, capturamos referências dependentes
  el.cards = document.querySelectorAll(".card");

  const projectCount = projetos.length;
  const projectTitles = Array.from({ length: projectCount }, (_, i) => document.getElementById(`projeto${i + 1}`));
  const projectDescs = Array.from({ length: projectCount }, (_, i) => document.getElementById(`projeto${i + 1}-descricao`));

  const certificatesCount = certificados.length;
  const certificatesTitles = Array.from({ length: certificatesCount }, (_, i) => document.getElementById(`certificado${i + 1}`));
  const certificatesDescs = Array.from({ length: certificatesCount }, (_, i) => document.getElementById(`certificado${i + 1}-descricao`));

  // Função que aplica tradução e textos dinâmicos
  function applySettings(lang = currentLang) {
    currentLang = lang;
    const t = translations[currentLang] || translations.pt;

    if (el.navProjetos) el.navProjetos.innerText = t.nav.projetos;
    if (el.navHabilidades) el.navHabilidades.innerText = t.nav.habilidades;
    if (el.navCertificados) el.navCertificados.innerText = t.nav.certificados;
    if (el.navContato) el.navContato.innerText = t.nav.contato;
    if (el.headerTitle) el.headerTitle.innerText = t.header;
    if (el.projectsTitle) el.projectsTitle.innerText = t.projectsTitle || t.projectsTitle;
    if (el.skillsTitle) el.skillsTitle.innerText = t.skillsTitle;
    if (el.certificatesTitle) el.certificatesTitle.innerText = t.certificatesTitle;

    // Para títulos/descrições de projetos: se quiser usar traduções específicas,
    // adicione arrays t.projects e t.projectsDesc; caso contrário usamos os dados em `projetos`.
    projectTitles.forEach((p, i) => {
      if (!p) return;
      // Prioriza título traduzido (se existir) — senão usa o projeto real
      if (t.projects && t.projects[i]) p.innerText = t.projects[i];
      else p.innerText = projetos[i] ? projetos[i].titulo : `Projeto ${i + 1}`;
    });

    certificatesTitles.forEach((c, i) => {
      if (!c) return;
      // Prioriza título traduzido (se existir) — senão usa o projeto real
      if (t.certificates && t.certificates[i]) p.innerText = t.certificates[i];
      else c.innerText = certificados[i] ? certificados[i].titulo : `Certificado ${i + 1}`;
    });

    projectDescs.forEach((d, i) => {
      if (!d) return;
      if (projetos[i].description) {
        if(lang === "pt")
          d.innerText = projetos[i].descricao;
        else
          d.innerText = projetos[i].description;
      }
      else d.innerText = projetos[i] ? projetos[i].descricao : `${t.projectsDescPrefix || ""} ${i + 1}.`;
    });

    certificatesDescs.forEach((d, i) => {
      if (!d) return;
      if (projetos[i].description) {
        if(lang === "pt")
          d.innerText = certificados[i].descricao;
        else
          d.innerText = certificados[i].description;
      }
      else d.innerText = certificados[i] ? certificados[i].descricao : `${t.certificatesDescPrefix || ""} ${i + 1}.`;
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

  applySettings();

  console.info("Projetos:", projetos.length);
  console.info("Certificados:", certificados.length);
});
