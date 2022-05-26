import React from "react";
import styles from "../styles/Market.module.scss";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/common/layout/Layout";
import { Hero, About, Motives, Carousel, Info } from "../components/big-retail";
import { Messenger } from "../components/market-page";
import MobilePopUpMessenger from "../components/common/mobile-popup-messenger";
import arriw__down from "../public/static/home/close-button.png";
import x__close_btn from "../public/static/common/x-close-button.png";
import { motion } from "framer-motion";
import Head from "next/head";

export default function market() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (isVisible) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
    setTimeout(() => {
      setIsVisible(!isVisible);
    }, 15000);
  }, [isVisible]);

  return (
    <>
    <Head>
      <title>Newton Park | Big Retail</title>
    </Head>
      <Layout>
        <motion.div
          className={styles.market}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Hero />
          <About />
          <Motives />
          <Carousel />
          <Info />
          <Messenger />
        </motion.div>
      </Layout>
      {isVisible && (
        <motion.div
          className={styles.popup}
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          exit={{ y: 500, duration: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className={styles.popup__container}>
            <div className={styles.popup__inner}>
              <button
                className={styles.popup__close_button}
                onClick={() => setIsVisible(!isVisible)}
              >
                <Image src={arriw__down} width={45} height={40} />
              </button>
              <h3 className={styles.popup__title}>
                Solicită prezentarea Big Retail
                <br />
                <span className={styles.popup__title_mark}>
                  NEWTON PARK
                </span>{" "}
                PDF
              </h3>
              <form className={styles.popup__form}>
                <input type="email" placeholder="Adresa de email" />
                <input type="tel" placeholder="Numărul de telefon" />
                <button type="submit">Solicită prezentarea</button>
              </form>
              <p className={styles.popup__bottom_subtitle}>
                Sau contactează-ne:
              </p>
              {isVisible && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                >
                  <MobilePopUpMessenger />
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      )}
      {isVisible && (
        <motion.div
          className={styles.popup__desk}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className={styles.popup__desktop_container}>
            <div className={styles.popup__desktop_inner}>
              <button
                className={styles.popup__desktop_close_button}
                onClick={() => setIsVisible(!isVisible)}
              >
                <Image src={x__close_btn} width={21} height={21} />
              </button>
              <h3 className={styles.popup__desktop_title}>
                Solicită prezentarea Big Retail
                <br />
                <span className={styles.popup__title_mark}>
                  NEWTON PARK
                </span>{" "}
                PDF
              </h3>
              <form className={styles.popup__desktop_form}>
                <input type="email" placeholder="Adresa de email" />
                <input type="tel" placeholder="Numărul de telefon" />
                <button type="submit">Solicită prezentarea</button>
              </form>
              <div className={styles.according}>
                <input type="checkbox" />
                <label>
                  Sunt de acord cu{" "}
                  <Link href="/policy">
                    <a className={styles.according__link}>
                      termenii și condițiile site-ului
                    </a>
                  </Link>
                </label>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
