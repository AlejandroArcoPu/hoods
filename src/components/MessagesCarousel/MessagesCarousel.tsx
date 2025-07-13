import styles from "./MessagesCarousel.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const carouselItems = [
  "WORLDWIDE SHIPPING 🌍",
  "15 DAYS RETURNS & EXCHANGES ⚡",
  "FREE SHIPPING: OVER 80€ 😎",
];

export default function MessagesCarousel() {
  const prev = useRef(null);
  const next = useRef(null);
  return (
    <Swiper
      centeredSlides={true}
      loop={true}
      speed={1200}
      navigation={{
        prevEl: prev.current,
        nextEl: next.current,
      }}
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
      <div className={styles.prev} ref={prev}>
        <ChevronLeft strokeWidth={1} />
      </div>
      <div className={styles.next} ref={next}>
        <ChevronRight strokeWidth={1} />
      </div>
    </Swiper>

    // <div className={styles.carousel}>
    //   {carouselItems.map((item) => (
    //     <p className={styles.item}>{item}</p>
    //   ))}
    // </div>
  );
}
