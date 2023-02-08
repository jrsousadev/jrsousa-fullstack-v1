import { Box, chakra } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { memo } from "react";
import { JobProps } from "../../constants/ListMyJobs";
import { IoIosArrowForward } from "react-icons/io";

import Image from "next/image";
import styles from "./CardJob.module.scss";

type CardJobProps = {
  job: JobProps;
  setCursorVariant: (parameter: string) => void;
};

const ChakraDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

const CardJob = ({ job, setCursorVariant }: CardJobProps) => {
  const handleOnMouseEnter = () => {
    setCursorVariant("enterJob");
  };

  const handleOnMouseLeave = () => {
    setCursorVariant("default");
  };

  return (
    <ChakraDiv
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={"all 0.5s"}
      className={styles.containerBoxMainAnimatted}
    >
      <Box className={styles.containerBoxMain}>
        <div
          className={styles.image}
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
        >
          <Image
            src={job.image}
            width={job.imageWidth}
            height={job.imageHeight}
            alt={`Imagem do projeto ${job.name}`}
          />
        </div>

        <div className={styles.infos}>
          <h6 className={styles.title}>
            {job.name} - {job.slogan}
          </h6>
          <p className={styles.period}>{job.period}</p>
          <p className={styles.description}>{job.description}</p>
          {job.link && (
            <button
              className={styles.buttonRedirect}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            >
              <a href={job.link} target="_blank">
                Saiba mais <IoIosArrowForward />
              </a>
            </button>
          )}
        </div>
      </Box>
    </ChakraDiv>
  );
};

export default memo(CardJob);
