import type { NextPage } from "next";
import { chakra, Text } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { myStacksBack, myStacksFront } from "../constants/ListMyStacks";
import { myJobs } from "../constants/ListMyJobs";
import { myContacts } from "../constants/ListMyContacts";

import Particle from "../components/Particle";
import CardJob from "../components/CardJob";
import CardStack from "../components/CardStack";

import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Router from "next/router";

const ChakraDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

const Home: NextPage = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [opacityTitle, setOpacityTitle] = useState<number>(1);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    if (scrollPosition >= 4300) {
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

  useEffect(() => {
    const mouseMove = (e: any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      scale: 1,
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    options: {
      opacity: 0.5,
      scale: 1.5,
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    enterJob: {
      opacity: 0.5,
      scale: 2,
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "#000",
    },
  };

  const enterMouseOptions = () => {
    setCursorVariant("options");
  };

  const leaveMouseOptions = () => {
    setCursorVariant("default");
  };

  return (
    <>
      <Head>
        <title>Jr. Sousa | FULL-STACK</title>
      </Head>

      <motion.div
        className={styles.cursor}
        variants={variants}
        animate={cursorVariant}
      />

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
              Stacks
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
              Meus Jobs
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
            >
              <a
                href="/files/juniorsousa-curriculo.pdf"
                target="_blank"
                download
              >
                Currículo
              </a>
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
          <div className={styles.containerTitle} style={{opacity: opacityTitle}}>
            <ChakraDiv
              className={styles.title}
              scrollMarginY={{ opacity: 0.5 }}
            >
              Junior Sousa
            </ChakraDiv>
            <Text className={styles.subtitle}>Desenvolvedor</Text>
            <Text className={styles.subtitle}>Full-stack</Text>
            <Text className={styles.paragraph}>
              Profissional especialista em desenvolvimento web, focado nas
              stacks React e NodeJS, autêntico e curioso.
            </Text>
          </div>
        </section>

        <section className={styles.containerSectionStacks} id="stacks">
          <Text className={styles.title}>Front</Text>

          <div className={styles.gridStacks}>
            {myStacksFront.map((stack, index) => (
              <CardStack
                isMainStack={stack.isMainStack}
                stack={stack.name}
                key={index}
              />
            ))}
          </div>

          <Text className={styles.title}>Back</Text>

          <div className={styles.gridStacks}>
            {myStacksBack.map((stack, index) => (
              <CardStack
                isMainStack={stack.isMainStack}
                stack={stack.name}
                key={index}
              />
            ))}
          </div>
        </section>

        <section className={styles.containerSectionJobs} id="jobs">
          <div className={styles.gridJobs}>
            {myJobs.map((job, index) => (
              <CardJob
                stacks={job.stacks ?? [""]}
                name={job.name ?? ""}
                image={job.image ?? ""}
                description={job.description ?? ""}
                link={job.link ?? ""}
                github={job.github ?? ""}
                setCursorVariant={setCursorVariant}
                key={index}
              />
            ))}
          </div>
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
