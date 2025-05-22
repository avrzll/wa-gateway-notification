import express from "express";

const sendMessageRoutes = express.Router();

sendMessageRoutes.post("/", async (req, res) => {
  const { to, message } = req.body;

  if (!message || !to) {
    return res
      .status(400)
      .json({ status: false, message: "message and to are required" });
  }

  try {
    const jid = to + "@s.whatsapp.net";

    if (!global.sock) {
      return res
        .status(500)
        .json({
          status: false,
          message: "WhatsApp connection not established",
        });
    }
    await global.sock.sendMessage(jid, { text: message });

    res.status(200).json({
      status: true,
      message: "Message sent successfully",
    });
  } catch (e) {
    return res
      .status(500)
      .json({ status: false, message: "Internal Server Error" });
  }
});

export { sendMessageRoutes };
