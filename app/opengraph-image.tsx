import { ImageResponse } from "next/og";

import { ADDRESS_ONE_LINE, CONTACT, PRACTICE } from "@/lib/constants";

export const alt = `${PRACTICE.doctorNameWithCredentials} — Family Medicine and Primary Care in Toledo, Ohio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Shared social card. Built with the brand palette rather than a photo so the
 * text stays legible at small preview sizes.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#053228",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 24,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#F7C99B",
              fontFamily: "monospace",
            }}
          >
            Family Medicine · Toledo, Ohio
          </div>
          <div
            style={{
              marginTop: 32,
              fontSize: 82,
              lineHeight: 1.05,
              color: "#FFFFFF",
              maxWidth: 900,
            }}
          >
            {PRACTICE.doctorNameWithCredentials}
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 34,
              lineHeight: 1.35,
              color: "rgba(255,255,255,0.8)",
              maxWidth: 860,
            }}
          >
            Primary care for children, adults and seniors — preventive care,
            chronic disease management and same-day visits.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.25)",
            paddingTop: 28,
            fontSize: 24,
            color: "rgba(255,255,255,0.75)",
          }}
        >
          <div style={{ display: "flex" }}>{ADDRESS_ONE_LINE}</div>
          <div style={{ display: "flex", color: "#F7C99B" }}>
            {CONTACT.phoneDisplay}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
