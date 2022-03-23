import React from "react";
import Image from "next/image";
import styles from "./Carousel.module.scss";

import image__carousel_1 from "../../../public/static/about/burebista-residence.jpg";

const carousel__images = [
  { image: image__carousel_1, id: 1 },
  { image: image__carousel_1, id: 2 },
  { image: image__carousel_1, id: 3 },
];

export default function index() {
  return (
    <div className={styles.carousel__section}>
      <div className={styles.carousel__wrapper}>
        <div className={styles.carousel__inner}>
          {carousel__images.map((img) => {
            return (
              <div key={img.id} className={styles.carousel__image}>
                <Image
                  src={img.image}
                  width={961}
                  height={658}
                  alt={img.image}
                />
              </div>
            );
          })}
        </div>
        <ul className={styles.carousel__toggler}>
          <li className={styles.carousel__toggle}></li>
          <li className={styles.carousel__toggle}></li>
          <li className={styles.carousel__toggle}></li>
          <li className={styles.carousel__toggle}></li>
          <li className={styles.carousel__toggle}></li>
          <li className={styles.carousel__toggle}></li>
        </ul>
      </div>
      <div className={styles.form__wrapper}>
          <h4 className={styles.form__title}>
          Completați formularul 
          <br/>și vă vom oferi informații suplimentare.
          </h4>
          <form className={styles.form__body}>
              <input type="email" placeholder="Adresa de email"/>
              <input type="tel" placeholder="Numărul de telefon"/>
              <button className={styles.form__button}>Solicită oferta</button>
          </form>
      </div>
    </div>
  );
}
