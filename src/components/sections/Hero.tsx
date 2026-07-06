import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { images } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden">
      <Image
        src={images.hero.src}
        alt={images.hero.alt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/92 via-navy-900/80 to-navy-950/70" />
      <div className="absolute inset-0 bg-navy-950/20" />

      <Container className="relative z-10 py-32 lg:py-40">
        <div className="max-w-3xl animate-fade-up">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-silver-300">
            Handwerk in Rudersberg & Umgebung
          </p>

          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Qualität. Zuverlässigkeit. Werte, die bleiben.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-silver-200 sm:text-lg lg:text-xl">
            Hochwertige Handwerksleistungen für Sanierung, Abdichtung, Innenausbau
            und Außenanlagen – fachgerecht umgesetzt in Rudersberg und Umgebung.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/kontakt" variant="primary" size="lg">
              Projekt anfragen
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button href="#leistungen" variant="ghost" size="lg">
              Leistungen ansehen
            </Button>
          </div>

          <p className="mt-10 text-sm font-medium tracking-wide text-silver-300">
            Persönlich. Termintreu. Regional.
          </p>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
