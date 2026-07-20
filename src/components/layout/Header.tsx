"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { navLinks, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const lightHeroPaths = ["/ueber-uns"];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isLightHero = lightHeroPaths.includes(pathname);
  const showSolid = scrolled || isLightHero;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        showSolid
          ? isLightHero
            ? "border-b border-silver-200 bg-white/95 py-3 shadow-sm shadow-navy-900/5 backdrop-blur-md"
            : "border-b border-white/10 bg-navy-950/85 py-3 shadow-lg shadow-black/10 backdrop-blur-md"
          : "bg-transparent py-5 lg:py-6",
      )}
    >
      <Container className="relative z-50 flex items-center justify-between gap-6">
        <Logo size="md" priority />

        <nav
          className="hidden items-center gap-5 xl:gap-8 lg:flex"
          aria-label="Hauptnavigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors",
                showSolid && isLightHero
                  ? "text-navy-800 hover:text-navy-600"
                  : "text-silver-200 hover:text-white",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/kontakt" variant="primary" size="sm">
            Kostenlos anfragen
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            "inline-flex items-center justify-center rounded-sm p-2 transition-colors lg:hidden",
            menuOpen || !(showSolid && isLightHero)
              ? "text-white hover:bg-white/10"
              : "text-navy-900 hover:bg-navy-900/5",
          )}
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 top-0 z-40 bg-navy-950/98 backdrop-blur-lg transition-all duration-300 lg:hidden",
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        aria-hidden={!menuOpen}
      >
        <Container className="flex h-full flex-col pt-24">
          <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/10 py-4 text-lg font-medium text-white transition-colors hover:text-silver-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-10 flex flex-col gap-4">
            <Button
              href="/kontakt"
              variant="primary"
              size="lg"
              className="w-full"
              onClick={() => setMenuOpen(false)}
            >
              Kostenlos anfragen
            </Button>
            <a
              href={siteConfig.phoneHref}
              className="text-center text-sm text-silver-300 transition-colors hover:text-white"
            >
              {siteConfig.phone}
            </a>
          </div>
        </Container>
      </div>
    </header>
  );
}
