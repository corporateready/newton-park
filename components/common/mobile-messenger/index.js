import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./mobile-messengers.module.scss";
import { motion } from "framer-motion";

import messenger__icon from "../../../public/static/common/MESSENGER.svg";
import viber__icon from "../../../public/static/common/VIBER.svg";
import phone__icon from "../../../public/static/common/PHONE.svg";
import telegram__icon from "../../../public/static/common/TELEGRAM.svg";

const messenger__items = [
  {
    id: 1,
    image: messenger__icon,
    url: "",
    description: "messenger newton park",
  },
  { id: 2, image: viber__icon, url: "", description: "viber newton park" },
  { id: 3, image: phone__icon, url: "", description: "phone newton park" },
  {
    id: 4,
    image: telegram__icon,
    url: "",
    description: "telegram newton park",
  },
];

export default function index() {
  const [lastYPos, setLastYPos] = React.useState(0);
  const [shouldShowActions, setShouldShowActions] = React.useState(false);

  React.useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = yPos > lastYPos;

      setShouldShowActions(isScrollingUp);
      setLastYPos(yPos);
    }

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);

  return (
    <motion.div
      className={styles.messengers__section}
      initial={{ opacity: 0 }}
      animate={{ opacity: shouldShowActions ? 1 : 0 }}
      transition={{ opacity: { duration: 0.3 } }}
    >
      
      {messenger__items.map((item) => {
        return (
          <Link key={item.id} href="/">
            <a className={styles.messenger__item}>
              <Image
                src={item.image}
                width={58}
                height={58}
                alt={item.description}
              />
            </a>
          </Link>
        );
      })}
      
    </motion.div>
  );
}
