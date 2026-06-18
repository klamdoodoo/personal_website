import { ImageResponse } from "next/og";

import { portfolio } from "@/data/portfolio";

export const runtime = "edge";
export const alt = `${portfolio.profile.name} portfolio preview`;
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background:
            "linear-gradient(135deg, #ffffff 0%, #ffffff 40%, #f6f9fc 100%)",
          color: "#1d2733",
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
          padding: "56px",
          position: "relative",
          width: "100%"
        }}
      >
        <div
          style={{
            background: "#DBEEF7",
            borderRadius: "999px",
            height: "260px",
            left: "860px",
            opacity: 0.7,
            position: "absolute",
            top: "48px",
            width: "260px"
          }}
        />
        <div
          style={{
            background: "#FAE7EB",
            borderRadius: "999px",
            height: "220px",
            left: "940px",
            opacity: 0.75,
            position: "absolute",
            top: "250px",
            width: "220px"
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "720px",
            zIndex: 1
          }}
        >
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #CCDCEB",
              borderRadius: "999px",
              color: "#486071",
              display: "flex",
              fontSize: 24,
              padding: "12px 22px",
              width: "fit-content"
            }}
          >
            {portfolio.profile.heroEyebrow}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div
              style={{
                color: "#536979",
                fontSize: 34,
                fontStyle: "italic",
                lineHeight: 1.1
              }}
            >
              {portfolio.profile.heroGreeting}
            </div>
            <div
              style={{
                fontSize: 72,
                fontWeight: 700,
                letterSpacing: "-0.05em",
                lineHeight: 1
              }}
            >
              {portfolio.profile.name}
            </div>
            <div
              style={{
                color: "#415364",
                fontSize: 34,
                lineHeight: 1.3,
                maxWidth: "680px"
              }}
            >
              {portfolio.profile.role}
            </div>
          </div>
          <div style={{ display: "flex", gap: "14px" }}>
            {["Python", "React", "AWS", "Codex"].map((item, index) => (
              <div
                key={item}
                style={{
                  background: index === 0 ? "#BDD2E4" : index === 1 ? "#E0D4E7" : "#EECEDA",
                  borderRadius: "999px",
                  display: "flex",
                  fontSize: 26,
                  padding: "14px 22px"
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
