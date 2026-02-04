import { Layout } from "@/components/layout/Layout";
import { STUDIO_INFO } from "@/config/siteTheme";

const Privacy = () => {
  return (
    <Layout>
      <section className="pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              Privacy Policy
            </h1>

            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-muted-foreground mb-6">
                Ultimo aggiornamento: Febbraio 2025
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">1. Titolare del trattamento</h2>
              <p className="mb-4">
                Il titolare del trattamento dei dati è:
              </p>
              <p className="mb-6 p-4 bg-accent rounded-lg">
                <strong>{STUDIO_INFO.name}</strong>
                <br />
                {STUDIO_INFO.address.full}
                <br />
                Telefono: {STUDIO_INFO.phoneDisplay}
                <br />
                P.IVA: {STUDIO_INFO.piva}
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">2. Tipologie di dati raccolti</h2>
              <p className="mb-4">
                Questo sito web non raccoglie dati personali automaticamente.
                Non utilizziamo cookie di profilazione, strumenti di analisi o
                tracciamento.
              </p>
              <p className="mb-6">
                L'unico modo in cui possiamo ricevere i tuoi dati personali è
                attraverso una comunicazione diretta via telefono, quando ci
                contatti per prenotare un appuntamento o richiedere
                informazioni.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">3. Finalità del trattamento</h2>
              <p className="mb-4">
                I dati personali eventualmente forniti tramite comunicazione
                telefonica saranno utilizzati esclusivamente per:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Rispondere alle tue richieste di informazioni</li>
                <li>Gestire appuntamenti e prenotazioni</li>
                <li>Fornire i servizi odontoiatrici richiesti</li>
                <li>Adempiere agli obblighi di legge in materia sanitaria</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">4. Base giuridica</h2>
              <p className="mb-6">
                Il trattamento dei dati è basato sul consenso dell'interessato
                e/o sulla necessità di eseguire un contratto di cui
                l'interessato è parte (erogazione di servizi odontoiatrici).
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">5. Conservazione dei dati</h2>
              <p className="mb-6">
                I dati relativi ai trattamenti sanitari sono conservati secondo
                quanto previsto dalla normativa vigente in materia di
                documentazione sanitaria. Gli altri dati sono conservati per il
                tempo necessario a soddisfare le finalità per cui sono stati
                raccolti.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">6. Diritti dell'interessato</h2>
              <p className="mb-4">
                In conformità al Regolamento UE 2016/679 (GDPR), l'interessato
                ha diritto di:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Accedere ai propri dati personali</li>
                <li>Richiederne la rettifica o la cancellazione</li>
                <li>Limitare o opporsi al trattamento</li>
                <li>Richiedere la portabilità dei dati</li>
                <li>Revocare il consenso in qualsiasi momento</li>
                <li>Proporre reclamo all'autorità di controllo</li>
              </ul>

              <h2 className="text-2xl font-bold mt-10 mb-4">7. Contatti</h2>
              <p className="mb-6">
                Per esercitare i propri diritti o per qualsiasi informazione
                relativa al trattamento dei dati personali, è possibile
                contattare il titolare al numero {STUDIO_INFO.phoneDisplay} o
                presso lo studio in {STUDIO_INFO.address.full}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;