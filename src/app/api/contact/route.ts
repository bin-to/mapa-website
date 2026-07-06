import { NextResponse } from "next/server";
import { Resend } from "resend";
import { services, siteConfig } from "@/lib/site-config";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
  privacyAccepted?: boolean;
};

function getServiceLabel(serviceId: string): string {
  if (serviceId === "sonstiges") {
    return "Sonstiges / Beratung";
  }

  return (
    services.find((service) => service.id === serviceId)?.title ??
    "Nicht angegeben"
  );
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const toEmail = process.env.CONTACT_FORM_TO;

  if (!apiKey || !fromEmail || !toEmail) {
    console.error("Contact form: missing Resend environment variables");
    return NextResponse.json(
      { error: "E-Mail-Versand ist derzeit nicht konfiguriert." },
      { status: 503 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { error: "Ungültige Anfrage." },
      { status: 400 },
    );
  }

  const name = payload.name?.trim() ?? "";
  const phone = payload.phone?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const service = payload.service?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (!name || !phone || !email || !message) {
    return NextResponse.json(
      { error: "Bitte füllen Sie alle Pflichtfelder aus." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Bitte geben Sie eine gültige E-Mail-Adresse ein." },
      { status: 400 },
    );
  }

  if (!payload.privacyAccepted) {
    return NextResponse.json(
      { error: "Bitte akzeptieren Sie die Datenschutzerklärung." },
      { status: 400 },
    );
  }

  const serviceLabel = service ? getServiceLabel(service) : "Nicht angegeben";

  const text = [
    `Neue Kontaktanfrage über ${siteConfig.url}`,
    "",
    `Name: ${name}`,
    `Telefon: ${phone}`,
    `E-Mail: ${email}`,
    `Leistung: ${serviceLabel}`,
    "",
    "Nachricht:",
    message,
  ].join("\n");

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    replyTo: email,
    subject: `Anfrage von ${name}`,
    text,
  });

  if (error) {
    console.error("Contact form: Resend error", error);
    return NextResponse.json(
      { error: "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
