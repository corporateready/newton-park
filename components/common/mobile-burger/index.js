import React from "react";
import styles from "./mobile-burger.module.scss";
import Image from "next/image";
import Link from "next/link";

import { Spin as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";

import home from "../../../public/static/common/web-home.svg";
import shopping from "../../../public/static/common/shoping.svg";
import restaurant from "../../../public/static/common/restaurant.svg";
import fast__food from "../../../public/static/common/fast-food.svg";
import big__retail from "../../../public/static/common/big-retail.svg";
import home__decor from "../../../public/static/common/home-decor.svg";
import medium__retail from "../../../public/static/common/medium-retail.svg";

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

  const [lastYPos, setLastYPos] = React.useState(0);
  const [shouldShowActions, setShouldShowActions] = React.useState(false);

  React.useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = yPos > 60;

      setShouldShowActions(isScrollingUp);
      setLastYPos(yPos);
    }

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);

  const togglerBurger = () => setToggle(!toggle);

  return (
    <>
      <motion.div
        className={styles.header__mobile}
        initial={{ x: -70, opacity: 0 }}
        animate={{
          x: shouldShowActions ? 0 : -70,
          opacity: 1,
          type: { duration: 0.3 },
        }}
        transition={{ opacity: { duration: 0.5 } }}
        onClick={togglerBurger}
      >
        <Hamburger
          toggled={toggle}
          setToggled={setToggle}
          color="#31414B"
          size={30}
          duration={0.8}
          distance="sm"
        />
        {toggle && (
          <motion.ul
            className={
              toggle ? styles.mobile__burger_inner : styles.mobile__burger_hide
            }
          >
            {burger__menu_items.map((item) => {
              return (
                <Link href={`${item.url}`}>
                  <motion.a
                  key={item.url}
                   className={styles.mobile__burger_item}
                   initial={{opacity: 0}}
                   animate={{opacity: 1, transition: {duration: 0.5}}}
                   transition={1}
                   >
                    <Image
                      src={item.icon}
                      height={30}
                      width={30}
                      alt={item.title}
                      priority
                    />
                  </motion.a>
                </Link>
              );
            })}
          </motion.ul>
        )}
        {/* </div> */}
      </motion.div>
    </>
  );
}
