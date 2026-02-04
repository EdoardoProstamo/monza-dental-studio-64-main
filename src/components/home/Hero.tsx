import { Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { STUDIO_INFO } from "@/config/siteTheme";
import heroImage from "@/assets/hero-clinic.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6 max-w-xl">
              <p className="text-primary font-medium text-sm uppercase tracking-wide animate-fade-up">
                Studio Dentistico a Monza
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-up delay-100">
                Il tuo sorriso,{" "}
                <span className="text-teal">la nostra cura</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up delay-200">
                Da oltre 30 anni, lo Studio Odontoiatrico Brioschi e Buonora si
                prende cura della salute orale dei pazienti di Monza e
                dintorni, con professionalità, competenza e un approccio
                attento alle esigenze di ciascuno.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-up delay-300">
                <Button variant="cta" size="xl" asChild>
                  <a href={`tel:${STUDIO_INFO.phone}`}>
                    <Phone className="w-5 h-5" />
                    Chiama ora
                  </a>
                </Button>
                <Button variant="ctaOutline" size="xl" asChild>
                  <a href={STUDIO_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                    <MapPin className="w-5 h-5" />
                    Come raggiungerci
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 pt-6 animate-fade-up delay-400">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Monza (MB)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Orari: {STUDIO_INFO.hours}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 animate-fade-up delay-200">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl transform translate-x-4 translate-y-4" />
              <img
                src={heroImage}
                alt="Sala d'attesa moderna dello studio dentistico con arredi confortevoli e ambiente luminoso"
                className="relative rounded-2xl shadow-card w-full h-auto object-cover aspect-[4/3]"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
