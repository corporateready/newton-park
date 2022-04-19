import React from "react";
import styles from "./footer.module.scss";
import Image from "next/image";
import Link from "next/link";
// import logo from "../../public/static/common/logo-footer.svg";
import HomeLogo from "../../public/static/common/logo-footer.svg";
import HomeLogoMobile from "../../public/static/common/logo-footer-mob.svg";

const HomeLogoIcon = () => <HomeLogo width={111} height={57} />;
const HomeLogoMobileIcon = () => <HomeLogoMobile width={58} height={30} />;

export default function Index() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <h1 className={styles.description}>
            Toate drepturile rezervate NEWTON PARK © 2022.
          </h1>
          <Link href="/">
            <a className={styles.logo__wrapper}>
              <HomeLogoIcon />
            </a>
          </Link>
          <Link href="/">
            <a className={styles.logo__wrapper_m}>
              <HomeLogoMobileIcon />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
