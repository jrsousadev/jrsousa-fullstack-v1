import LogoBotCheckin from "../../public/assets/logo-botcheckin.png";
import LogoDegeo from "../../public/assets/logo-degeo.png";
import LogoFelipeFarah from "../../public/assets/logo-felipefarah.png";
import LogoOpiniaoCerta from "../../public/assets/logo-opiniao.png";
import LogoMines from "../../public/assets/logo-mines.png";
import LogoOgDevelopment from "../../public/assets/logo-og.png";
import LogoBacklife from "../../public/assets/logo-backlife.png";

import { StaticImageData } from "next/image";

export type FreelancersProps = {
  name: string;
  slogan: string;
  link?: string;
  image: StaticImageData;
  imageWidth: number;
  imageHeight: number;
  description: string;
};

export const myFreelancers: FreelancersProps[] = [
  {
    name: "Degeocollege",
    slogan: "Plataforma de curso",
    link: "https://degeocollege.degeoacademy.xyz/",
    image: LogoDegeo,
    imageWidth: 150,
    imageHeight: 110,
    description: `
      Responsável pelo desenvolvimento da plataforma de cursos da Degeocollege, visando perfomance, desenvolvimento
      de fluxos, experiência do usuário juntamente com o Design UX/UI e construção de toda regra de negócios com o Back-end.
    `,
  },
  {
    name: "OG Development",
    slogan: "Landing Page",
    /* link: "", */
    image: LogoOgDevelopment,
    imageWidth: 200,
    imageHeight: 200,
    description: `
      Criação da Landing Page da OG Development, a mesma foi criada com o intuito de captação de novos clientes e apresentação breve de
      serviços realizado pela mesma.
    `,
  },
  {
    name: "Backlife",
    slogan: "Landing Page",
    link: "https://vejaissourgente.online/bklife-desconto50/",
    image: LogoBacklife,
    imageWidth: 150,
    imageHeight: 70,
    description: `
      Criação de Landing Page, o CLIENTE me enviou o FIGMA e construir todo designer através do figma,
      aplicando SEO e responsividade.
    `,
  },
  {
    name: "Opinião Certa",
    slogan: "Plataforma de pesquisa",
    /* link: "", */
    image: LogoOpiniaoCerta,
    imageWidth: 200,
    imageHeight: 110,
    description: `
      Responsável pelo desenvolvimento da plataforma de pesquisa da opinião certa, feita para usuários responderem pesquisas
      e ganhar saldo para resgatar prêmios.
    `,
  },
  {
    name: "Mines Lucrativo",
    slogan: "Robô de apostas",
    /* link: "", */
    image: LogoMines,
    imageWidth: 200,
    imageHeight: 110,
    description: `
      Responsável pelo desenvolvimento do robô de apostas Mines Lucrativo, desenvolvido para usuários realizarem
      suas apostas na F12 Bet.
    `,
  },
  {
    name: "Degeocollege",
    slogan: "Landing Page",
    link: "https://degeocollege.degeoacademy.xyz/",
    image: LogoDegeo,
    imageWidth: 150,
    imageHeight: 110,
    description: `
      Criação da Landing Page da Degeocollege para captação de clientes em lançamento perpétuo.
    `,
  },
  {
    name: "Dr. Felipe Farah",
    slogan: "Landing Page",
    link: "https://drfelipefarah.com.br/",
    image: LogoFelipeFarah,
    imageWidth: 300,
    imageHeight: 100,
    description: `
      Criação da Landing Page do Dr. Felipe Farah, aplicando SEO e automação de imagens.
    `,
  },
  {
    name: "BotCheckin",
    slogan: "Landing Page",
    link: "https://conheca-bot-checkin.vercel.app/",
    image: LogoBotCheckin,
    imageWidth: 150,
    imageHeight: 150,
    description: `
      Criação da Landing Page do BotCheckin, aplicando SEO e automação.
    `,
  },
];
