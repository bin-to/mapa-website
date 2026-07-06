import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/sections/LegalPageLayout";
import { impressumSections } from "@/lib/legal-content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum und Anbieterkennzeichnung von ${siteConfig.name} gemäß § 5 DDG.`,
  robots: { index: true, follow: true },
  openGraph: {
    title: `Impressum | ${siteConfig.name}`,
    description: `Anbieterkennzeichnung von ${siteConfig.name} gemäß § 5 DDG.`,
    url: `${siteConfig.url}/impressum`,
  },
};

export default function ImpressumPage() {
  return (
    <LegalPageLayout
      title="Impressum"
      subtitle="Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)"
      sections={impressumSections}
    />
  );
}
