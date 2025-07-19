import styles from "./Home.module.scss";
import carousel5 from "../../assets/carousel5.jpg";
import carousel2 from "../../assets/carousel2.jpg";
import carousel3 from "../../assets/carousel3.jpg";
import carousel4 from "../../assets/carousel4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Parallax } from "swiper/modules";
import SocialMedia from "../../components/SocialMedia/SocialMedia.js";
import PrimaryCarousel from "../../components/PrimaryCarousel/PrimaryCarousel.js";
import Payments from "../../components/Payments/Payments.js";
import Button from "../../components/Button/Button.tsx";

export default function Home() {
  return (
    <>
      <main className={styles.content}>
        <Swiper
          className={styles.swiper}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={1000}
          parallax={true}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Pagination, Autoplay, Parallax]}
        >
          <SwiperSlide className={styles.slider}>
            <img
              className={styles.img}
              loading="lazy"
              src={carousel2}
              alt="Guy with a hood and a skate jumping a wall"
            />
            <div className={`${styles.textSlider} ${styles.positionCenter}`}>
              <h1 data-swiper-parallax="-500" className={styles.title}>
                NO RULES
              </h1>
              <p className={styles.paragraph} data-swiper-parallax="-200">
                For the ones who ride with attitude.
              </p>
              <Button text={"Shop"} />
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slider}>
            <img
              className={styles.img}
              loading="lazy"
              src={carousel5}
              alt="Guy without shirt in a skate jumping"
            />
            <div className={`${styles.textSlider} ${styles.positionCenter}`}>
              <h1 data-swiper-parallax="-500" className={styles.title}>
                BORN TO BREAK
              </h1>
              <p className={styles.paragraph} data-swiper-parallax="-200">
                Skate. Shred. Repeat
              </p>
              <Button text={"Shop"} />
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slider}>
            <img
              className={styles.img}
              loading="lazy"
              src={carousel3}
              alt="Guy with black shirt in a skate riding in the road"
            />
            <div className={`${styles.textSlider} ${styles.positionCenter}`}>
              <h1 data-swiper-parallax="-500" className={styles.title}>
                ROLL FREE
              </h1>
              <p className={styles.paragraph} data-swiper-parallax="-200">
                No limits. Just motion.
              </p>
              <Button text={"Shop"} />
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slider}>
            <img
              className={styles.img}
              loading="lazy"
              src={carousel4}
              alt="Guy with a skate jumping with his hand in the skate"
            />
            <div className={`${styles.textSlider} ${styles.positionCenter}`}>
              <h1 data-swiper-parallax="-500" className={styles.title}>
                FALL & GET UP
              </h1>
              <p className={styles.paragraph} data-swiper-parallax="-200">
                We don't dress safe. We dress real.
              </p>
              <Button text={"Shop"} />
            </div>
          </SwiperSlide>
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
                <span className={`${styles.bold} ${styles.underline}`}>
                  10% discount{" "}
                </span>
                on your first purchase.
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
              <Button text={"Subscribe"} />
              <Payments size={24} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
