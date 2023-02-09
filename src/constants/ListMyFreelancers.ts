import LogoBotCheckin from "../../public/assets/logo-botcheckin.png";
import LogoDegeo from "../../public/assets/logo-degeo.png";
import LogoFelipeFarah from "../../public/assets/logo-felipefarah.png";
import LogoOpiniaoCerta from "../../public/assets/logo-opiniao.png";
import LogoMines from "../../public/assets/logo-mines.png";

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
    name: "Degeocollege",
    slogan: "Landing Page",
    link: "https://degeocollege.degeoacademy.xyz/",
    image: LogoDegeo,
    imageWidth: 150,
    imageHeight: 110,
    description: `
      Criação da Landing Page do Dr. Felipe Farah, aplicando SEO e aplicação de estratégias de marketing
      para reentação de novos possíveis clientes.
    `,
  },
  {
    name: "Dr. Felipe Farah",
    slogan: "Landing Page",
    link: "https://drfelipefarah.com.br/",
    image: LogoFelipeFarah,
    imageWidth: 300,
    imageHeight: 110,
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
  /*  
  {
    name: "Live chat",
    stacks: ["Node", "Typescript", "Supertest", "Jest", "Prisma", "MongoDB"],
    github: "https://github.com/jrsousadev/api-pagarme-nodejs",
    link: "https://live-chat-web.vercel.app/637d9d6fcaeea7b8cd7d7fed",
    image: "https://i.imgur.com/0JJOysy.png",
    description: `
      Projeto criado com o intuito de melhorar minhas habilidades, no mesmo foi
      desenvolvido um pequeno sistema inspirando-se no WhatsApp de forma rasa, desde
      criação da API e de testes automotizados.
    `,
  },
  {
    name: "API PagarMe NodeJS",
    stacks: ["Node", "Typescript", "Swagger", "PagarMe", "Solid", "MongoDB"],
    github: "https://github.com/jrsousadev/api-pagarme-nodejs",
    image:
      "https://partnernetwork.vtexassets.com/arquivos/ids/155570/logo_pagarme.png?v=637599700153200000",
    description: `
      Projeto desenvolvido com o intuito de ajudar desenvolvedores
      com a implementação da API do PagarMe (Pagamentos e transações) com Typescript no NodeJS e 
      utilizando o banco de dados MongoDB. 
    `,
  },
  {
    name: "Full Calendar Scheduler",
    stacks: ["Next", "Typescript", "Css-In-Js", "MongoDB"],
    link: "https://fullcalendar-scheduler-web.vercel.app/",
    github: "https://github.com/jrsousadev/fullcalendar-scheduler-web",
    image: "https://i.imgur.com/f2RukgD.png",
    description: `Componente inspirado no Google Agenda, o mesmo foi criado
    com o intuito de ajudar pessoas que necessitem das funcionalidades prontas de listar/criar/atualizar/delete
    eventos tanto no front-end quanto integrado ao back-end. (Open Source)`,
  },
  {
    name: "Customer Control",
    stacks: ["Next", "Node", "Typescript", "Css-In-Js", "MongoDB"],
    link: "https://customer-control-web.herokuapp.com/",
    github: "https://github.com/jrsousadev/Customer_Control_web",
    image: "https://i.imgur.com/cD8Wj93.png",
    description: `Projeto desenvolvido por mim, criado com o intuito de 
    resolver problemas/dificuldades de amigos de trabalho (e até minha mesmo) 
    com controle de seus clientes e datas de pagamentos.`,
  },
  {
    name: "Clinica Apit Fhisio",
    stacks: ["Next", "Node", "Typescript", "Css-In-Js", "MongoDB"],
    link: "http://clinicaapitfhisio.com.br/professor/login",
    github: "https://github.com/jrsousadev/Apit_Fhisio_web",
    image: "https://i.imgur.com/Lw7Ko0h.png",
    description: `Sistema de clínica (REAL), desenvolvido com o objetivo de cadastrar
    pacientes, criar matrículas e ter o controle dos vencimentos de pagamento, além de
    ter os dados dos pacientes e quais são suas matrículas, sistema com autênticação e
    dados (MongoDB)`,
  }, */
];
