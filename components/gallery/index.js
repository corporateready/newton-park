import React from "react";
import Image from "next/image";
import styles from "./Gallery.module.scss";

import next__btn from ".././../public/static/gallery/next-button.svg";
import image_descr_1 from "../../public/static/gallery/metri-patrati.svg";
import image_descr_2 from "../../public/static/gallery/inaltimea-tavanelor.svg";
import image_1 from "../../public/static/about/about-image-1.svg";

export default function index() {
  return (
    <div className={styles.gallery__section}>
      <div className={styles.gallery__bg}></div>
      <div className={styles.gallery__container}>
        <div className={styles.gallery__wrapper}>
          <div className={styles.gallery__description}>
            <div className={styles.gallery__content}>
              <div className={styles.gallery__description_up}>
                <div className={styles.gallery__description_image}>
                  <Image src={image_descr_1} width={110} height={110} alt=""/>
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
                <p className={styles.gallery__description_up_number}>5 M</p>
              </div>
            </div>
          </div>
          <div className={styles.gallery__inner}>
            <div className={styles.gallery__body}>
              <div className={styles.gallery__slide}>
                <Image src={image_1} width={582} height={614} />
              </div>
            </div>
            <button className={styles.next__btn}>
              <Image src={next__btn} width={48} height={54} alt="next button" />
            </button>
            <button className={styles.gallery__inner_btn}>parter</button>
          </div>
        </div>
      </div>
    </div>
  );
}
