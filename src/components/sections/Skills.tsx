import React from "react";
import { useTranslation } from "react-i18next";

const skillGroups = [
  {
    key: "languages",
    skills: [{ key: "python" }, { key: "typescript" }, { key: "rust" }],
  },
  {
    key: "backend",
    skills: [{ key: "fastapi" }, { key: "postgresql" }, { key: "mysql" }],
  },
  {
    key: "servers",
    wide: true,
    skills: [
      { key: "docker" },
      { key: "compose" },
      { key: "linux" },
      { key: "automation" },
    ],
  },
];

function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-16 md:py-20 bg-white dark:bg-gray-900">
      <div className="container px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">
          {t("skills.title")}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.key}
              className={`p-6 rounded-xl border border-blue-900/20 bg-gray-50 dark:bg-gray-800 ${
                group.wide ? "md:col-span-2" : ""
              }`}
            >
              <h3 className="font-bold mb-2 md:mb-4 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-primary inline-block" />
                {t(`skills.groups.${group.key}`)}
              </h3>
              {group.wide ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4">
                  {group.skills.map((skill) => (
                    <div key={skill.key}>
                      <span className="font-medium text-sm block">
                        {t(`skills.items.${skill.key}.name`)}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {t(`skills.items.${skill.key}.details`)}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.key}
                      className="flex items-baseline justify-between gap-4 py-2.5"
                    >
                      <span className="font-medium text-sm">
                        {t(`skills.items.${skill.key}.name`)}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 text-right">
                        {t(`skills.items.${skill.key}.details`)}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;