import React from "react";
import styles from "../styles/Market.module.scss";
import {
  Hero,
  About,
  Motives,
  Carousel,
  Info,
  Messenger,
  MobileMessenger
} from "../components/market-page";
import { motion } from "framer-motion";

export default function market() {

  const [lastYPos, setLastYPos] = React.useState(0);
  const [shouldShowActions, setShouldShowActions] = React.useState(false);

  React.useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      console.log(yPos);
      const isScrollingUp = yPos <= lastYPos;

      setShouldShowActions(isScrollingUp);
      setLastYPos(yPos);
    }

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);

  return (
    <motion.div
      className={styles.market}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />
      <About />
      <Motives />
      <Carousel />
      <Info />
      <Messenger />
      <MobileMessenger/>
    </motion.div>
  );
}
