import React from "react";
import Head from "next/head";
// import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.scss";

export default function index() {
  return (
    <>
      <Head>
        <title>Newton Park | Sypermarket</title>
      </Head>

      <section className={styles.home}>
        <div className={styles.home__bg}>
          <div className={styles.home__shadow}></div>
          <div className={styles.home__shadow_up}></div>
          <div className={styles.container}>
            <div className={styles.inner}>
              <h1 className={styles.title}>Unicul Supermarket</h1>
              <p className={styles.NP__decor_title}>NEWTON PARK</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
