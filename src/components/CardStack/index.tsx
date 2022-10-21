import { Box, chakra, Text } from "@chakra-ui/react";
import { memo } from "react";
import { BiStar } from "react-icons/bi";
import { GrDocker, GrMysql, GrReactjs } from "react-icons/gr";
import {
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3, IoLogoNodejs } from "react-icons/io";
import { isValidMotionProp, motion } from "framer-motion";

import styles from "./CardStack.module.scss";
import { FaAws } from "react-icons/fa";

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
      case "react":
        return <GrReactjs className={styles.iconStack} />;
      case "typescript":
        return <SiTypescript className={styles.iconStack} />;
      case "next":
        return <SiNextdotjs className={styles.iconStack} />;
      case "node":
        return <IoLogoNodejs className={styles.iconStack} />;
      case "mongo":
        return <SiMongodb className={styles.iconStack} />;
      case "postgress":
        return <SiPostgresql className={styles.iconStack} />;
      case "mysql":
        return <GrMysql className={styles.iconStack} />;
      case "javascript":
        return <SiJavascript className={styles.iconStack} />;
      case "html":
        return <TiHtml5 className={styles.iconStack} />;
      case "css":
        return <IoLogoCss3 className={styles.iconStack} />;
      case "docker":
        return <GrDocker className={styles.iconStack} />;
      case "aws":
        return <FaAws className={styles.iconStack} />;
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
        <Box className={styles.BoxContent}>{returnStack()}</Box>
      </Box>
    </ChakraDiv>
  );
};

export default memo(CardStack);
