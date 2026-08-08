export const siteConfig = {
  name: "AirDrone Assistência Técnica",
  shortName: "AirDrone",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://lp-airdrone.vercel.app",
  phoneDisplay: "(43) 99162-2184",
  whatsappNumber: "5543991622184",
  location: "Londrina, PR",
  address: "R. Maranhão, 209, Centro, Londrina, PR, 86010-410",
  hours: "Seg. a sex., 9h às 18h · Sáb., 9h às 12h",
  warrantyDays: 90,
} as const;

export type WhatsAppContext = {
  source: string;
  problem?: string;
  model?: string;
};

export const problems = [
  { id: "gimbal", title: "Gimbal tremendo ou travado", image: "/assets/services/gimbal.webp" },
  { id: "queda-impacto", title: "Queda ou impacto", image: "/assets/services/impact.webp" },
  { id: "falha-sinal", title: "Falhas de sinal", image: "/assets/services/signal.webp" },
  { id: "nao-liga", title: "Drone não liga", image: "/assets/services/service.webp" },
  { id: "placas-componentes", title: "Placas e componentes", image: "/assets/services/boards.webp" },
  { id: "controle", title: "Falhas no controle", image: "/assets/services/control.webp" },
  { id: "motores", title: "Problemas em motores", image: "/assets/services/impact.webp" },
  { id: "bateria", title: "Bateria com falha", image: "/assets/services/service.webp" },
] as const;

export const models = [
  { name: "DJI Mini", examples: "Mini 2 · Mini 3 · Mini 4 · Pro", image: "/assets/models/mini.webp" },
  { name: "DJI Air", examples: "Air 2 · Air 2S · Air 3", image: "/assets/models/air.webp" },
  { name: "DJI Mavic", examples: "Consulte a versão", image: "/assets/models/mavic.webp" },
  { name: "DJI Avata", examples: "Avata · Avata 2", image: "/assets/models/avata.webp" },
  { name: "DJI FPV", examples: "Linha FPV", image: "/assets/models/fpv.webp" },
] as const;

export const faqItems = [
  {
    id: "price-deadline",
    question: "Quanto custa e qual é o prazo para consertar meu drone?",
    answer: "O custo e o tempo de reparo variam bastante de acordo com o modelo, a gravidade do dano (como quedas ou danos por água) e a necessidade de peças de reposição. Após recebermos o seu equipamento, fazemos uma avaliação técnica e enviamos um orçamento detalhado com o prazo exato. Reparos mais simples costumam ser finalizados entre 3 a 7 dias úteis.",
  },
  {
    id: "budget",
    question: "Vocês cobram para fazer o orçamento?",
    answer: "Não, nosso orçamento é 100% gratuito e sem compromisso! Você pode trazer ou enviar o seu drone para a nossa assistência. Nossa equipe técnica fará uma análise completa para identificar o problema e o conserto só será iniciado após a sua aprovação do valor.",
  },
  {
    id: "models",
    question: "Quais modelos de drones vocês consertam? Atendem outras marcas?",
    answer: "Somos uma assistência técnica exclusiva para a linha DJI, o que garante um serviço de alta especialização e peças originais. Atendemos toda a Linha Mini completa, incluindo o DJI Mini 2, Mini 3, Mini 4 e todas as versões Séries Pro. Também realizamos manutenção nas linhas Air (Air 2, 2S, Air 3), Mavic, Phantom e drones FPV da DJI. Importante: Por foco total em qualidade e disponibilidade de peças específicas, não atendemos e não realizamos reparos em drones de outras marcas (como Xiaomi, Fimi, Hubsan ou drones de brinquedo). Se o seu drone é DJI, ele está em boas mãos!",
  },
  {
    id: "warranty",
    question: "O conserto e as peças trocadas têm garantia?",
    answer: "Com certeza! Prezamos pela segurança do seu voo. Todos os nossos serviços de manutenção e as peças que substituímos contam com uma garantia de 90 dias. Caso o mesmo problema volte a ocorrer nesse período, resolveremos sem custo adicional.",
  },
  {
    id: "shipping",
    question: "Moro em outra cidade ou estado. Como funciona o envio do drone? Eu preciso pagar o frete?",
    answer: "Não, você não paga absolutamente nada de frete! Nós sabemos que enviar o drone pode gerar insegurança e custos extras, por isso oferecemos frete de ida e volta 100% por nossa conta para clientes de todo o Brasil. O processo é super simples: você fala com nossa equipe pelo WhatsApp, nós geramos uma etiqueta de envio já paga, e você só precisa embalar seu drone com segurança e despachar na agência mais próxima. Depois de consertado e testado, nós enviamos o equipamento de volta para a sua casa, também por nossa conta. Sua única preocupação é voltar a voar!",
  },
] as const;

export const reviews = [
  { name: "Stone Handerson", text: "Atendimento super diferenciado, serviço de qualidade, passa segurança no trabalho desde o primeiro momento. Obrigado mais uma vez." },
  { name: "Tiago Tomimatsu", text: "Ótimo atendimento. Recomendo arrumar o drone com eles." },
  { name: "Prado Negócios Imobiliários", text: "Ótimo profissional, trabalho excelente, rápido e de boa qualidade!" },
] as const;
