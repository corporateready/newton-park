import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./messengers.module.scss";

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
  return (
    <div className={styles.messengers__section}>
      {messenger__items.map((item) => {
        return (
          <Link key={item.id} href="/">
            <a className={styles.messenger__item}>
              <Image
                src={item.image}
                className={styles.messenger__item_img}
                width={41}
                height={41}
                alt={item.description}
              />
            </a>
          </Link>
        );
      })}
    </div>
  );
}
