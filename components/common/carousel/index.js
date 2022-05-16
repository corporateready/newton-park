import React from "react";
import Image from "next/image";
import Link from "next/link"

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./Carousel.module.scss";

import { FreeMode, Pagination } from "swiper";

import image__carousel_1 from "../../../public/static/carousel/Gradina_Botanica_transa_2_View01_1.png";
import image__carousel_2 from "../../../public/static/carousel/Gradina_Botanica_transa_2_View05_1.png";
import image__carousel_3 from "../../../public/static/carousel/Gradina_Botanica_transa_2_View07_3.png";
import image__carousel_4 from "../../../public/static/carousel/Gradina_Botanica_transa_2_View09_2.png";
import image__carousel_5 from "../../../public/static/carousel/Gradina_Botanica_transa_2_View10_1.png";
import image__carousel_6 from "../../../public/static/carousel/Burebista_Residence_b_View11_2.png";

import image__carousel_1_webp from "../../../public/static/carousel/Gradina_Botanica_transa_2_View01_1.webp";
import image__carousel_2_webp from "../../../public/static/carousel/Gradina_Botanica_transa_2_View05_1.webp";
import image__carousel_3_webp from "../../../public/static/carousel/Gradina_Botanica_transa_2_View07_3.webp";
import image__carousel_4_webp from "../../../public/static/carousel/Gradina_Botanica_transa_2_View09_2.webp";
import image__carousel_5_webp from "../../../public/static/carousel/Gradina_Botanica_transa_2_View10_1.webp";
import image__carousel_6_webp from "../../../public/static/carousel/Burebista_Residence_b_View11_2.webp";

const carousel__images = [
  { image: image__carousel_1, image_webp: image__carousel_1_webp, id: 1 },
  { image: image__carousel_2, image_webp: image__carousel_2_webp, id: 2 },
  { image: image__carousel_3, image_webp: image__carousel_3_webp, id: 3 },
  { image: image__carousel_4, image_webp: image__carousel_4_webp, id: 4 },
  { image: image__carousel_5, image_webp: image__carousel_5_webp, id: 5 },
  { image: image__carousel_6, image_webp: image__carousel_6_webp, id: 6 },
];

export default function index() {
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
            <input type="checkbox" />
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
          autoplay={{
            delay: 1000,
          }}
          spaceBetween={30}
          pagination={{
            bulletClass: "swiper-pagination-bullet",
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
                    src={item.image}
                    srcSet={item.image_webp}
                    width={961}
                    height={658}
                    alt={item.image}
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
