import React from 'react';
import Link from 'next/link';
import Layout from '../components/common/layout/Layout';
import styles from '../styles/thanks.module.scss';

import { IoMdCheckmark } from "@react-icons/all-files/io/IoMdCheckmark";
export default function thanks() {
  return (
    <Layout>
      <section className={styles.thanks__section}>
        <div className={styles.thanks__wrapper}>
          <div className={styles.thanks__body}>
              <div className={styles.thanks__icon_wrap}>
                  <IoMdCheckmark size="100" color='#2BB018'/>
              </div>
            <h3 className={styles.thanks__title}>Mulțumim, ai completat formularul cu succes.</h3>
            <h3 className={styles.thanks__subtitle}>
              În cel mai scurt timp posibil revenim cu informații și oferta personalizată.
            </h3>
            <Link href="/">
              <a className={styles.thanks__back_botton}>Pagina principală</a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
