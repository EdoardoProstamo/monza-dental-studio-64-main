import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { STUDIO_INFO } from "@/config/siteTheme";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Servizi", href: "/servizi" },
  { label: "Contatti", href: "/contatti" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-soft"
          : "bg-transparent"
        }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">B</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-semibold text-foreground leading-tight text-sm">
                Studio Brioschi & Buonora
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.href
                    ? "text-primary"
                    : "text-foreground"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="cta" size="default" asChild className="hidden sm:inline-flex">
              <a href={`tel:${STUDIO_INFO.phone}`}>
                <Phone className="w-4 h-4" />
                <span className="hidden lg:inline">Chiama ora</span>
              </a>
            </Button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <nav className="container py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${location.pathname === link.href
                    ? "bg-accent text-primary"
                    : "text-foreground hover:bg-accent"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 px-4">
              <Button variant="cta" size="lg" asChild className="w-full">
                <a href={`tel:${STUDIO_INFO.phone}`}>
                  <Phone className="w-4 h-4" />
                  Chiama ora
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
