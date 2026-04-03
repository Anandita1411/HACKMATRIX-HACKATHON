import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";

function CalendarPage() {
  const [date, setDate] = useState(new Date());

  return (
    <div style={{ padding: "20px" }}>
      <h2>📅 Calendar</h2>

      <div style={{
        background: "white",
        borderRadius: "20px",
        padding: "15px",
        color: "black"
      }}>
        <Calendar onChange={setDate} value={date} />
      </div>
    </div>
  );
}

export default CalendarPage;