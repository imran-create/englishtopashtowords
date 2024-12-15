const express = require("express");
const fs = require("fs");
const dotenv = require("dotenv");

dotenv.config(); // Load environmental variables

const app = express();
const port = process.env.PORT || 3000;

// Load words from the JSON file
const WORDS_FILE = process.env.WORDS_FILE || "words_data.json";
const words = JSON.parse(fs.readFileSync(WORDS_FILE, "utf-8"));

let currentIndex = 0;

// Route to serve the current word
app.get("/get-word", (req, res) => {
  const wordData = words[currentIndex];
  currentIndex = (currentIndex + 1) % words.length; // Cycle through words
  res.json(wordData);
});

// Start the server (for local testing)
if (process.env.NODE_ENV !== "production") {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

module.exports = app;
