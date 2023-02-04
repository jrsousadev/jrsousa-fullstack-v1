import { Box, chakra, Text } from "@chakra-ui/react";
import { memo } from "react";
import { BiStar } from "react-icons/bi";
import { GrDocker, GrMysql, GrReactjs } from "react-icons/gr";
import { IoLogoNodejs } from "react-icons/io";
import { DiDart, DiLinux } from "react-icons/di";
import { isValidMotionProp, motion } from "framer-motion";
import { FaAws } from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

import styles from "./CardStack.module.scss";

type CardStackProps = {
  stack: string;
  isMainStack: boolean;
};

const ChakraDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

const CardStack = ({ isMainStack, stack }: CardStackProps) => {
  const returnStack = () => {
    switch (stack) {
      case "React / React Native":
        return <GrReactjs className={styles.iconStack} />;
      case "Typescript":
        return <SiTypescript className={styles.iconStack} />;
      case "NextJS":
        return <SiNextdotjs className={styles.iconStack} />;
      case "NodeJS":
        return <IoLogoNodejs className={styles.iconStack} />;
      case "MongoDB":
        return <SiMongodb className={styles.iconStack} />;
      case "SQL":
        return <GrMysql className={styles.iconStack} />;
      case "Javascript":
        return <SiJavascript className={styles.iconStack} />;
      case "Docker":
        return <GrDocker className={styles.iconStack} />;
      case "AWS Services":
        return <FaAws className={styles.iconStack} />;
      case "Linux":
        return <DiLinux className={styles.iconStack} />;
      case "Dart":
        return <DiDart className={styles.iconStack} />;
    }
  };

  return (
    <ChakraDiv
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={"all 0.5s"}
    >
      <Box
        className={
          isMainStack
            ? styles.BoxContainerMainStack
            : styles.BoxContainerNoMainStack
        }
      >
        {isMainStack && (
          <Text className={styles.MainStack}>
            <BiStar size={17} /> Main Stack
          </Text>
        )}

        <Box className={styles.BoxContent}>
          {returnStack()} <p>{stack}</p>
        </Box>
      </Box>
    </ChakraDiv>
  );
};

export default memo(CardStack);
