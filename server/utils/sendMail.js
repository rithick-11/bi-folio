import nodeMailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config()

const fromMail = process.env.FROM_MAIL

const transporter = nodeMailer.createTransport({
    service: "Gmail",
    host: fromMail,
    port: 465,
    secure: true,
    auth:{
        user: fromMail,
        pass : process.env.MAIL_PASS
    }
})

export const sendMail = async (to, subject, text, html) => {
  try {
    const mailOptions = {
      from: fromMail,
      to,
      subject,
      text,
      html
    };
    await transporter.sendMail(mailOptions);
    return true
  } catch (error) {
    console.error('Error sending email:', error);
    return false
  }
};

