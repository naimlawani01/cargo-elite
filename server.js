import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ SMTP LWS
const transporter = nodemailer.createTransport({
  host: "mail.elite-cargo.net",
  port: 465,
  secure: true,
  auth: {
    user: "info@elite-cargo.net",
    pass: "Info@2025"
  }
});

app.post("/api/contact", async (req, res) => {
  const { nom, email, objet, message } = req.body;

  try {
    // ✅ 1. Envoyer à Elite Cargo
    await transporter.sendMail({
      from: `"Site Web Elite Cargo" <info@elite-cargo.net>`,
      to: "info@elite-cargo.net",
      cc: ["nweldone12@gmail.com"], // <-- AJOUTER VOS COPIES ICI
      subject: `📩 Nouveau message via le site – ${objet}`,
      html: `
        <h2>📬 Nouveau message reçu via le site</h2>
        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Objet :</strong> ${objet}</p>
        <p><strong>Message :</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
        <hr />
        <p style="font-size:12px;color:gray">Formulaire soumis depuis le site Elite Cargo</p>
      `
    });

    // ✅ 2. Envoyer une confirmation bilingue au client
    await transporter.sendMail({
      from: `"Elite Cargo" <info@elite-cargo.net>`,
      to: email,
      subject: "📨 Confirmation de réception - Elite Cargo",
      html: `
        <p>Bonjour ${nom},</p>
        <p>Nous avons bien reçu votre message concernant "<strong>${objet}</strong>".</p>
        <p>Notre équipe vous contactera dans les meilleurs délais.</p>
        <br/>
        <p>Hello ${nom},</p>
        <p>We have received your message regarding "<strong>${objet}</strong>".</p>
        <p>Our team will get back to you shortly.</p>
        <br/>
        <div style="border-top: 2px solid #007d6f; padding-top: 15px; margin-top: 20px;">
          <p style="color:#007d6f;font-weight:bold;margin:0;">Elite Cargo</p>
          <p style="margin:5px 0;font-size:14px;">
            <a href="https://elite-cargo.net" style="color:#007d6f;text-decoration:none;">www.elite-cargo.net</a>
          </p>
          <p style="margin:5px 0;font-size:14px;">
            <span style="color:#007d6f;">📞</span> +224 622 65 25 11
          </p>
          <p style="font-size:12px;color:gray;margin-top:10px;">
            Merci de nous avoir contactés • Thank you for reaching out
          </p>
        </div>
      `
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Serveur Node démarré sur http://localhost:${PORT}`));
