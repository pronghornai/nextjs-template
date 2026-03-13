import type { EmailMessage, EmailProvider } from "@/lib/email/types";

export const consoleProvider: EmailProvider = {
  async send(message: EmailMessage): Promise<void> {
    console.log("Email delivery (console provider)");
    console.log({
      to: message.to,
      subject: message.subject,
      html: message.html,
    });
  },
};
