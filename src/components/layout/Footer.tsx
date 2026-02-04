import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";
import { STUDIO_INFO } from "@/config/siteTheme";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-anthracite text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">B</span>
              </div>
              <div>
                <p className="font-semibold leading-tight text-sm">Studio Brioschi</p>
                <p className="text-xs text-white/70">& Buonora</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed max-w-md">
              {STUDIO_INFO.name}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-white/90">
              Contatti
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>{STUDIO_INFO.address.full}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                <a
                  href={`tel:${STUDIO_INFO.phone}`}
                  className="hover:text-primary transition-colors"
                >
                  {STUDIO_INFO.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-white/90">
              Informazioni
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link to="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookie" className="hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>
              © {currentYear} {STUDIO_INFO.name}
            </p>
            <p>P.IVA: {STUDIO_INFO.piva}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
