import React from "react";
import styles from "./Layout.module.scss";
import HomeLogo from "../../../components/svg/home/logo";
import FooterLogo from "../../svg/logo-footer";
import { Divide as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";

import Home from "../../../components/svg/burger-menu/home";
import Market from "../../../components/svg/burger-menu/market";
import Restaurant from "../../../components/svg/burger-menu/restaurant";
import FastFood from "../../../components/svg/burger-menu/fast-food";
import BigRetail from "../../../components/svg/burger-menu/big-retail";
import HomeDecor from "../../../components/svg/burger-menu/home-decor";
import MediumRetail from "../../../components/svg/burger-menu/medium-retail";
import Link from "next/link";
import { MobileMessenger } from "../../../components/market-page";

const HomeLogoIcon = () => <HomeLogo width={109} height={57} />

const FooterLogoIcon = () => <FooterLogo width={109} height={57} />

const HomeIcon = () =>  <Home width={33} height={33} />

const MarketIcon = () => <Market width={30} height={30} />

const RestaurantIcon = () => <Restaurant width={30} height={30} />;

const FastFoodIcon = () => <FastFood width={30} height={30} />

const BigRetailIcon = () => <BigRetail width={30} height={30} />

const HomeDecorIcon = () =>  <HomeDecor width={30} height={30} />

const MediumRetailIcon = () => <MediumRetail width={30} height={30} />

const nav__items = [
  { path: "/", icon: <HomeIcon />, title: "home", id: 1 },
  { path: "/market", icon: <MarketIcon />, title: "supermarket", id: 2 },
  { path: "/restaurant", icon: <RestaurantIcon />, title: "restaurant", id: 3 },
  { path: "/fast-food", icon: <FastFoodIcon />, title: "fast-food", id: 4 },
  { path: "/big-retail", icon: <BigRetailIcon />, title: "big retail", id: 5 },
  { path: "/home-decor", icon: <HomeDecorIcon />, title: "home decor", id: 6 },
  {
    path: "/medium-retail",
    icon: <MediumRetailIcon />,
    title: "medium retail",
    id: 7
  },
];

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
  }, []);

  return (
    <div className={styles.layout}>
      <motion.header className={scroll ? styles.header__active : styles.header}>
        <div className={styles.header__container}>
          <div className={styles.header__inner}>
            <button className={styles.header__button_menu} type="button">
              <Hamburger
                className={styles.hamburger__react}
                toggled={isOpen}
                toggle={setIsOpen}
                size={35}
                color="#fff"
                label="Show menu"
              />
            </button>
            <button className={styles.header__button_menu_mob} type="button">
              <Hamburger
                className={styles.hamburger__react}
                toggled={isOpen}
                toggle={setIsOpen}
                size={30}
                color="#fff"
                label="Show menu"
              />
            </button>
            <div className={styles.header__logo_wrapper}>
              <HomeLogoIcon />
            </div>
          </div>
          {/* ===== Desktop Burger Menu ===== */}
          {isOpen && (
            <div className={styles.desktop__burger__menu}>
              <div className={styles.burger__inner}>
                {nav__items.map((item) => (
                  <Link href={item.path} key={item.id}>
                    <a className={styles.burger__item}>
                      <div className={styles.burger__icon}>{item.icon}</div>
                      <h4 className={styles.burger__title}>{item.title}</h4>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* ===== Mobile Burger Menu ===== */}
        {isOpen && (
          <div className={styles.mobile__burger__menu}>
            <div className={styles.burger__inner}>
              {nav__items.map((item) => (
                <Link href={item.path} key={item.id}>
                  <a className={styles.burger__item}>
                    <div className={styles.burger__icon}>{item.icon}</div>
                    <h4 className={styles.burger__title}>{item.title}</h4>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        )}
      </motion.header>
      {children}
      <footer className={styles.footer}>
        <div className={styles.header__container}>
          <div className={styles.header__inner}>
            <p className={styles.footer__copy}>
              Toate drepturile rezervate NEWTON PARK © 2021.
            </p>
            <div className={styles.header__logo_wrapper}>
              <FooterLogoIcon />
            </div>
          </div>
        </div>
      </footer>
      <MobileMessenger />
    </div>
  );
}
