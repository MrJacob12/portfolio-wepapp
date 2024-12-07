import React from 'react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { MobileNav } from "@/components/MobileNav";

function Navbar() {
  const { t } = useTranslation();

  return (
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
                    to="services"
                    smooth={true}
                    duration={500}
                    className={`${navigationMenuTriggerStyle()} cursor-pointer`}
                  >
                    {t("services.title")}
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
  )
}

export default Navbar