import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ as faqData } from "@/config/siteTheme";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-wide mb-3">
            Domande Frequenti
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hai delle domande?
          </h2>
          <p className="text-muted-foreground text-lg">
            Ecco le risposte alle domande più comuni dei nostri pazienti.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-soft overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-accent/50 transition-colors"
              >
                <span className="font-medium pr-4">{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-5 pb-5 text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
