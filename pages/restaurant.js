import React from "react";
import styles from "../styles/Market.module.scss";
import Layout from "../components/common/layout/Layout";
import { Hero, About, Motives, Carousel, Info } from "../components/restaurant";
import { motion } from "framer-motion";

export default function market() {
  return (
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
      </motion.div>
    </Layout>
  );
}
