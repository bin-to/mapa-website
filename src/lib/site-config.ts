export const siteConfig = {

  name: "MAPA – In Profession",

  shortName: "MAPA",

  tagline: "In Profession",

  description:

    "Hochwertige Handwerksleistungen für Sanierung, Abdichtung, Innenausbau und Außenanlagen – fachgerecht umgesetzt in Rudersberg und Umgebung.",

  url: "https://www.mapa-bau.de",

  locale: "de-DE",

  owner: "Marinko Pavic",

  address: {

    street: "Anemonenweg 26",

    city: "73635 Rudersberg",

    full: "Anemonenweg 26, 73635 Rudersberg",

  },

  phone: "+49 1520 418 8190",

  phoneHref: "tel:+4915204188190",

  email: "info@mapa-bau.de",

  emailHref: "mailto:info@mapa-bau.de",

} as const;



export const services = [

  {

    id: "altbausanierung",

    title: "Altbausanierung",

    href: "/leistungen/altbausanierung",

    description:

      "Wir erhalten bestehende Werte und bringen Immobilien fachgerecht wieder auf ein neues Niveau.",

    icon: "building",

  },

  {

    id: "flachdachabdichtung",

    title: "Flachdachabdichtung",

    href: "/leistungen/flachdachabdichtung",

    description:

      "Zuverlässiger Schutz vor Witterung und Feuchtigkeit – langlebig, sauber und fachgerecht umgesetzt.",

    icon: "shield",

  },

  {

    id: "putz-malerarbeiten",

    title: "Putz- und Malerarbeiten",

    href: "/leistungen/putz-malerarbeiten",

    description:

      "Saubere Oberflächen, hochwertige Materialien und ein Finish, das Räume sichtbar aufwertet.",

    icon: "paintbrush",

  },

  {

    id: "gartengestaltung",

    title: "Gartengestaltung",

    href: "/leistungen/gartengestaltung",

    description:

      "Terrassen, Wege, Mauern und Grünflächen – stimmig geplant und sauber in Ihr Grundstück integriert.",

    icon: "trees",

  },

] as const;



export const navLinks = [

  ...services.map((service) => ({

    label:

      service.id === "flachdachabdichtung"

        ? "Flachdach"

        : service.id === "putz-malerarbeiten"

          ? "Putz & Maler"

          : service.id === "gartengestaltung"

            ? "Garten"

            : service.title,

    href: service.href,

  })),

  { label: "Über uns", href: "/ueber-uns" },

  { label: "Kontakt", href: "/kontakt" },

] as const;



export const trustPoints = [

  { title: "Hohe Qualität", icon: "award" },

  { title: "Persönliche Beratung", icon: "users" },

  { title: "Zuverlässig & pünktlich", icon: "clock" },

  { title: "Faire Preise", icon: "scale" },

] as const;



export const processSteps = [

  {

    number: "01",

    title: "Persönliche Anfrage",

    description:

      "Sie schildern Ihr Vorhaben – wir hören zu und klären erste Fragen unkompliziert.",

    icon: "message",

  },

  {

    number: "02",

    title: "Vor-Ort-Termin & Beratung",

    description:

      "Wir besichtigen die Immobilie vor Ort und beraten Sie ehrlich zu sinnvollen Lösungen.",

    icon: "map",

  },

  {

    number: "03",

    title: "Transparentes Angebot",

    description:

      "Sie erhalten ein klares, nachvollziehbares Angebot ohne versteckte Kosten.",

    icon: "file",

  },

  {

    number: "04",

    title: "Saubere Umsetzung",

    description:

      "Termintreu, sauber und fachgerecht – bis Ihr Projekt zufriedenstellend abgeschlossen ist.",

    icon: "check",

  },

] as const;


