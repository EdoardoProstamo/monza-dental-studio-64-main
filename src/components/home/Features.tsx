import { Check } from "lucide-react";
import { FEATURES } from "@/config/siteTheme";
import studioImage from "@/assets/studio-treatment.jpg";

export function Features() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-accent rounded-2xl transform -translate-x-4 -translate-y-4" />
            <img
              src={studioImage}
              alt="Sala operatoria dello studio dentistico con poltrona e attrezzature moderne"
              className="relative rounded-2xl shadow-card w-full h-auto object-cover aspect-[4/3]"
              loading="lazy"
            />
          </div>

          <div>
            <p className="text-primary font-medium text-sm uppercase tracking-wide mb-3">
              Perché sceglierci
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Un approccio professionale e umano
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Il nostro studio si distingue per la qualità delle cure, l'attenzione
              al paziente e un ambiente pensato per mettere a proprio agio.
            </p>

            <ul className="space-y-4">
              {FEATURES.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-cream hover:bg-accent transition-colors duration-200"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
