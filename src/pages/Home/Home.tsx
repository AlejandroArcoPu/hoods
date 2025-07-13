import styles from "./Home.module.scss";
import carousel1 from "../../assets/carousel1.jpg";
import carousel2 from "../../assets/carousel2.jpg";
import carousel2_600 from "../../assets/carousel2_600.jpg";
import carousel1_600 from "../../assets/carousel1_600.jpg";
import carousel3 from "../../assets/carousel3.jpg";
import carousel4 from "../../assets/carousel4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Pagination, Parallax } from "swiper/modules";
import { useRef } from "react";
import SocialMedia from "../../components/SocialMedia/SocialMedia.js";
import PrimaryCarousel from "../../components/PrimaryCarousel/PrimaryCarousel.js";
import Payments from "../../components/Payments/Payments.js";

export default function Home() {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const onAutoplayTimeLeft = (
    _s: SwiperType,
    _time: number,
    progress: number
  ) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        (1 - progress).toString()
      );
    }
  };
  return (
    <>
      <main className={styles.content}>
        <Swiper
          className={styles.mySwiper}
          centeredSlides={true}
          parallax={true}
          speed={1200}
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
          modules={[Autoplay, Pagination, Parallax]}
        >
          <SwiperSlide className={styles.mySliders}>
            <picture className={styles.img}>
              <source media="(width < 768px)" srcSet={carousel1_600} />

              <source media="(width >= 768px)" srcSet={carousel1} />
              <img
                className={styles.img}
                src={carousel1}
                alt="Skate carousel elements"
              />
            </picture>
            <div className={`${styles.textSlider} ${styles.textSlider1}`}>
              <h1
                data-swiper-parallax="-100%"
                className={styles.textTitle}
                data-swiper-parallax-duration="700"
              >
                NO RULES
              </h1>
              <p data-swiper-parallax="-600" className={styles.textPara}>
                For the ones who ride with attitude.
              </p>
              <button className={styles.button}>Buy</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.mySliders}>
            <picture className={styles.img}>
              <source media="(width < 768px)" srcSet={carousel2_600} />

              <source media="(width >= 768px)" srcSet={carousel2} />
              <img
                className={styles.img}
                src={carousel2}
                alt="Skate carousel elements"
              />
            </picture>
            <div className={`${styles.textSlider} ${styles.textSlider3}`}>
              <h1
                data-swiper-parallax="-100%"
                className={styles.textTitle}
                data-swiper-parallax-duration="700"
              >
                BORN TO BREAK
              </h1>
              <p data-swiper-parallax="-600" className={styles.textPara}>
                Skate. Shred. Repeat.
              </p>
              <button className={styles.button}>Buy</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.mySliders}>
            <picture>
              <source media="(width < 768px)" srcSet={carousel3} />

              <source media="(width >= 768px)" srcSet={carousel3} />
              <img
                className={styles.img}
                src={carousel3}
                alt="Skate carousel elements"
              />
            </picture>
            <div className={`${styles.textSlider} ${styles.textSlider2}`}>
              <h1
                data-swiper-parallax="-100%"
                data-swiper-parallax-duration="700"
                className={styles.textTitle}
              >
                ROLL FREE
              </h1>
              <p className={styles.textPara} data-swiper-parallax="-600">
                No limits. No leaders. Just motion.
              </p>
              <button className={styles.button}>Buy</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.mySliders}>
            <picture className={styles.img}>
              <source media="(width < 768px)" srcSet={carousel4} />

              <source media="(width >= 768px)" srcSet={carousel4} />
              <img
                className={styles.img}
                src={carousel4}
                alt="Skate carousel elements"
              />
            </picture>
            <div className={`${styles.textSlider} ${styles.textSlider3}`}>
              <h1
                data-swiper-parallax="-100%"
                data-swiper-parallax-duration="700"
                className={styles.textTitle}
              >
                FALL. GET UP. REPEAT.
              </h1>
              <p className={styles.textPara} data-swiper-parallax="-600">
                We don’t dress safe. We dress real.
              </p>
              <button className={styles.button}>Buy</button>
            </div>
          </SwiperSlide>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
          </div>
        </Swiper>
        <PrimaryCarousel />
        <div className={styles.end}>
          <div className={styles.endInfoContainer}>
            <p className={styles.endInfo}>
              <span className={styles.bold}>Hoods</span> isn’t just a streetwear
              brand — it’s a movement, a statement, and a mirror of the streets.
              Born from concrete, chaos, and rebellion, we represent the raw,
              unfiltered edge of{" "}
              <span className={styles.bold}>street culture</span>.
            </p>
            <SocialMedia size={24} />
          </div>
          <div className={styles.endInfoContainer2}>
            <div>
              <h3>DON'T MISS A DROP</h3>
              <p>
                Subscribe and receive a{" "}
                <span className={styles.bold}>10% </span>discount on your first
                purchase.
              </p>
            </div>
            <div className={styles.emailContainer}>
              <input
                placeholder="email@example.com"
                className={styles.input}
                type="email"
                id="email"
                name="email"
              />
              <button className={styles.button}>Subscribe</button>
              <Payments size={24} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
