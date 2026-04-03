import { useState } from "react";
import Dashboard from "./Dashboard";
import CalendarPage from "./CalendarPage";
import Navbar from "./Navbar";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div style={{ background: "#0b0f1a", minHeight: "100vh", color: "white" }}>
      {page === "home" && <Dashboard />}
      {page === "calendar" && <CalendarPage />}

      <Navbar setPage={setPage} />
    </div>
  );
}

export default App;