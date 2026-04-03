import { useState } from "react";
import Dashboard from "./Dashboard";
import CalendarPage from "./CalendarPage";
import Navbar from "./Navbar";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "auto",
        background: "radial-gradient(circle at top, #1a002f, #000)",
        minHeight: "100vh",
        color: "white",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* PAGES */}
      {page === "home" && <Dashboard />}
      {page === "calendar" && <CalendarPage />}

      {/* NAVBAR */}
      <Navbar setPage={setPage} />
    </div>
  );
}

export default App;