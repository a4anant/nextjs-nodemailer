import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    port: process.env.NEXT_PUBLIC_EMAIL_PORT,
    host: process.env.NEXT_PUBLIC_EMAIL_HOST,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
    },
    secure: false,
});

const sendEmail = async (from, subject, html) => {
  const mailOptions = {
    from,
    to: process.env.NEXT_PUBLIC_PERSONAL_EMAIL,
    subject,
    html
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export default sendEmail;
