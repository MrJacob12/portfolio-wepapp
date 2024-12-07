import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "./ui/sheet";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";

export const MobileNav = () => {
  const { t } = useTranslation();
  
  const navItems = [
    { href: "about", label: t('about.title') },
    { href: "services", label: t('services.title')},
    { href: "projects", label: t('projects.title') },
    { href: "skills", label: t('skills.title') },
    { href: "contact", label: t('contact.title') },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-4">
          {navItems.map((item) => (
            <SheetClose asChild key={item.href}>
              <ScrollLink
                to={item.href}
                smooth={true}
                duration={500}
                className="block px-2 py-1 text-lg hover:text-primary"
              >
                {item.label}
              </ScrollLink>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};