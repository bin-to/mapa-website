import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageTemplate } from "@/components/sections/ServicePageTemplate";
import {
  getAllServiceSlugs,
  getServicePage,
} from "@/lib/service-pages";
import { siteConfig } from "@/lib/site-config";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(slug);

  if (!page) {
    return { title: "Leistung nicht gefunden" };
  }

  return {
    title: page.title,
    description: page.metaDescription,
    openGraph: {
      title: `${page.title} | ${siteConfig.shortName}`,
      description: page.metaDescription,
      url: `${siteConfig.url}/leistungen/${page.slug}`,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const page = getServicePage(slug);

  if (!page) {
    notFound();
  }

  return <ServicePageTemplate page={page} />;
}
