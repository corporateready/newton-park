import React from "react";
import styles from "./footer.module.scss";
import Image from "next/image";
import logo from "../../public/static/common/logo-footer.svg";

export default function Index() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <h1 className={styles.description}>
            Toate drepturile rezervate NEWTON PARK © 2022.
          </h1>
          <div className={styles.logo__wrapper}>
            <Image src={logo} width={111} height={58} />
          </div>
        </div>
      </div>
    </footer>
  );
}
