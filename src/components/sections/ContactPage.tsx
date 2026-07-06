import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/lib/images";
import { processSteps, siteConfig } from "@/lib/site-config";

const mapsQuery = encodeURIComponent(siteConfig.address.full);
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
const mapsEmbedUrl = `https://maps.google.com/maps?q=${mapsQuery}&output=embed`;

const contactCards = [
  {
    icon: Phone,
    title: "Telefon",
    description: "Am schnellsten erreichen Sie uns telefonisch.",
    href: siteConfig.phoneHref,
    label: siteConfig.phone,
  },
  {
    icon: Mail,
    title: "E-Mail",
    description: "Schreiben Sie uns – wir antworten zeitnah.",
    href: siteConfig.emailHref,
    label: siteConfig.email,
  },
  {
    icon: MapPin,
    title: "Adresse",
    description: "Termine nach Vereinbarung vor Ort.",
    href: mapsUrl,
    label: siteConfig.address.full,
    external: true,
  },
  {
    icon: Clock,
    title: "Erreichbarkeit",
    description: "Mo–Fr: 8:00–18:00 Uhr · Termine auch außerhalb möglich",
    href: siteConfig.phoneHref,
    label: "Jetzt anrufen",
  },
] as const;

export function ContactPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-end overflow-hidden lg:min-h-[55vh]">
        <Image
          src={images.contact.src}
          alt={images.contact.alt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/75 to-navy-950/35" />

        <Container className="relative z-10 pb-12 pt-32 lg:pb-16 lg:pt-40">
          <div className="max-w-2xl animate-fade-up">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-silver-300">
              Kontakt
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Lassen Sie uns sprechen
            </h1>
            <p className="mt-4 text-base leading-relaxed text-silver-200 sm:text-lg">
              Ob Altbausanierung, Flachdach, Putz &amp; Maler oder
              Gartengestaltung – wir beraten Sie persönlich und unverbindlich in
              Rudersberg und Umgebung.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <ScrollReveal className="lg:col-span-3">
              <ContactForm />
            </ScrollReveal>

            <div className="flex flex-col gap-6 lg:col-span-2">
              <ScrollReveal delay={1}>
                <div>
                  <h2 className="font-display text-2xl font-semibold tracking-tight text-navy-900">
                    Direkter Kontakt
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-silver-500 sm:text-base">
                    {siteConfig.owner} und das Team von {siteConfig.shortName}{" "}
                    stehen Ihnen für Fragen, Besichtigungen und Angebote zur
                    Verfügung.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {contactCards.map((card, index) => {
                  const Icon = card.icon;

                  return (
                    <ScrollReveal key={card.title} delay={(index % 4) as 0 | 1 | 2 | 3}>
                      <a
                        href={card.href}
                        {...("external" in card && card.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="group flex h-full flex-col rounded-sm border border-silver-200 bg-white p-6 shadow-sm shadow-navy-900/5 transition-all duration-300 hover:border-navy-800/20 hover:shadow-md hover:shadow-navy-900/5"
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-navy-900/5 text-navy-800">
                          <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                        </div>
                        <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">
                          {card.title}
                        </h3>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-silver-500">
                          {card.description}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-navy-800 transition-colors group-hover:text-navy-600">
                          {card.label}
                          {"external" in card && card.external && (
                            <ArrowUpRight className="h-4 w-4" aria-hidden />
                          )}
                        </span>
                      </a>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-silver-200 bg-silver-50 py-16 lg:py-24">
        <Container>
          <ScrollReveal>
            <SectionHeading
              title="So geht es weiter"
              subtitle="Von der ersten Anfrage bis zur sauberen Übergabe – transparent und persönlich."
              align="center"
              className="mx-auto"
            />
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.number} delay={(index % 4) as 0 | 1 | 2 | 3}>
                <article className="h-full rounded-sm border border-silver-200 bg-white p-6 shadow-sm">
                  <span className="font-display text-3xl font-light text-silver-200">
                    {step.number}
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold text-navy-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-silver-500">
                    {step.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <ScrollReveal>
              <SectionHeading
                title="Standort & Einsatzgebiet"
                subtitle="Wir sind in Rudersberg ansässig und übernehmen Projekte in der Region – von der Beratung vor Ort bis zur fachgerechten Umsetzung."
              />
              <address className="mt-8 space-y-1 text-base not-italic leading-relaxed text-silver-500">
                <p className="font-medium text-navy-900">{siteConfig.name}</p>
                <p>{siteConfig.owner}</p>
                <p>{siteConfig.address.street}</p>
                <p>{siteConfig.address.city}</p>
              </address>
              <Link
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-navy-800 transition-colors hover:text-navy-600"
              >
                Route in Google Maps öffnen
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <div className="overflow-hidden rounded-sm shadow-lg shadow-navy-900/10">
                <iframe
                  title={`Karte: ${siteConfig.address.full}`}
                  src={mapsEmbedUrl}
                  className="aspect-[4/3] w-full border-0 sm:aspect-[16/10]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </>
  );
}
