import { Link } from "react-router-dom";
import { SERVICES } from "@/config/siteTheme";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import serviceGeneral from "@/assets/service-general.jpg";
import serviceImplants from "@/assets/service-implants.jpg";
import serviceOrthodontics from "@/assets/service-orthodontics.jpg";

const serviceImages: Record<string, string> = {
  "odontoiatria-generale": serviceGeneral,
  implantologia: serviceImplants,
  ortodonzia: serviceOrthodontics,
};

const serviceIcons: Record<string, JSX.Element> = {
  tooth: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2C9.5 2 7 3.5 7 6.5c0 2-.5 3.5-1 5-.5 1.5-1 3-1 5 0 3 1.5 5.5 4 5.5 1.5 0 2.5-1 3-2.5.5 1.5 1.5 2.5 3 2.5 2.5 0 4-2.5 4-5.5 0-2-.5-3.5-1-5s-1-3-1-5c0-3-2.5-4.5-5-4.5z" />
    </svg>
  ),
  implant: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="9" y="2" width="6" height="4" rx="1" />
      <path d="M8 6h8l-1 3H9L8 6zM9 9h6l-.5 2h-5L9 9zM9.5 11h5l-.5 2h-4l-.5-2zM10 13h4l-.5 3h-3l-.5-3zM10.5 16h3l-.25 2h-2.5l-.25-2zM10.75 18h2.5L12 22l-1.25-4z" />
    </svg>
  ),
  braces: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="8" width="4" height="8" rx="1" />
      <rect x="10" y="8" width="4" height="8" rx="1" />
      <rect x="17" y="8" width="4" height="8" rx="1" />
      <line x1="7" y1="12" x2="10" y2="12" />
      <line x1="14" y1="12" x2="17" y2="12" />
    </svg>
  ),
  crown: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 8l3 3 3-5 3 5 3-5 3 5 3-3v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
    </svg>
  ),
  root: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2v4M12 6c-3 0-5 2-5 5v2c0 2 1 4 2 6l1 3h4l1-3c1-2 2-4 2-6v-2c0-3-2-5-5-5z" />
    </svg>
  ),
  sparkle: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
};

export function Services() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-wide mb-3">
            I Nostri Servizi
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cure odontoiatriche complete
          </h2>
          <p className="text-muted-foreground text-lg">
            Offriamo una gamma completa di trattamenti per la salute e la
            bellezza del tuo sorriso.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.slice(0, 7).map((service, index) => (
            <article
              key={service.id}
              className="group bg-card rounded-xl shadow-soft hover:shadow-card transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {serviceImages[service.id] && (
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={serviceImages[service.id]}
                    alt={`${service.title} - strumentazione e ambiente clinico`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center text-primary mb-4">
                  {serviceIcons[service.icon]}
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="ctaOutline" size="lg" asChild>
            <Link to="/servizi">
              Scopri tutti i servizi
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
