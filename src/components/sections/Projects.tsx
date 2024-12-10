import React, { useState } from "react";

import { animateScroll as scroll } from "react-scroll";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Github } from "lucide-react";

import projectsData from "@/data/projects.json";

function Projects() {
  const { t } = useTranslation();

  const [showAllProjects, setShowAllProjects] = useState(false);

  const displayedProjects = showAllProjects
    ? projectsData
    : projectsData.slice(0, 3);

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
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm md:text-base min-h-36">
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
  );
}

export default Projects;
