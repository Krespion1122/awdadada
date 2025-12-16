import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Strona główna", path: "/" },
  { name: "Lookbook", path: "/lookbook" },
  { name: "Sklep", path: "/sklep" },
  { name: "O marce", path: "/o-marce" },
  { name: "Współpraca", path: "/wspolpraca" },
  { name: "Kontakt", path: "/kontakt" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled || !isHomePage
            ? "bg-background/95 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className={cn(
                "font-display text-2xl tracking-[0.3em] uppercase transition-colors duration-300",
                isScrolled || !isHomePage ? "text-foreground" : "text-background"
              )}
            >
              MISSIL
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-xs tracking-[0.15em] uppercase transition-all duration-300 fashion-link",
                    location.pathname === link.path
                      ? "opacity-100"
                      : "opacity-70 hover:opacity-100",
                    isScrolled || !isHomePage ? "text-foreground" : "text-background"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "lg:hidden p-2 transition-colors duration-300",
                isScrolled || !isHomePage ? "text-foreground" : "text-background"
              )}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background transition-all duration-500 lg:hidden",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "font-display text-3xl tracking-[0.2em] uppercase text-foreground transition-all duration-300",
                "opacity-0 translate-y-4",
                isOpen && "animate-fade-up"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
