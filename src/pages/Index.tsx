import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { MobileNav } from "@/components/MobileNav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { useForm, ValidationError } from "@formspree/react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import projectsData from "@/data/projects.json"; // Importuj dane projektów

const Index = () => {
  const { t } = useTranslation();
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [state, handleSubmit] = useForm("xanydekd");

  const displayedProjects = showAllProjects
    ? projectsData
    : projectsData.slice(0, 3);

  const skills = [
    { name: "Python", details: "FAST API", level: 80 },
    { name: "JavaScript, TypeScript", details: "React.js", level: 70 },
    { name: "C#", details: "Unity", level: 50 },
    { name: "Database", details: "PostgreSQL, MySQL", level: 60 },
    { name: "Linux server", details: "management", level: 70 },
    { name: "Operating Systems", details: "Linux, macOS, Windows", level: 90 },
  ];

  const handleShowMore = () => {
    setShowAllProjects(true);
    scroll.scrollTo(document.getElementById("projects").offsetTop, {
      duration: 500,
      smooth: true,
    });
  };

  const handleShowLess = () => {
    setShowAllProjects(false);
    scroll.scrollTo(document.getElementById("projects").offsetTop, {
      duration: 500,
      smooth: true,
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <ScrollLink
                    to="about"
                    smooth={true}
                    duration={500}
                    className={`${navigationMenuTriggerStyle()} cursor-pointer`}
                  >
                    {t("about.title")}
                  </ScrollLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <ScrollLink
                    to="projects"
                    smooth={true}
                    duration={500}
                    className={`${navigationMenuTriggerStyle()} cursor-pointer`}
                  >
                    {t("projects.title")}
                  </ScrollLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <ScrollLink
                    to="skills"
                    smooth={true}
                    duration={500}
                    className={`${navigationMenuTriggerStyle()} cursor-pointer`}
                  >
                    {t("skills.title")}
                  </ScrollLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={500}
                    className={`${navigationMenuTriggerStyle()} cursor-pointer`}
                  >
                    {t("contact.title")}
                  </ScrollLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="md:hidden">
            <MobileNav />
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>
      </nav>

      <Hero />
      <About />

      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 md:py-20 bg-gray-50 dark:bg-gray-800"
      >
        <div className="container px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">
            {t("projects.title")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {displayedProjects.map((project, index) => (
              <div
                key={index}
                className={`project-card bg-white dark:bg-gray-900 p-4 md:p-6 rounded-lg transition-transform transform hover:scale-105 ${
                  showAllProjects ? "animate-fadeIn" : ""
                }`}
              >
                <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg mb-4">
                  {/* Project Image */}
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm md:text-base">
                  {project.description}
                </p>
                <div className="flex gap-3 md:gap-4">
                  {!project.isPrivate && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full md:w-auto inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary-dark focus:outline-none"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      {t("projects.viewCode")}
                    </a>
                  )}
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary-dark focus:outline-none"
                  >
                    {t("projects.liveDemo")}
                  </a>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag tag-light">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            {showAllProjects ? (
              <Button onClick={handleShowLess} className="w-full md:w-auto">
                {t("projects.showLess")}
              </Button>
            ) : (
              <Button onClick={handleShowMore} className="w-full md:w-auto">
                {t("projects.showMore")}
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-20 bg-white dark:bg-gray-900">
        <div className="container px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">
            {t("skills.title")}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-gray-500 dark:text-gray-400">
                    {skill.details}
                  </span>
                </div>
                <div className="skill-bar dark:bg-gray-800">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 md:py-20 bg-gray-50 dark:bg-gray-800"
      >
        <div className="container px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">
            {t("contact.title")}
          </h2>
          <div className="max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {t("contact.name")}
                </label>
                <Input id="name" type="text" name="name" required />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {t("contact.email")}
                </label>
                <Input id="email" type="email" name="email" required />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {t("contact.message")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  className="min-h-[150px]"
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <Button
                type="submit"
                className="w-full"
                disabled={state.submitting}
              >
                {t("contact.send")}
              </Button>
            </form>
            {state.succeeded && (
              <p className="mt-4 text-center text-green-500">
                {t("contact.success")}
              </p>
            )}
            <div className="flex justify-center gap-6 mt-12">
              <a
                href="mailto:jakub.buciuto@gmail.com"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/MrJacob12"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/jakub-buciuto/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

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
