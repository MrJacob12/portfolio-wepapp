import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { animateScroll as scroll } from "react-scroll";

import commercialProjects from "@/data/commercial_projects.json";
import hobbyProjects from "@/data/hobby_projects.json";

function Projects() {
  const { t } = useTranslation();
  const [showAllHobby, setShowAllHobby] = useState(false);

  const displayedHobby = showAllHobby ? hobbyProjects : hobbyProjects.slice(0, 6);

  const scrollToProjects = () => {
    scroll.scrollTo(document.getElementById("projects").offsetTop, {
      duration: 500,
      smooth: true,
    });
  };

  const ProjectCard = ({ project }: { project: any }) => (
    <div className="bg-white dark:bg-gray-900 p-4 md:p-6 rounded-lg transition-all border border-gray-100 dark:border-gray-800 flex flex-col h-full hover:shadow-lg">
      <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg mb-4 overflow-hidden">
        <img
          src={project.img || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
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

        <Tabs defaultValue="commercial" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-[400px] grid-cols-2">
              <TabsTrigger value="commercial">{t("projects.commercial")}</TabsTrigger>
              <TabsTrigger value="hobby">{t("projects.hobby")}</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="commercial">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commercialProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="hobby">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedHobby.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
            {hobbyProjects.length > 6 && (
              <div className="text-center mt-10">
                <Button 
                  onClick={() => {
                    if (showAllHobby) scrollToProjects();
                    setShowAllHobby(!showAllHobby);
                  }} 
                  variant="outline"
                >
                  {showAllHobby ? t("projects.showLess") : t("projects.showMore")}
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

export default Projects;
