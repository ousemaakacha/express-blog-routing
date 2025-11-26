const express = require("express");
const router = express.Router();
const posts = require("../posts");

// prende la lista di post (index)
router.get("/", (req, res) => {
  res.send("Posts List");
});

// mi mostra un post specifico (show)
router.get("/:id", (req, res) => {
  res.send(`Shows the post number ${req.params.id}`);
});

// store per un nuovo post
router.post("/", (req, res) => {
  res.send("New post here");
});

//  aggiorna il post
router.put("/:id", (req, res) => {
  res.send(`POst updated with id: ${req.params.id}`);
});

// modifica il post
router.patch("/:id", (req, res) => {
  res.send(`modifies post using id: ${req.params.id}`);
});

// cancella il post
router.delete("/:id", (req, res) => {
  res.send(`delete post with id: ${req.params.id}`);
});

module.exports = router;
