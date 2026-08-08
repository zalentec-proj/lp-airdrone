import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("renders the main commercial and accessibility landmarks", async () => {
  const page = await readFile(new URL("app/page.tsx", root), "utf8");
  assert.match(page, /SEU DRONE CAIU, MOLHOU OU APRESENTOU ERRO/);
  assert.match(page, /id="servicos"/);
  assert.match(page, /id="faq"/);
  assert.match(page, /application\/ld\+json/);
  assert.match(page, /mobile_sticky/);
});

test("keeps local assets and core technical files in the project", async () => {
  await Promise.all([
    access(new URL("public/assets/hero/hero-workshop.webp", root)),
    access(new URL("public/social/og-airdrone.png", root)),
    access(new URL("app/robots.ts", root)),
    access(new URL("app/sitemap.ts", root)),
    access(new URL("app/manifest.ts", root)),
  ]);
});

test("builds context-aware WhatsApp links and analytics events", async () => {
  const [whatsapp, analytics, site] = await Promise.all([
    readFile(new URL("lib/whatsapp.ts", root), "utf8"),
    readFile(new URL("lib/analytics.ts", root), "utf8"),
    readFile(new URL("lib/site.ts", root), "utf8"),
  ]);
  assert.match(site, /5543991622184/);
  assert.match(site, /Quanto custa e qual é o prazo para consertar meu drone/);
  assert.match(whatsapp, /searchParams\.set\("text"/);
  assert.match(analytics, /click_whatsapp/);
  assert.match(analytics, /consent/);
});
