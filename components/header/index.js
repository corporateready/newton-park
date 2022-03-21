import React from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";

import logo from "../../public/static/common/logo.svg";
import burger from "../../public/static/common/burger-button.svg";

export default function index() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__wrapper}>
          <div className={styles.burger__button}>
            <Image src={burger} height={33} width={33} />
          </div>
          <Link href="/">
            <a className={styles.logo}>
              <Image src={logo} height={39} width={75} alt="newton park logo"/>
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
