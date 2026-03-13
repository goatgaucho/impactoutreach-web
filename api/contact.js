export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, organization, email, campaignType, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required" });
  }

  const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
  const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN || "mail.impactoutreach.co";
  const FORWARD_TO = process.env.CONTACT_FORWARD_TO || "tectonlabs.ca@gmail.com";

  if (!MAILGUN_API_KEY) {
    return res.status(500).json({ error: "Mailgun API key not configured" });
  }

  const bodyText = [
    `Name: ${name}`,
    `Organization: ${organization || "N/A"}`,
    `Email: ${email}`,
    `Campaign Type: ${campaignType || "N/A"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const formData = new URLSearchParams();
  formData.append("from", `ImpactOutreach Contact <contact@${MAILGUN_DOMAIN}>`);
  formData.append("to", FORWARD_TO);
  formData.append("subject", `New inquiry from ${name} — ${organization || "No org"}`);
  formData.append("text", bodyText);
  formData.append("h:Reply-To", email);

  const authString = Buffer.from(`api:${MAILGUN_API_KEY}`).toString("base64");

  try {
    const response = await fetch(
      `https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${authString}`,
        },
        body: formData,
      }
    );

    if (!response.ok) {
      const text = await response.text();
      console.error("Mailgun error:", response.status, text);
      console.error("Using domain:", MAILGUN_DOMAIN, "key length:", MAILGUN_API_KEY?.length);
      return res.status(500).json({ error: "Failed to send message", detail: text, status: response.status });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return res.status(500).json({ error: "Failed to send message", detail: err.message });
  }
}
