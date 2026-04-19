import { Resend } from 'resend';

const resend = new Resend('process.env.RESEND_API_KEY');

export async function POST(req) {
  const { name, email, phone, subject, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['haseebahmed0343@gmail.com'],
      subject: `New Contact: ${subject}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });
    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
