import express from "express";
import { createImage } from "../controllers/dalle.js";

const router = express.Router();

router.route("/").get((req, res) => {
  res.send("Hello from Dall-ee");
});

router.post("/", createImage);

export default router;
