import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { images } from "@/lib/images";

export function About() {
  return (
    <section id="ueber-uns" className="py-20 lg:py-28">
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

          <ScrollReveal delay={2}>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-silver-400">
              Über MAPA
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
              Handwerk mit Anspruch.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-silver-500 sm:text-lg">
              MAPA steht für hochwertige Handwerksleistungen rund um Ihr Zuhause.
              Mit Erfahrung, Präzision und Leidenschaft setzen wir Projekte
              fachgerecht und termintreu um – von der Sanierung bis zur Gestaltung.
            </p>
            <Link
              href="/ueber-uns"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-navy-800 transition-colors hover:text-navy-600"
            >
              Mehr über MAPA
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
