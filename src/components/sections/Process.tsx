import {
  CheckCircle2,
  FileText,
  MapPin,
  MessageSquare,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/site-config";

const stepIcons = {
  message: MessageSquare,
  map: MapPin,
  file: FileText,
  check: CheckCircle2,
} as const;

export function Process() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title="So arbeitet MAPA"
            subtitle="Ein klarer Ablauf – von der ersten Anfrage bis zur sauberen Übergabe."
            align="center"
            className="mx-auto"
          />
        </ScrollReveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => {
            const Icon = stepIcons[step.icon as keyof typeof stepIcons];

            return (
              <ScrollReveal key={step.number} delay={(index % 4) as 0 | 1 | 2 | 3}>
                <article className="relative h-full rounded-sm border border-silver-200 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md">
                  <span className="font-display text-4xl font-light text-silver-200">
                    {step.number}
                  </span>
                  <div className="mt-6 flex h-11 w-11 items-center justify-center rounded-sm bg-navy-900/5 text-navy-800">
                    <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-silver-500">
                    {step.description}
                  </p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
