import styles from "./Home.module.scss";
import carousel1 from "../../assets/carousel1.jpg";
import carousel2 from "../../assets/carousel2.jpg";
import carousel2_600 from "../../assets/carousel2_600.jpg";
import carousel1_600 from "../../assets/carousel1_600.jpg";
import carousel3 from "../../assets/carousel3.jpg";
import carousel4 from "../../assets/carousel4.jpg";
import logo from "../../assets/logo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useRef } from "react";
export default function Home() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
  };
  return (
    <>
      <header className={styles.header}>
        <div className={styles.title}>
          <img
            src={logo}
            alt="Logo Hoods, white fire and a background red"
            className={styles.logo}
          />
          <h1 className={styles.titleText}>Hoods</h1>
        </div>
      </header>
      <main className={styles.content}>
        <Swiper
          className={styles.mySwiper}
          centeredSlides={true}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          modules={[Autoplay, Pagination]}
        >
          <SwiperSlide className={styles.mySliders}>
            <picture className={styles.img}>
              <source media="(width < 700px)" srcSet={carousel1_600} />

              <source media="(width >= 700px)" srcSet={carousel1} />
              <img
                className={styles.img}
                src={carousel1}
                alt="Skate carousel elements"
              />
            </picture>
          </SwiperSlide>
          <SwiperSlide className={styles.mySliders}>
            <picture className={styles.img}>
              <source media="(width < 700px)" srcSet={carousel2_600} />

              <source media="(width >= 700px)" srcSet={carousel2} />
              <img
                className={styles.img}
                src={carousel2}
                alt="Skate carousel elements"
              />
            </picture>
          </SwiperSlide>
          <SwiperSlide className={styles.mySliders}>
            <picture>
              <source media="(width < 700px)" srcSet={carousel3} />

              <source media="(width >= 700px)" srcSet={carousel3} />
              <img
                className={styles.img}
                src={carousel3}
                alt="Skate carousel elements"
              />
            </picture>
          </SwiperSlide>
          <SwiperSlide className={styles.mySliders}>
            <picture className={styles.img}>
              <source media="(width < 700px)" srcSet={carousel4} />

              <source media="(width >= 700px)" srcSet={carousel4} />
              <img
                className={styles.img}
                src={carousel4}
                alt="Skate carousel elements"
              />
            </picture>
          </SwiperSlide>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
          </div>
        </Swiper>
        <div className={styles.carousel}>
          <p className={styles.item1}>DESIGNED FOR IMPACT.</p>
          <p className={styles.item2}>DESIGNED FOR IMPACT.</p>
          <p className={styles.item3}>DESIGNED FOR IMPACT.</p>
          <p className={styles.item4}>DESIGNED FOR IMPACT.</p>
          <p className={styles.item5}>DESIGNED FOR IMPACT.</p>
          <p className={styles.item6}>DESIGNED FOR IMPACT.</p>
        </div>
      </main>
    </>
  );
}
