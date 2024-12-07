import { Code, Server, Rocket, Globe, Wrench, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Services = () => {
    const { t } = useTranslation();

    const services = [
        {
            title: t("services.first.title"),
            description: t("services.first.description"),
            icon: <Code className="w-8 h-8 mb-4 text-blue-400" />,
            features: [
                { text: t("services.first.features.first"), icon: <Globe className="w-4 h-4 mr-2 text-blue-400" /> },
                { text: t("services.first.features.second"), icon: <Server className="w-4 h-4 mr-2 text-blue-400" /> },
                { text: t("services.first.features.third"), icon: <Wrench className="w-4 h-4 mr-2 text-blue-400" /> },
                { text: t("services.first.features.fourth"), icon: <Zap className="w-4 h-4 mr-2 text-blue-400" /> },
            ],
        },
        {
            title: t("services.second.title"),
            description: t("services.second.description"),
            icon: <Rocket className="w-8 h-8 mb-4 text-blue-400" />,
            features: [
                { text: t("services.second.features.first"), icon: <Server className="w-4 h-4 mr-2 text-blue-400" /> },
                { text: t("services.second.features.second"), icon: <Code className="w-4 h-4 mr-2 text-blue-400" /> },
                { text: t("services.second.features.third"), icon: <Zap className="w-4 h-4 mr-2 text-blue-400" /> },
                { text: t("services.second.features.fourth"), icon: <Rocket className="w-4 h-4 mr-2 text-blue-400" /> },
            ],
        },
    ];

    return (
        <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-800" id="services">
            <div className="container mx-auto px-4">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold text-center mb-12"
                >
                    {t("services.title")}
                </motion.h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="p-6 rounded-lg bg-card hover:bg-card-hover transition-all duration-300 border border-blue-900/20 dark:bg-gray-900 bg-gray-100"
                        >
                            <div className="flex flex-col items-center text-center">
                                {service.icon}
                                <h3 className="text-xl font-semibold mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-200 mb-6">
                                    {service.description}
                                </p>
                                <ul className="space-y-3 text-left w-full">
                                    {service.features.map((feature, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4, delay: (index * 0.2) + (idx * 0.1) }}
                                            className="flex items-center text-gray-700
                                            dark:text-gray-300"
                                        >
                                            {feature.icon}
                                            {feature.text}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
