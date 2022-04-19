import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";

import { Sling as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";

import HomeLogo from "../../components/svg/home/logo";

import Home from "../../public/static/burger-menu/home-mobile.svg";
import Market from "../../public/static/burger-menu/market-mobile.svg";
import Restaurant from "../../public/static/burger-menu/restaurant-mobile.svg";
import FastFood from "../../public/static/burger-menu/fast-food-mobile.svg";
import BigRetail from "../../public/static/burger-menu/big-retail-mobile.svg";
import HomeDecor from "../../public/static/burger-menu/home-decor-mobile.svg";
import MediumRetail from "../../public/static/burger-menu/medium-retail-mobile.svg";

const HomeLogoIcon = () => <HomeLogo width={109} height={57} />

const HomeIcon = () => <Home width={24} height={24} objectFit={'cover'}/>
const MarketIcon = () => <Market width={21} height={21} />
const RestaurantIcon = () => <Restaurant width={21} height={21} />
const FastFoodIcon = () => <FastFood width={21} height={21} />
const BigRetailIcon = () => <BigRetail width={21} height={21} />
const HomeDecorIcon = () => <HomeDecor width={21} height={21} />
const MediumRetailIcon = () => <MediumRetail width={21} height={21} />

const burger__menu_items = [
  {
    id: 0,
    icon: <HomeIcon/>,
    title: "home",
    url: "/",
    descripion: "newton park home",
  },
  {
    id: 1,
    icon: <MarketIcon/>,
    title: "supermarket",
    url: "/market",
    descripion: "newton park supermarket",
  },
  {
    id: 2,
    icon: <RestaurantIcon/>,
    title: "restaurant",
    url: "/restaurant",
    descripion: "newton park restaurant",
  },
  {
    id: 3,
    icon: <FastFoodIcon/>,
    title: "fast-food",
    url: "/fast-food",
    descripion: "newton park fast-food",
  },
  {
    id: 4,
    icon: <BigRetailIcon/>,
    title: "big retail",
    url: "/big-retail",
    descripion: "newton park big retail",
  },
  {
    id: 5,
    icon: <HomeDecorIcon/>,
    title: "home decor",
    url: "/home-decor",
    descripion: "newton park home decor",
  },
  {
    id: 6,
    icon: <MediumRetailIcon/>,
    title: "medium retail",
    url: "/medium-retail",
    descripion: "newton park medium retail",
  },
];

export default function index() {
  const [toggle, setToggle] = React.useState(false);

  const togglerBurger = () => setToggle(!toggle);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__wrapper}>
          <div className={styles.burger__button} onClick={togglerBurger}>
            <Hamburger color="#fff" duration={0.8} distance="sm" />
          </div>
          <Link href="/">
            <a className={styles.logo}>
              <HomeLogoIcon />
              {/* <Image src={logo} height={39} width={75} alt="newton park logo" /> */}
            </a>
          </Link>
        </div>
      </div>
      <motion.div
        className={toggle ? styles.burger__menu : styles.burger__menu_hide}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <nav className={styles.burger__inner}>
          <ul className={styles.burger__items}>
            {burger__menu_items.map((item) => {
              return (
                <AnimatePresence>
                  {toggle && (
                    <Link href={item.url}>
                      <a>
                        <motion.li
                          className={styles.burger__item}
                          key={item.id}
                          while={{ opacity: 1 }}
                          whileHover={{ x: -15}}
                          initial={{ x: -30, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className={styles.burger__item_image}>
                            {item.icon}
                          </div>
                          <div className={styles.burger__item_title}>
                            {item.title}
                          </div>
                        </motion.li>
                      </a>
                    </Link>
                  )}
                </AnimatePresence>
              );
            })}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
