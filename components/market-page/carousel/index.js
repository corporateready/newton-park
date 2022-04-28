import React from "react";
import Image from "next/image";

import { motion} from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./Carousel.module.scss";

import { FreeMode, Pagination } from "swiper";

import image__carousel_1 from "../../../public/static/about/burebista-residence.jpg";
import image__carousel_2 from "../../../public/static/about/gradina-botanica-2.jpg";
import image__carousel_3 from "../../../public/static/about/gradina-botanica.jpg";

const carousel__images = [
  { image: image__carousel_1, id: 1 },
  { image: image__carousel_2, id: 2 },
  { image: image__carousel_3, id: 3 },
  { image: image__carousel_1, id: 4 },
  { image: image__carousel_2, id: 5 },
  { image: image__carousel_3, id: 6 },
];

export default function index() {
  return (
    <div className={styles.carousel__section}>
      <Carousel />
      <div className={styles.form__wrapper}>
        <h4 className={styles.form__title}>
        Obține informații 
        <br/>despre <span className={styles.text__decor}>NEWTON PARK</span>
        </h4>
        <form className={styles.form__body}>
          <input type="email" placeholder="Adresa de email" />
          <input type="tel" placeholder="Numărul de telefon" />
          <button className={styles.form__button}>Solicită oferta</button>
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
            bulletClass:'swiper-pagination-bullet',
            clickable:true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + '</span>';
            }
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
