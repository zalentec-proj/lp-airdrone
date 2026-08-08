import { ImageResponse } from "next/og";

export const alt = "AirDrone — reparo de drones e assistência técnica DJI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-dynamic";

function asDataUrl(buffer: ArrayBuffer) {
  let binary = "";

  for (const byte of new Uint8Array(buffer)) {
    binary += String.fromCharCode(byte);
  }

  return `data:image/webp;base64,${btoa(binary)}`;
}

export default async function OpenGraphImage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lp-airdrone.vercel.app";
  const heroUrl = new URL("/assets/hero/hero-workshop.webp", siteUrl).toString();
  const heroImage = asDataUrl(await fetch(heroUrl).then((response) => response.arrayBuffer()));

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#031426",
          color: "#ffffff",
          display: "flex",
          height: "100%",
          overflow: "hidden",
          position: "relative",
          width: "100%",
        }}
      >
        <img
          alt=""
          height="630"
          src={heroImage}
          style={{ height: "100%", inset: "0", objectFit: "cover", opacity: 0.72, position: "absolute", width: "100%" }}
          width="1200"
        />
        <div
          style={{
            background: "linear-gradient(90deg, rgba(3, 20, 38, 0.98) 0%, rgba(3, 20, 38, 0.92) 47%, rgba(3, 20, 38, 0.28) 100%)",
            inset: "0",
            position: "absolute",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", padding: "58px 66px", position: "relative", width: "100%" }}>
          <div style={{ display: "flex", fontFamily: "sans-serif", fontSize: 34, fontWeight: 800, letterSpacing: -1.4 }}>
            <span>Air</span><span style={{ color: "#12c7c1" }}>Drone</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", maxWidth: 755 }}>
            <div style={{ color: "#12c7c1", display: "flex", fontFamily: "sans-serif", fontSize: 17, fontWeight: 800, letterSpacing: 2.6, marginBottom: 18 }}>
              SEU DRONE CAIU, MOLHOU OU APRESENTOU ERRO?
            </div>
            <div style={{ display: "flex", fontFamily: "sans-serif", fontSize: 53, fontWeight: 800, letterSpacing: -2.6, lineHeight: 1.06 }}>
              Reparo de drones e assistência técnica DJI com segurança e garantia.
            </div>
          </div>

          <div style={{ alignItems: "center", display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", fontFamily: "sans-serif", fontSize: 16, fontWeight: 800, gap: 20, letterSpacing: -0.2 }}>
              <span style={{ color: "#ffffff" }}>ORÇAMENTO 100% GRATUITO</span>
              <span style={{ color: "#12c7c1" }}>•</span>
              <span style={{ color: "#ffffff" }}>FRETE INCLUSO</span>
            </div>
            <div style={{ alignItems: "center", background: "#12c7c1", borderRadius: 8, color: "#031426", display: "flex", fontFamily: "sans-serif", fontSize: 17, fontWeight: 800, padding: "16px 22px" }}>
              Solicitar orçamento&nbsp; →
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
