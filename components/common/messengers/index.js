import React from "react";
// import Image from "next/image";
import Link from "next/link";
import styles from "./messengers.module.scss";

import MessengerButton from "../../../public/static/common/MESSENGER.svg";
import ViberButton from "../../../public/static/common/VIBER.svg";
import PhoneButton from "../../../public/static/common/PHONE.svg";
import TelegramButton from "../../../public/static/common/TELEGRAM.svg";
// import { Messenger } from "../../market-page";

const MessengerIcon = () => <MessengerButton width={28} height={28}/>
const ViberIcon = () => <ViberButton width={27} height={29}/>
const PhoneIcon = () => <PhoneButton width={24} height={24}/>
const TelegramIcon = () => <TelegramButton width={29} height={24}/>

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
  return (
    <div className={styles.messengers__section}>
      {messenger__items.map((item) => {
        return (
          <Link key={item.id} href="/">
            <a className={styles.messenger__item}>
            {item.image}
            </a>
          </Link>
        );
      })}
    </div>
  );
}
