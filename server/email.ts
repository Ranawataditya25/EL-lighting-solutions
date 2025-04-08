import nodemailer from 'nodemailer';

// For Gmail, you need to use an "App Password" not your regular password
// See: https://support.google.com/accounts/answer/185833
// You'll need to enable 2-step verification first, then generate an app password

interface EmailOptions {
  to: string;
  subject: string;
  text: string;
  html?: string;
}

// Create a test account if no credentials are provided
async function createTestAccount() {
  const testAccount = await nodemailer.createTestAccount();
  return {
    user: testAccount.user,
    pass: testAccount.pass,
    service: 'ethereal',
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false
  };
}

export async function sendEmail(options: EmailOptions): Promise<boolean> {
  try {
    // Check if email credentials are available
    const isConfigured = process.env.EMAIL_USER && process.env.EMAIL_PASSWORD;
    
    // If email is not configured, use ethereal (test) email service
    const config = isConfigured 
      ? {
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER, // Your Gmail address
            pass: process.env.EMAIL_PASSWORD, // Your Gmail App Password (not regular password)
          },
        }
      : {
          host: 'smtp.ethereal.email',
          port: 587,
          secure: false,
          auth: await createTestAccount()
        };
    
    // Create a transporter
    const transporter = nodemailer.createTransport(config);

    // Set default from address
    const from = isConfigured 
      ? process.env.EMAIL_USER
      : 'appointments@physioforu.com';

    // Send the email
    const info = await transporter.sendMail({
      from, // Sender address
      to: options.to, // List of receivers
      subject: options.subject, // Subject line
      text: options.text, // Plain text body
      html: options.html, // HTML body
    });

    // Log success and preview URL if using test account
    console.log('Email sent successfully:', info.messageId);
    if (!isConfigured && info.messageId) {
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    }
    
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}