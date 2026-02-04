import { Star, ExternalLink } from "lucide-react";
import { GOOGLE_REVIEWS_URL } from "@/config/siteTheme";
import { Button } from "@/components/ui/button";

function StarRow() {
  return (
    <div className="flex justify-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="w-5 h-5 fill-primary text-primary"
        />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">

          <p className="text-primary font-medium text-sm uppercase tracking-wide mb-3">
            Dicono di noi
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            Valutazioni dei pazienti
          </h2>

          <StarRow />

          <p className="text-lg font-medium text-foreground mb-2">
            Valutazione media: 5,0 su 5,0
          </p>

          <p className="text-sm text-muted-foreground mb-6">
            Dato desunto da recensioni pubblicate e verificabili su Google
          </p>

          <div className="flex justify-center">
            <Button variant="outline" asChild>
              <a
                href={GOOGLE_REVIEWS_URL !== "DA INSERIRE" ? GOOGLE_REVIEWS_URL : "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Consulta le recensioni su Google
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>

          <p className="text-muted-foreground italic mt-6">
            "Ascolto, cura e attenzione alla persona sono alla base di ogni nostro trattamento"
          </p>

        </div>
      </div>
    </section>
  );
}
