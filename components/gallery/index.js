import React from "react";
import Image from "next/image";
import styles from "./Gallery.module.scss";

import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";

import next__btn from ".././../public/static/gallery/next-button.svg";
import back__btn from ".././../public/static/gallery/back-btn.svg";
import image_descr_1 from "../../public/static/gallery/metri-patrati.svg";
import image_descr_2 from "../../public/static/gallery/inaltimea-tavanelor.svg";
import image_1 from "../../public/static/about/about-image-1.svg";
import image_2 from "../../public/static/gallery/PARTER-supermarket-01.png";

const images = [image_1, image_2];

export default function index() {
  const [[page, direction], setPage] = React.useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const back__click = () => paginate(1);
  const next__click = () => paginate(1);

  return (
    <AnimatePresence>
      <motion.div
        className={styles.gallery__section}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0 }}
      >
        <div className={styles.gallery__bg}></div>
        <div className={styles.gallery__container}>
          <div className={styles.gallery__wrapper}>
            <div className={styles.gallery__description}>
              <div className={styles.gallery__content}>
                <div className={styles.gallery__description_up}>
                  <div className={styles.gallery__description_image}>
                    <Image
                      src={image_descr_1}
                      width={110}
                      height={110}
                      alt=""
                    />
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
              <motion.button
                className={styles.back__btn}
                onClick={back__click}
                whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
                whileTap={{ scale: 0.9 }}
              >
                <Image
                  src={back__btn}
                  width={48}
                  height={54}
                  alt="back button"
                />
              </motion.button>
              <AnimatePresence
                initial={false}
                custom={direction}
                key={page + 1}
              >
                <div
                  className={styles.gallery__body}
                  custom={direction}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 300 },
                    opacity: { duration: 1 },
                  }}
                  drag="x"
                  dragconstraints={{ left: 0, right: 0 }}
                  dragelastic={1}
                >
                  <motion.div>
                    <Image
                      src={images[imageIndex]}
                      width={582}
                      height={614}
                      className={styles.gallery__slide}
                    />
                  </motion.div>
                </div>
              </AnimatePresence>
              <motion.button
                whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
                whileTap={{ scale: 0.9 }}
                className={styles.next__btn}
                onClick={next__click}
              >
                <Image
                  src={next__btn}
                  width={48}
                  height={54}
                  alt="next button"
                />
              </motion.button>
              <button className={styles.gallery__inner_btn}>parter</button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
