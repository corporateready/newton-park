import React from "react";
import Link from "next/link";
import styles from "./mobile-messengers.module.scss";
import { motion } from "framer-motion";

import MessengerButton from "../../../public/static/mobile-messenger/messenger";
import ViberButton from "../../../public/static/mobile-messenger/viber";
import PhoneButton from "../../../public/static/mobile-messenger/phone";
import TelegramButton from "../../../public/static/mobile-messenger/telegram";

const MessengerIcon = () => <MessengerButton width={38} height={38}/>
const ViberIcon = () => <ViberButton width={38} height={38}/>
const PhoneIcon = () => <PhoneButton width={38} height={38}/>
const TelegramIcon = () => <TelegramButton width={38} height={38}/>

const messenger__items = [
  {
    id: 1,
    image: <MessengerIcon/>,
    url: "",
    description: "messenger newton park",
  },
  { id: 2, image:<ViberIcon/>, url: "", description: "viber newton park" },
  { id: 3, image:<PhoneIcon/>, url: "", description: "phone newton park" },
  {
    id: 4,
    image: <TelegramIcon/>,
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
            {item.image}
            </a>
          </Link>
        );
      })}
      
    </motion.div>
  );
}
