import Calendar from "react-calendar";
import { useState, useEffect } from "react";
import "react-calendar/dist/Calendar.css";

function CalendarPage() {
  const [date, setDate] = useState(new Date());
  const [periods, setPeriods] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("periods")) || [];
    setPeriods(saved);
  }, []);

  const logPeriod = () => {
    const newDate = date.toDateString();

    const updated = [...periods, newDate];
    setPeriods(updated);

    localStorage.setItem("periods", JSON.stringify(updated));
  };

  return (
  <div style={{ padding: "20px", color: "white" }}>
    <h2>📅 Calendar</h2>

    <div style={{
      background: "white",
      borderRadius: "20px",
      padding: "10px",
      color: "black"
    }}>
      <Calendar onChange={setDate} value={date} />
    </div>

    <button
      onClick={logPeriod}
      style={{
        marginTop: "15px",
        width: "100%",
        padding: "12px",
        borderRadius: "15px",
        background: "#ff4d9d",
        color: "white",
        border: "none",
        fontWeight: "bold"
      }}
    >
      💧 Log Period
    </button>

    <div style={{ marginTop: "15px" }}>
      <p>Logged Dates:</p>
      {periods.map((p, i) => (
        <p key={i} style={{ fontSize: "12px", color: "#aaa" }}>
          {p}
        </p>
      ))}
    </div>
  </div>
);
}

export default CalendarPage;