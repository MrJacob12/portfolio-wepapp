import React from 'react'
import { useTranslation } from "react-i18next";

function Skills() {
    const { t } = useTranslation();
    const skills = [
        { name: "Python", details: "FAST API", level: 80 },
        { name: "JavaScript, TypeScript", details: "React.js", level: 70 },
        { name: "C#", details: "Unity", level: 50 },
        { name: "Database", details: "PostgreSQL, MySQL", level: 60 },
        { name: "Linux server", details: "management", level: 70 },
        { name: "Operating Systems", details: "Linux, macOS, Windows", level: 90 },
    ];

    return (
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
    )
}

export default Skills