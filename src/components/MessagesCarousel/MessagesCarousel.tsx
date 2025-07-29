import styles from "./MessagesCarousel.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const carouselItems = [
  "WORLDWIDE SHIPPING 🌍",
  "30 DAYS RETURNS & EXCHANGES ⚡",
  "FREE SHIPPING 😎",
];

export default function MessagesCarousel() {
  return (
    <Swiper
      centeredSlides={true}
      loop={true}
      speed={1200}
      navigation={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Navigation]}
      className={styles.carousel}
    >
      {carouselItems.map((item) => (
        <SwiperSlide className={styles.item}>
          <p>{item}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
