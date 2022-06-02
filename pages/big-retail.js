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
    setTimeout(() => {
      setIsVisible(true);
    }, 15000);
  }, []);

  React.useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    }
    if (!isVisible) {
      document.body.style.overflow = 'auto';
    }
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
        {isVisible && (
        <div className={styles.popup}>
          <motion.div
            className={styles.popup__mobile}
            initial={{ opacity: 0, y: 300}}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}>
            <div className={styles.popup__desktop_container}>
              <div className={styles.popup__desktop_inner}>
                <button
                  className={styles.popup__desktop_close_button}
                  onClick={() => setIsVisible(!isVisible)}>
                  <Image src={x__close_btn} width={21} height={21} />
                </button>
                <h3 className={styles.popup__desktop_title}>
                  Solicită prezentarea Big Retail
                  <br />
                  <span className={styles.popup__title_mark}>NEWTON PARK</span> PDF
                </h3>
                <form className={styles.popup__desktop_form}>
                  <input type="email" placeholder="Adresa de email" />
                  <input type="tel" placeholder="Numărul de telefon" />
                  <button type="submit">Solicită prezentarea</button>
                </form>
                <div className={styles.according}>
                  <input type="checkbox" checked/>
                  <label>
                    Sunt de acord cu{' '}
                    <Link href="/policy">
                      <a className={styles.according__link}>termenii și condițiile site-ului</a>
                    </Link>
                  </label>
                </div>
                <p className={styles.popup__bottom_subtitle}>Sau contactează-ne:</p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}>
                  <MobilePopUpMessenger />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
      </Layout>
    </>
  );
}
