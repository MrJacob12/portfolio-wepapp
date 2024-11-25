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
      "contact.error": "An error occurred while sending the message. Please try again later."
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
      "contact.error": "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później."
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