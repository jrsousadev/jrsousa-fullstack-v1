import { motion } from "framer-motion";
import { memo, useEffect, useState } from "react";
import styles from './Mouse.module.scss';

interface ICustomMouse {
    cursorVariant: any;
}

const CustomMouse = ({ cursorVariant }: ICustomMouse) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

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

  return (
    <motion.div
      className={styles.cursor}
      variants={variants}
      animate={cursorVariant}
    />
  );
};

export default memo(CustomMouse);