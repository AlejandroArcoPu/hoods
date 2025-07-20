import styles from "./Home.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Parallax } from "swiper/modules";
import SocialMedia from "../../components/SocialMedia/SocialMedia.js";
import PrimaryCarousel from "../../components/PrimaryCarousel/PrimaryCarousel.js";
import Payments from "../../components/Payments/Payments.js";
import Button from "../../components/Button/Button.tsx";
import { type Home } from "../../apis.ts";
import { useLoaderData } from "react-router";

export default function Home() {
  const { home } = useLoaderData();
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
          {home.length &&
            home.map((carousel: Home, index: number) => (
              <SwiperSlide className={styles.slider}>
                <img
                  className={styles.img}
                  loading={index > 0 ? "lazy" : "eager"}
                  src={carousel.Image}
                  alt="Guy with a skate jumping"
                />
                <div
                  className={`${styles.textSlider} ${styles.positionCenter}`}
                >
                  <h1 data-swiper-parallax="-500" className={styles.title}>
                    {carousel.Title}
                  </h1>
                  <p className={styles.paragraph} data-swiper-parallax="-200">
                    {carousel.Subtitle}
                  </p>
                  <Button text={"Shop"} />
                </div>
              </SwiperSlide>
            ))}
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
