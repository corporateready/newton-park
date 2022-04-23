import React from "react";
import styles from "./Gallery.module.scss";
import Image from 'next/image'

import NextButton from "../../svg/gallery/next-btn";
import BackButton from "../../svg/gallery/back-btn";
import up__image from "../../../public/static/gallery/metri-patrati.png";
import down__image from "../../../public/static/gallery/inaltimea-tavanelor.png";
import image_1 from "../../../public/static/gallery/plan-integral-restaurant.png";
import image_2 from "../../../public/static/gallery/restaurant-01.png";
import image_3 from "../../../public/static/gallery/parter-3.png";
// import image_4 from "../../../public/static/gallery/parter-3.png";

// ==============================>
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectFlip, Pagination, Navigation } from "swiper";

const BackButtonIcon = () =>  <BackButton width={48} height={54} />

const NextButtonIcon = () => <NextButton width={48} height={54} />

const images = [
  { slide__image: image_1 },
  { slide__image: image_2 },
  { slide__image: image_3 },
  { slide__image: image_1 },
];

export default function index() {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  console.log(navigationPrevRef.current);

  return (
    <div className={styles.gallery__section}>
      <div className={styles.gallery__bg}></div>
      <div className={styles.gallery__container}>
        <div className={styles.gallery__wrapper}>
          <div className={styles.gallery__description}>
            <div className={styles.gallery__content}>
              <div className={styles.gallery__description_up}>
                <div className={styles.gallery__description_image}>
                  <Image
                  src={up__image}
                  />
                </div>
                <p className={styles.gallery__description_up_text}>
                  Suprafața totală:
                </p>
                <p className={styles.gallery__description_up_number}>
                  1037.00 M<sup>2</sup>
                </p>
              </div>
              <div className={styles.gallery__description_down}>
                <div className={styles.gallery__description_image}>
                <Image
                  src={down__image}
                  />
                </div>
                <p className={styles.gallery__description_up_text}>
                  Înălțimea tavanelor:
                </p>
                <p className={styles.gallery__description_up_number}>4 M</p>
              </div>
            </div>
          </div>

          <div className={styles.gallery__inner}>
            <button className={styles.back__btn} ref={navigationPrevRef}
            >
              <BackButtonIcon />
            </button>
            <Swiper
              effect={"flip"}
              grabCursor={true}
              flipEffect={{
                slideShadows: false,
              }}
              pagination={{
                dynamicBullets: true,
              }}
              navigation={{
                // navigation:true,
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              modules={[EffectFlip, Pagination, Navigation]}
              className={styles.mySwiper}
            >
              {images.map((slide) => {
                return (
                  <SwiperSlide>
                    <Image
                    src= {slide.slide__image}
                    width={582}
                    height={614}
                    alt={slide[`${'parter scheme'}`]}
                    key={slide.slide__image}
                    />
                   
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <button className={styles.next__btn} ref={navigationNextRef}>
              <NextButtonIcon />
            </button>
            <button className={styles.gallery__inner_btn}>Etajul 1</button>
          </div>
        </div>
      </div>
    </div>
  );
}
