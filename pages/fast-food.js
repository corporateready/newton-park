import React from "react";
import styles from "../styles/Market.module.scss";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/common/layout/Layout";
import { Hero, About, Motives, Carousel, Info } from "../components/fast-food";
import { Messenger } from "../components/market-page";
import arriw__down from "../public/static/home/close-button.png";
import x__close_btn from "../public/static/common/x-close-button.png"; 
import { motion } from "framer-motion";

export default function market() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isDesktopVisible, setIsDesktopVisible] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
      setIsDesktopVisible(true);
    }, 15000);
  }, []);

  React.useEffect(() => {
    if (isDesktopVisible) {
      document.body.style.overflow = 'hidden'
    }
    if (!isDesktopVisible) {
      document.body.style.overflow = 'auto'
    }
  }, [isDesktopVisible])

  React.useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden'
    }
    if (!isVisible) {
      document.body.style.overflow = 'auto'
    }
  }, [isVisible])
  
  return (
   <>
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
      <Messenger/>
    </motion.div>
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
                Solicită prezentarea
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
            </div>
          </div>
        </motion.div>
      )}
      {isDesktopVisible && (
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
                onClick={() => setIsDesktopVisible(!isDesktopVisible)}
              >
                <Image src={x__close_btn} width={21} height={21} />
              </button>
              <h3 className={styles.popup__desktop_title}>
                Solicită prezentarea Fast-Food
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
    </Layout>
    
   </>
  );
}
