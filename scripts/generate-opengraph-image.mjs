import sharp from "sharp";
import { fileURLToPath } from "node:url";

const width = 1200;
const height = 630;
const hero = fileURLToPath(new URL("../public/assets/hero/hero-workshop.webp", import.meta.url));
const logo = fileURLToPath(new URL("../public/assets/brand/logo-airdrone-white.svg", import.meta.url));
const output = fileURLToPath(new URL("../public/social/og-airdrone-home.png", import.meta.url));

const background = await sharp(hero)
  .resize(width, height, { fit: "cover", position: "centre" })
  .modulate({ brightness: 0.52, saturation: 0.8 })
  .png()
  .toBuffer();

const logoImage = await sharp(logo).resize({ width: 345 }).png().toBuffer();
const overlay = Buffer.from(`
  <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="shade" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0" stop-color="#031426" stop-opacity="0.98"/>
        <stop offset="0.42" stop-color="#031426" stop-opacity="0.9"/>
        <stop offset="0.78" stop-color="#031426" stop-opacity="0.35"/>
        <stop offset="1" stop-color="#031426" stop-opacity="0.05"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#shade)"/>
    <path d="M0 74H38L64 48H262" fill="none" stroke="#12c7c1" stroke-opacity="0.52" stroke-width="2"/>
    <circle cx="284" cy="48" r="5" fill="#12c7c1" fill-opacity="0.75"/>
    <text x="56" y="158" fill="#12c7c1" font-family="Arial, sans-serif" font-size="15" font-weight="700" letter-spacing="3.2">ASSISTÊNCIA TÉCNICA DJI</text>
    <text x="56" y="410" fill="#ffffff" font-family="Arial, sans-serif" font-size="29" font-weight="700">REPARO DE DRONES</text>
    <text x="56" y="440" fill="#d7e7ed" font-family="Arial, sans-serif" font-size="19" font-weight="700">COM SEGURANÇA E GARANTIA</text>
    <rect x="56" y="474" width="270" height="58" rx="8" fill="#12c7c1"/>
    <text x="79" y="511" fill="#031426" font-family="Arial, sans-serif" font-size="17" font-weight="700">SOLICITAR ORÇAMENTO  →</text>
    <text x="56" y="577" fill="#d7e7ed" font-family="Arial, sans-serif" font-size="15" font-weight="700">ORÇAMENTO GRATUITO  •  FRETE INCLUSO</text>
  </svg>
`);

await sharp(background)
  .composite([
    { input: overlay },
    { input: logoImage, left: 56, top: 225 },
  ])
  .png({ compressionLevel: 9, palette: true })
  .toFile(output);
