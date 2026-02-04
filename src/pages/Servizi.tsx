import { Layout } from "@/components/layout/Layout";
import { SERVICES, STUDIO_INFO } from "@/config/siteTheme";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import serviceGeneral from "@/assets/service-general.jpg";
import serviceImplants from "@/assets/service-implants.jpg";
import serviceOrthodontics from "@/assets/service-orthodontics.jpg";

const serviceImages: Record<string, string> = {
  "odontoiatria-generale": serviceGeneral,
  implantologia: serviceImplants,
  ortodonzia: serviceOrthodontics,
};

const Servizi = () => {
  return (
    <Layout>
      <section className="pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <p className="text-primary font-medium text-sm uppercase tracking-wide mb-3">
              I Nostri Servizi
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Servizi odontoiatrici completi
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Offriamo una gamma completa di trattamenti per prenderci cura della
              salute e della bellezza del tuo sorriso. Ogni intervento è
              personalizzato sulle tue esigenze.
            </p>
          </div>

          <div className="space-y-16">
            {SERVICES.map((service, index) => (
              <article
                key={service.id}
                id={service.id}
                className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  {serviceImages[service.id] ? (
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/10 rounded-2xl transform -translate-x-3 -translate-y-3" />
                      <img
                        src={serviceImages[service.id]}
                        alt={`${service.title} - ambiente e strumentazione clinica`}
                        className="relative rounded-2xl shadow-card w-full h-auto object-cover aspect-[4/3]"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="bg-accent rounded-2xl aspect-[4/3] flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary text-4xl">🦷</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Il nostro team è a disposizione per valutare insieme le
                    opzioni di trattamento più adatte alle tue esigenze. Ogni
                    percorso di cura viene pianificato con attenzione e spiegato
                    in modo chiaro prima di iniziare.
                  </p>
                  <Button variant="soft" asChild>
                    <a href={`tel:${STUDIO_INFO.phone}`}>
                      Prenota una consulenza
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Hai domande sui nostri servizi?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Contattaci per maggiori informazioni o per prenotare una visita.
              Saremo lieti di rispondere a ogni tua domanda.
            </p>
            <Button variant="cta" size="xl" asChild>
              <a href={`tel:${STUDIO_INFO.phone}`}>
                <Phone className="w-5 h-5" />
                Chiama ora
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Servizi;