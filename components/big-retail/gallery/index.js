import React from "react";
import styles from "./Gallery.module.scss";
import Image from 'next/image'

import NextButton from "../../svg/gallery/next-btn";
import BackButton from "../../svg/gallery/back-btn";
import up__image from "../../../public/static/gallery/metri-patrati.png";
import down__image from "../../../public/static/gallery/inaltimea-tavanelor.png";
import image_1 from "../../../public/static/gallery/big-retail/Big retail-parter.png";
import image_2 from "../../../public/static/gallery/big-retail/BIG-RETAIL_PARTER1.png";
import image_1_webp from "../../../public/static/gallery/big-retail/Big-retail-parter.webp";
import image_2_webp from "../../../public/static/gallery/big-retail/BIG-RETAIL_PARTER1.webp";
import image_3 from "../../../public/static/gallery/big-retail/Big-Retail-Etajul1-integral.png";
import image_4 from "../../../public/static/gallery/big-retail/Big-Retail-Etajul1.png";
import image_3_webp from "../../../public/static/gallery/big-retail/Big-Retail-Etajul1-integral.webp";
import image_4_webp from "../../../public/static/gallery/big-retail/Big-Retail-Etajul1.webp";
import { initialTabs as tabs } from "./ingredients";

import { motion, AnimatePresence } from "framer-motion";

// ==============================>
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectFlip, Pagination, Navigation } from "swiper";

const BackButtonIcon = () =>  <BackButton width={48} height={54} />

const NextButtonIcon = () => <NextButton width={48} height={54} />

const parter__images = [
  { id: 1, slide__image: image_2, slide__image_webp: image_2_webp },
  { id: 2, slide__image: image_1, slide__image_webp: image_1_webp },
];

const floor__images = [
  { id: 3, slide__image: image_3, slide__image_webp: image_3_webp },
  { id: 4, slide__image: image_4, slide__image_webp: image_4_webp },
];

export default function Index() {
  const [selectedTab, setSelectedTab] = React.useState(tabs[0]);
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

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
                  1461.85 M<sup>2</sup>
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
            <button className={styles.back__btn} ref={navigationPrevRef}>
              <BackButtonIcon />
            </button>

            <AnimatePresence exitBeforeEnter>
              {selectedTab.category === "parter" ? (
                <Swiper
                  effect={"flip"}
                  grabCursor={true}
                  flipEffect={{
                    slideShadows: false,
                  }}
                  pagination={true}
                  navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                  }}
                  modules={[EffectFlip, Pagination, Navigation]}
                  className={styles.mySwiper}
                  key="parter"
                >
                  {parter__images.map((slide) => {
                    return (
                      <SwiperSlide key={slide.id}>
                        <Image
                          src={slide.slide__image}
                          srcSet={slide.slide__image_webp}
                          width={582}
                          height={614}
                          alt={slide[`${"parter scheme"}`]}
                          key={slide.id}
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              ) : (
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
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
                modules={[EffectFlip, Pagination, Navigation]}
                className={styles.mySwiper}
                key="floor"
              >
                {floor__images.map((slide) => {
                  return (
                    <SwiperSlide key={slide.id}>
                      <Image
                        src={slide.slide__image}
                        srcSet={slide.slide__image_webp}
                        width={582}
                        height={614}
                        alt={slide[`${"parter scheme"}`]}
                        key={slide.id}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              )
              }
            </AnimatePresence>

            <button className={styles.next__btn} ref={navigationNextRef}>
              <NextButtonIcon />
            </button>

            <div className={styles.gallery__inner_buttons}>
              {tabs.map((item) => (
                <motion.button
                  key={item.category}
                  transition={{ duration: 2 }}
                  className={
                    item === selectedTab
                      ? styles.gallery__inner_parter_btn
                      : styles.gallery__inner_floor_btn
                  }
                  onClick={() => setSelectedTab(item)}
                >
                  {`${item.label}`}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
