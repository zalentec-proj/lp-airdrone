import { siteConfig, type WhatsAppContext } from "./site";

export function buildWhatsAppUrl({ source, problem, model }: WhatsAppContext) {
  const message = problem
    ? `Olá! Vim pelo site da AirDrone. Meu drone DJI está com ${problem} e gostaria de solicitar uma análise. O modelo é ____.`
    : model
      ? `Olá! Vim pelo site da AirDrone e gostaria de confirmar o atendimento para um drone da linha ${model}. O problema é ____.`
      : "Olá! Vim pelo site da AirDrone e gostaria de solicitar um orçamento para meu drone DJI. Modelo: ____. O problema é: ____.";

  const url = new URL(`https://wa.me/${siteConfig.whatsappNumber}`);
  url.searchParams.set("text", message);
  url.searchParams.set("source", source);
  return url.toString();
}
