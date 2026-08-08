export const siteConfig = {
  name: "AirDrone Assistência Técnica",
  shortName: "AirDrone",
  url: "https://airdrone.com.br",
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
    id: "budget",
    question: "O orçamento é realmente gratuito?",
    answer: "Sim. A avaliação é gratuita e sem compromisso. O reparo só começa depois que você aprova o orçamento detalhado enviado pela equipe.",
  },
  {
    id: "freight",
    question: "Como funciona o frete de ida e volta?",
    answer: "Depois do primeiro contato, a equipe orienta a postagem e envia a etiqueta. Você embala o equipamento com segurança, despacha na agência indicada e recebe o drone de volta após o reparo e os testes.",
  },
  {
    id: "evaluation",
    question: "Quanto tempo demora a avaliação?",
    answer: "O site atual informa orçamento em até 3 dias úteis após o recebimento do equipamento. O prazo pode variar conforme o modelo e o dano identificado.",
  },
  {
    id: "approval",
    question: "O reparo só começa depois da minha aprovação?",
    answer: "Sim. A AirDrone envia o orçamento detalhado e só inicia o serviço depois da aprovação do cliente.",
  },
  {
    id: "models",
    question: "Quais modelos DJI são atendidos?",
    answer: "A assistência é exclusiva para DJI. São atendidas linhas Mini, Air, Mavic, Phantom e FPV. Consulte a equipe para confirmar a versão exata do seu equipamento.",
  },
  {
    id: "warranty",
    question: "Qual é o prazo de garantia?",
    answer: "Serviços realizados e peças substituídas contam com 90 dias de garantia para o problema reparado, conforme as condições da empresa.",
  },
  {
    id: "installments",
    question: "É possível parcelar o reparo?",
    answer: "O site atual informa parcelamento em até 10x sem juros no cartão. Confirme essa condição com a equipe no momento do orçamento.",
  },
] as const;

export const reviews = [
  { name: "Stone Handerson", text: "Atendimento super diferenciado, serviço de qualidade, passa segurança no trabalho desde o primeiro momento. Obrigado mais uma vez." },
  { name: "Tiago Tomimatsu", text: "Ótimo atendimento. Recomendo arrumar o drone com eles." },
  { name: "Prado Negócios Imobiliários", text: "Ótimo profissional, trabalho excelente, rápido e de boa qualidade!" },
] as const;
