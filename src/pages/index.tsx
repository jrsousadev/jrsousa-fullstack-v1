import type { NextPage } from "next";
import { chakra, Text } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { Particle } from "../components/Particle";
import { useEffect, useState } from "react";
import { CardStack } from "../components/CardStack";
import { myStacksBack, myStacksFront } from "../constants/ListMyStacks";
import { CardJob } from "../components/CardJob";
import { myJobs } from "../constants/ListMyJobs";

import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Router from "next/router";
import Link from "next/link";

const ChakraDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

const Home: NextPage = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

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
            >
              Contato
            </i>
          </ChakraDiv>
        </div>
      </header>

      <main>
        <section className={styles.containerSectionTitles}>
          <Particle />
          <div className={styles.containerTitle}>
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
      </main>
    </>
  );
};

export default Home;
