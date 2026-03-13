export interface EmailMessage {
  to: string;
  subject: string;
  html: string;
  from?: string;
}

export interface EmailProvider {
  send(message: EmailMessage): Promise<void>;
}
