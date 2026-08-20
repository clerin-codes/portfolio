import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#0a0a0a", border: "3px solid #33ff00", color: "#33ff00", fontSize: 25, fontWeight: 800, fontFamily: "monospace" }}>
      CB<span style={{ color: "#ffb000" }}>_</span>
    </div>,
    size,
  );
}
