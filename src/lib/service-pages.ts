import { images, type ImageKey } from "@/lib/images";

export type ServicePageContent = {
  slug: string;
  title: string;
  navLabel: string;
  metaDescription: string;
  heroSubtitle: string;
  intro: readonly string[];
  detailsTitle: string;
  details: readonly string[];
  scopeTitle: string;
  scopeItems: readonly string[];
  closing: string;
  gallery: readonly { imageKey: ImageKey; caption: string }[];
};

export const servicePages: ServicePageContent[] = [
  {
    slug: "altbausanierung",
    title: "Altbausanierung",
    navLabel: "Altbausanierung",
    metaDescription:
      "Fassaden- und Innensanierung für Altbauten in Rudersberg und Umgebung. Instandsetzung, Feuchteschutz und Oberflächenarbeiten aus einer Hand.",
    heroSubtitle:
      "Sanierung und Instandsetzung für bestehende Gebäude in Rudersberg und Umgebung.",
    intro: [
      "Altbauten stellen andere Anforderungen als Neubauten. Bausubstanz, Putz, Anstriche und Anschlüsse sind oft über Jahre hinweg beansprucht worden. Risse in der Fassade, abplatzende Putzflächen, Feuchte an Innenwänden oder Schäden an Holz- und Mauerwerksbereichen gehören zu den typischen Themen, die wir bei der Altbausanierung bearbeiten.",
      "Entscheidend ist, den Ist-Zustand genau zu erfassen. Nicht jede sichtbare Schadstelle hat dieselbe Ursache. Feuchte kann über undichte Anschlüsse, kapillaren Aufstieg oder mangelhafte Abdichtung entstehen. Putz und Anstrich lassen sich nur dauerhaft erneuern, wenn der Untergrund tragfähig und trocken ist.",
      "Wir sanieren Fassaden und Innenräume Schritt für Schritt: Schadstellen freilegen, Untergründe vorbereiten, Putz und Anstrich fachgerecht aufbauen. Dabei achten wir darauf, vorhandene Strukturen soweit möglich zu erhalten und das Gebäude insgesamt wieder in einen soliden Zustand zu bringen.",
      "Ob einzelne Räume, das Treppenhaus, die gesamte Fassade oder mehrere Bereiche gleichzeitig betroffen sind – der Umfang wird nach einer Besichtigung vor Ort festgelegt und transparent im Angebot dargestellt.",
    ],
    detailsTitle: "Typische Einsatzbereiche",
    details: [
      "Bei Fassadensanierungen geht es häufig um die Erneuerung oder Ausbesserung von Außenputz, das Schließen von Rissen, die Vorbereitung des Untergrunds und den anschließenden Anstrich. Auch ältere Putzstrukturen und Anschlüsse an Fenster, Gesimse oder Dachbereiche werden dabei berücksichtigt.",
      "In der Innensanierung übernehmen wir Arbeiten an Wänden und Decken, die Vorbereitung für spätere Bodenbeläge sowie die Bearbeitung von Feuchte- und Schimmelstellen. Wo nötig, stimmen wir uns mit weiteren Gewerken ab, damit Abläufe aufeinander abgestimmt bleiben.",
      "Unser Ziel ist ein Ergebnis, das optisch überzeugt und technisch haltbar ist – nicht eine kurzfristige Überarbeitung oberflächlicher Schäden.",
    ],
    scopeTitle: "Leistungen im Überblick",
    scopeItems: [
      "Fassadensanierung mit Putzausbesserung, Rissverfüllung und Untergrundvorbereitung",
      "Erneuerung und Instandsetzung von Außen- und Innenanstrichen",
      "Innensanierung von Wänden, Decken und vorbereitenden Flächenarbeiten",
      "Bearbeitung von Feuchteschäden und Schimmelstellen nach Ursachenklärung",
      "Instandsetzung von Mauerwerk, Holzbauteilen und Anschlussbereichen",
      "Sanierung von Treppenhäusern und gemeinschaftlich genutzten Bereichen",
      "Abstimmung mit anderen Gewerken bei umfangreicheren Sanierungsvorhaben",
      "Besichtigung, Beratung und Erstellung eines nachvollziehbaren Angebots",
    ],
    closing:
      "Jedes Gebäude ist anders aufgebaut und anders genutzt. Deshalb beginnen wir mit einer Besichtigung vor Ort und besprechen mit Ihnen, welche Maßnahmen sinnvoll und wirtschaftlich vertretbar sind.",
    gallery: [
      {
        imageKey: "altbausanierung",
        caption: "Fassadensanierung an einem Altbau",
      },
      {
        imageKey: "altbausanierungInnen",
        caption: "Innensanierung mit Erhalt der bestehenden Bausubstanz",
      },
    ],
  },
  {
    slug: "flachdach-sanierung",
    title: "Flachdach Sanierung",
    navLabel: "Flachdach Sanierung",
    metaDescription:
      "Flachdach Sanierung in Rudersberg und Umgebung. Instandsetzung, Abdichtungserneuerung, Reparaturen, Anschlüsse und Entwässerung fachgerecht ausgeführt.",
    heroSubtitle:
      "Sanierung, Instandsetzung und Erneuerung von Flachdächern.",
    intro: [
      "Flachdach Sanierung umfasst alle Maßnahmen, die ein Flachdach wieder zuverlässig schützen und technisch auf den Stand bringen. Flachdächer sind bei Wohn- und Gewerbegebäuden weit verbreitet. Ihre Aufgabe ist der Schutz der darunterliegenden Bausubstanz vor Regen, Schnee und stehendem Wasser – dafür müssen Abdichtung, Gefälle, Entwässerung und Anschlüsse zusammenpassen.",
      "Undichtigkeiten fallen oft erst spät auf, etwa als Feuchteflecken an Decken, Geruchsbildung oder Schäden an der Wärmedämmung. Häufige Ursachen sind verschlissene Abdichtungsbahnen, undichte Anschlüsse, mangelhafte Randausbildungen oder verstopfte Entwässerungselemente.",
      "Vor jeder Flachdach Sanierung prüfen wir den vorhandenen Aufbau und den Zustand der Abdichtung. Danach legen wir fest, ob eine punktuelle Reparatur ausreicht oder eine größere Sanierung bzw. Erneuerung erforderlich ist. Je nach Gebäude und Anforderung setzen wir Bitumenbahnen oder Flüssigkunststoff ein.",
      "Wir sanieren Bestandsdächer und führen Abdichtungsarbeiten im Rahmen umfangreicherer Maßnahmen aus. Dazu gehören die Vorbereitung des Untergrunds, die fachgerechte Verlegung bzw. Aufbringung der Abdichtung sowie die Ausführung der Anschlüsse und Randbereiche.",
    ],
    detailsTitle: "Was bei der Flachdach Sanierung wichtig ist",
    details: [
      "Entwässerung spielt eine zentrale Rolle. Gefälle, Gullys und Anschlüsse an Fallrohren müssen funktionieren, damit Wasser zuverlässig abgeführt wird. Diese Punkte werden bei der Begutachtung mit einbezogen.",
      "Anschlüsse an Attika, Lichtkuppeln, Dachdurchführungen und angrenzende Bauteile sind häufige Schwachstellen. Sie erfordern saubere Detailausführung und passendes Material, damit die sanierte Abdichtung langfristig dicht bleibt.",
      "Nach Abschluss der Sanierung übergeben wir eine ordentlich ausgeführte Fläche. Auf Wunsch besprechen wir auch, welche Kontrollen und Wartungsmaßnahmen für die spätere Nutzung sinnvoll sind.",
    ],
    scopeTitle: "Leistungen im Überblick",
    scopeItems: [
      "Flachdach Sanierung mit Erneuerung der Abdichtung in Bitumenbahnen, mehrlagig nach Aufbau und Anforderung",
      "Flüssigabdichtung für Anschlüsse, Details und schwer zugängliche Bereiche",
      "Entfernung alter, undichter Schichten und Aufbereitung des Untergrunds",
      "Sanierung von Dachrand- und Attika-Anschlüssen",
      "Abdichtung von Durchdringungen und Anschlussstellen",
      "Prüfung und Instandsetzung der Entwässerung",
      "Punktuelle Reparaturen und Instandsetzung bestehender Flachdächer",
      "Besichtigung, Zustandsbeurteilung und Angebotserstellung",
    ],
    closing:
      "Flachdach Sanierung ist eine technische Aufgabe, bei der Details den Unterschied machen. Gerne prüfen wir Ihr Dach vor Ort und erläutern Ihnen, welche Sanierungsmaßnahmen in Ihrem Fall erforderlich sind.",
    gallery: [
      {
        imageKey: "flachdachabdichtung",
        caption: "Flachdach Sanierung mit Bitumenbahnen",
      },
      {
        imageKey: "flachdachabdichtungFluessig",
        caption: "Flüssigabdichtung im Rahmen der Flachdach Sanierung",
      },
    ],
  },
  {
    slug: "putz-malerarbeiten",
    title: "Putz- und Malerarbeiten",
    navLabel: "Putz & Maler",
    metaDescription:
      "Putz- und Malerarbeiten innen und außen in Rudersberg. Untergrundvorbereitung, Putz, Tapezierarbeiten, Anstrich und Lackierung fachgerecht ausgeführt.",
    heroSubtitle:
      "Putz-, Spachtel-, Tapezier- und Malerarbeiten für Innen- und Außenbereiche.",
    intro: [
      "Putz- und Malerarbeiten sind ein zentraler Bestandteil von Sanierungen, Renovierungen und Neugestaltungen. Sie bestimmen maßgeblich das Erscheinungsbild eines Raumes oder einer Fassade und schützen gleichzeitig die darunterliegende Bausubstanz.",
      "Damit Oberflächen dauerhaft haltbar sind, muss der Untergrund stimmen. Risse, Unebenheiten, alte Farbschichten oder feuchte Putzflächen müssen vor dem Anstrich oder Putzaufbau fachgerecht bearbeitet werden. Darauf legen wir bei jeder Ausführung besonderen Wert.",
      "Wir führen Innen- und Außenarbeiten aus – vom Ausbessern bestehender Putzflächen über Spachtel- und Tapezierarbeiten bis hin zu Wand- und Deckenanstrichen, Fassadenputz und Lackierungen an Türen, Fenstern oder Holzwerk.",
      "Material und Aufbau werden nach Einsatzbereich und Untergrund gewählt. Farbtöne, Struktur und Oberflächenqualität besprechen wir vor Beginn der Arbeiten mit Ihnen, damit das Ergebnis zu Raum, Gebäude und Nutzung passt.",
    ],
    detailsTitle: "Innen- und Außenbereich",
    details: [
      "Im Innenbereich übernehmen wir Putzarbeiten, Spachteln nach den üblichen Qualitätsstufen, Tapezierarbeiten sowie Anstriche an Wänden und Decken. Auch Renovierungen einzelner Räume, Treppenhäuser oder größerer Wohnbereiche gehören dazu.",
      "Im Außenbereich sanieren und erneuern wir Fassadenputz und Fassadenanstriche. Dabei werden Witterungseinflüsse, Untergrundbeschaffenheit und bestehende Putzsysteme berücksichtigt.",
      "Während der Ausführung achten wir auf saubere Abgrenzung der Arbeitsbereiche und ordentlichen Schutz angrenzender Flächen. Nach Abschluss der Arbeiten werden die bearbeiteten Bereiche besenrein übergeben.",
    ],
    scopeTitle: "Leistungen im Überblick",
    scopeItems: [
      "Innenputz und Außenputz – Neuaufbau, Ausbesserung und Sanierung",
      "Spachteln, Schleifen und Untergrundvorbereitung",
      "Tapezierarbeiten und Malerarbeiten auf Vlies- und Raufasertapeten",
      "Wand- und Deckenanstriche in Innenräumen",
      "Fassadenputz und Fassadenanstrich",
      "Lackierarbeiten an Türen, Fenstern und Holzoberflächen",
      "Renovierung einzelner Räume und größerer Wohnbereiche",
      "Beratung zu Material, Farbe und Oberflächenqualität",
    ],
    closing:
      "Gute Putz- und Malerarbeiten entstehen durch sorgfältige Vorbereitung und saubere Ausführung. Gerne besprechen wir Ihr Vorhaben vor Ort und erstellen Ihnen ein passendes Angebot.",
    gallery: [
      {
        imageKey: "putzMaler",
        caption: "Malerarbeiten in einem Innenraum",
      },
      {
        imageKey: "putzMalerPutz",
        caption: "Putzarbeiten an einer Wandfläche",
      },
    ],
  },
  {
    slug: "gartengestaltung",
    title: "Gartengestaltung",
    navLabel: "Garten",
    metaDescription:
      "Gartengestaltung in Rudersberg. Terrassen, Wege, Pflaster- und Natursteinarbeiten, Mauern und Außenanlagen fachgerecht geplant und umgesetzt.",
    heroSubtitle:
      "Planung und Umsetzung von Terrassen, Wegen, Mauern und Außenanlagen.",
    intro: [
      "Gartengestaltung umfasst mehr als die reine Gestaltung von Beeten und Grünflächen. Terrassen, Wege, Stützmauern und befestigte Flächen sind tragende Elemente im Außenbereich. Sie müssen im Alltag belastbar sein, Wasser führen und sich in das Grundstück einfügen.",
      "Entscheidend für dauerhafte Ergebnisse sind Unterbau, Entwässerung und Materialwahl. Ob Naturstein, Betonstein oder Platten – jede Variante stellt andere Anforderungen an Fundament, Gefälle und Verlegung. Diese Punkte werden bei der Planung berücksichtigt.",
      "Wir planen und setzen Außenanlagen Schritt für Schritt um: von der Beratung vor Ort über die Vorbereitung des Untergrunds bis zur fertigen Fläche. Dabei achten wir auf saubere Ausführung, klare Linien und eine ordentliche Integration in das bestehende Gelände.",
      "Ob Terrasse, Gartenweg, Einfahrt, Stützmauer oder Terrassierung an einem Hang – Umfang und Aufbau werden nach Besichtigung des Grundstücks festgelegt und im Angebot nachvollziehbar dargestellt.",
    ],
    detailsTitle: "Planung und Ausführung",
    details: [
      "Bei Terrassen und Wegen gehört ein tragfähiger Unterbau zur fachgerechten Ausführung. Schottertragschicht, Bettung und Verlegung werden entsprechend Material und späterer Nutzung ausgeführt.",
      "Naturstein- und Pflasterarbeiten erfordern präzise Ausrichtung, passende Fugen und saubere Anschlüsse an angrenzende Bauteile. Mauern und Stützkonstruktionen werden so ausgebildet, dass sie ihre Funktion zuverlässig erfüllen.",
      "Auch die Vorbereitung von Flächen für spätere Bepflanzung oder Rasen kann Bestandteil eines Projekts sein. Material, Gefälle und Entwässerung besprechen wir vor Beginn der Arbeiten mit Ihnen.",
    ],
    scopeTitle: "Leistungen im Überblick",
    scopeItems: [
      "Terrassen aus Naturstein, Betonstein oder Platten",
      "Gartenwege und befestigte Zufahrten",
      "Naturstein- und Pflasterarbeiten",
      "Mauern, Stützmauern und Einfassungen",
      "Hangbefestigung und Terrassierung",
      "Unterbau, Bettung und fachgerechte Verlegung",
      "Vorbereitung von Flächen für Beete und Rasen",
      "Besichtigung, Beratung und Angebotserstellung",
    ],
    closing:
      "Außenanlagen sollen langfristig funktionieren und gepflegt werden können. Gerne besprechen wir Ihr Vorhaben vor Ort und zeigen Ihnen, welche Lösung für Ihr Grundstück sinnvoll ist.",
    gallery: [
      {
        imageKey: "gartengestaltung",
        caption: "Terrassierter Garten mit Natursteinmauern",
      },
      {
        imageKey: "gartengestaltungSteine",
        caption: "Natursteinverlegung im Außenbereich",
      },
    ],
  },
];

export function getServicePage(slug: string): ServicePageContent | undefined {
  return servicePages.find((page) => page.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicePages.map((page) => page.slug);
}

export function getServiceHeroImage(slug: string) {
  const page = getServicePage(slug);
  if (!page) return images.altbausanierung;
  return images[page.gallery[0].imageKey];
}
