const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let scores = [];

app.post('/score', (req, res) => {
    const { player, score } = req.body;
    scores.push({ player, score });
    res.send({ message: 'Score added', scores });
});

app.get('/scores', (req, res) => {
    res.send(scores);
});

app.listen(port, () => {
    console.log(`Game API running at http://localhost:${port}`);
});
