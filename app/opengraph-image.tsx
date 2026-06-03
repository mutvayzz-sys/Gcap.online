import { ImageResponse } from "next/og";

export const alt = "GCAP Labs — Headmaster";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0D0D0D",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        {/* Logo mark */}
        <div
          style={{
            width: 72,
            height: 72,
            background: "#F9F7F3",
            borderRadius: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 36,
            fontSize: 32,
            fontWeight: 700,
            color: "#111111",
            letterSpacing: "-1px",
          }}
        >
          G
        </div>
        {/* Wordmark */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 600,
            color: "#F9F7F3",
            letterSpacing: "-2px",
            marginBottom: 20,
          }}
        >
          GCAP Labs
        </div>
        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "#888",
            letterSpacing: "-0.5px",
          }}
        >
          Persistent AI workforce layer.
        </div>
      </div>
    ),
    { ...size }
  );
}
