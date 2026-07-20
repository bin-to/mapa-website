/**

 * Zentraler Bild-Katalog – Projektfotos unter public/images/leistungen/

 */

export const images = {

  hero: {

    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85",

    alt: "Modernisiertes Einfamilienhaus nach hochwertiger Altbausanierung in Süddeutschland",

  },

  about: {
    src: "/images/leistungen/putz-malerarbeiten-maler.webp",
    alt: "Maler bei sauberen Malerarbeiten an einer Innenwand",
  },

  altbausanierung: {

    src: "/images/leistungen/altbausanierung-fassade.webp",

    alt: "Vorher-Nachher: sanierte Altbaufassade mit frischer Oberfläche",

  },

  altbausanierungInnen: {

    src: "/images/leistungen/altbausanierung-innen.webp",

    alt: "Innensanierung eines Altbaus mit sichtbarem Holz- und Mauerwerk",

  },

  flachdachabdichtung: {

    src: "/images/leistungen/flachdachabdichtung-dach.webp",

    alt: "Flachdach Sanierung mit Bitumenbahnen",

  },

  flachdachabdichtungFluessig: {

    src: "/images/leistungen/flachdachabdichtung-fluessig.webp",

    alt: "Flüssigabdichtung im Rahmen einer Flachdach Sanierung",

  },

  putzMaler: {

    src: "/images/leistungen/putz-malerarbeiten-maler.webp",

    alt: "Maler bei sauberen Malerarbeiten an einer Innenwand",

  },

  putzMalerPutz: {

    src: "/images/leistungen/putz-malerarbeiten-putz.webp",

    alt: "Handwerker bei präzisen Putzarbeiten an einer Wand",

  },

  gartengestaltung: {

    src: "/images/leistungen/gartengestaltung-garten.webp",

    alt: "Terrassierter Garten mit Natursteinmauern und Bepflanzung",

  },

  gartengestaltungSteine: {

    src: "/images/leistungen/gartengestaltung-steine.webp",

    alt: "Verlegung von Natursteinen bei der Gartengestaltung",

  },

  cta: {
    src: "/images/leistungen/altbausanierung-fassade.webp",
    alt: "Sanierte Altbaufassade – hochwertige Handwerksarbeit von MAPA",
  },

  contact: {
    src: "/images/leistungen/putz-malerarbeiten-maler.webp",
    alt: "Maler bei sauberen Malerarbeiten – persönliche Beratung bei MAPA",
  },

  logo: {

    src: "/Mapa logo.png",

    alt: "MAPA – In Profession",

    width: 1600,

    height: 800,

  },

} as const;



export type ImageKey = keyof typeof images;


