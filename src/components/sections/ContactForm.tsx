"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { services, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type FormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

const initialFormData: FormData = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

const fieldClassName =
  "w-full rounded-sm border border-silver-200 bg-white px-4 py-3 text-sm text-navy-900 transition-colors placeholder:text-silver-400 focus:border-navy-800 focus:outline-none focus:ring-2 focus:ring-navy-800/10";

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const serviceLabel =
      formData.service === "sonstiges"
        ? "Sonstiges / Beratung"
        : (services.find((service) => service.id === formData.service)?.title ??
          "Nicht angegeben");

    const body = [
      `Name: ${formData.name}`,
      `Telefon: ${formData.phone}`,
      `E-Mail: ${formData.email}`,
      `Leistung: ${serviceLabel}`,
      "",
      "Nachricht:",
      formData.message,
    ].join("\n");

    const mailto = `${siteConfig.emailHref}?subject=${encodeURIComponent(
      `Anfrage von ${formData.name}`,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-sm border border-silver-200 bg-white p-8 shadow-sm shadow-navy-900/5 sm:p-10">
        <h3 className="font-display text-xl font-semibold text-navy-900">
          Vielen Dank für Ihre Anfrage
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-silver-500 sm:text-base">
          Ihr E-Mail-Programm sollte sich geöffnet haben. Senden Sie die
          Nachricht ab – wir melden uns schnellstmöglich bei Ihnen.
        </p>
        <p className="mt-4 text-sm text-silver-500">
          Lieber direkt sprechen?{" "}
          <a
            href={siteConfig.phoneHref}
            className="font-medium text-navy-800 transition-colors hover:text-navy-600"
          >
            {siteConfig.phone}
          </a>
        </p>
        <Button
          type="button"
          variant="outline"
          size="md"
          className="mt-8"
          onClick={() => {
            setFormData(initialFormData);
            setSubmitted(false);
          }}
        >
          Neue Anfrage
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-sm border border-silver-200 bg-white p-8 shadow-sm shadow-navy-900/5 sm:p-10"
    >
      <h3 className="font-display text-xl font-semibold text-navy-900">
        Anfrage senden
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-silver-500">
        Beschreiben Sie kurz Ihr Vorhaben – wir melden uns persönlich bei
        Ihnen.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="block text-sm font-medium text-navy-900">
            Name <span className="text-navy-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            className={cn(fieldClassName, "mt-2")}
            placeholder="Ihr Name"
          />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="phone" className="block text-sm font-medium text-navy-900">
            Telefon <span className="text-navy-600">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            className={cn(fieldClassName, "mt-2")}
            placeholder="+49 ..."
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="email" className="block text-sm font-medium text-navy-900">
            E-Mail <span className="text-navy-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            className={cn(fieldClassName, "mt-2")}
            placeholder="ihre@email.de"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="service" className="block text-sm font-medium text-navy-900">
            Leistung
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={cn(fieldClassName, "mt-2")}
          >
            <option value="">Bitte wählen (optional)</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.title}
              </option>
            ))}
            <option value="sonstiges">Sonstiges / Beratung</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-navy-900">
            Nachricht <span className="text-navy-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className={cn(fieldClassName, "mt-2 resize-y")}
            placeholder="Was möchten Sie umsetzen? Wann passt ein Vor-Ort-Termin?"
          />
        </div>
      </div>

      <p className="mt-5 text-xs leading-relaxed text-silver-400">
        Mit dem Absenden öffnet sich Ihr E-Mail-Programm. Ihre Angaben werden
        nur zur Bearbeitung Ihrer Anfrage verwendet.
      </p>

      <Button type="submit" variant="secondary" size="lg" className="mt-6 w-full sm:w-auto">
        <Send className="h-4 w-4" aria-hidden />
        Anfrage absenden
      </Button>
    </form>
  );
}
