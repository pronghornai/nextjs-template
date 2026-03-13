import nodemailer from "nodemailer";

import type { EmailMessage, EmailProvider } from "@/lib/email/types";

export const smtpProvider: EmailProvider = {
  async send(message: EmailMessage): Promise<void> {
    const host = process.env.SMTP_HOST;
    if (!host) {
      throw new Error("SMTP_HOST is not configured");
    }

    const port = Number(process.env.SMTP_PORT ?? 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASSWORD;
    const defaultFrom = process.env.EMAIL_FROM ?? user;

    if (!message.from && !defaultFrom) {
      throw new Error("EMAIL_FROM is not configured");
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      auth: user && pass ? { user, pass } : undefined,
    });

    await transporter.sendMail({
      from: message.from ?? defaultFrom,
      to: message.to,
      subject: message.subject,
      html: message.html,
    });
  },
};
