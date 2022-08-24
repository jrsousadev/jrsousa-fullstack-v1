import { Box, chakra, Text, Image, Button } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { IoIosAdd } from "react-icons/io";

import styles from "./CardJob.module.scss";

type CardJobProps = {
  name: string;
  image: string;
  description: string;
  github: string;
  link: string;
  stacks: string[];
  setCursorVariant: (parameter: string) => void;
};

const ChakraDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

export const CardJob = ({
  description,
  name,
  link,
  image,
  stacks,
  github,
  setCursorVariant,
}: CardJobProps) => {
  const [showInfos, setShowInfos] = useState<boolean>(false);

  return (
    <ChakraDiv
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={"all 0.5s"}
      className={styles.containerBoxMain}
      onMouseEnter={() => {
        setShowInfos(true);
        setCursorVariant("enterJob");
      }}
      onMouseLeave={() => {
        setShowInfos(false);
        setCursorVariant("default");
      }}
    >
      <Image
        src={image}
        alt={`Imagem do projeto ${name}`}
        className={styles.image}
      />

      <Box className={styles.containerInfos}>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
          className={styles.infosTitle}
        >
          {name}
        </Box>

        <Box className={styles.containerStacks}>
          {stacks.map((stack, index) => (
            <Text className={styles.stacksText} key={index}>
              {stack}
            </Text>
          ))}
        </Box>

        <Box className={styles.containerButtons}>
          {github && (
            <Button className={styles.buttonGithub}>
              <a href={github} target="_blank">
                Github
                <BsArrowUpRight
                  style={{
                    color: showInfos ? "#0e0e0ff1" : "#8257e5",
                    marginLeft: "7px",
                  }}
                />
              </a>
            </Button>
          )}
          <Button className={styles.buttonShow}>
            <a href={link} target="_blank">
              Ver mais
              <IoIosAdd
                className={styles.iconShowMore}
                style={{
                  color: showInfos ? "#0e0e0ff1" : "#8257e5",
                }}
              />
            </a>
          </Button>
        </Box>
      </Box>

      <Box
        className={styles.containerShowInfos}
        style={{
          visibility: showInfos ? "visible" : "hidden",
          opacity: showInfos ? 1 : 0,
        }}
      >
        <div className={styles.content}>
          <div className={styles.contentTitle}>{name}</div>

          <p className={styles.contentParagraph}>{description}</p>
        </div>
      </Box>
    </ChakraDiv>
  );
};
