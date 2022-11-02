import React from 'react';
import styles from './Gallery.module.scss';
import Image from 'next/image';

import NextButton from '../../svg/gallery/next-btn';
import BackButton from '../../svg/gallery/back-btn';
import up__image from '../../../public/static/gallery/metri-patrati.png';
import down__image from '../../../public/static/gallery/inaltimea-tavanelor.png';
import image_1_webp from '../../../public/static/gallery/home-decor/home-decor-parter-1.webp';
import image_2_webp from '../../../public/static/gallery/home-decor/home-decor-parter-2.webp';

import { initialTabs as tabs } from './ingredients';

import { motion, AnimatePresence } from 'framer-motion';
// ==============================>
import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectFlip, Pagination, Navigation } from 'swiper';

const BackButtonIcon = () => <BackButton width={48} height={54} />;

const NextButtonIcon = () => <NextButton width={48} height={54} />;

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
              {selectedTab === tabs[0] ? (
                <div className={styles.gallery__description_up}>
                  <div
                    className={styles.gallery__description_image_up}>
                    <Image src={up__image} height={107} width={103} alt="structure icon" />
                  </div>
                  <p
                    className={styles.gallery__description_up_text}>
                    Suprafața totală:
                  </p>
                  <motion.p
                    className={styles.gallery__description_up_number}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1 } }}>
                    2068.20 M<sup>2</sup>
                  </motion.p>
                </div>
              ) : (
                <div className={styles.gallery__description_up}>
                  <div className={styles.gallery__description_image_up}>
                    <Image src={up__image} height={107} width={103} alt="structure icon" />
                  </div>
                  <p className={styles.gallery__description_up_text}>
                    Suprafața totală:
                  </p>
                  <motion.p className={styles.gallery__description_up_number}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.5 } }}
                  >
                    728.50 M<sup>2</sup>
                  </motion.p>
                </div>
              )}

              <div className={styles.gallery__description_down}>
                <div className={styles.gallery__description_image_down}>
                  <Image src={down__image} height={107} width={103} alt="structure icon" />
                </div>
                <p className={styles.gallery__description_up_text}>Înălțimea tavanelor:</p>
                <p className={styles.gallery__description_up_number}>4 M</p>
              </div>
            </div>
          </div>

          <div className={styles.gallery__inner}>
            <button className={styles.back__btn} ref={navigationPrevRef}>
              <BackButtonIcon />
            </button>
            <AnimatePresence exitBeforeEnter>
                <Swiper
                  effect={'flip'}
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
                  className={styles.mySwiper}>
                  <SwiperSlide>
                    <Image
                      src={image_1_webp}
                      alt={'slide parter scheme 1'}
                      priority
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={styles.slide__image_wrapper}>
                      <Image
                        src={image_2_webp}
                        alt={'slide parter scheme 2'}
                        priority
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
            </AnimatePresence>
            <button className={styles.next__btn} ref={navigationNextRef}>
              <NextButtonIcon />
            </button>
            <button className={styles.gallery__inner_btn}>parter</button>
          </div>
        </div>
      </div>
    </div>
  );
}
