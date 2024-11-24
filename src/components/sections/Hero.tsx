import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";

export const Hero = () => {
  const { t } = useTranslation();

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container px-4 animate-fade-up">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-6xl font-bold mb-6">
            Jakub Buciuto
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ScrollLink to="projects" smooth={true} duration={500}>
              <Button size="lg">
                {t('projects.viewCode')}
              </Button>
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500}>
              <Button variant="outline" size="lg">
                {t('contact.title')}
              </Button>
            </ScrollLink>
          </div>
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute bottom-8 animate-bounce"
        onClick={scrollDown}
      >
        <ChevronDown className="h-8 w-8" />
        <span className="sr-only">Scroll down</span>
      </Button>
    </section>
  );
};