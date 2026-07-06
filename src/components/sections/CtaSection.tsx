import Image from "next/image";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/lib/site-config";
import { images } from "@/lib/images";

export function CtaSection() {
  return (
    <section id="kontakt" className="relative overflow-hidden py-24 lg:py-32">
      <Image
        src={images.cta.src}
        alt={images.cta.alt}
        fill
        className="object-cover object-center"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-navy-950/88" />

      <Container className="relative z-10">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ihr Projekt verdient saubere Arbeit.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-silver-300 sm:text-lg">
              Lassen Sie uns gemeinsam besprechen, wie wir Ihre Immobilie
              fachgerecht weiterentwickeln können.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={siteConfig.emailHref} variant="primary" size="lg">
                Jetzt Anfrage senden
              </Button>
              <Button href={siteConfig.phoneHref} variant="ghost" size="lg">
                <Phone className="h-4 w-4" aria-hidden />
                Direkt anrufen
              </Button>
            </div>

            <a
              href={siteConfig.phoneHref}
              className="mt-8 inline-block text-lg font-medium tracking-wide text-white transition-colors hover:text-silver-200"
            >
              {siteConfig.phone}
            </a>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
