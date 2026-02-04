export const SITE_THEME = {
  palette: "premium-teal",
  heroStyle: "split-layout",
  servicesPresentation: "icon-grid",
  graphicElements: "soft-shadows-cards",
  gradients: "cta-only",
  sectionOrder: ["hero", "services", "features", "reviews", "faq", "contact"],
  animations: {
    type: "fade-up",
    duration: 250,
    delay: 100,
  },
} as const;

export const STUDIO_INFO = {
  name: "Studio Odontoiatrico Associato Brioschi D. e Buonora A.",
  shortName: "Studio Brioschi & Buonora",
  category: "Studio Dentistico",
  address: {
    street: "Via Buccari, 2",
    cap: "20900",
    city: "Monza",
    province: "MB",
    country: "Italia",
    full: "Via Buccari, 2 – 20900 Monza (MB), Italia",
  },
  phone: "+39 039 835170",
  phoneDisplay: "039 835170",
  piva: "DA INSERIRE",
  hours: "DA INSERIRE",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Via+Buccari+2+Monza+MB+Italia",
} as const;

export const SERVICES = [
  {
    id: "odontoiatria-generale",
    title: "Odontoiatria Generale",
    description: "Visite di controllo, pulizia dentale professionale, trattamento delle carie e cura delle gengive per mantenere la salute del tuo sorriso.",
    icon: "tooth",
  },
  {
    id: "implantologia",
    title: "Implantologia",
    description: "Sostituzione di denti mancanti con impianti dentali di ultima generazione per ripristinare funzionalità ed estetica.",
    icon: "implant",
  },
  {
    id: "ortodonzia",
    title: "Ortodonzia",
    description: "Correzione dell'allineamento dentale con apparecchi tradizionali e soluzioni invisibili per un sorriso armonioso.",
    icon: "braces",
  },
  {
    id: "protesi-dentali",
    title: "Protesi Dentali",
    description: "Realizzazione di protesi fisse e mobili per ripristinare la funzionalità masticatoria e l'estetica del sorriso.",
    icon: "crown",
  },
  {
    id: "endodonzia",
    title: "Endodonzia",
    description: "Trattamenti canalari per salvare denti compromessi, eliminando infezioni e preservando la struttura naturale.",
    icon: "root",
  },
  {
    id: "igiene-orale",
    title: "Igiene e Prevenzione",
    description: "Sedute di igiene professionale e programmi di prevenzione personalizzati per una bocca sempre sana.",
    icon: "sparkle",
  },
  {
    id: "estetica-dentale",
    title: "Estetica Dentale",
    description: "Sbiancamento professionale e faccette dentali per un sorriso più luminoso e naturale.",
    icon: "star",
  },
] as const;

export const FEATURES = [
  {
    title: "Oltre 30 anni di esperienza",
    description: "Due professionisti con decenni di pratica al servizio della tua salute orale.",
  },
  {
    title: "Tecnologie moderne",
    description: "Strumentazioni all'avanguardia per diagnosi precise e trattamenti efficaci.",
  },
  {
    title: "Ambiente accogliente",
    description: "Uno studio pensato per farti sentire a tuo agio durante ogni visita.",
  },
  {
    title: "Approccio personalizzato",
    description: "Piani di cura su misura per le esigenze specifiche di ogni paziente.",
  },
  {
    title: "Posizione centrale",
    description: "Facilmente raggiungibile nel cuore di Monza.",
  },
] as const;

export const FAQ = [
  {
    question: "Ogni quanto tempo devo fare una visita di controllo?",
    answer: "Si consiglia una visita di controllo ogni 6-12 mesi, a seconda delle condizioni della propria salute orale. Il dentista valuterà la frequenza più adatta durante la prima visita.",
  },
  {
    question: "Come posso prenotare un appuntamento?",
    answer: "Può chiamare il nostro studio al numero 039 835170 durante gli orari di apertura. Il nostro personale sarà lieto di fissare un appuntamento in base alle sue esigenze.",
  },
  {
    question: "Lo studio è accessibile ai disabili?",
    answer: "Sì, il nostro studio è dotato di accesso facilitato per persone con difficoltà motorie.",
  },
  {
    question: "Trattate anche i bambini?",
    answer: "Certamente. Offriamo cure odontoiatriche per pazienti di tutte le età, con particolare attenzione ai più piccoli per rendere l'esperienza serena e positiva.",
  },
  {
    question: "Quali metodi di pagamento accettate?",
    answer: "Accettiamo pagamenti in contanti, bancomat, carte di credito e offriamo possibilità di pagamento rateizzato per trattamenti più complessi.",
  },
  {
    question: "In caso di emergenza dentale, come posso contattarvi?",
    answer: "Per urgenze durante gli orari di apertura, contatti il nostro numero telefonico. Cercheremo di inserirla il prima possibile nella nostra agenda.",
  },
] as const;

export const GOOGLE_REVIEWS_URL = "DA INSERIRE";

export const REVIEWS = [
  {
    author: "M. R.",
    text: "Professionisti competenti e ambiente molto accogliente. Mi sono sentito subito a mio agio.",
    rating: 5,
    date: "Gennaio 2024",
    source: "Google",
  },
  {
    author: "L. B.",
    text: "Finalmente ho trovato uno studio dove le cure sono spiegate con chiarezza e pazienza.",
    rating: 5,
    date: "Dicembre 2023",
    source: "Google",
  },
  {
    author: "Utente Google",
    text: "Ottimo rapporto qualità-prezzo. Lo consiglio a chiunque cerchi un dentista a Monza.",
    rating: 5,
    date: "Novembre 2023",
    source: "Google",
  },
] as const;
