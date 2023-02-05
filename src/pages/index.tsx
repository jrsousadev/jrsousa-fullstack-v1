import type { NextPage } from "next";
import { chakra, Text, Image } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import {
  myStacksBack,
  myStacksDatabase,
  myStacksFront,
  myStacksScalability,
} from "../constants/ListMyStacks";
import { myJobs } from "../constants/ListMyJobs";
import { myContacts } from "../constants/ListMyContacts";
import { myFreelancers } from "../constants/ListMyFreelancers";

import Particle from "../components/Particle";
import CardJob from "../components/CardJob";
import CardStack from "../components/CardStack";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Router from "next/router";
import CustomMouse from "../components/CustomMouse";
import SwiperComponent from "../components/SwiperCarousel";

const ChakraDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

const Home: NextPage = () => {
  const [cursorVariant, setCursorVariant] = useState("default");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [opacityTitle, setOpacityTitle] = useState<number>(1);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    if (scrollPosition >= 3800) {
      setOpacityTitle(0);
    } else {
      setOpacityTitle(1);
    }
  }, [scrollPosition]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const enterMouseOptions = () => {
    setCursorVariant("options");
  };

  const leaveMouseOptions = () => {
    setCursorVariant("default");
  };

  return (
    <>
      <Head>
        <title>Full Stack Engineer · Junior Sousa</title>
      </Head>

      <CustomMouse cursorVariant={cursorVariant} />

      <header className={styles.containerHeader}>
        <div className={styles.optionsMenuContainer}>
          <ChakraDiv
            animate={{
              scale: [2, 1],
            }}
          >
            <i
              className={styles.textMenu}
              onMouseEnter={enterMouseOptions}
              onMouseLeave={leaveMouseOptions}
              onClick={() => Router.push("#stacks")}
            >
              Know-how
            </i>
          </ChakraDiv>
          <ChakraDiv
            animate={{
              scale: [2, 1],
            }}
          >
            <i
              className={styles.textMenu}
              onMouseEnter={enterMouseOptions}
              onMouseLeave={leaveMouseOptions}
              onClick={() => Router.push("#me")}
            >
              Sobre mim
            </i>
          </ChakraDiv>
          <ChakraDiv
            animate={{
              scale: [2, 1],
            }}
          >
            <i
              className={styles.textMenu}
              onMouseEnter={enterMouseOptions}
              onMouseLeave={leaveMouseOptions}
              onClick={() => Router.push("#jobs")}
            >
              Portfólio
            </i>
          </ChakraDiv>
          <ChakraDiv
            animate={{
              scale: [2, 1],
            }}
          >
            <i
              className={styles.textMenu}
              onMouseEnter={enterMouseOptions}
              onMouseLeave={leaveMouseOptions}
              onClick={() => Router.push("#contacts")}
            >
              Contato
            </i>
          </ChakraDiv>
        </div>
      </header>

      <main>
        <section className={styles.containerSectionTitles}>
          <Particle />
          <div
            className={styles.containerTitle}
            style={{ opacity: opacityTitle }}
          >
            <ChakraDiv
              className={styles.title}
              scrollMarginY={{ opacity: 0.5 }}
            >
              Junior Sousa
            </ChakraDiv>
            <Text className={styles.subtitle}>Desenvolvedor</Text>
            <Text className={styles.subtitle}>Full-stack</Text>
            <Text className={styles.paragraph}>
              Especialista em desenvolvimento software web com React, Node e
              desenvolvimento mobile com React Native e Dart.
            </Text>
          </div>
        </section>

        <section className={styles.containerSectionStacks} id="stacks">
          <Text className={styles.title}>Front-end UI/UX</Text>

          <div className={styles.gridStacks}>
            {myStacksFront.map((stack, index) => (
              <CardStack
                isMainStack={stack.isMainStack}
                stack={stack.name}
                key={index}
              />
            ))}
          </div>

          <Text className={styles.title}>Backend</Text>

          <div className={styles.gridStacks}>
            {myStacksBack.map((stack, index) => (
              <CardStack
                isMainStack={stack.isMainStack}
                stack={stack.name}
                key={index}
              />
            ))}
          </div>

          <Text className={styles.title}>Databases</Text>
          <div className={styles.gridStacks}>
            {myStacksDatabase.map((stack, index) => (
              <CardStack
                isMainStack={stack.isMainStack}
                stack={stack.name}
                key={index}
              />
            ))}
          </div>

          <Text className={styles.title}>Escalabilidade</Text>
          <div className={styles.gridStacks}>
            {myStacksScalability.map((stack, index) => (
              <CardStack
                isMainStack={stack.isMainStack}
                stack={stack.name}
                key={index}
              />
            ))}
          </div>
        </section>

        <section className={styles.containerSectionMe} id="me">
          <Text className={styles.titleSectionJobs}>SOBRE MIM</Text>
          <Text className={styles.subtitleSectionJobs}>Quem sou eu</Text>

          <div className={styles.containerInfosMe}>
            <div className={styles.myPhoto}>
              <Image
                className={styles.myPhotoImg}
                src={"https://i.imgur.com/bsErl5u.jpg"}
              />
            </div>
            <div className={styles.myInfos}>
              <h1>Hello World! 👋</h1>

              <p>Se quiser me conhecer um pouco mais, está no lugar certo!</p>

              <p>
                Eu me chamo <strong>Junior Sousa</strong> e tenho 20 anos.
              </p>

              <p>
                Antes de começar na programação eu já trabalhava com internet
                desde fevereiro de 2020, acabei criando uma empresa de{" "}
                <strong>gestão de tráfego pago</strong> onde até hoje é uma das
                minhas principais fonte de renda.
              </p>

              <p>
                Eu já havia conhecido programação lá nos meados de 2018 porém
                não levei a fundo achando que a profissão não era para mim{" "}
                <strong>(sim eu não gostava de programação)</strong>
              </p>

              <p>
                Iniciei na programação em <strong>Junho de 2021</strong> após descobrir que um tio meu era
                programador sênior, comecei a estudar, pegar algumas dicas e
                adivinha?{" "}
                <strong>Me apaixonei completamente pela profissão</strong>
              </p>

              <p>
                Logo conseguir a primeira oportunidade de trabalho profissional{" "}
                <strong>
                  (até ai já tinha construido alguns sistemas complexos)
                </strong>{" "}
                e com muito esforço evoluir bastante
              </p>

              <p>
                Hoje eu sou{" "}
                <strong>
                  especialista em desenvolvimento software web e mobile
                </strong>{" "}
                e já tenho uma certa bagagem apesar do pouco tempo na profissão.
              </p>

              <p>Obrigado por ler até aqui!</p>
            </div>
          </div>
        </section>

        <section className={styles.containerSectionJobs} id="jobs">
          <Text className={styles.titleSectionJobs}>Portfólio</Text>
          <Text className={styles.subtitleSectionJobs}>Empresas</Text>

          <SwiperComponent>
            {myJobs.map((job, index) => (
              <SwiperSlide key={index}>
                <CardJob job={job} setCursorVariant={setCursorVariant} />
              </SwiperSlide>
            ))}
          </SwiperComponent>
        </section>

        <section className={styles.containerSectionJobs} id="freelancers">
          <Text className={styles.titleSectionJobs}>Portfólio</Text>
          <Text className={styles.subtitleSectionJobs}>Freelancers</Text>

          <SwiperComponent>
            {myFreelancers.map((job, index) => (
              <SwiperSlide key={index}>
                <CardJob
                  job={job}
                  setCursorVariant={setCursorVariant}
                />
              </SwiperSlide>
            ))}
          </SwiperComponent>
        </section>

        <section className={styles.containerSectionContacts} id="contacts">
          <h4 className={styles.title}>
            Gostaria de entrar em contato comigo ?
          </h4>
          <p className={styles.email}>contato.jaimejunior@gmail.com</p>
          <div className={styles.gridContacts}>
            {myContacts.map((contact, index) => {
              if (!contact.disabled) {
                return (
                  <div
                    className={styles.icon}
                    key={index}
                    onMouseEnter={enterMouseOptions}
                    onMouseLeave={leaveMouseOptions}
                    onClick={() => window.open(`${contact.url}`, "_blank")}
                  >
                    {<contact.icon size={18} style={{ color: "#8257e5" }} />}
                  </div>
                );
              }
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
