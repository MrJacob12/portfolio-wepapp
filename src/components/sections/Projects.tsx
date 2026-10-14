import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { animateScroll as scroll } from "react-scroll";

import commercialProjects from "@/data/commercial_projects.json";
import hobbyProjects from "@/data/hobby_projects.json";

type Project = {
  title: string;
  description: string;
  isPrivate: boolean;
  href?: string;
  github?: string;
  tags: string[];
};

function Projects() {
  const { t } = useTranslation();

  const allProjects: Project[] = [...commercialProjects, ...hobbyProjects];
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 6);

  const scrollToProjects = () => {
    scroll.scrollTo(document.getElementById("projects").offsetTop, {
      duration: 500,
      smooth: true,
    });
  };

  const ProjectCard = ({ project }: { project: Project }) => (
    <div className="bg-white dark:bg-gray-900 p-4 md:p-6 rounded-lg transition-all border border-gray-100 dark:border-gray-800 flex flex-col h-full hover:shadow-lg">
      <h3 className="text-lg md:text-xl font-semibold mb-2">
        {project.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm md:text-base flex-grow">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag: string, tagIndex: number) => (
          <span key={tagIndex} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded text-xs">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        {!project.isPrivate && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-gray-200 dark:border-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <Github className="mr-2 h-4 w-4" />
            {t("projects.viewCode")}
          </a>
        )}
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            {t("projects.liveDemo")}
          </a>
        )}
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-16 md:py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">
          {t("projects.title")}
        </h2>

        <div className="flex justify-center mb-10">
          <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold">
            {t("projects.tools")}
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {allProjects.length > 6 && (
          <div className="text-center mt-10">
            <Button
              onClick={() => {
                if (showAll) scrollToProjects();
                setShowAll(!showAll);
              }}
              variant="outline"
            >
              {showAll ? t("projects.showLess") : t("projects.showMore")}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;