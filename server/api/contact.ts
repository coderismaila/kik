export default defineEventHandler(async (event) => {
  const { emails } = useResend();

  const body = await readBody(event);
  const { name, email, phone, company, service, message } = body;

  const response = await emails.send({
    from: "kamaluddeen.ibrahim@kikengineeringltd.com",
    to: "kamaluddeen.ibrahim@kikengineeringltd.com",
    subject: `New Contact Form Submission - ${service || 'General Inquiry'}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #f59e0b, #d97706); padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
          .header h1 { color: #fff; margin: 0; font-size: 24px; }
          .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
          .value { color: #1f2937; font-size: 16px; }
          .message-box { background: #fff; padding: 15px; border-radius: 6px; border-left: 4px solid #f59e0b; margin-top: 10px; }
          .footer { text-align: center; margin-top: 20px; color: #9ca3af; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>🔌 New Contact Form Submission</h1>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name</div>
            <div class="value">${name || 'Not provided'}</div>
          </div>
          <div class="field">
            <div class="label">Email</div>
            <div class="value">${email}</div>
          </div>
          <div class="field">
            <div class="label">Phone</div>
            <div class="value">${phone || 'Not provided'}</div>
          </div>
          <div class="field">
            <div class="label">Company / Organization</div>
            <div class="value">${company || 'Not provided'}</div>
          </div>
          <div class="field">
            <div class="label">Service Interested In</div>
            <div class="value">${service || 'General Inquiry'}</div>
          </div>
          <div class="field">
            <div class="label">Message</div>
            <div class="message-box">${message}</div>
          </div>
        </div>
        <div class="footer">
          <p>This email was sent from the KIK Engineering Ltd contact form.</p>
          <p>© ${new Date().getFullYear()} KIK Engineering Ltd. All rights reserved.</p>
        </div>
      </body>
      </html>
    `,
  });

  if (response.error) {
    throw createError({
      statusCode: 500,
      statusMessage: response.error.message || "Failed to send email",
    });
  }

  return response;
});
