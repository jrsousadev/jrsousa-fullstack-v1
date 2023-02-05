import { memo, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import styles from "./Particle.module.scss";

const Particle = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {}, []);

  return (
    <Particles
      id={styles.tsparticles}
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 60,
        particles: {
          color: {
            value: "#c3d8dc",
          },
          links: {
            color: "#c3d8dc",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default memo(Particle)