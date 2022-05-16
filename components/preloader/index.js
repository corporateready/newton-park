import React from "react";
import Image from "next/image";
import logo from "../../public/static/preloader/NewtonPark-transparent.png";
import styles from "./preloader.module.scss";

import { motion } from "framer-motion";

export default function index() {
  return (
    <section className={styles.preloader__section}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: {delay: 0.5, duration: 1} }}
        exit={{opacity: 0, transition: {delay: 1, duration: 1}}}
        className={styles.inner}
      >
        <Image
          src={logo}
          width={710}
          height={355}
          alt="big newton park logo "
        />
      </motion.div>
    </section>
  );
}
