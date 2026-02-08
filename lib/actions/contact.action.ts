'use server'

import { ContactFormPayload } from "@/types/Types";
import { sendContactMail } from "../sendContactMail";

export async function sendEmail(data:Partial<ContactFormPayload>) {
    try {
        const res = await sendContactMail(data as ContactFormPayload );
        if (res.success) {
            return {message: 'Email sent successfully', success: true};
        }else{
            return {message: 'Operation failed. Coould not send email', success: false};
        }
    } catch (error) {
        console.log(error)
        return {message: 'Failed to send email', success: false};
    }
}