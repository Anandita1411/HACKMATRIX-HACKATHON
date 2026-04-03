import { useEffect, useState } from "react";

function Splash({ onFinish }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);

    setTimeout(() => {
      onFinish();
    }, 2500); // 2.5 sec splash
  }, []);

  return (
    <div style={{
      height: "100vh",
      background: "radial-gradient(circle at center, #1a002f, #000)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden"
    }}>

      <h1 style={{
        color: "#ff9ad5",
        fontSize: "50px",
        fontWeight: "bold",
        letterSpacing: "2px",
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0px)" : "translateY(40px)",
        transition: "all 1.5s ease",
        textShadow: "0 0 20px rgba(255, 154, 213, 0.8)"
      }}>
        🌙 Lunar Flo
      </h1>

    </div>
  );
}

export default Splash;