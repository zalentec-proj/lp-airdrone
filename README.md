# AirDrone — Landing Page

Landing page da AirDrone Assistência Técnica, desenvolvida com Next.js/App Router e saída compatível com o fluxo Sites.

## Executar localmente

```bash
npm run dev
```

## Validar

```bash
npm run lint
npm run build
npm test
```

## Configuração de produção

Copie `.env.example` para o ambiente de hospedagem. O GTM atual é `GTM-TZC7M96L`, com GA4 `G-3LCRG4QCNC` e Google Ads `AW-306963737`. O Meta Pixel deve ser configurado dentro do GTM somente depois que o ID real for fornecido.

## Verificações após publicar

- Testar CTAs do WhatsApp e a mensagem contextual.
- Verificar consentimento antes de qualquer medição não essencial.
- Conferir OG no WhatsApp/Facebook Sharing Debugger.
- Enviar `/sitemap.xml` ao Google Search Console e Bing Webmaster Tools.
- Validar o JSON-LD com Schema Markup Validator.
