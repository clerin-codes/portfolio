import { ImageResponse } from "next/og";

export const alt = "Clerin Balakrishnan — Full-Stack and Mobile Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0a0a0a", color: "#b5ff9d", padding: "54px", fontFamily: "monospace", border: "10px solid #1f521f" }}>
      <div style={{ display: "flex", justifyContent: "space-between", color: "#33ff00", fontSize: 22 }}>
        <span>CLERIN/OS — PORTFOLIO</span><span>STATUS: ONLINE</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <span style={{ color: "#ffb000", fontSize: 24 }}>user@portfolio:~$ whoami</span>
        <span style={{ color: "#33ff00", fontSize: 68, fontWeight: 800, letterSpacing: "-3px" }}>Clerin Balakrishnan</span>
        <span style={{ fontSize: 29 }}>Software Engineering Undergraduate</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20, color: "#77c967" }}>
        <span>FULL-STACK // MOBILE // SOFTWARE ENGINEERING</span><span>github.com/clerin-codes</span>
      </div>
    </div>,
    size,
  );
}
