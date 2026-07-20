import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { navLinks, services, siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-silver-300">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:py-20">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo size="lg" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-silver-400">
            Hochwertige Handwerksleistungen für Sanierung, Flachdach Sanierung, Innenausbau
            und Außenanlagen – persönlich, termintreu und regional in Rudersberg.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-white">
            Navigation
          </h3>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-white">
            Leistungen
          </h3>
          <ul className="mt-5 space-y-3">
            {services.map((service) => (
              <li key={service.id}>
                <Link
                  href={service.href}
                  className="text-sm transition-colors hover:text-white"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-white">
            Kontakt
          </h3>
          <address className="mt-5 space-y-2 text-sm not-italic leading-relaxed">
            <p className="font-medium text-white">{siteConfig.name}</p>
            <p>{siteConfig.owner}</p>
            <p>{siteConfig.address.street}</p>
            <p>{siteConfig.address.city}</p>
            <p className="pt-2">
              <a
                href={siteConfig.phoneHref}
                className="transition-colors hover:text-white"
              >
                Tel. {siteConfig.phone}
              </a>
            </p>
            <p>
              <a
                href={siteConfig.emailHref}
                className="transition-colors hover:text-white"
              >
                {siteConfig.email}
              </a>
            </p>
          </address>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-silver-500 sm:flex-row">
          <div className="flex gap-6">
            <Link href="/impressum" className="transition-colors hover:text-white">
              Impressum
            </Link>
            <Link href="/datenschutz" className="transition-colors hover:text-white">
              Datenschutz
            </Link>
          </div>
          <p>© {year} {siteConfig.name}</p>
        </Container>
      </div>
    </footer>
  );
}
