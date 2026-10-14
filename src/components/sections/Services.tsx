import {
  Cloud,
  Boxes,
  Globe,
  Zap,
  Server,
  ShieldCheck,
  TrendingUp,
  Layers,
  Rocket,
  RotateCcw,
  MonitorSmartphone,
  Wrench,
  Headphones,
  Settings,
  Workflow,
  RefreshCw,
  Gauge,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      key: "servers",
      icon: <Cloud className="w-8 h-8 mb-4 text-blue-400" />,
      features: [
        { icon: <Server className="w-4 h-4 mr-2 text-blue-400" />, idx: "first" },
        { icon: <ShieldCheck className="w-4 h-4 mr-2 text-blue-400" />, idx: "second" },
        { icon: <RefreshCw className="w-4 h-4 mr-2 text-blue-400" />, idx: "third" },
        { icon: <TrendingUp className="w-4 h-4 mr-2 text-blue-400" />, idx: "fourth" },
      ],
    },
    {
      key: "containerization",
      icon: <Boxes className="w-8 h-8 mb-4 text-blue-400" />,
      features: [
        { icon: <Layers className="w-4 h-4 mr-2 text-blue-400" />, idx: "first" },
        { icon: <Boxes className="w-4 h-4 mr-2 text-blue-400" />, idx: "second" },
        { icon: <Rocket className="w-4 h-4 mr-2 text-blue-400" />, idx: "third" },
        { icon: <RotateCcw className="w-4 h-4 mr-2 text-blue-400" />, idx: "fourth" },
      ],
    },
    {
      key: "websites",
      icon: <Globe className="w-8 h-8 mb-4 text-blue-400" />,
      features: [
        { icon: <MonitorSmartphone className="w-4 h-4 mr-2 text-blue-400" />, idx: "first" },
        { icon: <Globe className="w-4 h-4 mr-2 text-blue-400" />, idx: "second" },
        { icon: <Wrench className="w-4 h-4 mr-2 text-blue-400" />, idx: "third" },
        { icon: <Headphones className="w-4 h-4 mr-2 text-blue-400" />, idx: "fourth" },
      ],
    },
    {
      key: "automation",
      icon: <Zap className="w-8 h-8 mb-4 text-blue-400" />,
      features: [
        { icon: <Settings className="w-4 h-4 mr-2 text-blue-400" />, idx: "first" },
        { icon: <Workflow className="w-4 h-4 mr-2 text-blue-400" />, idx: "second" },
        { icon: <RefreshCw className="w-4 h-4 mr-2 text-blue-400" />, idx: "third" },
        { icon: <Gauge className="w-4 h-4 mr-2 text-blue-400" />, idx: "fourth" },
      ],
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-800" id="services">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12"
        >
          {t("services.title")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 rounded-lg bg-card hover:bg-card-hover transition-all duration-300 border border-blue-900/20 dark:bg-gray-900 bg-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-semibold mb-4">
                  {t(`services.${service.key}.title`)}
                </h3>
                <p className="text-gray-600 dark:text-gray-200 mb-6">
                  {t(`services.${service.key}.description`)}
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
                      {t(`services.${service.key}.features.${feature.idx}`)}
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