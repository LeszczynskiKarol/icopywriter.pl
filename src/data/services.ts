// ── All services for iCopywriter.pl ──
// Used by: service page layout, services hub, navigation, internal linking

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  heroTitle: string;
  heroSubtitle: string;
  category: "copywriting" | "content" | "publikacje" | "specjalistyczne";
  badge: string;
  icon: string;
  relatedSlugs: string[];
}

export const services: Service[] = [
  // ═══════════════════════════════════════
  // COPYWRITING
  // ═══════════════════════════════════════
  {
    slug: "copywriting-sprzedazowy",
    title: "Copywriting sprzedażowy",
    shortTitle: "Copywriting",
    metaTitle:
      "Copywriting sprzedażowy — teksty, które konwertują | iCopywriter.pl",
    metaDescription:
      "Copywriting sprzedażowy: landing page, oferty, strony usługowe, teksty reklamowe. Piszę copy, które prowadzi do działania. 15+ lat doświadczenia.",
    keywords:
      "copywriting sprzedażowy, copywriter, teksty sprzedażowe, copywriting perswazyjny, copywriting oferta, copywriting reklama",
    heroTitle:
      "Copywriting sprzedażowy, który prowadzi do&nbsp;<em>działania</em>",
    heroSubtitle:
      "Piszę teksty, w których każde zdanie ma cel — prowadzić czytelnika krok po kroku do decyzji. Landing page, oferty, strony usługowe, mailingi.",
    category: "copywriting",
    badge: "Copywriting & Perswazja",
    icon: "✍️",
    relatedSlugs: ["landing-page", "teksty-na-strone", "email-marketing"],
  },
  {
    slug: "seo-copywriting",
    title: "SEO copywriting",
    shortTitle: "SEO copywriting",
    metaTitle:
      "SEO copywriting — teksty, które rankują w Google | iCopywriter.pl",
    metaDescription:
      "SEO copywriting: artykuły, podstrony i content clusters zoptymalizowane pod wyszukiwarki. Research fraz, analiza SERP, optymalizacja on-page. Teksty dla ludzi i algorytmów.",
    keywords:
      "SEO copywriting, SEO copywriter, copywriting SEO, artykuły SEO, pozycjonowanie treści, content SEO, teksty pod Google",
    heroTitle:
      "SEO copywriting — teksty, które <em>rankują i&nbsp;czyta się z&nbsp;przyjemnością</em>",
    heroSubtitle:
      "Piszę dla ludzi z wiedzą o tym, jak działa algorytm. Research fraz, analiza SERP, optymalizacja on-page, content clusters.",
    category: "copywriting",
    badge: "SEO & Widoczność",
    icon: "🔍",
    relatedSlugs: [
      "artykuly-blogowe",
      "teksty-na-strone",
      "strategia-contentowa",
    ],
  },
  {
    slug: "teksty-na-strone",
    title: "Teksty na stronę internetową",
    shortTitle: "Teksty na stronę",
    metaTitle:
      "Teksty na stronę — copywriting www z wireframe tekstowym | iCopywriter.pl",
    metaDescription:
      "Tworzę teksty na strony internetowe: strona główna, o nas, usługi, kontakt, FAQ. Wireframe tekstowy, SEO copywriting, struktura sekcji. Od jednej podstrony po kompletną stronę.",
    keywords:
      "teksty na stronę, copywriting www, teksty na stronę internetową, copywriter strona www, treści na stronę, teksty na stronę firmową",
    heroTitle: "Teksty na stronę, które <em>pracują 24/7</em>",
    heroSubtitle:
      "Tworzę treści na strony internetowe od wireframe tekstowego po wdrożenie. Strona główna, o nas, usługi, kontakt, FAQ — każda podstrona z celem i strukturą.",
    category: "copywriting",
    badge: "Strony WWW",
    icon: "🌐",
    relatedSlugs: [
      "seo-copywriting",
      "landing-page",
      "copywriting-sprzedazowy",
    ],
  },
  {
    slug: "opisy-produktow",
    title: "Opisy produktów",
    shortTitle: "Opisy produktów",
    metaTitle:
      "Opisy produktów — copywriting e-commerce, który sprzedaje | iCopywriter.pl",
    metaDescription:
      "Opisy produktów dla e-commerce: unikalne, SEO-friendly, sprzedażowe. Od 10 do 500+ opisów z zachowaniem spójności. AI + redakcja ludzka.",
    keywords:
      "opisy produktów, copywriting e-commerce, opisy produktów sklep, opisy produktów SEO, opis produktu, copywriter e-commerce",
    heroTitle: "Opisy produktów, które <em>sprzedają i&nbsp;pozycjonują</em>",
    heroSubtitle:
      "Piszę unikalne opisy produktów z językiem korzyści i optymalizacją SEO. Od 10 do 500+ — skalowalne, spójne, zero duplikatów.",
    category: "copywriting",
    badge: "E-commerce",
    icon: "🛒",
    relatedSlugs: [
      "seo-copywriting",
      "copywriting-sprzedazowy",
      "teksty-na-strone",
    ],
  },
  {
    slug: "landing-page",
    title: "Landing page",
    shortTitle: "Landing page",
    metaTitle:
      "Landing page — copywriting + design + wdrożenie | iCopywriter.pl",
    metaDescription:
      "Tworzę landing page, które konwertują: strategia, copywriting, design, development, wdrożenie, A/B testy. Copy-first approach. Jeden człowiek, zero pośredników.",
    keywords:
      "landing page, landing page copywriting, tworzenie landing page, landing page na zamówienie, strona lądowania, landing page konwersja",
    heroTitle:
      "Landing page, który <em>konwertuje — nie&nbsp;tylko wygląda</em>",
    heroSubtitle:
      "Copy-first approach: tekst przed designem, research przed pisaniem. Strategia, copywriting, projekt, kodowanie, wdrożenie, A/B testy — w jednych rękach.",
    category: "copywriting",
    badge: "Landing Page & Konwersja",
    icon: "🚀",
    relatedSlugs: [
      "copywriting-sprzedazowy",
      "email-marketing",
      "teksty-na-strone",
    ],
  },

  // ═══════════════════════════════════════
  // CONTENT MARKETING
  // ═══════════════════════════════════════
  {
    slug: "artykuly-blogowe",
    title: "Artykuły blogowe",
    shortTitle: "Artykuły",
    metaTitle:
      "Artykuły blogowe — teksty eksperckie, które budują widoczność | iCopywriter.pl",
    metaDescription:
      "Piszę artykuły blogowe, które budują autorytet i widoczność: poradniki, how-to, listicle, case studies, artykuły eksperckie. SEO-first, research-first.",
    keywords:
      "artykuły blogowe, artykuły eksperckie, copywriter blog, pisanie artykułów, artykuły SEO, blog firmowy",
    heroTitle:
      "Artykuły blogowe, które budują <em>autorytet i&nbsp;widoczność</em>",
    heroSubtitle:
      "Piszę artykuły eksperckie, poradniki, how-to, listicle i case studies. Każdy tekst to inwestycja w widoczność organiczną — compound interest Twojego contentu.",
    category: "content",
    badge: "Blog & Content",
    icon: "📝",
    relatedSlugs: [
      "seo-copywriting",
      "strategia-contentowa",
      "email-marketing",
    ],
  },
  {
    slug: "strategia-contentowa",
    title: "Strategia contentowa",
    shortTitle: "Strategia",
    metaTitle:
      "Strategia contentowa — data-driven content marketing | iCopywriter.pl",
    metaDescription:
      "Tworzę strategie contentowe oparte na danych: audyt, research fraz, content clusters, topical authority, kalendarz publikacji, KPI. Strategia na 6–12 miesięcy.",
    keywords:
      "strategia contentowa, strategia content marketingowa, content marketing strategia, planowanie treści, content clusters, topical authority",
    heroTitle:
      "Strategia contentowa oparta na <em>danych — nie&nbsp;przeczuciach</em>",
    heroSubtitle:
      "Audyt, research fraz, content clusters, topical authority, kalendarz publikacji, KPI — strategia na 6–12 miesięcy z mierzalnymi celami.",
    category: "content",
    badge: "Strategia & Dane",
    icon: "📊",
    relatedSlugs: ["seo-copywriting", "artykuly-blogowe", "social-media"],
  },
  {
    slug: "email-marketing",
    title: "Email marketing",
    shortTitle: "Email marketing",
    metaTitle:
      "Email marketing — sekwencje, newslettery, automatyzacje | iCopywriter.pl",
    metaDescription:
      "Tworzę emaile, które otwierają i klikają: newslettery, sekwencje powitalne, nurturing, reaktywacja, launch. Copywriting + setup automatyzacji.",
    keywords:
      "email marketing, copywriting email, newsletter copywriting, sekwencje email, email marketing copywriter, mailing",
    heroTitle:
      "Email marketing — emaile, które <em>otwierają i&nbsp;klikają</em>",
    heroSubtitle:
      "Newslettery, sekwencje powitalne, nurturing, reaktywacja, launch. Piszę copy + konfiguruję automatyzacje. Platform-agnostic.",
    category: "content",
    badge: "Email & Automatyzacja",
    icon: "📧",
    relatedSlugs: [
      "copywriting-sprzedazowy",
      "landing-page",
      "strategia-contentowa",
    ],
  },
  {
    slug: "social-media",
    title: "Social media",
    shortTitle: "Social media",
    metaTitle:
      "Social media — copywriting postów i strategia contentowa | iCopywriter.pl",
    metaDescription:
      "Tworzę treści na social media: LinkedIn, Facebook, Instagram. Content pillars, kalendarz, copywriting postów, stories, karuzele. Strategia + realizacja.",
    keywords:
      "social media copywriting, posty social media, copywriter social media, treści na LinkedIn, copywriting Facebook, content social media",
    heroTitle:
      "Social media — treści, które <em>budują zasięg i&nbsp;autorytet</em>",
    heroSubtitle:
      "Content pillars, kalendarz, copywriting postów i stories. LinkedIn, Facebook, Instagram — spójna komunikacja ze strategią w tle.",
    category: "content",
    badge: "Social Media",
    icon: "📱",
    relatedSlugs: [
      "strategia-contentowa",
      "artykuly-blogowe",
      "email-marketing",
    ],
  },

  // ═══════════════════════════════════════
  // PUBLIKACJE & DTP
  // ═══════════════════════════════════════
  {
    slug: "ebooki",
    title: "Ebooki",
    shortTitle: "Ebooki",
    metaTitle: "Ebooki — copywriting + skład typograficzny | iCopywriter.pl",
    metaDescription:
      "Tworzę ebooki od A do Z: copywriting, redakcja, projekt graficzny, skład typograficzny w LaTeX, rendering PDF + EPUB. Lead magnety i poradniki eksperckie.",
    keywords:
      "ebook, tworzenie ebooków, ebook na zamówienie, ebook lead magnet, copywriter ebook, skład ebooka",
    heroTitle:
      "Ebooki — od pierwszego słowa po <em>gotowy PDF i&nbsp;EPUB</em>",
    heroSubtitle:
      "Piszę, redaguję, składam typograficznie i renderuję. Lead magnety, poradniki, raporty — gotowe do dystrybucji cyfrowej i druku.",
    category: "publikacje",
    badge: "Ebook & Publishing",
    icon: "📕",
    relatedSlugs: ["white-papers", "materialy-szkoleniowe", "redakcja-korekta"],
  },
  {
    slug: "white-papers",
    title: "White papers",
    shortTitle: "White papers",
    metaTitle: "White papers — dokumenty eksperckie B2B | iCopywriter.pl",
    metaDescription:
      "Tworzę white papers B2B: research, wywiady, copywriting, projekt, skład, PDF. Dokumenty eksperckie, które budują autorytet i generują leady.",
    keywords:
      "white paper, white paper B2B, tworzenie white paper, dokument ekspercki, raport branżowy, copywriter white paper",
    heroTitle:
      "White papers — dokumenty eksperckie, które <em>budują autorytet</em>",
    heroSubtitle:
      "Research, wywiady z ekspertami, copywriting, projekt graficzny, skład, PDF. White papers B2B, które generują leady i pozycjonują markę jako lidera.",
    category: "publikacje",
    badge: "White Paper & B2B",
    icon: "📄",
    relatedSlugs: ["ebooki", "strategia-contentowa", "dokumentacja-techniczna"],
  },
  {
    slug: "katalogi-broszury",
    title: "Katalogi i broszury",
    shortTitle: "Katalogi",
    metaTitle:
      "Katalogi i broszury — copywriting + DTP, print i digital | iCopywriter.pl",
    metaDescription:
      "Tworzę katalogi produktowe i broszury firmowe: copywriting, projekt, skład DTP / LaTeX, print-ready PDF i wersja cyfrowa. Od 8 do 200+ stron.",
    keywords:
      "katalog produktowy, broszura firmowa, tworzenie katalogu, katalog DTP, katalog druk, copywriter katalog",
    heroTitle:
      "Katalogi i broszury — <em>copy + skład + druk</em> w&nbsp;jednych rękach",
    heroSubtitle:
      "Piszę treści, projektuję layout, składam typograficznie, przygotowuję do druku i dystrybucji cyfrowej. Print i digital z jednego projektu.",
    category: "publikacje",
    badge: "Katalog & DTP",
    icon: "📖",
    relatedSlugs: ["ebooki", "materialy-szkoleniowe", "prezentacje"],
  },
  {
    slug: "materialy-szkoleniowe",
    title: "Materiały szkoleniowe",
    shortTitle: "Szkolenia",
    metaTitle:
      "Materiały szkoleniowe — podręczniki, ćwiczenia, e-learning | iCopywriter.pl",
    metaDescription:
      "Tworzę materiały szkoleniowe: podręczniki, zeszyty ćwiczeń, materiały onboardingowe, playbooki, kursy e-learning. Instructional design + copywriting + skład.",
    keywords:
      "materiały szkoleniowe, podręcznik na zamówienie, zeszyt ćwiczeń, materiały onboardingowe, e-learning, szkoleniowe materiały firmowe",
    heroTitle:
      "Materiały szkoleniowe, które <em>uczą — nie&nbsp;tylko informują</em>",
    heroSubtitle:
      "Podręczniki, zeszyty ćwiczeń, materiały onboardingowe, playbooki, e-learning. Instructional design + copywriting + profesjonalny skład.",
    category: "publikacje",
    badge: "Edukacja & Training",
    icon: "📚",
    relatedSlugs: ["ebooki", "dokumentacja-techniczna", "prezentacje"],
  },
  {
    slug: "prezentacje",
    title: "Prezentacje",
    shortTitle: "Prezentacje",
    metaTitle: "Prezentacje — copywriting + design slajdów | iCopywriter.pl",
    metaDescription:
      "Tworzę prezentacje: pitch decki, prezentacje firmowe, sprzedażowe, konferencyjne. Copywriting, storytelling, projekt graficzny. PPTX, Slides, PDF, Keynote.",
    keywords:
      "prezentacja na zamówienie, pitch deck, prezentacja firmowa, copywriter prezentacje, slajdy, prezentacja sprzedażowa",
    heroTitle:
      "Prezentacje, które <em>opowiadają historię</em> — nie&nbsp;czytają slajdy",
    heroSubtitle:
      "Pitch decki, prezentacje firmowe, sprzedażowe, konferencyjne. Copywriting + storytelling + projekt. PPTX, Slides, PDF, Keynote.",
    category: "publikacje",
    badge: "Prezentacja & Storytelling",
    icon: "🎤",
    relatedSlugs: [
      "copywriting-sprzedazowy",
      "katalogi-broszury",
      "materialy-szkoleniowe",
    ],
  },

  // ═══════════════════════════════════════
  // SPECJALISTYCZNE
  // ═══════════════════════════════════════
  {
    slug: "dokumentacja-techniczna",
    title: "Dokumentacja techniczna",
    shortTitle: "Dokumentacja",
    metaTitle:
      "Dokumentacja techniczna — technical writing, docs-as-code | iCopywriter.pl",
    metaDescription:
      "Tworzę dokumentację techniczną: instrukcje obsługi, dokumentacja API, bazy wiedzy, help center, SOP. Technical writing + docs-as-code + skład.",
    keywords:
      "dokumentacja techniczna, technical writing, instrukcja obsługi, dokumentacja API, baza wiedzy, help center, docs-as-code",
    heroTitle:
      "Dokumentacja techniczna, którą ludzie <em>naprawdę czytają</em>",
    heroSubtitle:
      "Instrukcje obsługi, dokumentacja API, bazy wiedzy, help center, SOP. Tłumaczę język inżyniera na język użytkownika. Docs-as-code workflow.",
    category: "specjalistyczne",
    badge: "Dokumentacja & Technical Writing",
    icon: "⚙️",
    relatedSlugs: [
      "materialy-szkoleniowe",
      "teksty-na-strone",
      "redakcja-korekta",
    ],
  },
  {
    slug: "redakcja-korekta",
    title: "Redakcja i korekta",
    shortTitle: "Redakcja",
    metaTitle:
      "Redakcja i korekta — merytoryczna, stylistyczna, językowa | iCopywriter.pl",
    metaDescription:
      "Redakcja merytoryczna i stylistyczna, korekta językowa, proofreading. Szlifuję teksty do perfekcji. Style guide, spójność terminologii, jasność przekazu.",
    keywords:
      "redakcja tekstu, korekta tekstu, proofreading, redakcja merytoryczna, redakcja stylistyczna, korekta językowa, copyediting",
    heroTitle:
      "Redakcja i korekta — szlifuję teksty <em>do&nbsp;perfekcji</em>",
    heroSubtitle:
      "Redakcja merytoryczna, stylistyczna, korekta językowa, proofreading. Każdy tekst przechodzi minimum dwie rundy, bo prosty przekaz wymaga więcej pracy niż rozwlekły.",
    category: "specjalistyczne",
    badge: "Redakcja & Korekta",
    icon: "🔎",
    relatedSlugs: [
      "ebooki",
      "materialy-szkoleniowe",
      "dokumentacja-techniczna",
    ],
  },
];

// ── Grouped by category ──
export const serviceCategories = [
  {
    id: "copywriting",
    label: "Copywriting & strony",
    slugs: [
      "copywriting-sprzedazowy",
      "seo-copywriting",
      "teksty-na-strone",
      "opisy-produktow",
      "landing-page",
    ],
  },
  {
    id: "content",
    label: "Content marketing",
    slugs: [
      "artykuly-blogowe",
      "strategia-contentowa",
      "email-marketing",
      "social-media",
    ],
  },
  {
    id: "publikacje",
    label: "Publikacje & DTP",
    slugs: [
      "ebooki",
      "white-papers",
      "katalogi-broszury",
      "materialy-szkoleniowe",
      "prezentacje",
    ],
  },
  {
    id: "specjalistyczne",
    label: "Specjalistyczne",
    slugs: ["dokumentacja-techniczna", "redakcja-korekta"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slug: string): Service[] {
  const service = getService(slug);
  if (!service) return [];
  return service.relatedSlugs
    .map((s) => getService(s))
    .filter((s): s is Service => !!s);
}
