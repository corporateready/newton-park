import React from "react";
import Image from "next/image";
import styles from "./Motives.module.scss";

import motive_1 from "../../../public/static/motives/motive_1.svg";
import motive_2 from "../../../public/static/motives/motive_2.svg";
import motive_3 from "../../../public/static/motives/motive_3.svg";
import motive_4 from "../../../public/static/motives/motive_4.svg";
import motive_5 from "../../../public/static/motives/motive_5.svg";
import motive_6 from "../../../public/static/motives/motive_6.svg";

const motives = [
  {
    id: 1,
    image: motive_1,
    title: "Acces direct din stradă",
  },
  {
    id: 2,
    image: motive_2,
    title: "Loc separat pentru livrare Ascensor de marfă la nivelul -1",
  },
  {
    id: 3,
    image: motive_3,
    title: "Open space Flexibilitate deplină în compartimente",
  },
  {
    id: 4,
    image: motive_4,
    title: "Scări rulante de la nivelul -2 până la parter și nivelul 1",
  },
  {
    id: 5,
    image: motive_5,
    title: "Sisteme inginerești de ultimă generație",
  },
  {
    id: 6,
    image: motive_6,
    title: "Toate spațiile se predau în variantă sură",
  },
];

export default function index() {
  return (
    <div className={styles.motives__section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          {/* <span className={styles.title__decor}>6 MOTIVE </span>DE CE UN
          SUPERMARKET
          <br /> ESTE CONVENABIL ȘI NECESAR*/}

          De ce unicul spațiu pretabil pentru supermarket 
          <br/> la <span className={styles.title__decor}>Newton Park</span> se potrivește afacerii tale
        </h2>
        <div className={styles.inner}>
          {motives.map((item) => {
            return (
              <div className={styles.motive} key={item.id}>
                <div className={styles.motive__wrapper}>
                  <div className={styles.motive__image}>
                    <Image src={item.image} width={321} height={168} />
                  </div>
                  <div className={styles.motive__title_wrapper}>
                    <h3 className={styles.motive__title}>{item.title}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
