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
    <div style={{ padding: "20px" }}>
      <h2>📅 Calendar</h2>

      <Calendar onChange={setDate} value={date} />

      <button
        onClick={logPeriod}
        style={{
          marginTop: "10px",
          padding: "10px",
          borderRadius: "10px",
          background: "#ff4d9d",
          color: "white",
          border: "none"
        }}
      >
        Log Period
      </button>

      <p style={{ marginTop: "10px" }}>
        Logged: {periods.length} days
      </p>
    </div>
  );
}

export default CalendarPage;