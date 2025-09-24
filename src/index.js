const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

let scores = [];

app.use(express.json());

app.post('/score', (req, res) => {
  const { player, score } = req.body;
  if (!player || !score) return res.status(400).send("Player and score required");
  scores.push({ player, score });
  res.status(201).send({ player, score });
});

app.get('/scores', (req, res) => {
  res.send('Game Scoring API is running!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
