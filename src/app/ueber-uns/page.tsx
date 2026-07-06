import type { Metadata } from "next";
import { AboutPage } from "@/components/sections/AboutPage";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Über uns",
  description: `Erfahren Sie mehr über ${siteConfig.name} – hochwertiges Handwerk mit persönlicher Beratung in Rudersberg und Umgebung.`,
  openGraph: {
    title: `Über uns | ${siteConfig.name}`,
    description: siteConfig.description,
    url: `${siteConfig.url}/ueber-uns`,
  },
};

export default function UeberUnsPage() {
  return <AboutPage />;
}
