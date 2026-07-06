import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site-config";
import type { ServicePageContent } from "@/lib/service-pages";
import { servicePages } from "@/lib/service-pages";

type ServicePageTemplateProps = {
  page: ServicePageContent;
};

export function ServicePageTemplate({ page }: ServicePageTemplateProps) {
  const heroImage = images[page.gallery[0].imageKey];
  const otherServices = servicePages.filter((item) => item.slug !== page.slug);

  return (
    <>
      <section className="relative flex min-h-[55vh] items-end overflow-hidden lg:min-h-[60vh]">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/30" />

        <Container className="relative z-10 pb-12 pt-32 lg:pb-16 lg:pt-40">
          <div className="max-w-2xl animate-fade-up">
            <Link
              href="/#leistungen"
              className="text-xs font-medium uppercase tracking-[0.35em] text-silver-300 transition-colors hover:text-white"
            >
              Leistungen
            </Link>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {page.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-silver-200 sm:text-lg">
              {page.heroSubtitle}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <div className="space-y-5 text-base leading-relaxed text-silver-500 sm:text-lg">
                {page.intro.map((paragraph, index) => (
                  <p key={`intro-${index}`}>{paragraph}</p>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-silver-200 py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl">
                {page.detailsTitle}
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-silver-500 sm:text-lg">
                {page.details.map((paragraph, index) => (
                  <p key={`details-${index}`}>{paragraph}</p>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="bg-silver-50 py-16 lg:py-24">
        <Container>
          <ScrollReveal>
            <SectionHeading title={page.scopeTitle} />
          </ScrollReveal>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {page.scopeItems.map((item, index) => (
              <ScrollReveal key={item} delay={(index % 4) as 0 | 1 | 2 | 3}>
                <li className="flex gap-3 rounded-sm bg-white p-5 shadow-sm shadow-navy-900/5">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-navy-900 text-white">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden />
                  </span>
                  <span className="text-sm leading-relaxed text-navy-900 sm:text-base">
                    {item}
                  </span>
                </li>
              </ScrollReveal>
            ))}
          </ul>

          {page.closing && (
            <ScrollReveal className="mt-10">
              <p className="max-w-3xl text-base leading-relaxed text-silver-500">
                {page.closing}
              </p>
            </ScrollReveal>
          )}
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <ScrollReveal>
            <SectionHeading
              title="Referenzbilder"
              subtitle="Beispiele aus unserer Arbeit in diesem Bereich."
            />
          </ScrollReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {page.gallery.map((item, index) => {
              const image = images[item.imageKey];

              return (
                <ScrollReveal key={item.imageKey} delay={(index % 2) as 0 | 1}>
                  <figure className="group overflow-hidden rounded-sm shadow-lg shadow-navy-900/10">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <figcaption className="bg-navy-900 px-5 py-4 text-sm text-silver-300">
                      {item.caption}
                    </figcaption>
                  </figure>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-t border-silver-200 bg-silver-50 py-16 lg:py-24">
        <Container>
          <ScrollReveal>
            <SectionHeading
              title="Weitere Leistungen"
              subtitle={`Neben ${page.title} bieten wir auch diese Bereiche an.`}
            />
          </ScrollReveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {otherServices.map((service, index) => (
              <ScrollReveal key={service.slug} delay={(index % 3) as 0 | 1 | 2}>
                <Link
                  href={`/leistungen/${service.slug}`}
                  className="group flex h-full flex-col rounded-sm border border-silver-200 bg-white p-6 transition-all duration-300 hover:border-navy-800/20 hover:shadow-md hover:shadow-navy-900/5"
                >
                  <h3 className="font-display text-lg font-semibold text-navy-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-silver-500">
                    {service.heroSubtitle}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-navy-800 transition-colors group-hover:text-navy-600">
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
        </Container>
      </section>

      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-navy-950" />
        <Container className="relative z-10">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Anfrage stellen
              </h2>
              <p className="mt-5 text-base leading-relaxed text-silver-300 sm:text-lg">
                Beschreiben Sie uns Ihr Vorhaben. Wir melden uns bei Ihnen und
                vereinbaren einen Termin zur Besichtigung vor Ort.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href={siteConfig.emailHref} variant="primary" size="lg">
                  Anfrage senden
                </Button>
                <Button href={siteConfig.phoneHref} variant="ghost" size="lg">
                  <Phone className="h-4 w-4" aria-hidden />
                  {siteConfig.phone}
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
