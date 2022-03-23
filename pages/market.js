import React from "react";
import styles from "../styles/Market.module.scss";
import {
  Hero,
  About,
  Motives,
  Carousel,
  Info,
  Messenger,
} from "../components/market-page";
import { motion } from "framer-motion";

export default function market() {

  return (
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
  );
}
