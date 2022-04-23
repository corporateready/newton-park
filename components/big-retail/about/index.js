import React from "react";
import styles from "./About.module.scss";

import Gallery from "../gallery";
import Garden from "../../svg/garden";
import Build from "../../svg/build";

const BuildIcon = () => (
  <div>
    <Build width={107} height={113}/>
  </div>
)

const GardenIcon = () => (
  <div className={styles.garden__wrapper}>
    <Garden width={43} height={39}/>
  </div>
)

export default function index() {
  return (
    <>
      <div className={styles.about}>
        <div className={styles.container}>
          <h2 className={styles.title}>DESPRE PROIECT</h2>
        </div>
        <div className={styles.about__info_container}>
          <div className={styles.info}>
            <div className={styles.info__container}>
              <h4 className={styles.info__title}>
                Cel mai modern complex rezidețial{" "}
                <span className={styles.info__title_decor}>
                  <span className={styles.text__sepatator}>
                    <br />
                  </span>
                  de la Botanica
                </span>
              </h4>
              <div className={styles.info__item}>
                <span className={styles.info__item_num}>3000+</span>
                <span className={styles.info__item_text}>de familii</span>
              </div>
              <div className={styles.info__item}>
                <span className={styles.info__item_num}>200+</span>
                <span className={styles.info__item_text}>
                  locuri de parcare publică disponibile pe durata zilei
                </span>
              </div>
              <div className={styles.info__item}>
                <div className={styles.info__item_img}>
                  <GardenIcon/>
                </div>
                <span className={styles.info__item_text}>
                  Flux de oameni continuu din parcul Grădina Botanică
                </span>
              </div>
            </div>
            <div></div>
          </div>
          <div className={styles.about__build}>
            <BuildIcon/>
          </div>
        </div>
      </div>
      <Gallery />
    </>
  );
}
