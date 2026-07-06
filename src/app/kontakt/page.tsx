import type { Metadata } from "next";
import { ContactPage } from "@/components/sections/ContactPage";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Kontaktieren Sie ${siteConfig.name} für Sanierung, Flachdachabdichtung, Putz & Maler sowie Gartengestaltung in Rudersberg und Umgebung.`,
  openGraph: {
    title: `Kontakt | ${siteConfig.name}`,
    description: siteConfig.description,
    url: `${siteConfig.url}/kontakt`,
  },
};

export default function KontaktPage() {
  return <ContactPage />;
}
