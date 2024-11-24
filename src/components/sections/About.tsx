import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 md:py-20 bg-white dark:bg-gray-900">
      <div className="container px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">{t('about.title')}</h2>
        <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
            {t('about.description.part1')}
          </p>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
            {t('about.description.part2')}
          </p>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
            {t('about.description.part3')}
          </p>
          <a href="/jakub_buciuto_it.pdf" download className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary-dark focus:outline-none">
            {t('about.resume')}
          </a>
        </div>
      </div>
    </section>
  );
};