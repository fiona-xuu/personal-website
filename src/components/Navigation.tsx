import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, User, Lightbulb } from "lucide-react";
import { LucideIcon } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Projects", href: "#projects", icon: Lightbulb },
  ];

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div>
      <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 border-gray-300 border-1">
        <div className="flex items-center space-x-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => {
              const IconComponent: LucideIcon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-foreground hover:text-accent transition-all duration-300 ease-out cursor-pointer"
                  title={item.name}
                  aria-label={item.name}
                >
                  <IconComponent className="w-5 h-5 hover:w-6 hover:h-6 transition-all duration-300 ease-out" />
                </a>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="w-12 h-12 rounded-full bg-white shadow-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className="block w-full h-0.5 bg-foreground"></span>
                <span className="block w-full h-0.5 bg-foreground"></span>
                <span className="block w-full h-0.5 bg-foreground"></span>
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute bottom-16 left-1/2 transform -translate-x-1/2 duration-300">
            <div className="bg-white rounded-2xl shadow-lg p-4 space-y-2 min-w-[200px]">
              {navItems.map((item) => {
                const IconComponent: LucideIcon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      handleSmoothScroll(e, item.href);
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center px-3 py-2 border-gray-300 border-1 text-foreground hover:text-accent transition-colors duration-200 hover:bg-accent/10 rounded-md cursor-pointer"
                  >
                    <IconComponent className="w-5 h-5 mr-3" />
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
