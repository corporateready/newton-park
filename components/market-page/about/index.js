import React from "react";
import Image from "next/image";
import styles from "./About.module.scss";

import Gallery from "../gallery";

import park from "../../../public/static/about/park.svg";
import build from "../../../public/static/about/build.svg";

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
                  <Image src={park} height={52} width={57} alt="newton park" />
                </div>
                <span className={styles.info__item_text}>
                  Flux de oameni continuu din parcul Grădina Botanică
                </span>
              </div>
            </div>
            <div></div>
          </div>
          <div className={styles.about__build}>
            <Image
              src={build}
              height={140}
              width={132}
              alt="newton park build"
            />
          </div>
        </div>
      </div>
      <Gallery />
    </>
  );
}
