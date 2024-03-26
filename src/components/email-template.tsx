import * as React from 'react';

interface EmailTemplateProps {
  Firstname: string;
  Lastname: string;
  Phone: string;
  Email: string;
  Message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  Firstname,Lastname,Phone, Email, Message,
}) => (
  <div>
    <p>email from JP-developpement.com</p>
    <br />
    <p>{Firstname}</p>
    <p>{Lastname}</p>
    <p>{Phone}</p>
    <p>{Email}</p>
    <br />
    <h3>Message :</h3>
    <p>{Message}</p>
  </div>
);
