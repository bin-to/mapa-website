import { siteConfig } from "@/lib/site-config";
import type { LegalSection } from "@/components/sections/LegalPageLayout";

const { owner, name, address, phone, email } = siteConfig;

export const impressumSections: LegalSection[] = [
  {
    id: "angaben",
    title: "Angaben gemäß § 5 DDG",
    paragraphs: [
      `${name}`,
      owner,
      address.street,
      address.city,
      "Deutschland",
    ],
  },
  {
    id: "kontakt",
    title: "Kontakt",
    list: [
      `Telefon: ${phone}`,
      `E-Mail: ${email}`,
    ],
    afterList: [
      "Für eine schnelle elektronische Kontaktaufnahme stehen Ihnen Telefon und E-Mail zur Verfügung.",
    ],
  },
  {
    id: "vertretung",
    title: "Vertretungsberechtigt",
    paragraphs: [`Vertreten durch: ${owner}`],
  },
  {
    id: "beruf",
    title: "Berufsbezeichnung",
    paragraphs: [
      "Handwerksbetrieb für Sanierung, Abdichtung, Innenausbau und Außenanlagen.",
      "Verliehen in der Bundesrepublik Deutschland.",
    ],
  },
  {
    id: "haftung-inhalte",
    title: "Haftung für Inhalte",
    paragraphs: [
      "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
      "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.",
    ],
  },
  {
    id: "haftung-links",
    title: "Haftung für Links",
    paragraphs: [
      "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",
      "Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.",
    ],
  },
  {
    id: "urheberrecht",
    title: "Urheberrecht",
    paragraphs: [
      "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.",
      "Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.",
    ],
  },
  {
    id: "streitbeilegung",
    title: "Verbraucherstreitbeilegung",
    paragraphs: [
      "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/",
      "Unsere E-Mail-Adresse finden Sie oben im Impressum.",
      "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
    ],
  },
];

