import React from "react";
import Image from "next/image";
import logo from "../../public/static/preloader/NewtonPark-transparent.png";
import logo__webp from "../../public/static/preloader/NewtonPark-transparent.webp";
import styles from "./preloader.module.scss";

import { motion } from "framer-motion";

export default function index() {
  return (
    <section className={styles.preloader__section}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: {duration: 0.5} }}
        exit={{opacity: 0, transition: {duration: 0.5}}}
        className={styles.inner}
      >
        <Image
          src={logo}
          srcSet={logo__webp}
          width={497}
          height={248}
          alt="big newton park logo"
          priority
        />
      </motion.div>
    </section>
  );
}
