export const dynamic = "force-static";
import { ImageResponse } from "next/og";
export const alt = "Prime Solves — Transformamos ideias em soluções digitais.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#071426",
        color: "#fff",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "90px",
      }}
    >
      <div style={{ fontSize: 32, color: "#39b9ff", marginBottom: 48 }}>
        prime solves.
      </div>
      <div style={{ fontSize: 72, lineHeight: 1.15 }}>
        Transformamos ideias em
      </div>
      <div style={{ fontSize: 72, lineHeight: 1.15, color: "#168bff" }}>
        soluções digitais.
      </div>
      <div style={{ fontSize: 24, color: "#afc0d5", marginTop: 44 }}>
        SOFTWARE HOUSE & SOLUÇÕES DIGITAIS
      </div>
    </div>,
    size,
  );
}