export const datenschutzSections: LegalSection[] = [
  {
    id: "verantwortlicher",
    title: "1. Verantwortlicher",
    paragraphs: [
      "Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler Datenschutzgesetze ist:",
      `${name}`,
      owner,
      address.street,
      address.city,
      `Telefon: ${phone}`,
      `E-Mail: ${email}`,
    ],
  },
  {
    id: "ueberblick",
    title: "2. Überblick der Datenverarbeitung",
    paragraphs: [
      "Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung einer funktionsfähigen Website, zur Kommunikation mit Ihnen oder zur Erfüllung gesetzlicher Pflichten erforderlich ist.",
      "Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen.",
    ],
    list: [
      "Bereitstellung der Website und Sicherstellung des technischen Betriebs",
      "Bearbeitung von Kontaktanfragen per E-Mail oder Telefon",
      "Einbindung von Kartenmaterial (Google Maps) auf der Kontaktseite",
    ],
  },
  {
    id: "rechtsgrundlagen",
    title: "3. Rechtsgrundlagen",
    paragraphs: [
      "Soweit wir für Verarbeitungsvorgänge eine Einwilligung einholen, dient Art. 6 Abs. 1 lit. a DSGVO als Rechtsgrundlage.",
      "Bei der Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gilt Art. 6 Abs. 1 lit. b DSGVO.",
      "Soweit eine Verarbeitung zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist, dient Art. 6 Abs. 1 lit. c DSGVO als Rechtsgrundlage.",
      "Für den technischen Betrieb der Website sowie zur Wahrung unserer berechtigten Interessen (z. B. an einer sicheren und nutzerfreundlichen Darstellung) stützen wir uns auf Art. 6 Abs. 1 lit. f DSGVO.",
    ],
  },
  {
    id: "hosting",
    title: "4. Hosting und Server-Logfiles",
    paragraphs: [
      "Diese Website wird bei einem externen Dienstleister gehostet. Beim Aufruf unserer Website werden automatisch Informationen erfasst, die Ihr Browser an unseren Server übermittelt. Dies können insbesondere sein:",
    ],
    list: [
      "IP-Adresse",
      "Datum und Uhrzeit der Anfrage",
      "Browsertyp und Browserversion",
      "verwendetes Betriebssystem",
      "Referrer-URL",
      "Hostname des zugreifenden Rechners",
    ],
    afterList: [
      "Die Verarbeitung erfolgt zur Gewährleistung eines störungsfreien Betriebs der Website sowie zur Erkennung und Abwehr von Missbrauch. Die Daten werden in der Regel nur für einen begrenzten Zeitraum gespeichert und anschließend gelöscht, sofern keine weitergehende Aufbewahrung aus Sicherheits- oder gesetzlichen Gründen erforderlich ist.",
      "Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der technischen Bereitstellung und Absicherung der Website.",
    ],
  },
  {
    id: "kontakt",
    title: "5. Kontaktaufnahme",
    paragraphs: [
      "Wenn Sie uns per Kontaktformular, E-Mail oder Telefon kontaktieren, verarbeiten wir die von Ihnen mitgeteilten Daten (z. B. Name, Telefonnummer, E-Mail-Adresse, Inhalt der Nachricht sowie ggf. gewünschte Leistung), um Ihre Anfrage zu bearbeiten.",
      "Das Kontaktformular auf unserer Website übermittelt Ihre Angaben per E-Mail an uns. Die Übermittlung erfolgt über den Dienst Resend (Resend, Inc.). Dabei werden die von Ihnen eingegebenen Daten (Name, Telefonnummer, E-Mail-Adresse, gewünschte Leistung und Nachricht) an unseren E-Mail-Empfang übertragen.",
      "Vor dem Absenden müssen Sie unsere Datenschutzerklärung bestätigen. Ohne diese Einwilligung kann das Formular nicht gesendet werden.",
      "Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Anbahnung oder Durchführung eines Vertrags zusammenhängt. In allen übrigen Fällen ist Rechtsgrundlage Art. 6 Abs. 1 lit. f DSGVO an unserem Interesse an der Bearbeitung Ihrer Anfrage.",
      "Die Daten werden gelöscht, sobald sie für die Erreichung des Zwecks ihrer Erhebung nicht mehr erforderlich sind, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
    ],
  },
  {
    id: "google-maps",
    title: "6. Google Maps",
    paragraphs: [
      "Auf unserer Kontaktseite binden wir Kartenmaterial des Dienstes Google Maps ein. Anbieter ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.",
      "Beim Aufruf der Seite mit eingebetteter Karte wird eine Verbindung zu Servern von Google hergestellt. Dabei kann Ihre IP-Adresse sowie weitere technische Informationen an Google übermittelt werden. Dies kann auch eine Übermittlung an Server von Google LLC in den USA umfassen.",
      "Google kann dabei Cookies oder vergleichbare Technologien einsetzen. Wir haben keinen vollständigen Einfluss auf die Datenverarbeitung durch Google.",
      "Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in einer ansprechenden und leicht auffindbaren Darstellung unseres Standorts.",
      "Weitere Informationen finden Sie in der Datenschutzerklärung von Google: https://policies.google.com/privacy",
    ],
  },
  {
    id: "speicherdauer",
    title: "7. Speicherdauer",
    paragraphs: [
      "Wir speichern personenbezogene Daten nur so lange, wie dies für die jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.",
      "Nach Wegfall des jeweiligen Zwecks bzw. Ablauf der Fristen werden die Daten routinemäßig gelöscht, sofern sie nicht zur Vertragserfüllung oder Vertragsanbahnung weiterhin erforderlich sind.",
    ],
  },
  {
    id: "rechte",
    title: "8. Ihre Rechte",
    paragraphs: [
      "Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:",
    ],
    list: [
      "Recht auf Auskunft (Art. 15 DSGVO)",
      "Recht auf Berichtigung (Art. 16 DSGVO)",
      "Recht auf Löschung (Art. 17 DSGVO)",
      "Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)",
      "Recht auf Datenübertragbarkeit (Art. 20 DSGVO)",
      "Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)",
      "Recht auf Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO)",
    ],
    afterList: [
      "Zur Ausübung Ihrer Rechte genügt eine Nachricht an die im Impressum genannten Kontaktdaten.",
      "Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig ist insbesondere die Aufsichtsbehörde Ihres üblichen Aufenthaltsorts, Ihres Arbeitsplatzes oder des Ortes des mutmaßlichen Verstoßes.",
      "Für Baden-Württemberg: Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg (LfDI BW), Lautenschlagerstraße 20, 70193 Stuttgart, https://www.baden-wuerttemberg.datenschutz.de",
    ],
  },
  {
    id: "ssl",
    title: "9. SSL- bzw. TLS-Verschlüsselung",
    paragraphs: [
      "Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.",
      "Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.",
    ],
  },
  {
    id: "aenderungen",
    title: "10. Aktualität dieser Datenschutzerklärung",
    paragraphs: [
      "Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder Änderungen unserer Leistungen berücksichtigt.",
      `Bei Fragen zum Datenschutz erreichen Sie uns unter ${email} oder telefonisch unter ${phone}.`,
    ],
  },
];
