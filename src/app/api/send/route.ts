import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: { json: () => any; }) {
  try {
    const requestBody = await request.json();
    const {Firstname, Lastname, Phone, Email, Message } = requestBody;

    console.log(`message from ${Firstname} send`)

    const data = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['thibault@jp-developpement.com'],
        subject: 'message jp-developpent.com',
        text: "",
        react: EmailTemplate({Firstname, Lastname, Phone, Email, Message })    
      });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
