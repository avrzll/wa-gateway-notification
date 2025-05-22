import express from "express";

const defaultRoutes = express.Router();

defaultRoutes.get("/", (req, res) => {
  res.send({
    status: true,
    data: {
      message: "Welcome to WhatsApp Notifier API",
      version: "1.0.0",
      author: "avrzll_",
    },
  });
});

export { defaultRoutes };
