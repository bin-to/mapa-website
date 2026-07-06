import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Clock,
  MapPin,
  Scale,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaSection } from "@/components/sections/CtaSection";
import { images } from "@/lib/images";
import { services, siteConfig, trustPoints } from "@/lib/site-config";

const trustIcons = {
  award: Award,
  users: Users,
  clock: Clock,
  scale: Scale,
} as const;

const values = [
  {
    title: "Qualität ohne Kompromisse",
    description:
      "Wir arbeiten mit bewährten Materialien, sauberer Ausführung und dem Anspruch, Ergebnisse zu liefern, die langfristig überzeugen.",
  },
  {
    title: "Persönlich & nahbar",
    description:
      "Bei MAPA sprechen Sie direkt mit den Menschen, die Ihr Projekt planen und umsetzen – ehrlich, unkompliziert und auf Augenhöhe.",
  },
  {
    title: "Regional verwurzelt",
    description:
      "Als Betrieb aus Rudersberg kennen wir die Region, die Bausubstanz und die Anforderungen vor Ort – und sind schnell bei Ihnen.",
  },
] as const;

export function AboutPage() {
  return (
    <>
      <section className="border-b border-silver-200 bg-white pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
        <Container>
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <div className="animate-fade-up">
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-silver-400">
                Über uns
              </p>

              <div className="mt-10 flex flex-col items-center">
                <Image
                  src={images.logo.src}
                  alt={images.logo.alt}
                  width={images.logo.width}
                  height={images.logo.height}
                  priority
                  className="h-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
                />
                <p className="mt-4 font-sans text-sm font-light uppercase tracking-[0.35em] text-navy-800 sm:text-base">
                  {siteConfig.tagline}
                </p>
              </div>

              <h1 className="mt-10 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
                Handwerk mit Anspruch – persönlich umgesetzt.
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-silver-500 sm:text-lg">
                MAPA steht für hochwertige Handwerksleistungen rund um Ihr
                Zuhause. Mit Erfahrung, Präzision und Leidenschaft setzen wir
                Projekte fachgerecht und termintreu um – von der Sanierung bis
                zur Gestaltung.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl shadow-navy-900/10">
                <Image
                  src={images.about.src}
                  alt={images.about.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-sm border border-silver-200" />
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <SectionHeading
                title="Wer wir sind"
                subtitle={`${siteConfig.shortName} ist Ihr Partner für Sanierung, Abdichtung, Innenausbau und Außenanlagen in Rudersberg und Umgebung.`}
              />
              <div className="mt-8 space-y-5 text-base leading-relaxed text-silver-500 sm:text-lg">
                <p>
                  Hinter {siteConfig.shortName} steht {siteConfig.owner} – ein
                  Handwerksbetrieb, der Wert auf saubere Arbeit, ehrliche Beratung
                  und verlässliche Termine legt. Ob Altbausanierung, Flachdach,
                  Putz &amp; Maler oder Gartengestaltung: Wir nehmen uns Zeit für
                  Ihr Anliegen und entwickeln Lösungen, die zu Ihrer Immobilie
                  passen.
                </p>
                <p>
                  Unser Anspruch ist klar: fachgerechte Umsetzung, transparente
                  Kommunikation und ein Ergebnis, auf das Sie sich verlassen
                  können – heute und in den kommenden Jahren.
                </p>
              </div>
              <div className="mt-8 flex items-start gap-3 rounded-sm border border-silver-200 bg-silver-50 p-5">
                <MapPin
                  className="mt-0.5 h-5 w-5 shrink-0 text-navy-800"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <div>
                  <p className="font-display text-sm font-semibold text-navy-900">
                    Ansässig in Rudersberg
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-silver-500">
                    {siteConfig.address.full} – Projekte in der Region und
                    Umgebung.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-silver-200 bg-silver-50 py-16 lg:py-24">
        <Container>
          <ScrollReveal>
            <SectionHeading
              title="Was uns auszeichnet"
              subtitle="Qualität, Verlässlichkeit und persönlicher Service – das sind die Grundlagen unserer Arbeit."
              align="center"
              className="mx-auto"
            />
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((point, index) => {
              const Icon = trustIcons[point.icon as keyof typeof trustIcons];

              return (
                <ScrollReveal key={point.title} delay={(index % 4) as 0 | 1 | 2 | 3}>
                  <article className="flex h-full flex-col rounded-sm border border-silver-200 bg-white p-6 shadow-sm">
                    <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-navy-900/5 text-navy-800">
                      <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                    </div>
                    <h3 className="mt-4 font-display text-base font-semibold text-navy-900">
                      {point.title}
                    </h3>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={(index % 3) as 0 | 1 | 2}>
                <article className="h-full rounded-sm border border-silver-200 bg-white p-8 shadow-sm">
                  <h3 className="font-display text-xl font-semibold text-navy-900">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-silver-500 sm:text-base">
                    {value.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <ScrollReveal>
            <SectionHeading
              title="Unsere Leistungen"
              subtitle="Vom denkmalgeschützten Altbau bis zur gepflegten Außenanlage – wir begleiten Sie mit dem passenden Handwerk."
            />
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {services.map((service, index) => (
              <ScrollReveal key={service.id} delay={(index % 4) as 0 | 1 | 2 | 3}>
                <Link
                  href={service.href}
                  className="group flex h-full flex-col rounded-sm border border-silver-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-navy-800/20 hover:shadow-md hover:shadow-navy-900/5"
                >
                  <h3 className="font-display text-lg font-semibold text-navy-900 transition-colors group-hover:text-navy-700">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-silver-500">
                    {service.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy-800 transition-colors group-hover:text-navy-600">
                    Mehr erfahren
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={2} className="mt-12 text-center">
            <Button href="/kontakt" variant="primary" size="lg">
              Projekt besprechen
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          </ScrollReveal>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
