import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [message, setMessage] = useState("");
  const [cycles, setCycles] = useState([]);
  const [prediction, setPrediction] = useState(null);

  // 🌞 Personalized greeting
  useEffect(() => {
    const hour = new Date().getHours();

    if (hour < 12) setMessage("Good morning ☀️");
    else if (hour < 18) setMessage("Take care today 💖");
    else setMessage("Relax, you’ve done enough 🌙");

    const saved = JSON.parse(localStorage.getItem("cycles")) || [];
    setCycles(saved);
  }, []);

  // 🤖 Prediction
  const predict = async () => {
    if (cycles.length === 0) return;

    const res = await axios.post("http://localhost:5000/predict", {
      cycleLengths: cycles,
    });

    setPrediction(res.data.predictedCycle);
  };

  return (
    <div style={{ padding: "20px" }}>

      {/* Header */}
      <h2 style={{ fontWeight: "300" }}>Lunar Flo</h2>
      <p style={{ color: "#aaa" }}>{message}</p>

      {/* MAIN CARD */}
      <div style={{
        marginTop: "20px",
        padding: "30px",
        borderRadius: "25px",
        background: "linear-gradient(135deg, #ff4d9d, #7b5cff)",
        textAlign: "center",
        boxShadow: "0 0 40px rgba(255, 77, 157, 0.4)"
      }}>
        <h4 style={{ opacity: 0.7 }}>CURRENT PHASE</h4>

        <h1>
          {cycles.length === 0 ? "Ready To Start?" : "Tracking Active 💜"}
        </h1>

        <p>
          {cycles.length === 0
            ? "Log your first cycle"
            : `${cycles.length} cycles recorded`}
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
            fontWeight: "bold"
          }}
        >
          Predict
        </button>

        {prediction && (
          <h3 style={{ marginTop: "10px" }}>
            Next cycle in ~{prediction} days
          </h3>
        )}
      </div>

      {/* SMALL CARDS */}
      <div style={{
        display: "flex",
        gap: "15px",
        marginTop: "20px"
      }}>

        <div style={{
          flex: 1,
          padding: "20px",
          borderRadius: "20px",
          background: "#12182b"
        }}>
          <p style={{ color: "#888" }}>LAST CYCLE</p>
          <h3>
            {cycles.length > 0
              ? `${cycles[cycles.length - 1]} days`
              : "No data"}
          </h3>
        </div>

        <div style={{
          flex: 1,
          padding: "20px",
          borderRadius: "20px",
          background: "#12182b"
        }}>
          <p style={{ color: "#888" }}>AVG LENGTH</p>
          <h3>
            {cycles.length > 0
              ? Math.round(
                  cycles.reduce((a, b) => a + b, 0) / cycles.length
                )
              : "--"}
          </h3>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;