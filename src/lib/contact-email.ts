import { siteConfig } from "@/lib/site-config";

export type ContactEmailData = {
  name: string;
  phone: string;
  email: string;
  serviceLabel: string;
  message: string;
  submittedAt: Date;
};

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatSubmittedAt(date: Date): string {
  return new Intl.DateTimeFormat(siteConfig.locale, {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Europe/Berlin",
  }).format(date);
}

function fieldRow(label: string, value: string, href?: string): string {
  const valueHtml = href
    ? `<a href="${href}" style="color:#0f1f3d;text-decoration:none;font-weight:600;">${escapeHtml(value)}</a>`
    : `<span style="color:#0a1628;font-weight:600;">${escapeHtml(value)}</span>`;

  return `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid #e2e6ec;vertical-align:top;width:140px;">
        <span style="font-size:12px;font-weight:600;letter-spacing:0.04em;text-transform:uppercase;color:#6b7585;">${label}</span>
      </td>
      <td style="padding:14px 0 14px 16px;border-bottom:1px solid #e2e6ec;vertical-align:top;font-size:15px;line-height:1.5;">
        ${valueHtml}
      </td>
    </tr>
  `;
}

export function buildContactEmailHtml(data: ContactEmailData): string {
  const logoUrl = `${siteConfig.url}/Mapa%20logo.png`;
  const submittedAt = formatSubmittedAt(data.submittedAt);

  return `<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Neue Kontaktanfrage – ${escapeHtml(siteConfig.shortName)}</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f0f2f5;font-family:Arial,Helvetica,sans-serif;color:#0a1628;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0f2f5;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;">
            <tr>
              <td style="padding-bottom:24px;" align="center">
                <table role="presentation" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:4px;box-shadow:0 8px 24px rgba(10,22,40,0.08);border:1px solid rgba(0,0,0,0.05);">
                  <tr>
                    <td style="padding:12px 16px 8px;" align="center">
                      <img
                        src="${logoUrl}"
                        alt="${escapeHtml(siteConfig.name)}"
                        width="220"
                        height="110"
                        style="display:block;width:220px;max-width:100%;height:auto;border:0;"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:0 16px 12px;font-size:10px;letter-spacing:0.32em;text-transform:uppercase;text-align:center;color:#0f1f3d;font-weight:300;">
                      In Profession
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="background-color:#0a1628;border-radius:4px 4px 0 0;padding:28px 32px;">
                <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#8f99a8;">
                  Website-Kontaktformular
                </p>
                <h1 style="margin:0;font-size:26px;line-height:1.3;font-weight:700;color:#ffffff;">
                  Neue Kontaktanfrage
                </h1>
                <p style="margin:12px 0 0;font-size:14px;line-height:1.6;color:#c4cad4;">
                  Eingegangen am ${escapeHtml(submittedAt)}
                </p>
              </td>
            </tr>

            <tr>
              <td style="background-color:#ffffff;border-left:1px solid #e2e6ec;border-right:1px solid #e2e6ec;padding:8px 32px 0;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${fieldRow("Name", data.name)}
                  ${fieldRow("Telefon", data.phone, `tel:${data.phone.replace(/\s/g, "")}`)}
                  ${fieldRow("E-Mail", data.email, `mailto:${data.email}`)}
                  ${fieldRow("Leistung", data.serviceLabel)}
                </table>
              </td>
            </tr>

            <tr>
              <td style="background-color:#ffffff;border-left:1px solid #e2e6ec;border-right:1px solid #e2e6ec;padding:24px 32px 8px;">
                <p style="margin:0 0 10px;font-size:12px;font-weight:600;letter-spacing:0.04em;text-transform:uppercase;color:#6b7585;">
                  Nachricht
                </p>
                <div style="background-color:#f8f9fb;border:1px solid #e2e6ec;border-radius:4px;padding:18px 20px;font-size:15px;line-height:1.7;color:#0a1628;white-space:pre-wrap;">${escapeHtml(data.message)}</div>
              </td>
            </tr>

            <tr>
              <td style="background-color:#ffffff;border-left:1px solid #e2e6ec;border-right:1px solid #e2e6ec;padding:20px 32px 28px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8f9fb;border:1px solid #e2e6ec;border-radius:4px;">
                  <tr>
                    <td style="padding:14px 18px;font-size:13px;line-height:1.6;color:#6b7585;">
                      <strong style="color:#0f1f3d;">Datenschutz:</strong>
                      Die Datenschutzerklärung wurde vor dem Absenden bestätigt.
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="background-color:#0f1f3d;border-radius:0 0 4px 4px;padding:24px 32px;text-align:center;">
                <a
                  href="mailto:${escapeHtml(data.email)}?subject=${encodeURIComponent(`Re: Ihre Anfrage – ${siteConfig.shortName}`)}"
                  style="display:inline-block;background-color:#ffffff;color:#0a1628;text-decoration:none;font-size:14px;font-weight:700;padding:12px 24px;border-radius:4px;"
                >
                  Direkt antworten
                </a>
                <p style="margin:20px 0 0;font-size:12px;line-height:1.6;color:#c4cad4;">
                  ${escapeHtml(siteConfig.name)}<br />
                  ${escapeHtml(siteConfig.address.full)}<br />
                  <a href="${siteConfig.phoneHref}" style="color:#ffffff;text-decoration:none;">${escapeHtml(siteConfig.phone)}</a>
                  ·
                  <a href="${siteConfig.url}" style="color:#ffffff;text-decoration:none;">${escapeHtml(siteConfig.url.replace(/^https?:\/\//, ""))}</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function buildContactEmailText(data: ContactEmailData): string {
  const submittedAt = formatSubmittedAt(data.submittedAt);

  return [
    `${siteConfig.name}`,
    "Neue Kontaktanfrage über die Website",
    "",
    `Eingegangen am: ${submittedAt}`,
    "",
    `Name: ${data.name}`,
    `Telefon: ${data.phone}`,
    `E-Mail: ${data.email}`,
    `Leistung: ${data.serviceLabel}`,
    "",
    "Nachricht:",
    data.message,
    "",
    "Datenschutz: Die Datenschutzerklärung wurde vor dem Absenden bestätigt.",
    "",
    "---",
    siteConfig.address.full,
    siteConfig.phone,
    siteConfig.url,
  ].join("\n");
}
