import LogoBeWell from "../../public/assets/logo-bewell.png";
import LogoBotCheckin from "../../public/assets/logo-botcheckin.png";
import LogoUnitok from "../../public/assets/logo-unitok.png";
import LogoUnitokConarh from "../../public/assets/logo-unitok-conarh.png";

import { StaticImageData } from "next/image";

export type JobProps = {
  name: string;
  slogan: string;
  link?: string;
  image: StaticImageData;
  imageWidth: number;
  imageHeight: number;
  description: string;
  period?: string;
};

export const myJobs: JobProps[] = [
  {
    name: "Be Well",
    slogan: "Soluções tecnológicas",
    link: "http://usobewell.com/",
    image: LogoBeWell,
    imageWidth: 110,
    imageHeight: 140,
    period: "Oct 2022 - Present",
    description: `
      Responsável pelo desenvolvimento do sistema cujo objetivo é desenvolver nossas features de acordo
      com a necessidade do cliente, correção de bugs e automação de processos hospitalares e também gerenciamento
      e monitoramento de novos desenvolvedores.
    `,
  },
  {
    name: "BotCheckin",
    slogan: "Chatbot (Saas)",
    link: "https://conheca-bot-checkin.vercel.app/",
    period: "Dec 2022 - Present",
    image: LogoBotCheckin,
    imageWidth: 150,
    imageHeight: 150,
    description: ` 
      CTO and Founder, sistema desenvolvido com o intuito inicial de resolver um problema de um amigo próximo,
      que após suprir suas necessidades decidimos lançar como um produto Saas, sistema integrado com WhatsApp API, pegando dados recebidos no WhatsApp e exibindo na plataforma web.
    `,
  },
  {
    name: "Unitok",
    slogan: "Cartões digital",
    link: "https://www.unitok.com/",
    image: LogoUnitok,
    imageWidth: 350,
    imageHeight: 150,
    period: "Jan 2022 - Sep 2022",
    description: `
      Responsável pelo desenvolvimento de novos produtos, discutir sobre experiência do usuário junto ao 
      time de design, melhorar código aplicando conceitos de DDD, CLEAN CODE e SOLID, conduzir e auxiliar a atuação de novos desenvolvedores.
    `,
  },
  {
    name: "Unitok",
    slogan: "Conarh",
    link: "https://www.unitok.com/conarh2022",
    image: LogoUnitokConarh,
    imageWidth: 250,
    imageHeight: 150,
    period: "Jan 2022 - Sep 2022",
    description: ` 
      Responsável pelo desenvolvimento do total zero da plataforma de controle de mailing dos expositores
      do evento CONARH 2022, organizado pela ABRH BRASIL cujo meu objetivo era discutir fluxos garantindo
      uma boa experiência do usuário junto ao time de design, auxiliar desenvolvedores, dar assistência e 
      correções ágeis em tempo real.
    `,
  },
];
