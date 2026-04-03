function Navbar({ setPage }) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        maxWidth: "400px",
        background: "#0b0f1a",
        display: "flex",
        justifyContent: "space-around",
        padding: "12px 0",
        borderTop: "1px solid #222",
        boxShadow: "0 -5px 20px rgba(0,0,0,0.5)"
      }}
    >
      {/* HOME */}
      <div
        onClick={() => setPage("home")}
        style={{ cursor: "pointer", fontSize: "18px" }}
      >
        🏠
      </div>

      {/* CALENDAR */}
      <div
        onClick={() => setPage("calendar")}
        style={{ cursor: "pointer", fontSize: "18px" }}
      >
        📅
      </div>

      {/* CENTER BUTTON */}
      <div
        style={{
          background: "linear-gradient(135deg, #ff4d9d, #7b5cff)",
          padding: "12px",
          borderRadius: "50%",
          marginTop: "-20px",
          boxShadow: "0 5px 15px rgba(255,77,157,0.5)",
          cursor: "pointer"
        }}
      >
        ➕
      </div>

      {/* INSIGHTS (placeholder for now) */}
      <div style={{ fontSize: "18px", opacity: 0.6 }}>
        📊
      </div>

      {/* PRIVACY (placeholder) */}
      <div style={{ fontSize: "18px", opacity: 0.6 }}>
        🔒
      </div>
    </div>
  );
}

export default Navbar;