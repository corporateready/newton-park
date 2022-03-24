import React from "react";
import Image from "next/image";
import styles from "./Carousel.module.scss";
import { motion } from "framer-motion";

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
          Completați formularul
          <br />
          și vă vom oferi informații suplimentare.
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

const Carousel = () => {
  const [width, setWidth] = React.useState(0);
  const carousel = React.useRef();
  const active__item = React.useRef();

  React.useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div
      ref={carousel}
      whileTap={"grabbing"}
      className={styles.carousel__wrapper}
    >
      <motion.div
        className={styles.carousel__inner}
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        ref={active__item}
      >
        {carousel__images.map((img) => {
          return (
            <motion.div key={img.id} className={styles.carousel__image}>
              <Image src={img.image} width={961} height={658} alt={img.image} />
            </motion.div>
          );
        })}
      </motion.div>
      <div className={styles.carousel__toggler_wrapper}>
        <ul className={styles.carousel__toggler}>
          <li className={styles.carousel__toggle}></li>
          <li className={styles.carousel__toggle}></li>
          <li className={styles.carousel__toggle}></li>
          <li className={styles.carousel__toggle}></li>
          <li className={styles.carousel__toggle}></li>
          <li className={styles.carousel__toggle}></li>
        </ul>
      </div>
    </motion.div>
  );
};
