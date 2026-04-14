const DEFAULT_LANGUAGE = "pt-BR";
const STORAGE_KEY = "portfolio-language";

const translations = {
  "pt-BR": {
    pageTitle: "Portfólio | Fábio Luiz",
    metaDescription:
      "Portfólio de Fábio Luiz, desenvolvedor full-stack focado em interfaces modernas e aplicações web responsivas.",
    languageButtonText: "EN",
    languageButtonAriaLabel: "Traduzir portfólio para inglês",
    "menu.openLabel": "Abrir menu de navegação",
    "menu.closeLabel": "Fechar menu de navegação",
    "menu.home": "Início",
    "menu.about": "Sobre",
    "menu.skills": "Habilidades",
    "menu.projects": "Projetos",
    "menu.certificate": "Certificado",
    "menu.contact": "Contato",
    "hero.kicker": "Portfólio",
    "hero.role": "Desenvolvedor Full-Stack",
    "hero.text":
      "Construo experiências digitais modernas com foco em performance, clareza visual e código organizado. Estou em evolução contínua para transformar ideias em projetos profissionais.",
    "hero.ctaProjects": "Ver Projetos",
    "hero.ctaContact": "Falar Comigo",
    "hero.statsProjects": "Projetos publicados",
    "hero.statsCertificate": "Certificação concluída",
    "hero.statsFocus": "Foco em evolução diária",
    "hero.photoAlt": "Foto de Fábio Luiz",
    "about.kicker": "Sobre mim",
    "about.title": "Quem sou eu no código e no dia a dia",
    "about.p1":
      "Sou estudante de Engenharia de Software e desenvolvedor em formação, com foco em aplicações web funcionais e interfaces que valorizam a experiência do usuário.",
    "about.p2":
      "Tenho conhecimento em HTML, CSS e JavaScript, aplicando boas práticas de semântica, responsividade, versionamento com Git e organização de componentes.",
    "about.p3":
      "Meu objetivo é evoluir para projetos cada vez mais robustos, com código limpo, boa arquitetura e impacto real para pessoas e negócios.",
    "skills.kicker": "Conhecimento",
    "skills.title": "Habilidades em destaque",
    "projects.kicker": "Portfólio",
    "projects.title": "Projetos em destaque",
    "projects.project1.badge": "Landing Page",
    "projects.project1.openLabel": "Abrir projeto Linktree para Agência",
    "projects.project1.alt":
      "Preview do projeto Linktree para a agência LKZ Mídia",
    "projects.project1.title": "Linktree para Agência",
    "projects.project1.description":
      "Página para apresentação de serviços e canais da LKZ Mídia, com foco em identidade visual e direcionamento rápido para conversão.",
    "projects.project2.badge": "Site Institucional",
    "projects.project2.openLabel":
      "Abrir projeto Site de Academia de Jiu-Jitsu",
    "projects.project2.alt":
      "Preview do site institucional da academia Raiz Jiu-Jitsu",
    "projects.project2.title": "Site de Academia de Jiu-Jitsu",
    "projects.project2.description":
      "Projeto responsivo com apresentação da academia, modalidades e contato, priorizando navegação clara e layout de alto impacto visual.",
    "certificate.kicker": "Formação",
    "certificate.title": "Certificação",
    "certificate.alt":
      "Certificado de conclusão da formação Front-end na Udemy",
    "certificate.courseTitle":
      "Formação Front-end: HTML, CSS, JavaScript e React",
    "certificate.institutionLabel": "Instituição:",
    "certificate.institutionValue": "Udemy",
    "certificate.conclusionLabel": "Conclusão:",
    "certificate.conclusionValue": "28 de setembro de 2025",
    "contact.kicker": "Contato",
    "contact.title": "Vamos construir algo juntos?",
    "contact.form.nameLabel": "Nome",
    "contact.form.namePlaceholder": "Seu nome",
    "contact.form.messageLabel": "Mensagem",
    "contact.form.messagePlaceholder": "Fale um pouco sobre seu projeto",
    "contact.form.submit": "Enviar no WhatsApp",
    "footer.rights": "Fábio Nascimento. Todos os direitos reservados.",
    "footer.tagline": "Transformando ideias em códigos.",
    contactWhatsAppMessage: "Olá, me chamo {name}. {message}",
  },
  en: {
    pageTitle: "Portfolio | Fábio Luiz",
    metaDescription:
      "Portfolio of Fábio Luiz, a full-stack developer focused on modern interfaces and responsive web applications.",
    languageButtonText: "PT-BR",
    languageButtonAriaLabel: "Switch portfolio language to Portuguese",
    "menu.openLabel": "Open navigation menu",
    "menu.closeLabel": "Close navigation menu",
    "menu.home": "Home",
    "menu.about": "About",
    "menu.skills": "Skills",
    "menu.projects": "Projects",
    "menu.certificate": "Certificate",
    "menu.contact": "Contact",
    "hero.kicker": "Portfolio",
    "hero.role": "Full-Stack Developer",
    "hero.text":
      "I build modern digital experiences focused on performance, visual clarity, and organized code. I am constantly improving to turn ideas into professional projects.",
    "hero.ctaProjects": "See Projects",
    "hero.ctaContact": "Contact Me",
    "hero.statsProjects": "Published projects",
    "hero.statsCertificate": "Certification completed",
    "hero.statsFocus": "Focus on daily improvement",
    "hero.photoAlt": "Photo of Fábio Luiz",
    "about.kicker": "About me",
    "about.title": "Who I am in code and in daily life",
    "about.p1":
      "I am a Software Engineering student and developer in training, focused on functional web applications and interfaces that value user experience.",
    "about.p2":
      "I have knowledge in HTML, CSS, and JavaScript, applying best practices in semantics, responsiveness, Git version control, and component organization.",
    "about.p3":
      "My goal is to grow into increasingly robust projects, with clean code, solid architecture, and real impact for people and businesses.",
    "skills.kicker": "Knowledge",
    "skills.title": "Highlighted skills",
    "projects.kicker": "Portfolio",
    "projects.title": "Featured projects",
    "projects.project1.badge": "Landing Page",
    "projects.project1.openLabel": "Open Agency Linktree project",
    "projects.project1.alt":
      "Preview of the Linktree project for LKZ Mídia agency",
    "projects.project1.title": "Agency Linktree",
    "projects.project1.description":
      "Page for presenting LKZ Mídia services and channels, focused on visual identity and quick conversion-oriented navigation.",
    "projects.project2.badge": "Institutional Website",
    "projects.project2.openLabel": "Open Jiu-Jitsu Academy website project",
    "projects.project2.alt":
      "Preview of the institutional website for Raiz Jiu-Jitsu academy",
    "projects.project2.title": "Jiu-Jitsu Academy Website",
    "projects.project2.description":
      "Responsive project featuring the academy, classes, and contact information, prioritizing clear navigation and a high-impact visual layout.",
    "certificate.kicker": "Education",
    "certificate.title": "Certification",
    "certificate.alt":
      "Certificate of completion of the Front-end program on Udemy",
    "certificate.courseTitle":
      "Front-end Program: HTML, CSS, JavaScript and React",
    "certificate.institutionLabel": "Institution:",
    "certificate.institutionValue": "Udemy",
    "certificate.conclusionLabel": "Completion:",
    "certificate.conclusionValue": "September 28, 2025",
    "contact.kicker": "Contact",
    "contact.title": "Shall we build something together?",
    "contact.form.nameLabel": "Name",
    "contact.form.namePlaceholder": "Your name",
    "contact.form.messageLabel": "Message",
    "contact.form.messagePlaceholder": "Tell me a little about your project",
    "contact.form.submit": "Send on WhatsApp",
    "footer.rights": "Fábio Nascimento. All rights reserved.",
    "footer.tagline": "Turning ideas into code.",
    contactWhatsAppMessage: "Hi, my name is {name}. {message}",
  },
};

