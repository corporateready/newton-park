import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './Carousel.module.scss';

import { FreeMode, Pagination } from 'swiper';

import image__carousel_1_webp from '../../../public/static/carousel/image-1.webp';
import image__carousel_2_webp from '../../../public/static/carousel/image-2.webp';
import image__carousel_3_webp from '../../../public/static/carousel/image-3.webp';
import image__carousel_4_webp from '../../../public/static/carousel/image-4.webp';
import image__carousel_5_webp from '../../../public/static/carousel/image-5.webp';

const carousel__images = [
  { image_webp: image__carousel_1_webp },
  { image_webp: image__carousel_2_webp },
  { image_webp: image__carousel_3_webp },
  { image_webp: image__carousel_4_webp },
  { image_webp: image__carousel_5_webp },
];

export default function Index() {
  return (
    <div className={styles.carousel__section}>
      <Carousel />
      <div className={styles.form__wrapper}>
        <h4 className={styles.form__title}>
          Obține informații
          <br />
          despre <span className={styles.text__decor}>NEWTON PARK</span>
        </h4>
        <form className={styles.form__body}>
          <input type="email" placeholder="Adresa de email" />
          <input type="tel" placeholder="Numărul de telefon" />
          <button className={styles.form__button}>Solicită oferta</button>
          <div className={styles.according}>
            <input type="checkbox" defaultChecked readOnly />
            <label>
              Sunt de acord cu{' '}
              <Link href="/policy">
                <a className={styles.according__link}>termenii și condițiile site-ului</a>
              </Link>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

function Carousel() {
  return (
    <>
      <div className={styles.carousel__section}>
        <Swiper
          loop={true}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + '</span>';
            },
          }}
          draggable={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
          modules={[FreeMode, Pagination]}
          className={styles.mySwiper}>
          {carousel__images.map((item, idx) => {
            return (
              <SwiperSlide key={idx}>
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{
                    scale: 1.1,
                    bounce: 1,
                    transition: { duration: 0.5, ease: 'easeInOut' },
                  }}>
                  <Image
                    src={item.image_webp}
                    width={961}
                    height={658}
                    layout="responsive"
                    sizes="(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw,
                          33vw"
                    quality={100}
                    alt={item.image}
                    priority
                  />
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
