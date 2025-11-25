const express = require("express");
const router = express.Router();

// prende la lista di post
router.get("/", (req, res) => {
  res.send("Posts List");
});

// mi mostra un post specifico
router.get("/:id", (req, res) => {
  res.send(`Shows the post number {$req.params.id}`);
});
