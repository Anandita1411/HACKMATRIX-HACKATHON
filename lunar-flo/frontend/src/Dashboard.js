import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [cycles, setCycles] = useState([]);
  const [prediction, setPrediction] = useState(null);
  const [message, setMessage] = useState("");

  // 🌙 Load data + greeting
  useEffect(() => {
    const hour = new Date().getHours();

    if (hour < 12) setMessage("Good morning ☀️");
    else if (hour < 18) setMessage("Take care today 💖");
    else setMessage("Relax 🌙");

    const periods = JSON.parse(localStorage.getItem("periods")) || [];

    if (periods.length > 1) {
      const cycleLengths = [];

      for (let i = 1; i < periods.length; i++) {
        const prev = new Date(periods[i - 1]);
        const curr = new Date(periods[i]);

        const diff =
          (curr - prev) / (1000 * 60 * 60 * 24);

        cycleLengths.push(diff);
      }

      setCycles(cycleLengths);
    }
  }, []);

  // 🤖 Prediction
  const predict = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:5000/predict", {
        cycleLengths: cycles,
      });

      setPrediction(res.data.predictedCycle);
    } catch (err) {
      alert("Backend not running");
    }
  };

  return (
    <div style={{ padding: "20px" }}>

      {/* HEADER */}
      <h2 style={{ fontWeight: "300" }}>🌙 Lunar Flo</h2>
      <p style={{ color: "#aaa" }}>{message}</p>

      {/* MAIN CARD */}
      <div style={{
        padding: "25px",
        borderRadius: "25px",
        background: "linear-gradient(135deg, #ff4d9d, #7b5cff)",
        textAlign: "center",
        boxShadow: "0 10px 40px rgba(255,77,157,0.4)",
        transition: "0.3s"
      }}>
        <h4 style={{ opacity: 0.8 }}>CURRENT PHASE</h4>

        <h1 style={{ margin: "10px 0" }}>
          {cycles.length ? "Tracking Active 💜" : "Start Tracking"}
        </h1>

        <p>
          {cycles.length
            ? `${cycles.length} cycles recorded`
            : "Log periods to begin"}
        </p>

        <button
          onClick={predict}
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            borderRadius: "15px",
            border: "none",
            background: "white",
            color: "#ff4d9d",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Predict
        </button>

        {prediction && (
          <h3 style={{ marginTop: "10px" }}>
            Next cycle ~{prediction} days
          </h3>
        )}
      </div>

      {/* STATS CARDS */}
      <div style={{
        display: "flex",
        gap: "10px",
        marginTop: "20px"
      }}>

        <div style={{
          flex: 1,
          padding: "15px",
          borderRadius: "15px",
          background: "#12182b"
        }}>
          <p style={{ color: "#aaa" }}>Last Cycle</p>
          <h3>
            {cycles.length
              ? `${cycles[cycles.length - 1]} days`
              : "No data"}
          </h3>
        </div>

        <div style={{
          flex: 1,
          padding: "15px",
          borderRadius: "15px",
          background: "#12182b"
        }}>
          <p style={{ color: "#aaa" }}>Average</p>
          <h3>
            {cycles.length
              ? Math.round(
                  cycles.reduce((a, b) => a + b, 0) / cycles.length
                )
              : "--"}
          </h3>
        </div>

      </div>

      {/* SYMPTOMS */}
      <div style={{
        marginTop: "20px",
        padding: "15px",
        borderRadius: "15px",
        background: "#12182b"
      }}>
        <h3>How do you feel?</h3>

        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          {["😖 Cramps", "😡 Mood", "😴 Fatigue"].map((s, i) => (
            <button
              key={i}
              style={{
                padding: "8px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer"
              }}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Dashboard;