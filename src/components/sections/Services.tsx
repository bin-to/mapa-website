import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Paintbrush,
  Shield,
  Trees,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/site-config";
import { images } from "@/lib/images";

const serviceImages = {
  altbausanierung: images.altbausanierung,
  flachdachabdichtung: images.flachdachabdichtung,
  "putz-malerarbeiten": images.putzMalerPutz,
  gartengestaltung: images.gartengestaltung,
} as const;

const serviceIcons = {
  building: Building2,
  shield: Shield,
  paintbrush: Paintbrush,
  trees: Trees,
} as const;

export function Services() {
  return (
    <section id="leistungen" className="bg-silver-50 py-20 lg:py-28">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title="Unsere Leistungen"
            subtitle="Durchdachte Lösungen für Immobilien, die langfristig funktionieren und überzeugen."
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const image = serviceImages[service.id];
            const Icon =
              serviceIcons[service.icon as keyof typeof serviceIcons];

            return (
              <ScrollReveal key={service.id} delay={(index % 4) as 0 | 1 | 2 | 3}>
                <article className="group flex h-full flex-col overflow-hidden rounded-sm bg-white shadow-lg shadow-navy-900/5 transition-shadow duration-500 hover:shadow-xl hover:shadow-navy-900/10">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    />
                  </div>

                  <div className="flex flex-1 flex-col bg-navy-900 p-6 lg:p-7">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-sm bg-white/10 text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-silver-300">
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className="group/link mt-6 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-silver-200"
                    >
                      Mehr erfahren
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover/link:translate-x-1"
                        aria-hidden
                      />
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
