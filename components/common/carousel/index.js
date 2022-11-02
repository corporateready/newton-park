import React from "react";
import Image from "next/image";
import Link from "next/link"

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./Carousel.module.scss";

import { FreeMode, Pagination } from "swiper";

import image__carousel_1_webp from "../../../public/static/carousel/Burebista_Residence_s.webp";
import image__carousel_2_webp from "../../../public/static/carousel/Gradina_Botanica_transa_2_View05_1_s.webp";
import image__carousel_3_webp from "../../../public/static/carousel/Gradina_Botanica_transa_2_View07_3_s.webp";
import image__carousel_4_webp from "../../../public/static/carousel/Gradina_Botanica_transa_2_View09_2_s.webp";
import image__carousel_5_webp from "../../../public/static/carousel/Gradina_Botanica_transa_2_View10_1_s.webp";

const carousel__images = [
  { image_webp: image__carousel_1_webp, id: 1 },
  { image_webp: image__carousel_2_webp, id: 2 },
  { image_webp: image__carousel_3_webp, id: 3 },
  { image_webp: image__carousel_4_webp, id: 4 },
  { image_webp: image__carousel_5_webp, id: 5 },
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
            <input type="checkbox" defaultChecked readOnly/>
            <label>
              Sunt de acord cu{" "}
              <Link href="/policy">
                <a className={styles.according__link}>
                  termenii și condițiile site-ului
                </a>
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
              return '<span class="' + className + '">' + "</span>";
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
          className={styles.mySwiper}
        >
          {carousel__images.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{
                    scale: 1.1,
                    bounce: 1,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  }}
                >
                  <Image
                    src={item.image_webp}
                    layout="responsive"
                    // width={961}
                    // height={658}
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
