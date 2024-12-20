import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";

import Services from "@/components/sections/Services";
import Navbar from "@/components/Navbar";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navigation */}
      <Navbar />

      <Hero />
      <About />

      {/* Projects Section */}
      <Projects />
      
      {/* Skills Section */}
      <Skills />

      {/* Services */}
      <Services />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="py-6 md:py-8 bg-secondary text-white dark:bg-gray-950">
        <div className="container px-4 text-center">
          <p>{t("footer.copyright")}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
