// lib/emailTemplates/contactEmail.ts

import { ContactFormPayload } from "@/types/Types"

export const contactEmailTemplate = (data: ContactFormPayload): string => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>New Contact Request</title>
    </head>

    <body style="margin:0;padding:0;background-color:#eef2f5;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#eef2f5;padding:24px;">
        <tr>
          <td align="center">

            <!-- Main Card -->
            <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 4px 10px rgba(0,0,0,0.04);">

              <!-- Header -->
              <tr>
                <td style="background-color:#0F4C75;padding:24px;text-align:center;">
                  <h1 style="margin:0;color:#ffffff;font-family:Arial,sans-serif;font-size:24px;font-weight:bold;">
                    New Contact Request
                  </h1>
                  <p style="margin:8px 0 0;color:#dbeafe;font-family:Arial,sans-serif;font-size:14px;">
                    Someone just reached out through your website
                  </p>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding:24px;font-family:Arial,sans-serif;color:#1f2937;font-size:14px;">

                  <table width="100%" cellpadding="10" cellspacing="0" style="border-collapse:collapse;">

                    <tr style="background-color:#f8fafc;">
                      <td style="font-weight:bold;width:160px;color:#0F4C75;">
                        Full Name
                      </td>
                      <td>
                        ${data.firstName} ${data.lastName}
                      </td>
                    </tr>

                    <tr>
                      <td style="font-weight:bold;color:#0F4C75;">
                        Email
                      </td>
                      <td>
                        ${data.email}
                      </td>
                    </tr>

                    <tr style="background-color:#f8fafc;">
                      <td style="font-weight:bold;color:#0F4C75;">
                        Phone Number
                      </td>
                      <td>
                        ${data.phoneNumber}
                      </td>
                    </tr>

                    <tr>
                      <td style="font-weight:bold;color:#0F4C75;">
                        Service Type
                      </td>
                      <td>
                        ${data.serviceType}
                      </td>
                    </tr>

                  </table>

                  <!-- Message Box -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:20px;">
                    <tr>
                      <td style="font-weight:bold;color:#0F4C75;padding-bottom:8px;font-family:Arial,sans-serif;">
                        Message
                      </td>
                    </tr>
                    <tr>
                      <td style="background-color:#f1f5f9;border-left:4px solid #0F4C75;padding:14px;border-radius:4px;font-family:Arial,sans-serif;font-size:14px;color:#111827;white-space:pre-line;">
                        ${data.message}
                      </td>
                    </tr>
                  </table>

                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background-color:#f8fafc;padding:14px;text-align:center;">
                  <p style="margin:0;font-family:Arial,sans-serif;font-size:12px;color:#64748b;">
                    This email was sent from your website contact form.
                  </p>
                </td>
              </tr>

            </table>

          </td>
        </tr>
      </table>
    </body>
  </html>
  `
}
