const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Lunar Flo is running 🌙");
});
app.post("/predict", (req, res) => {
  const { cycleLengths } = req.body;

  const avg =
    cycleLengths.reduce((a, b) => a + b, 0) / cycleLengths.length;

  res.json({ predictedCycle: Math.round(avg) });
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});