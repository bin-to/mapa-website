import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/sections/LegalPageLayout";
import { datenschutzSections } from "@/lib/legal-content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: `Datenschutzerklärung von ${siteConfig.name} – Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.`,
  robots: { index: true, follow: true },
  openGraph: {
    title: `Datenschutz | ${siteConfig.name}`,
    description: `Datenschutzerklärung von ${siteConfig.name} gemäß DSGVO.`,
    url: `${siteConfig.url}/datenschutz`,
  },
};

export default function DatenschutzPage() {
  return (
    <LegalPageLayout
      title="Datenschutzerklärung"
      subtitle="Informationen zur Verarbeitung personenbezogener Daten gemäß der Datenschutz-Grundverordnung (DSGVO)"
      lastUpdated="Juli 2026"
      sections={datenschutzSections}
    />
  );
}
