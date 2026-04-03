import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function Insights() {
  const periods = JSON.parse(localStorage.getItem("periods")) || [];

  let cycles = [];

  if (periods.length > 1) {
    for (let i = 1; i < periods.length; i++) {
      const prev = new Date(periods[i - 1]);
      const curr = new Date(periods[i]);

      const diff =
        (curr - prev) / (1000 * 60 * 60 * 24);

      cycles.push(diff);
    }
  }

  const data = {
    labels: cycles.map((_, i) => `Cycle ${i + 1}`),
    datasets: [
      {
        label: "Cycle Length",
        data: cycles,
        borderColor: "#ff4d9d",
        tension: 0.4,
      },
    ],
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📊 Health Trends</h2>

      {cycles.length > 0 ? (
        <div style={{
          background: "#12182b",
          padding: "15px",
          borderRadius: "20px"
        }}>
          <Line data={data} />
        </div>
      ) : (
        <p style={{ color: "#aaa" }}>
          Not enough data yet. Log more cycles.
        </p>
      )}
    </div>
  );
}

export default Insights;