const menuButton = document.getElementById("menu-mobile");
const menu = document.getElementById("menu");
const menuLinks = document.querySelectorAll(".menu-link");
const languageToggle = document.getElementById("language-toggle");
const metaDescription = document.getElementById("meta-description");
const formulario = document.getElementById("formulario");

let currentLanguage = DEFAULT_LANGUAGE;

function getSavedLanguage() {
  try {
    const storedLanguage = localStorage.getItem(STORAGE_KEY);
    if (
      storedLanguage &&
      Object.prototype.hasOwnProperty.call(translations, storedLanguage)
    ) {
      return storedLanguage;
    }
  } catch (error) {
    return DEFAULT_LANGUAGE;
  }

  return DEFAULT_LANGUAGE;
}

function saveLanguage(language) {
  try {
    localStorage.setItem(STORAGE_KEY, language);
  } catch (error) {
    return;
  }
}

function updateMenuButtonAriaLabel() {
  if (!menuButton) {
    return;
  }

  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
  const labelKey = isExpanded ? "menu.closeLabel" : "menu.openLabel";
  menuButton.setAttribute(
    "aria-label",
    translations[currentLanguage][labelKey],
  );
}

function updateLanguageButton() {
  if (!languageToggle) {
    return;
  }

  languageToggle.textContent = translations[currentLanguage].languageButtonText;
  languageToggle.setAttribute(
    "aria-label",
    translations[currentLanguage].languageButtonAriaLabel,
  );
}

function applyLanguage(language) {
  if (!Object.prototype.hasOwnProperty.call(translations, language)) {
    return;
  }

  currentLanguage = language;
  const dictionary = translations[currentLanguage];

  document.documentElement.lang = currentLanguage;
  document.title = dictionary.pageTitle;

  if (metaDescription) {
    metaDescription.setAttribute("content", dictionary.metaDescription);
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (key && dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;

    if (key && dictionary[key]) {
      element.setAttribute("placeholder", dictionary[key]);
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.dataset.i18nAlt;

    if (key && dictionary[key]) {
      element.setAttribute("alt", dictionary[key]);
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;

    if (key && dictionary[key]) {
      element.setAttribute("aria-label", dictionary[key]);
    }
  });

  updateLanguageButton();
  updateMenuButtonAriaLabel();
}

function closeMenu() {
  if (!menuButton || !menu) {
    return;
  }

  menu.classList.remove("ativo");
  menuButton.classList.remove("ativo");
  menuButton.setAttribute("aria-expanded", "false");
  updateMenuButtonAriaLabel();
}

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute("aria-expanded", String(!isExpanded));
    menuButton.classList.toggle("ativo");
    menu.classList.toggle("ativo");
    updateMenuButtonAriaLabel();
  });
}

menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    const nextLanguage = currentLanguage === "pt-BR" ? "en" : "pt-BR";
    applyLanguage(nextLanguage);
    saveLanguage(nextLanguage);
  });
}

if (formulario) {
  formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    const telefone = "5527999124763";

    const whatsappTemplate =
      translations[currentLanguage].contactWhatsAppMessage;
    const texto = whatsappTemplate
      .replace("{name}", nome)
      .replace("{message}", mensagem);
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank", "noopener");
  });
}

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 },
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  });
});

document.getElementById("ano-atual").textContent = new Date().getFullYear();

applyLanguage(getSavedLanguage());
