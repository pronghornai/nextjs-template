import { consoleProvider } from "@/lib/email/providers/console";
import { smtpProvider } from "@/lib/email/providers/smtp";
import type { EmailMessage } from "@/lib/email/types";

export const sendEmail = async (message: EmailMessage): Promise<void> => {
  const provider = process.env.SMTP_HOST ? smtpProvider : consoleProvider;
  await provider.send(message);
};

export type { EmailMessage, EmailProvider } from "@/lib/email/types";
export { passwordResetEmail, organizationInviteEmail } from "@/lib/email/templates";
