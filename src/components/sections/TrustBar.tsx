import {
  Award,
  Clock,
  Scale,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { trustPoints } from "@/lib/site-config";

const icons = {
  award: Award,
  users: Users,
  clock: Clock,
  scale: Scale,
} as const;

export function TrustBar() {
  return (
    <section className="relative z-10 -mt-12 pb-4">
      <Container>
        <ScrollReveal>
          <div className="grid gap-px overflow-hidden rounded-sm border border-silver-200 bg-silver-200 shadow-xl shadow-navy-900/5 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((point) => {
              const Icon = icons[point.icon as keyof typeof icons];

              return (
                <div
                  key={point.title}
                  className="flex items-center gap-4 bg-white px-6 py-6 sm:px-8 sm:py-7"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-navy-900/5 text-navy-800">
                    <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                  </div>
                  <p className="font-display text-sm font-semibold tracking-wide text-navy-900 sm:text-base">
                    {point.title}
                  </p>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
