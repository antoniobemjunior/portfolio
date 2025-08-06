    const nav = document.getElementById("nav");
    const navTrigger = document.getElementById("nav-trigger");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            nav.classList.remove("visible");
          } else {
            nav.classList.add("visible");
          }
        });
      },
      { threshold: 0 } // Triggera assim que encostar no viewport
    );
    observer.observe(navTrigger);

    // Scroll suave e controle nav ao clicar nos links
    document.querySelectorAll("a[data-target]").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute("data-target");

        if (targetId === "#inicio") {
          forcedNavVisible = false;
          document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
          
          // Reavalia nav após scroll finalizar
          setTimeout(() => {
            const headerRect = header.getBoundingClientRect();
            if (headerRect.top >= 0 && headerRect.bottom <= window.innerHeight) {
              nav.classList.remove("visible");
            } else {
              nav.classList.add("visible");
            }
          }, 100); // 500ms suficiente pro scroll smooth terminar
        } else {
          forcedNavVisible = true;
          nav.classList.add("visible");
          document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    // Animação dos cards
    const cardsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".card").forEach((card) => {
      cardsObserver.observe(card);
    });

    // Botão voltar ao topo e seu comportamento
    const backToTopBtn = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Controle idioma (pt / en)
    const langToggle = document.getElementById("langToggle");
    let isPortuguese = true;

    langToggle.addEventListener("click", () => {
      if (isPortuguese) {
        // Tradução para inglês
        document.getElementById("nav-inicio").innerText = "Home";
        document.getElementById("nav-projetos").innerText = "Projects";
        document.getElementById("nav-habilidades").innerText = "Skills";
        document.getElementById("nav-contato").innerText = "Contact";

        document.getElementById("header-title").innerText = "Hello I'm Antônio de Bem Junior, a trainee systems developer!";

        if (document.body.classList.contains("dark-mode")) {
          if (document.getElementById("nav-inicio").innerText === "Início"){
            themeToggle.innerText = "Tema Claro";
          } else {
            themeToggle.innerText = "Light Theme";
          }
        } else {
          if (document.getElementById("nav-inicio").innerText === "Início"){
            themeToggle.innerText = "Tema Escuro";
          } else {
            themeToggle.innerText = "Dark Theme";
          }
        }

        document.getElementById("projects-title").innerText = "Projects";
        document.getElementById("projeto1").innerText = "Project 1";
        document.getElementById("projeto2").innerText = "Project 2";
        document.getElementById("projeto3").innerText = "Project 3";
        document.getElementById("projeto4").innerText = "Project 4";
        document.getElementById("projeto5").innerText = "Project 5";
        document.getElementById("projeto6").innerText = "Project 6";
        document.getElementById("projeto7").innerText = "Project 7";
        document.getElementById("projeto8").innerText = "Project 8";
        document.getElementById("projeto9").innerText = "Project 9";

        document.getElementById("projeto1-descricao").innerText = "Description of project 1.";
        document.getElementById("projeto2-descricao").innerText = "Description of project 2.";
        document.getElementById("projeto3-descricao").innerText = "Description of project 3.";
        document.getElementById("projeto4-descricao").innerText = "Description of project 4.";
        document.getElementById("projeto5-descricao").innerText = "Description of project 5.";
        document.getElementById("projeto6-descricao").innerText = "Description of project 6.";
        document.getElementById("projeto7-descricao").innerText = "Description of project 7.";
        document.getElementById("projeto8-descricao").innerText = "Description of project 8.";
        document.getElementById("projeto9-descricao").innerText = "Description of project 9.";

        document.getElementById("skills-title").innerText = "Skills";
        document.getElementById("frontend-itens").innerText = "HTML, CSS and JavaScript.";
        document.getElementById("backend-itens").innerText = "C, C++, C#, Python and SQL.";
        document.getElementById("outras").innerText = "Others";

        document.getElementById("contact-title").innerText = "Contact";
        document.getElementById("linkedin-text").innerText = "Access";
        document.getElementById("github-text").innerText = "Access";

        document.getElementById("footer").innerText = "© 2025 Antonio de Bem Junior. Developed with ♥.";

        backToTopBtn.innerText = "Back to home";

        langToggle.innerText = "Portuguese language";
      } else {
        // Tradução para português
        document.getElementById("nav-inicio").innerText = "Início";
        document.getElementById("nav-projetos").innerText = "Projetos";
        document.getElementById("nav-habilidades").innerText = "Habilidades";
        document.getElementById("nav-contato").innerText = "Contato";

        document.getElementById("header-title").innerText = "Olá sou Antônio de Bem Junior, um desenvolvedor de sistemas trainee!";

        if (document.body.classList.contains("dark-mode")) {
          if (document.getElementById("nav-inicio").innerText === "Início"){
            themeToggle.innerText = "Tema Claro";
          } else {
            themeToggle.innerText = "Light Theme";
          }
        } else {
          if (document.getElementById("nav-inicio").innerText === "Início"){
            themeToggle.innerText = "Tema Escuro";
          } else {
            themeToggle.innerText = "Dark Theme";
          }
        }

        document.getElementById("projects-title").innerText = "Projetos";
        document.getElementById("projeto1").innerText = "Projeto 1";
        document.getElementById("projeto2").innerText = "Projeto 2";
        document.getElementById("projeto3").innerText = "Projeto 3";
        document.getElementById("projeto4").innerText = "Projeto 4";
        document.getElementById("projeto5").innerText = "Projeto 5";
        document.getElementById("projeto6").innerText = "Projeto 6";
        document.getElementById("projeto7").innerText = "Projeto 7";
        document.getElementById("projeto8").innerText = "Projeto 8";
        document.getElementById("projeto9").innerText = "Projeto 9";

        document.getElementById("projeto1-descricao").innerText = "Descrição do projeto 1.";
        document.getElementById("projeto2-descricao").innerText = "Descrição do projeto 2.";
        document.getElementById("projeto3-descricao").innerText = "Descrição do projeto 3.";
        document.getElementById("projeto4-descricao").innerText = "Descrição do projeto 4.";
        document.getElementById("projeto5-descricao").innerText = "Descrição do projeto 5.";
        document.getElementById("projeto6-descricao").innerText = "Descrição do projeto 6.";
        document.getElementById("projeto7-descricao").innerText = "Descrição do projeto 7.";
        document.getElementById("projeto8-descricao").innerText = "Descrição do projeto 8.";
        document.getElementById("projeto9-descricao").innerText = "Descrição do projeto 9.";

        document.getElementById("skills-title").innerText = "Habilidades";
        document.getElementById("frontend-itens").innerText = "HTML, CSS e JavaScript.";
        document.getElementById("backend-itens").innerText = "C, C++, C#, Python e SQL.";
        document.getElementById("outras").innerText = "Outras";

        document.getElementById("contact-title").innerText = "Contato";
        document.getElementById("linkedin-text").innerText = "Acessar";
        document.getElementById("github-text").innerText = "Acessar";

        document.getElementById("footer").innerText = "© 2025 Antonio de Bem Junior. Desenvolvido com ♥.";

        backToTopBtn.innerText = "Voltar ao início";

        langToggle.innerText = "Idioma Inglês";
      }
      isPortuguese = !isPortuguese;
    });

    const themeToggle = document.getElementById("themeToggle");

    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      if (document.body.classList.contains("dark-mode")) {
        if (document.getElementById("nav-inicio").innerText === "Início"){
          themeToggle.innerText = "Tema Claro";
        } else {
          themeToggle.innerText = "Light Theme";
        }
      } else {
        if (document.getElementById("nav-inicio").innerText === "Início"){
          themeToggle.innerText = "Tema Escuro";
        } else {
          themeToggle.innerText = "Dark Theme";
        }
      }
    });

    // Toggle menu mobile
    const menuToggle = document.getElementById("menu-toggle");
    const menuItems = document.getElementById("menu-items");
    menuToggle.addEventListener("click", () => {
      menuItems.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
      const isClickInsideMenu = menuItems.contains(e.target) || menuToggle.contains(e.target);
      if (!isClickInsideMenu && menuItems.classList.contains("active")) {
        menuItems.classList.remove("active");
      }
    });