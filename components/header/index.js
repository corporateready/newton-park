import React from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";

import { Sling as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../../public/static/common/logo.svg";

import home from "../../public/static/common/web-home.svg";
import shopping from "../../public/static/common/shoping.svg";
import restaurant from "../../public/static/common/restaurant.svg";
import fast__food from "../../public/static/common/fast-food.svg";
import big__retail from "../../public/static/common/big-retail.svg";
import home__decor from "../../public/static/common/home-decor.svg";
import medium__retail from "../../public/static/common/medium-retail.svg";

const burger__menu_items = [
  {
    id: 0,
    icon: home,
    title: "home",
    url: "/",
    descripion: "newton park home",
  },
  {
    id: 1,
    icon: shopping,
    title: "supermarket",
    url: "/market",
    descripion: "newton park supermarket",
  },
  {
    id: 2,
    icon: restaurant,
    title: "restaurant",
    url: "/restaurant",
    descripion: "newton park restaurant",
  },
  {
    id: 3,
    icon: fast__food,
    title: "fast-food",
    url: "/fast-food",
    descripion: "newton park fast-food",
  },
  {
    id: 4,
    icon: big__retail,
    title: "big retail",
    url: "/big-retail",
    descripion: "newton park big retail",
  },
  {
    id: 5,
    icon: home__decor,
    title: "home decor",
    url: "/home-decor",
    descripion: "newton park home decor",
  },
  {
    id: 6,
    icon: medium__retail,
    title: "medium retail",
    url: "/medium-retail",
    descripion: "newton park medium retail",
  },
];

export default function index() {
  const [toggle, setToggle] = React.useState(false);


  const togglerBurger = () => setToggle(!toggle);

  return (
    <header
     className={styles.header}
     >
      <div className={styles.container}>
        <div className={styles.header__wrapper}>
          <div className={styles.burger__button} onClick={togglerBurger}>
            <Hamburger color="#fff" size={60} duration={0.8} distance="sm" />
          </div>
          <Link href="/">
            <a className={styles.logo}>
              <Image src={logo} height={39} width={75} alt="newton park logo" />
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
                            <Image
                              src={item.icon}
                              width={37}
                              height={25}
                              alt={item.descripion}
                            />
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
