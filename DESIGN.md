# MAPA Website – Design & Projektstruktur

Kompakter Leitfaden für die Erweiterung der MAPA-Website.

## Markenfarben

| Token | Hex | Verwendung |
|-------|-----|------------|
| `navy-950` | `#060b14` | Footer, tiefe Overlays |
| `navy-900` | `#0a1628` | Header, Karten, Primär-Dunkel |
| `navy-800` | `#0f1f3d` | Hover, Akzente |
| `silver-50`–`500` | siehe `globals.css` | Hintergründe, Fließtext |

## Typografie

- **Fließtext:** Manrope (`font-sans`)
- **Headlines:** Outfit (`font-display`)

## Dateistruktur

```
src/
├── app/              # Next.js App Router (Seiten)
├── components/
│   ├── layout/       # Header, Footer
│   ├── sections/     # Seitenabschnitte (pro Sektion eine Datei)
│   └── ui/           # Wiederverwendbare Bausteine
└── lib/
    ├── site-config.ts  # Texte, Navigation, Leistungen
    ├── images.ts       # Bild-URLs (hier ersetzen)
    └── utils.ts
```

## Neue Seite anlegen

1. Route unter `src/app/<slug>/page.tsx` erstellen
2. `Header` und `Footer` kommen automatisch aus `layout.tsx`
3. Inhalte aus `site-config.ts` wiederverwenden
4. UI-Komponenten: `Button`, `Container`, `SectionHeading`, `ScrollReveal`

## Bilder ersetzen

Alle Bild-URLs zentral in `src/lib/images.ts`. Echte Fotos einbinden:

```ts
hero: { src: "/images/hero.jpg", alt: "..." }
```

Dateien nach `public/images/` legen.

## Platzhalter-Seiten

Impressum und Datenschutz sind im Footer verlinkt (`/impressum`, `/datenschutz`) – noch anzulegen.

## Entwicklung

```bash
npm run dev    # localhost:3000
npm run build  # Produktions-Build
```
