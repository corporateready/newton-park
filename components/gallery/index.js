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

  // const back__btn_ref = React.useRef();
  

  const imageIndex = wrap(0, images.length, page);
  console.log(imageIndex);
  const paginate = (newDirection) => {
    // console.log([page + newDirection]);
    setPage([page + newDirection, newDirection]);
  };

  const back__click = () => {
    paginate(1)};
  const next__click = () => paginate(-1);

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
                disabled={page === 0}
              >
                <Image
                  src={back__btn}
                  width={48}
                  height={54}
                  alt="next button"
                />
              </motion.button>
              <AnimatePresence
                initial={false}
                custom={direction}
                key={index + 1}
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
                  <div>
                    <Image
                      src={images[imageIndex]}
                      width={582}
                      height={614}
                      className={styles.gallery__slide}
                    />
                  </div>
                </div>
              </AnimatePresence>
              <motion.button
                whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
                whileTap={{ scale: 0.9 }}
                className={styles.next__btn}
                onClick={next__click}
                disabled={page === -2}
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

// const BackButton = ({disabled}) => {
//   return (
//     <motion.svg
//       whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
//       whileTap={{ scale: 0.9 }}
//       width="33"
//       height="36"
//       viewBox="0 0 33 36"
//       // fill={disabled ? "#000" : "#2BB018"}
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <g clipPath="url(#clip0_385_267)">
//         <path
//           d="M21.2635 35.5208C21.7604 34.8818 21.7605 33.8457 21.2634 33.2066L9.43612 18.0004L21.2635 2.7935C21.7604 2.15455 21.7605 1.11841 21.2634 0.479352C20.7664 -0.159703 19.9606 -0.159703 19.4635 0.479352L6.73624 16.8434C6.49756 17.1503 6.3635 17.5665 6.3635 18.0004C6.3635 18.4344 6.49765 18.8507 6.73633 19.1575L19.4636 35.5207C19.9606 36.1598 20.7664 36.1598 21.2635 35.5208Z"
//           fill="current"
//         />
//       </g>
//       <g clipPath="url(#clip1_385_267)">
//         <path
//           d="M26.8047 31.6272C27.1881 31.1303 27.1882 30.3244 26.8047 29.8273L17.6808 18.0003L26.8047 6.17267C27.1881 5.67571 27.1882 4.86982 26.8047 4.37278C26.4212 3.87574 25.7996 3.87574 25.4162 4.37278L15.598 17.1004C15.4139 17.3391 15.3105 17.6628 15.3105 18.0003C15.3105 18.3378 15.414 18.6616 15.5981 18.9002L25.4163 31.6271C25.7996 32.1243 26.4213 32.1243 26.8047 31.6272Z"
//           fill="current"
//         />
//       </g>
//       <defs>
//         <clipPath id="clip0_385_267">
//           <rect
//             x="28"
//             width="36"
//             height="28"
//             rx="14"
//             transform="rotate(90 28 0)"
//             fill="white"
//           />
//         </clipPath>
//         <clipPath id="clip1_385_267">
//           <rect
//             x="32.0015"
//             y="3.99994"
//             width="28"
//             height="21.6"
//             rx="10.8"
//             transform="rotate(90 32.0015 3.99994)"
//             fill="white"
//           />
//         </clipPath>
//       </defs>
//     </motion.svg>
//   );
// };
