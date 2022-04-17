import React from "react";
import Image from "next/image";
import styles from "./Gallery.module.scss";

import next__btn from "../../../public/static/gallery/next-button.svg";
import back__btn from "../../../public/static/gallery/back-btn.svg";
import image_descr_1 from "../../../public/static/gallery/metri-patrati.svg";
import image_descr_2 from "../../../public/static/gallery/inaltimea-tavanelor.svg";
import image_1 from "../../../public/static/about/about-image-1.svg";
import image_2 from "../../../public/static/gallery/PARTER-supermarket-01.png";

// ==============================>
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectFlip, Pagination, Navigation } from "swiper";

const images = [
  { slide__image: image_1 },
  { slide__image: image_2 },
  { slide__image: image_1 },
];

export default function index() {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div
      className={styles.gallery__section}
    >
      <div className={styles.gallery__bg}></div>
      <div className={styles.gallery__container}>
        <div className={styles.gallery__wrapper}>
          <div className={styles.gallery__description}>
            <div className={styles.gallery__content}>
              <div className={styles.gallery__description_up}>
                <div className={styles.gallery__description_image}>
                  <Image src={image_descr_1} width={110} height={110} alt="" />
                </div>
                <p className={styles.gallery__description_up_text}>
                  Suprafața totală:
                </p>
                <p className={styles.gallery__description_up_number}>
                  2213.30 M<sup>2</sup>
                </p>
              </div>
              <div className={styles.gallery__description_down}>
                <div className={styles.gallery__description_image}>
                  <Image src={image_descr_2} width={110} height={110} />
                </div>
                <p className={styles.gallery__description_up_text}>
                  Înălțimea tavanelor:
                </p>
                <p className={styles.gallery__description_up_number}>4 M</p>
              </div>
            </div>
          </div>

          <div className={styles.gallery__inner}>
            <button className={styles.back__btn} ref={navigationPrevRef}>
              <Image src={back__btn} width={48} height={54} alt="next button" />
            </button>
            <Swiper
              effect={"flip"}
              grabCursor={true}
              centeredSlides={true}
              pagination={{
                dynamicBullets: true,
              }}
              navigation={{
                // el: ".swiper-pagination",
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
                      src={slide.slide__image}
                      width={583}
                      height={614}
                      alt="newton park slide"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <button className={styles.next__btn} ref={navigationNextRef}>
              <Image src={next__btn} width={48} height={54} alt="next button" />
            </button>
            <button className={styles.gallery__inner_btn}>parter</button>
          </div>
        </div>
      </div>
    </div>
  );
}
