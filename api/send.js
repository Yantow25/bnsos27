import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { message } = req.body;

    // Directly include your bot token and chat IDs here
    const token = "7133036993:AAHIR6eDmB0Z-hvS8pKOMwnhyXT8Tho6cfI"; // Replace with your actual bot token
    const chatIds = ["6987171667", "6516151990"]; // Replace with your actual chat IDs

    try {
      for (const chatId of chatIds) {
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: "HTML",
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "WA Pembuat LINK",
                    url: "https://wa.me/6288704220953", // Replace with your WhatsApp number
                  },
                ],
                [
                  {
                    text: "Tele Pembuat LINK",
                    url: "https://t.me/mulaikosi", // Replace with your Telegram username
                  },
                ],
              ],
            },
          }),
        });
      }
      res
        .status(200)
        .json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      console.error("Error sending message:", error);
      res
        .status(500)
        .json({ success: false, message: "Error sending message" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
