import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";
import { Code2, Github, Linkedin, Mail, Terminal } from "lucide-react";

export const Hero = () => {
  const { t } = useTranslation();

  const techStack = [
    { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    {
      name: "TypeScript",
      icon: "https://cdn.simpleicons.org/typescript/3178C6",
    },
    { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
    {
      name: "PostgreSQL",
      icon: "https://cdn.simpleicons.org/postgresql/4169E1",
    },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center bg-white dark:bg-gray-950 overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>

      <div className="container px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 uppercase tracking-wider">
              <Code2 className="h-4 w-4" />
              Available for new projects
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 text-gray-900 dark:text-white leading-[1.1]">
              Jakub <span className="text-primary">Buciuto</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 max-w-xl leading-relaxed">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <ScrollLink to="projects" smooth={true} duration={500}>
                <Button
                  size="lg"
                  className="h-14 px-8 text-lg font-bold rounded-2xl shadow-xl shadow-primary/20"
                >
                  {t("projects.title")}
                </Button>
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500}>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-8 text-lg font-bold rounded-2xl border-2"
                >
                  {t("contact.title")}
                </Button>
              </ScrollLink>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://github.com/MrJacob12"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Github className="h-7 w-7" />
              </a>
              <a
                href="https://pl.linkedin.com/in/jakub-buciuto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Linkedin className="h-7 w-7" />
              </a>
              <a
                href="mailto:jakub.buciuto@gmail.com"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Mail className="h-7 w-7" />
              </a>
            </div>
          </div>

          <div className="hidden lg:block relative">
            {/* Terminal Window */}
            <div className="relative z-10 w-full max-w-[500px] bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 overflow-hidden transform hover:-translate-y-2 transition-transform duration-500">
              <div className="flex items-center justify-between px-4 py-3 bg-gray-800/50 border-b border-gray-800">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
                  <Terminal className="h-3 w-3" />
                  jakub.config.json
                </div>
              </div>
              <div className="p-8 font-mono text-sm leading-relaxed overflow-x-auto text-slate-300">
                <div className="text-blue-400">{"{"}</div>
                <div className="pl-4">
                  <span className="text-purple-400">"name"</span>:{" "}
                  <span className="text-emerald-400">"Jakub Buciuto"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">"role"</span>:{" "}
                  <span className="text-emerald-400">
                    "Full-Stack Developer"
                  </span>
                  ,
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">"specialization"</span>: [
                  <span className="text-emerald-400">"Web"</span>,{" "}
                  <span className="text-emerald-400">"Automation"</span>],
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">"top_skills"</span>: [
                  <span className="text-emerald-400">"React"</span>,{" "}
                  <span className="text-emerald-400">"TypeScript"</span>,{" "}
                  <span className="text-emerald-400">"Python"</span>],
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">"availability"</span>:{" "}
                  <span className="text-amber-400">true</span>,
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">"location"</span>:{" "}
                  <span className="text-emerald-400">"Poland"</span>
                </div>
                <div className="text-blue-400">{"}"}</div>
              </div>
            </div>

            {/* Static background glow (no pulse) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-primary/10 blur-[100px] rounded-full -z-10"></div>
          </div>
        </div>

        {/* Tech Stack Bar */}
        <div className="mt-24 pt-12 border-t border-gray-100 dark:border-gray-900">
          <p className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-8">
            Core Stack & Technologies
          </p>
          <div className="flex flex-wrap gap-8 md:gap-12 items-center">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 group cursor-default"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-5 w-5 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <span className="font-bold text-sm text-gray-500 group-hover:text-primary transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
