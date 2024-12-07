import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "hero.title": "Full-Stack Developer",
      "hero.subtitle": "Building scalable web applications with modern technologies",
      "about.title": "About Me",
      "about.description.part1": "Engaged Full-Stack Developer with experience in designing, developing, and testing web applications.",
      "about.description.part2": "I possess strong programming skills and have gained expertise in working with clients, creating platforms to streamline order management, and conducting code reviews.",
      "about.description.part3": "I excel at effectively sharing technical knowledge and conducting programming workshops. I am characterized by analytical thinking, attention to detail, and strong teamwork skills.",
      "about.resume": "Download Resume",
      "projects.title": "Featured Projects",
      "projects.viewCode": "Code",
      "projects.liveDemo": "Live Demo",
      "skills.title": "Skills",
      "contact.title": "Get in Touch",
      "contact.name": "Your Name",
      "contact.email": "Your Email",
      "contact.message": "Your Message",
      "contact.send": "Send Message",
      "footer.copyright": "© 2024 Jakub Buciuto. All rights reserved.",
      "projects.showMore": "Show More",
      "projects.showLess": "Show Less",
      "contact.success": "Message sent successfully!",
      "contact.error": "An error occurred while sending the message. Please try again later.",
      "services.title": "My Services",
      "services.first.title": "Websites and Hosting",
      "services.first.description": "Creating dynamic websites, hosting, and domain management. Comprehensive service from design to deployment.",
      "services.first.features.first": "Responsive websites",
      "services.first.features.second": "Hosting and domain management",
      "services.first.features.third": "Regular maintenance",
      "services.first.features.fourth": "24/7 technical support",

      "services.second.title": "Process Automation",
      "services.second.description": "Designing and implementing solutions that automate business processes, increasing work efficiency.",
      "services.second.features.first": "Business process analysis",
      "services.second.features.second": "Custom solutions",
      "services.second.features.third": "System integration",
      "services.second.features.fourth": "Workflow optimization"
    }
  },
  pl: {
    translation: {
      "hero.title": "Full-Stack Developer",
      "hero.subtitle": "Tworzenie skalowalnych aplikacji internetowych z wykorzystaniem nowoczesnych technologii",
      "about.title": "O mnie",
      "about.description.part1": "Zaangażowany Full-Stack Developer z doświadczeniem w projektowaniu, tworzeniu oraz testowaniu aplikacji internetowych.",
      "about.description.part2": "Posiadam solidne umiejętności w obszarze programowania. Zdobyłem doświadczenie w pracy z klientami, tworzeniu platform ułatwiających zarządzanie zamówieniami, przeprowadzaniu przeglądów kodu.",
      "about.description.part3": "Posiadam umiejętność efektywnego przekazywania wiedzy technicznej oraz prowadzenia zajęć z programowania. Cechuje mnie analityczne myślenie, dbałość o szczegóły oraz umiejętność pracy zespołowej.",
      "about.resume": "Pobierz CV",
      "projects.title": "Projekty",
      "projects.viewCode": "Kod",
      "projects.liveDemo": "Demo",
      "skills.title": "Umiejętności",
      "contact.title": "Kontakt",
      "contact.name": "Twoje Imię",
      "contact.email": "Twój Email",
      "contact.message": "Twoja Wiadomość",
      "contact.send": "Wyślij Wiadomość",
      "footer.copyright": "© 2024 Jakub Buciuto. Wszelkie prawa zastrzeżone.",
      "projects.showMore": "Pokaż Więcej",
      "projects.showLess": "Pokaż Mniej",
      "contact.success": "Wiadomość została wysłana pomyślnie!",
      "contact.error": "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.",
      "services.title": "Moje Usługi",
      "services.first.title": "Strony Internetowe i Hosting",
      "services.first.description": "Tworzenie dynamicznych stron internetowych, hosting oraz zarządzanie domenami. Kompleksowa obsługa od projektu po wdrożenie.",
      "services.first.features.first": "Responsywne strony internetowe",
      "services.first.features.second": "Hosting i zarządzanie domeną",
      "services.first.features.third": "Regularna konserwacja",
      "services.first.features.fourth": "Wsparcie techniczne 24/7",
      "services.second.title": "Automatyzacja Procesów",
      "services.second.description": "Projektowanie i wdrażanie rozwiązań automatyzujących procesy biznesowe, zwiększających efektywność pracy.",
      "services.second.features.first": "Analiza procesów biznesowych",
      "services.second.features.second": "Customizowane rozwiązania",
      "services.second.features.third": "Integracja systemów",
      "services.second.features.fourth": "Optymalizacja workflow",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;