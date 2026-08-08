/* eslint-disable @next/next/no-img-element */
import { ChevronRight, MessageCircle, Send } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { ApprovalIcon, BudgetIcon, ContactIcon, DroneReturnIcon, ExperienceIcon, FreightIcon, LocationIcon, ShippingIcon, TechnicalIcon, WarrantyIcon } from "@/components/AirDroneIcons";
import { Header } from "@/components/Header";
import { Faq } from "@/components/Faq";
import { SectionTracker } from "@/components/SectionTracker";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { models, problems, reviews, siteConfig } from "@/lib/site";

type AirDroneIcon = ComponentType<SVGProps<SVGSVGElement>>;

const benefits: Array<[AirDroneIcon, string]> = [
  [BudgetIcon, "Orçamento 100% gratuito"], [FreightIcon, "Frete de ida e volta incluso"], [TechnicalIcon, "Laboratório próprio com mais de 5 anos de experiência"],
];

const processSteps: Array<[AirDroneIcon, string, string]> = [
  [ContactIcon, "Conte o que aconteceu", "Envie o modelo e descreva o problema."],
  [ShippingIcon, "Receba as instruções", "Saiba como preparar e enviar o equipamento."],
  [ApprovalIcon, "Aprove o orçamento", "O reparo só começa após sua aprovação."],
  [DroneReturnIcon, "Receba seu drone de volta", "Após os testes, ele retorna pronto para voar."],
];

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url, inLanguage: "pt-BR" },
      { "@type": "ProfessionalService", name: siteConfig.name, url: siteConfig.url, telephone: "+5543991622184", description: "Assistência técnica especializada em reparos e manutenção de drones DJI, com atendimento em todo o Brasil.", address: { "@type": "PostalAddress", streetAddress: "R. Maranhão, 209, Centro", addressLocality: "Londrina", addressRegion: "PR", postalCode: "86010-410", addressCountry: "BR" }, areaServed: { "@type": "Country", name: "Brasil" }, openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" }, { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "12:00" }] },
      { "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "O orçamento é realmente gratuito?", acceptedAnswer: { "@type": "Answer", text: "Sim. A avaliação é gratuita e o reparo só começa após a aprovação do orçamento." } }] },
    ],
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <Header />
    <main id="conteudo">
      <section className="hero" id="inicio"><SectionTracker id="inicio" index={1} />
        <div className="hero-backdrop" />
        <div className="container hero-grid">
          <div className="hero-copy"><p className="eyebrow">SEU DRONE CAIU, MOLHOU OU APRESENTOU ERRO?</p><h1>Reparo de drones e assistência técnica DJI com segurança e garantia.</h1><p>Não entregue seu equipamento nas mãos de curiosos. Somos especialistas em placas, motores, gimbal e sinal para colocar seu drone de volta ao voo.</p><div className="hero-actions"><WhatsAppLink className="button" location="hero_primary" label="Solicitar orçamento"><Send size={18} /> Solicitar orçamento</WhatsAppLink><WhatsAppLink className="button button-outline" location="hero_secondary" label="Falar com especialista"><MessageCircle size={18} /> Falar com especialista</WhatsAppLink></div></div>
          <img className="hero-drone" src="/assets/hero/drone.webp" alt="Drone DJI em assistência técnica" />
        </div>
      </section>
      <section className="benefit-wrap" aria-label="Benefícios"><div className="container benefits">{benefits.map(([Icon, text]) => <div className="benefit" key={text}><Icon aria-hidden="true" /><span>{text}</span></div>)}</div></section>
      <section className="section section-light process" id="como-funciona"><SectionTracker id="como-funciona" index={2} /><div className="container"><div className="process-heading"><p className="eyebrow">COMO FUNCIONA</p><h2>Simples, rápido e seguro.</h2><p>Do primeiro contato ao retorno do equipamento, você acompanha cada etapa.</p></div><div className="process-steps">{processSteps.map(([Icon, title, text], index) => <article className="process-step" key={title}><div className="process-icon"><Icon /></div><span className="process-number">0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div><div className="process-cta"><WhatsAppLink className="button" location="process_section" label="Começar meu atendimento">Começar meu atendimento <ChevronRight size={19} /></WhatsAppLink></div></div></section>
      <section className="section section-dark problems" id="servicos"><SectionTracker id="servicos" index={3} /><div className="container"><SectionHeading eyebrow="ASSISTÊNCIA ESPECIALIZADA DJI" title="O que aconteceu com seu drone?" copy="Identifique o problema mais próximo do seu caso e fale diretamente com a equipe técnica." /><div className="problem-grid">{problems.map((problem) => <article className="problem-card" key={problem.id}><img src={problem.image} alt="" /><div><h3>{problem.title}</h3><WhatsAppLink location="problem_card" label="Solicitar análise" problem={problem.title} aria-label={`Solicitar análise para ${problem.title}`}>Solicitar análise <ChevronRight size={16} /></WhatsAppLink></div></article>)}</div></div></section>
      <section className="section section-light models" id="modelos"><SectionTracker id="modelos" index={4} /><div className="container"><SectionHeading eyebrow="MODELOS ATENDIDOS" title="Assistência para diferentes linhas de drones DJI." copy="Consulte a equipe para confirmar o atendimento do seu modelo." /><div className="model-row">{models.map((model) => <article className="model-card" key={model.name}><img src={model.image} alt={`Drone da linha ${model.name}`} /><h3>{model.name}</h3><p>{model.examples}</p><WhatsAppLink location="models_section" label="Consultar modelo" model={model.name}>Consultar modelo <ChevronRight size={15} /></WhatsAppLink></article>)}</div><div className="center"><WhatsAppLink className="button" location="models_section" label="Confirmar meu modelo DJI">Confirmar meu modelo DJI</WhatsAppLink></div></div></section>
      <section className="section section-dark about" id="sobre"><SectionTracker id="sobre" index={5} /><div className="container about-grid"><div className="about-image"><img src="/assets/about/airdrone-workshop.webp" alt="Ambiente técnico da AirDrone em Londrina" /></div><div><SectionHeading eyebrow="CONHEÇA A AIRDRONE" title="Uma empresa real por trás de cada reparo." /><p className="about-text">A AirDrone é uma assistência técnica especializada em drones DJI. Com sede física em Londrina–PR, reúne equipe especializada, operação estruturada e atendimento reconhecido pela precisão e transparência. Cada serviço é realizado com atenção, respeito ao equipamento e compromisso em cada detalhe.</p><div className="proof-grid"><span><ExperienceIcon />+5 anos de experiência</span><span><LocationIcon />Sede física em Londrina–PR</span><span><TechnicalIcon />Especialistas em DJI</span><span><WarrantyIcon />90 dias de garantia</span></div><WhatsAppLink className="button" location="about_section" label="Falar com especialista">Falar com especialista</WhatsAppLink></div></div></section>
      <section className="section section-light faq-section" id="faq"><SectionTracker id="faq" index={6} /><div className="container faq-grid"><div><SectionHeading eyebrow="TIRE SUAS DÚVIDAS" title="Antes de enviar seu drone" copy="Veja as respostas para as dúvidas mais comuns sobre avaliação, envio e reparo." /><div className="faq-aside"><img src="/assets/services/gimbal.webp" alt="Técnico avaliando o gimbal de um drone" /><p>AINDA TENHO UMA DÚVIDA</p><WhatsAppLink location="faq_card" label="Tirar uma dúvida">Tirar uma dúvida <ChevronRight size={17} /></WhatsAppLink></div></div><Faq /></div></section>
      <section className="section section-dark national" id="atendimento-nacional"><SectionTracker id="atendimento-nacional" index={7} /><div className="container national-grid"><div><SectionHeading eyebrow="ATENDIMENTO NACIONAL" title="Você está longe? Seu drone não precisa ficar parado." /><p>A AirDrone está em Londrina–PR e atende clientes de diferentes regiões do Brasil.</p><ol className="national-steps"><li>Fale com a equipe</li><li>Receba as instruções</li><li>Envie o equipamento</li><li>Acompanhe o atendimento</li><li>Receba o drone de volta</li></ol><WhatsAppLink className="button" location="national_section" label="Solicitar envio gratuito">Solicitar envio gratuito</WhatsAppLink></div></div></section>
      <section className="section section-light reviews" id="avaliacoes"><SectionTracker id="avaliacoes" index={8} /><div className="container"><SectionHeading eyebrow="QUEM JÁ CONFIOU NA AIRDRONE" title="Experiências de clientes que voltaram a voar." /><p className="review-note">Avaliações migradas do conteúdo público da AirDrone.</p><div className="review-grid">{reviews.map((review) => <blockquote key={review.name}><span>“</span><p>{review.text}</p><footer>{review.name}</footer></blockquote>)}</div><div className="review-cta"><WhatsAppLink className="button button-outline-dark" location="footer" label="Solicitar orçamento">Solicitar orçamento</WhatsAppLink></div></div></section>
    </main>
    <footer className="footer" id="contato"><div className="container footer-grid"><div><img className="footer-logo" src="/assets/brand/logo-airdrone-white.svg" alt="AirDrone" /><p>Assistência técnica especializada em drones DJI, com atendimento em todo o Brasil.</p></div><div><p className="footer-label">NAVEGAÇÃO</p><a href="#servicos">Serviços</a><a href="#como-funciona">Como funciona</a><a href="#sobre">Sobre a AirDrone</a><a href="#faq">Perguntas frequentes</a></div><div><p className="footer-label">CONTATO</p><WhatsAppLink location="footer" label="WhatsApp">{siteConfig.phoneDisplay}</WhatsAppLink><p>{siteConfig.location}</p><p>{siteConfig.hours}</p></div><div><p className="footer-label">INSTITUCIONAL</p><a href="/politica-de-privacidade">Política de Privacidade</a><a href="/termos-de-uso">Termos de Uso</a><a href="/garantia-e-envio">Garantia e envio</a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} AirDrone. Todos os direitos reservados.</span><span>Seu drone de volta ao voo, com segurança.</span></div></footer>
    <WhatsAppLink className="mobile-cta" location="mobile_sticky" label="Solicitar orçamento" aria-label="Solicitar orçamento pelo WhatsApp"><MessageCircle size={22} /><span>Solicitar orçamento</span></WhatsAppLink>
  </>;
}
