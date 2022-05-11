import React from "react";
import Image from "next/image";
import styles from "./Motives.module.scss";

import { motion, AnimatePresence } from "framer-motion";

import motive_1 from "../../../public/static/motives/intrare-din-pasarela.png";
import motive_2 from "../../../public/static/motives/open-space.png";
import motive_3 from "../../../public/static/motives/livrare-01.png";
import motive_4 from "../../../public/static/motives/motive_4.png";
import motive_5 from "../../../public/static/motives/sisteme-ingineresti-01.png";
import motive_6 from "../../../public/static/motives/supermarket.png";

export default function index() {
  return (
    <AnimatePresence>
      <motion.div
        className={styles.motives__section}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0 }}
      >
        <div className={styles.container}>
          <h2 className={styles.title}>
            4  SPAȚII MEDIUM RETAIL <span className={styles.title__decor}>NEWTON PARK</span>
            <br/>IATĂ DE CE SE POTRIVESC AFACERII TALE
          </h2>
          <div className={styles.inner}>

            <div className={styles.motive}>
              <div className={styles.motive__wrapper}>
                <div className={styles.motive__image}>
                  <Image src={motive_1} width={321} height={86} priority />
                </div>
                <div className={styles.motive__title_wrapper}>
                  <h3 className={styles.motive__title}>
                  Acces direct din pasarelă 
                  <br/>și stradă
                  </h3>
                </div>
              </div>
            </div>

            <div className={styles.motive}>
              <div className={styles.motive__wrapper}>
                <div className={styles.motive__image}>
                  <Image src={motive_2} width={321} height={204} priority />
                </div>
                <div className={styles.motive__title_wrapper}>
                  <h3 className={styles.motive__title}>
                  Open space
                  <br/>Flexibilitate în compartimente
                  </h3>
                </div>
              </div>
            </div>

            <div className={styles.motive}>
              <div className={styles.motive__wrapper}>
                <div className={styles.motive__image}>
                  <Image src={motive_3} width={321} height={224} priority />
                </div>
                <div className={styles.motive__title_wrapper}>
                  <h3 className={styles.motive__title}>
                  Loc separat pentru livrare
                  <br/>Ascensor de marfă de la nivelul -1
                  </h3>
                </div>
              </div>
            </div>

            <div className={styles.motive}>
              <div className={styles.motive__wrapper}>
                <div className={styles.motive__image}>
                  <Image src={motive_4} width={321} height={168} priority />
                </div>
                <div className={styles.motive__title_wrapper}>
                  <h3 className={styles.motive__title}>
                  Scări rulante de la nivelul -2        
                  <br/>până la parter și nivelul 1
                  </h3>
                </div>
              </div>
            </div>

            <div className={styles.motive}>
              <div className={styles.motive__wrapper}>
                <div className={styles.motive__image}>
                  <Image src={motive_5} width={321} height={224} priority />
                </div>
                <div className={styles.motive__title_wrapper}>
                  <h3 className={styles.motive__title}>
                  Sisteme inginerești
                  <br/>de ultimă generație
                  </h3>
                </div>
              </div>
            </div>

            <div className={styles.motive}>
              <div className={styles.motive__wrapper}>
                <div className={styles.motive__image}>
                  <Image src={motive_6} width={321} height={188} priority />
                </div>
                <div className={styles.motive__title_wrapper}>
                  <h3 className={styles.motive__title}>
                  Prezența unui Supermarket în același
                  <br/>complex comercial
                  </h3>
                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
