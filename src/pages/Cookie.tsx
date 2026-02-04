import { Layout } from "@/components/layout/Layout";
import { STUDIO_INFO } from "@/config/siteTheme";

const Cookie = () => {
  return (
    <Layout>
      <section className="pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              Cookie Policy
            </h1>

            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-muted-foreground mb-6">
                Ultimo aggiornamento: Febbraio 2025
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">1. Cosa sono i cookie</h2>
              <p className="mb-6">
                I cookie sono piccoli file di testo che i siti web salvano sul
                dispositivo dell'utente durante la navigazione. Possono essere
                utilizzati per diverse finalità, come memorizzare preferenze,
                raccogliere statistiche o personalizzare contenuti.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">2. Cookie utilizzati da questo sito</h2>
              <div className="p-6 bg-accent rounded-lg mb-6">
                <p className="font-semibold text-primary mb-2">
                  Questo sito web NON utilizza cookie.
                </p>
                <p>
                  Non utilizziamo cookie tecnici, di profilazione, analitici o
                  di terze parti. La navigazione su questo sito non comporta
                  l'installazione di alcun cookie sul tuo dispositivo.
                </p>
              </div>

              <h2 className="text-2xl font-bold mt-10 mb-4">3. Link a siti esterni</h2>
              <p className="mb-6">
                Questo sito può contenere link a siti esterni (ad esempio
                Google Maps). Questi siti hanno proprie politiche sulla privacy
                e sull'uso dei cookie, sulle quali non abbiamo alcun controllo.
                Ti invitiamo a consultare le informative dei rispettivi siti.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">4. Modifiche alla policy</h2>
              <p className="mb-6">
                Ci riserviamo il diritto di modificare questa Cookie Policy in
                qualsiasi momento. Le modifiche saranno effettive dalla data di
                pubblicazione su questo sito.
              </p>

              <h2 className="text-2xl font-bold mt-10 mb-4">5. Contatti</h2>
              <p className="mb-6">
                Per qualsiasi domanda relativa a questa Cookie Policy, puoi
                contattarci al numero {STUDIO_INFO.phoneDisplay} o presso il
                nostro studio in {STUDIO_INFO.address.full}.
              </p>

              <div className="mt-10 p-6 bg-cream rounded-lg">
                <p className="font-semibold mb-2">{STUDIO_INFO.name}</p>
                <p className="text-muted-foreground">
                  {STUDIO_INFO.address.full}
                  <br />
                  Telefono: {STUDIO_INFO.phoneDisplay}
                  <br />
                  P.IVA: {STUDIO_INFO.piva}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cookie;