const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend working 🌙");
});

app.post("/predict", (req, res) => {
  const { cycleLengths } = req.body;

  if (!cycleLengths || cycleLengths.length === 0) {
    return res.json({ predictedCycle: 28 });
  }

  const avg =
    cycleLengths.reduce((a, b) => a + b, 0) / cycleLengths.length;

  res.json({ predictedCycle: Math.round(avg) });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});