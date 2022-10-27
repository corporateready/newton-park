import React from "react";
import Image from "next/image";
import logo from "../../public/static/common/logo-info.png";
import styles from "./info.module.scss";


export default function index() {
  return (
    <>
    <div className={styles.info}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <h2 className={styles.title}>DESPRE DEZVOLTATOR</h2>
          <div className={styles.logo__image}>
            <Image
              src={logo}
              width={710}
              height={355}
              priority
              alt="big newton park logo "
            />
          </div>
          <p className={styles.info__description}>
            CEL MAI ACTIV <span className={styles.info__description_decor}>DEZVOLTATOR IMOBILIAR</span>
            <br />
            DIN ULTIMII 3 ANI, ÎN REPUBLICA MOLDOVA
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
