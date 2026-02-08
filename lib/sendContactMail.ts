// lib/sendContactMail.ts
import { ContactFormPayload } from "@/types/Types"
import { mailTransporter } from "./nodemailer"
import { contactEmailTemplate } from "./contactEmail"


interface SendMailResult {
  success: boolean
}

export const sendContactMail = async (
  payload: ContactFormPayload
): Promise<SendMailResult> => {

    // console.log(process.env.GMAIL_USER, process.env.GMAIL_APP_PASSWORD)

  await mailTransporter.sendMail({
    from: `"Website Contact" <${process.env.GMAIL_USER!}>`,
    to: process.env.GMAIL_USER!,
    replyTo: payload.email,
    subject: `New Inquiry – ${payload.serviceType}`,
    html: contactEmailTemplate(payload),
  })

  return { success: true }
}
