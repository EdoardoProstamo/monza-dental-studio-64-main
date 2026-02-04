import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { STUDIO_INFO } from "@/config/siteTheme";
import ctaImage from "@/assets/cta-reception.jpg";

export function CTA() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prenota la tua visita oggi
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Il primo passo verso un sorriso sano inizia con una telefonata.
              Contattaci per fissare un appuntamento: il nostro team sarà lieto
              di accoglierti.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Telefono</p>
                  <a
                    href={`tel:${STUDIO_INFO.phone}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {STUDIO_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Indirizzo</p>
                  <p className="text-muted-foreground">
                    {STUDIO_INFO.address.full}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" asChild>
                <a href={`tel:${STUDIO_INFO.phone}`}>
                  <Phone className="w-5 h-5" />
                  Chiama ora
                </a>
              </Button>
              <Button variant="ctaOutline" size="lg" asChild>
                <a
                  href={STUDIO_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="w-5 h-5" />
                  Apri su Google Maps
                </a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-2xl transform translate-x-4 translate-y-4" />
            <img
              src={ctaImage}
              alt="Reception dello studio dentistico con ambiente accogliente e moderno"
              className="relative rounded-2xl shadow-card w-full h-auto object-cover aspect-[4/3]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
