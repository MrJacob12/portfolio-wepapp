import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "hero.title": "Open Source Developer",
      "hero.subtitle":
        "Building high-performance web apps, open-source projects, and Linux server infrastructure",
      "hero.badge": "Open Source",
      "about.title": "About Me",
      "about.description.part1":
        "Developer focused on open-source software, backend architecture, and Linux server administration. I design, build, and test web applications end to end.",
      "about.description.part2":
        "I build and maintain open-source projects, from Rust security tooling and Python libraries to TypeScript web applications, and I deploy them on my own Linux servers.",
      "about.description.part3":
        "I actively share technical knowledge through documentation, code reviews, and programming workshops. I am characterized by analytical thinking, attention to detail, and strong teamwork skills.",
      "about.description.part4":
        "I have hands-on experience implementing Docker and Linux servers, writing Docker Compose configurations, and automating deployments and maintenance.",
      "projects.title": "Featured Projects",
      "projects.tools": "Tools & Libraries",
      "projects.viewCode": "Code",
      "projects.liveDemo": "Live Demo",
      "skills.title": "Skills",
      "skills.groups.languages": "Languages & Frameworks",
      "skills.groups.backend": "Backend & Databases",
      "skills.groups.servers": "Servers & Containers",
      "skills.items.python.name": "Python",
      "skills.items.python.details": "FastAPI, scripting, automation",
      "skills.items.typescript.name": "TypeScript / React",
      "skills.items.typescript.details": "High-performance web apps",
      "skills.items.rust.name": "Rust",
      "skills.items.rust.details": "Security & CLI tooling",
      "skills.items.fastapi.name": "FastAPI",
      "skills.items.fastapi.details": "REST APIs & backends",
      "skills.items.postgresql.name": "PostgreSQL",
      "skills.items.postgresql.details": "Design & optimization",
      "skills.items.mysql.name": "MySQL",
      "skills.items.mysql.details": "Relational databases",
      "skills.items.docker.name": "Docker",
      "skills.items.docker.details": "Images, containers, builds",
      "skills.items.compose.name": "Docker Compose",
      "skills.items.compose.details": "Multi-service stacks",
      "skills.items.linux.name": "Linux Servers",
      "skills.items.linux.details": "Administration & deployment",
      "skills.items.automation.name": "Automation",
      "skills.items.automation.details": "Deploy scripts, CI/CD",
      "contact.title": "Get in Touch",
      "contact.name": "Your Name",
      "contact.email": "Your Email",
      "contact.message": "Your Message",
      "contact.send": "Send Message",
      "footer.copyright": "© 2024-2025 Jakub Buciuto. All rights reserved.",
      "projects.showMore": "Show More",
      "projects.showLess": "Show Less",
      "contact.success": "Message sent successfully!",
      "contact.error":
        "An error occurred while sending the message. Please try again later.",
      "services.title": "My Services",
      "services.servers.title": "Servers",
      "services.servers.description":
        "Cloud servers (VPS), mini and dedicated. Configuration, hardening, monitoring, and ongoing maintenance.",
      "services.servers.features.first": "Cloud, mini and dedicated servers",
      "services.servers.features.second": "Security and monitoring",
      "services.servers.features.third": "Backups and updates",
      "services.servers.features.fourth": "Scaling on demand",

      "services.containerization.title": "Containerization",
      "services.containerization.description":
        "Containerizing applications with Docker and managing multi-service stacks with Docker Compose.",
      "services.containerization.features.first": "Docker and Docker Compose",
      "services.containerization.features.second": "Multi-service application stacks",
      "services.containerization.features.third": "Automated deployments",
      "services.containerization.features.fourth": "Easy updates and rollbacks",

      "services.websites.title": "Websites & Hosting",
      "services.websites.description":
        "Dynamic websites, hosting, and domain management. From the project to deployment.",
      "services.websites.features.first": "Responsive websites",
      "services.websites.features.second": "Hosting and domain management",
      "services.websites.features.third": "Regular maintenance",
      "services.websites.features.fourth": "Technical support",

      "services.automation.title": "Automation",
      "services.automation.description":
        "Solutions that automate business processes and increase work efficiency.",
      "services.automation.features.first": "Business process analysis",
      "services.automation.features.second": "Custom solutions",
      "services.automation.features.third": "System integration",
      "services.automation.features.fourth": "Workflow optimization",
    },
  },
  pl: {
    translation: {
      "hero.title": "Developer Open Source",
      "hero.subtitle":
        "Buduję wydajne aplikacje webowe, projekty open source oraz infrastrukturę serwerową opartą na Linuxie",
      "hero.badge": "Open Source",
      "about.title": "O mnie",
      "about.description.part1":
        "Developer skupiony na oprogramowaniu open source, architekturze backendu oraz administracji serwerami Linux. Projektuję, tworzę i testuję aplikacje internetowe od początku do końca.",
      "about.description.part2":
        "Buduję i utrzymuję projekty open source, od narzędzi bezpieczeństwa w Rust i bibliotek Pythona po aplikacje webowe w TypeScript, a następnie wdrażam je na własnych serwerach Linux.",
      "about.description.part3":
        "Aktywnie dzielę się wiedzą techniczną poprzez dokumentację, przeglądy kodu oraz warsztaty z programowania. Cechuje mnie analityczne myślenie, dbałość o szczegóły oraz umiejętność pracy zespołowej.",
      "about.description.part4":
        "Mam doświadczenie we wdrażaniu serwerów opartych na Dockerze i Linuxie, pisaniu konfiguracji Docker Compose oraz automatyzacji wdrożeń i utrzymania.",
      "projects.title": "Projekty",
      "projects.tools": "Narzędzia i Biblioteki",
      "projects.viewCode": "Kod",
      "projects.liveDemo": "Demo",
      "skills.title": "Umiejętności",
      "skills.groups.languages": "Języki i Frameworki",
      "skills.groups.backend": "Backend i Bazy Danych",
      "skills.groups.servers": "Serwery i Kontenery",
      "skills.items.python.name": "Python",
      "skills.items.python.details": "FastAPI, skrypty, automatyzacja",
      "skills.items.typescript.name": "TypeScript / React",
      "skills.items.typescript.details": "Wydajne aplikacje webowe",
      "skills.items.rust.name": "Rust",
      "skills.items.rust.details": "Narzędzia bezpieczeństwa i CLI",
      "skills.items.fastapi.name": "FastAPI",
      "skills.items.fastapi.details": "API REST i backendy",
      "skills.items.postgresql.name": "PostgreSQL",
      "skills.items.postgresql.details": "Projektowanie i optymalizacja",
      "skills.items.mysql.name": "MySQL",
      "skills.items.mysql.details": "Relacyjne bazy danych",
      "skills.items.docker.name": "Docker",
      "skills.items.docker.details": "Obrazy, kontenery, buildy",
      "skills.items.compose.name": "Docker Compose",
      "skills.items.compose.details": "Stosy wielousługowe",
      "skills.items.linux.name": "Serwery Linux",
      "skills.items.linux.details": "Administracja i wdrożenia",
      "skills.items.automation.name": "Automatyzacja",
      "skills.items.automation.details": "Skrypty wdrożeń, CI/CD",
      "contact.title": "Kontakt",
      "contact.name": "Twoje Imię",
      "contact.email": "Twój Email",
      "contact.message": "Twoja Wiadomość",
      "contact.send": "Wyślij Wiadomość",
      "footer.copyright":
        "© 2024-2025 Jakub Buciuto. Wszelkie prawa zastrzeżone.",
      "projects.showMore": "Pokaż Więcej",
      "projects.showLess": "Pokaż Mniej",
      "contact.success": "Wiadomość została wysłana pomyślnie!",
      "contact.error":
        "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.",
      "services.title": "Moje Usługi",
      "services.servers.title": "Serwery",
      "services.servers.description":
        "Serwery cloud (VPS), mini oraz dedykowane. Konfiguracja, zabezpieczanie, monitoring i bieżące utrzymanie.",
      "services.servers.features.first": "Serwery cloud, mini i dedykowane",
      "services.servers.features.second": "Zabezpieczanie i monitoring",
      "services.servers.features.third": "Kopie zapasowe i aktualizacje",
      "services.servers.features.fourth": "Skalowanie w zależności od potrzeb",

      "services.containerization.title": "Konteneryzacja",
      "services.containerization.description":
        "Konteneryzacja aplikacji z Dockerem oraz zarządzanie wielousługowymi stosami z Docker Compose.",
      "services.containerization.features.first": "Docker i Docker Compose",
      "services.containerization.features.second": "Stosy wielousługowe",
      "services.containerization.features.third": "Automatyczne wdrożenia",
      "services.containerization.features.fourth": "Łatwe aktualizacje i przywracanie wersji",

      "services.websites.title": "Strony i Hosting",
      "services.websites.description":
        "Dynamiczne strony internetowe, hosting oraz zarządzanie domenami. Od projektu po wdrożenie.",
      "services.websites.features.first": "Responsywne strony internetowe",
      "services.websites.features.second": "Hosting i zarządzanie domeną",
      "services.websites.features.third": "Regularna konserwacja",
      "services.websites.features.fourth": "Wsparcie techniczne",

      "services.automation.title": "Automatyzacja",
      "services.automation.description":
        "Rozwiązania automatyzujące procesy biznesowe i zwiększające efektywność pracy.",
      "services.automation.features.first": "Analiza procesów biznesowych",
      "services.automation.features.second": "Rozwiązania dopasowane do potrzeb",
      "services.automation.features.third": "Integracja systemów",
      "services.automation.features.fourth": "Optymalizacja workflow",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
