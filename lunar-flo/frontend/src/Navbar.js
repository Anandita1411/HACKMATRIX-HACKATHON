function Navbar({ setPage }) {
  return (
    <div style={{
      position: "fixed",
      bottom: 0,
      width: "100%",
      background: "#0b0f1a",
      display: "flex",
      justifyContent: "space-around",
      padding: "15px 0"
    }}>

      <div onClick={() => setPage("home")}>🏠</div>

      <div onClick={() => setPage("calendar")}>📅</div>

      <div style={{
        background: "#ff4d9d",
        padding: "10px",
        borderRadius: "50%"
      }}>
        ➕
      </div>

      <div>📊</div>
      <div>🔒</div>

    </div>
  );
}

export default Navbar;