import Link from "next/link";
import { Container } from "@/components/ui/Container";

export type LegalSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  list?: string[];
  afterList?: string[];
};

type LegalPageLayoutProps = {
  title: string;
  subtitle: string;
  lastUpdated?: string;
  sections: LegalSection[];
};

export function LegalPageLayout({
  title,
  subtitle,
  lastUpdated,
  sections,
}: LegalPageLayoutProps) {
  return (
    <>
      <section className="border-b border-silver-200 bg-white pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-silver-400">
              Rechtliches
            </p>
            <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-silver-500 sm:text-lg">
              {subtitle}
            </p>
            {lastUpdated && (
              <p className="mt-3 text-sm text-silver-400">
                Stand: {lastUpdated}
              </p>
            )}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl space-y-12">
            {sections.map((section) => (
              <article key={section.id} id={section.id} className="scroll-mt-28">
                <h2 className="font-display text-xl font-semibold tracking-tight text-navy-900 sm:text-2xl">
                  {section.title}
                </h2>

                {section.paragraphs?.map((paragraph, index) => (
                  <p
                    key={`${section.id}-p-${index}`}
                    className="mt-4 text-sm leading-relaxed text-silver-500 sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}

                {section.list && (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-silver-500 sm:text-base">
                    {section.list.map((item, index) => (
                      <li key={`${section.id}-li-${index}`}>{item}</li>
                    ))}
                  </ul>
                )}

                {section.afterList?.map((paragraph, index) => (
                  <p
                    key={`${section.id}-after-${index}`}
                    className="mt-4 text-sm leading-relaxed text-silver-500 sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}

            <p className="border-t border-silver-200 pt-8 text-sm text-silver-400">
              Fragen?{" "}
              <Link
                href="/kontakt"
                className="font-medium text-navy-800 transition-colors hover:text-navy-600"
              >
                Kontakt aufnehmen
              </Link>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
