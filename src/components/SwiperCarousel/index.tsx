import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper } from "swiper/react";
import { memo } from "react";

import styles from "./Carousel.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

interface SwiperComponentProps {
  children: React.ReactNode;
}

const SwiperComponent = ({ children }: SwiperComponentProps) => {
  console.log("SWIPER")

  return (
    <Swiper
      breakpoints={{
        1522: {
          slidesPerView: 3,
        },
        1101: {
          slidesPerView: 2,
        },
        1100: {
          slidesPerView: 1,
        }
      }}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={10}
      navigation={false}
      pagination={{ clickable: true }}
      className={styles.swiper}
    >
      {children}
    </Swiper>
  );
};

export default memo(SwiperComponent);