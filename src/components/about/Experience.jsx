import React from "react";

const experienceContent = [
  {
    year: "Oct 2023 - Present",
    position: "Fullstack Engineer Pleno",
    compnayName: "Porão dos Quadros",
    details: `
    Responsável pela criação do sistema interno da Porão dos Quadros, manutenção no ecommerce, automações de operações e integrações.
    <br/> <br/>
    - Automatizar processos com tecnologia evitando gastos de tempo desnecessários em operação manual <br/>
    - Integração com plataformas de pagamento, correios e CMS. <br/>
    - Desenvolvimento de backoffice <br/>
    - Integração e gerenciamento de novos programadores
    `,
  },
  {
    year: "Jul 2023 - Nov 2023",
    position: "Fullstack Engineer Pleno",
    compnayName: "Capsul Brasil",
    details: `
    Desenvolvendo sistemas e automações do zero, realizando manutenções em sistemas existentes da Capsul Brasil.
    <br/> <br/>
    - Utilizando no Front-end ➜ React | Next | Vue <br/>
    - Utilizando no Back-end ➜ Node <br/>
    - Refatoração de features existentes, mantendo padrão de código
    `,
  },
  {
    year: "Sep 2022 - Oct 2023",
    position: "Fullstack Engineer Pleno",
    compnayName: "BeWell",
    details: `
    
    Responsável pelo desenvolvimento do sistema hospitalar da BeWell, criando soluções, novas features, gerenciamento de novos programadores.
    <br/> <br/>
  - Integração de calendário e lembretes com WhatsApp API <br/>
  - Responsável pelo auxílio de novos desenvolvedores <br/>
  - Criação e manutenção de workers <br/>
  - Integração com VPN, utilizando Docker, AWS Services e PM2 <br/>
  - Refatoração de features existentes, mantendo padrão de código <br/>
  - Infraestrutura EC2, S3, LightSail, Elastic Beanstalk
    `,
  },
  {
    year: "Oct 2022 - Jun 2023",
    position: "CTO & FOUNDER",
    compnayName: "BotCheckin",
    details: `Responsável pela criação do produto, pelo desenvolvimento como um todo utilizando as melhores práticas de desenvolvimento e visando também uma arquitetura escalável.
    <br/><br/>
    - Integração com WhatsApp API  <br/>
    - Integração de CRON-JOBS para realizar disparos diários juntamente com WhatsApp API <br/>
    - Integração de gateway de pagamento com o Asaas (Para pagamentos recorrentes)
    - Webhooks`,
  },
  {
    year: "Jan 2022 - Sep 2022",
    position: "Fullstack Engineer",
    compnayName: "Unitok",
    details: `
    Trabalhei na plataforma Unitok, tendo contato direto com os usuários buscando soluções e corrigindo bugs em real-time.
    <br/><br/>
    - Integração com Google Maps, para localização do Pet encontrado <br/>
    - Integração com S3 - uploads de imagens <br/>
    - Integração com Twilio - SMS, WhatsApp, Ligação <br/>
    - Responsável pelo desenvolvimento da plataforma de check-in da Unitok juntamente com a ABRH Brasil, sistema desenvolvido para o evento Conarh`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p
            className="open-sans-font"
            dangerouslySetInnerHTML={{ __html: val.details }}
          />
        </li>
      ))}
    </ul>
  );
};

export default Experience;
