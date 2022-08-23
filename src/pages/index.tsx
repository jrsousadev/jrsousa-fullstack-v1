import type { NextPage } from "next";
import { Button, chakra, Text, useColorMode } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { Particle } from "../components/Particle";
import { useEffect, useState } from "react";

import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { CardStack } from "../components/CardStack";
import { myStacksBack, myStacksFront } from "../constants/ListMyStacks";

const ChakraDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

const Home: NextPage = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");
  const { colorMode, toggleColorMode } = useColorMode();

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
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    options: {
      opacity: 0.5,
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
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
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
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
            >
              Porfólio
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
            <ChakraDiv className={styles.title} animate={{}}>
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

        <section className={styles.containerSectionStacks}>
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
      </main>
    </>
  );
};

export default Home;
