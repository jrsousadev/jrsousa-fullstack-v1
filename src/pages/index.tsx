import type { NextPage } from "next";
import { chakra, Text } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";

import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { Particle } from "../components/Particle";

const ChakraText = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jr. Sousa | FULL-STACK</title>
      </Head>

      <header className={styles.containerHeader}>
        <div className={styles.optionsMenuContainer}>
          <ChakraText
            className={styles.textMenu}
            animate={{
              scale: [2, 1],
            }}
          >
            Stacks
          </ChakraText>
          <ChakraText
            className={styles.textMenu}
            animate={{
              scale: [2, 1],
            }}
          >
            Portfólio
          </ChakraText>
          <ChakraText
            className={styles.textMenu}
            animate={{
              scale: [2, 1],
            }}
          >
            Contato
          </ChakraText>
        </div>
      </header>

      <main>
        <section className={styles.containerSectionOne}>
          <Particle />
          <div className={styles.containerTitle}>
            <ChakraText className={styles.title} animate={{}}>
              Junior Sousa
            </ChakraText>
            <Text className={styles.subtitle}>Desenvolvedor</Text>
            <Text className={styles.subtitle}>Full-stack</Text>
            <Text className={styles.paragraph}>
              Profissional especialista em desenvolvimento web, focado nas
              stacks React e NodeJS, autêntico e curioso.
            </Text>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
