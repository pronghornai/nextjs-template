const wrapEmailHtml = (content: string): string => {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Email</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f3f4f6;font-family:Arial, Helvetica, sans-serif;color:#111827;">
    <div style="max-width:600px;margin:0 auto;padding:24px;">
      <div style="background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;padding:24px;">
        ${content}
      </div>
      <p style="margin-top:16px;font-size:12px;color:#6b7280;">If you did not request this email, you can safely ignore it.</p>
    </div>
  </body>
</html>`;
};

export const passwordResetEmail = ({
  resetUrl,
}: {
  resetUrl: string;
}): { subject: string; html: string } => {
  const html = wrapEmailHtml(`
        <h1 style="font-size:20px;margin:0 0 16px 0;">Reset your password</h1>
        <p style="margin:0 0 16px 0;line-height:1.5;">We received a request to reset your password. Click the button below to choose a new one.</p>
        <p style="margin:0 0 24px 0;">
          <a href="${resetUrl}" style="display:inline-block;background:#2563eb;color:#ffffff;text-decoration:none;padding:12px 18px;border-radius:6px;font-weight:600;">Reset password</a>
        </p>
        <p style="margin:0;line-height:1.5;">If the button doesn't work, copy and paste this link into your browser:</p>
        <p style="margin:8px 0 0 0;word-break:break-all;">
          <a href="${resetUrl}" style="color:#2563eb;">${resetUrl}</a>
        </p>
      `);

  return {
    subject: "Reset your password",
    html,
  };
};

export const organizationInviteEmail = ({
  organizationName,
  inviteUrl,
}: {
  organizationName: string;
  inviteUrl: string;
}): { subject: string; html: string } => {
  const html = wrapEmailHtml(`
        <h1 style="font-size:20px;margin:0 0 16px 0;">You're invited to join ${organizationName}</h1>
        <p style="margin:0 0 16px 0;line-height:1.5;">You've been invited to collaborate with ${organizationName}. Use the link below to accept the invitation.</p>
        <p style="margin:0 0 24px 0;">
          <a href="${inviteUrl}" style="display:inline-block;background:#16a34a;color:#ffffff;text-decoration:none;padding:12px 18px;border-radius:6px;font-weight:600;">Accept invitation</a>
        </p>
        <p style="margin:0;line-height:1.5;">If the button doesn't work, copy and paste this link into your browser:</p>
        <p style="margin:8px 0 0 0;word-break:break-all;">
          <a href="${inviteUrl}" style="color:#16a34a;">${inviteUrl}</a>
        </p>
      `);

  return {
    subject: `Invitation to join ${organizationName}`,
    html,
  };
};
