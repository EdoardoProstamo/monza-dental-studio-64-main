import { Layout } from "@/components/layout/Layout";
import { STUDIO_INFO } from "@/config/siteTheme";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, ExternalLink } from "lucide-react";

const Contatti = () => {
  return (
    <Layout>
      <section className="pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <p className="text-primary font-medium text-sm uppercase tracking-wide mb-3">
              Contatti
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Come contattarci
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Siamo a disposizione per rispondere alle tue domande e fissare un
              appuntamento. Contattaci telefonicamente o vieni a trovarci in
              studio.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-2xl shadow-card p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-xl font-bold mb-3">Telefono</h2>
                <p className="text-muted-foreground mb-4">
                  Chiamaci per prenotare un appuntamento o per qualsiasi
                  informazione.
                </p>
                <a
                  href={`tel:${STUDIO_INFO.phone}`}
                  className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
                >
                  {STUDIO_INFO.phoneDisplay}
                </a>
              </div>

              <div className="bg-card rounded-2xl shadow-card p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-xl font-bold mb-3">Indirizzo</h2>
                <p className="text-muted-foreground mb-4">
                  Il nostro studio si trova nel centro di Monza, facilmente
                  raggiungibile.
                </p>
                <p className="font-semibold text-foreground mb-4">
                  {STUDIO_INFO.address.street}
                  <br />
                  {STUDIO_INFO.address.cap} {STUDIO_INFO.address.city} ({STUDIO_INFO.address.province})
                </p>
                <Button variant="outline" asChild>
                  <a
                    href={STUDIO_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Apri su Google Maps
                  </a>
                </Button>
              </div>
            </div>

            <div className="mt-8 bg-card rounded-2xl shadow-card p-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-3">Orari di apertura</h2>
                  <p className="text-muted-foreground mb-4">
                    Di seguito gli orari in cui siamo disponibili per visite e
                    appuntamenti.
                  </p>
                  <div className="bg-accent rounded-lg p-4">
                    <p className="text-foreground font-medium">
                      {STUDIO_INFO.hours}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    Per urgenze durante gli orari di apertura, contatta
                    direttamente il nostro numero telefonico.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold mb-4">Pronto a prenotare?</h3>
              <p className="text-muted-foreground mb-6">
                Chiamaci ora per fissare un appuntamento.
              </p>
              <Button variant="cta" size="xl" asChild>
                <a href={`tel:${STUDIO_INFO.phone}`}>
                  <Phone className="w-5 h-5" />
                  Chiama {STUDIO_INFO.phoneDisplay}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contatti;