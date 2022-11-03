import React from 'react';
import styles from '../styles/Market.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router'
import { Hero, About, Motives, Carousel, Info, Messenger } from '../components/market-page';
import MobilePopUpMessenger from '../components/common/mobile-popup-messenger';
import ArrowdDownIcon from '../public/static/common/mobile-close-button.svg';
import x__close_btn from '../public/static/common/x-close-button.png';
import { motion } from 'framer-motion';
import Layout from '../components/common/layout/Layout';

const ArrowdDownComponent = () => <ArrowdDownIcon width={45} height={45} />;

export default function Market() {
  const [isSend, setIsSend] = React.useState(false)
  const [isVisibleMarket, setIsVisibleMarket] = React.useState(false);

  const router = useRouter()

  React.useEffect( () => {
    setTimeout(() => {
      return setIsVisibleMarket(true);
    }, 15000);
  }, []);

  React.useEffect(() => {
    if (isVisibleMarket) {
      return document.body.style.overflow = 'hidden';
    }
    if (!isVisibleMarket) {
      return document.body.style.overflow = 'auto';
    }
  }, [isVisibleMarket]);

  const handleFormSending = () => {
    setIsSend(true)
    if(isSend) {
    router.push('/thanks')}
  }

  return (
    <Layout>
      <motion.div
        className={styles.market}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}>
        <Hero />
        <About isVisible={isVisibleMarket}/>
        <Motives />
        <Carousel />
        <Info />
        <Messenger />
      </motion.div>
      {isVisibleMarket && (
          <div className={styles.popup}>
            <motion.div
              className={styles.popup__mobile}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}>
              <div className={styles.popup__desktop_container}>
                <div className={styles.popup__desktop_inner}>
                  <button
                    className={styles.popup__desktop_close_button}
                    onClick={() => setIsVisibleMarket(!isVisibleMarket)}>
                    <Image src={x__close_btn} width={21} height={21} />
                  </button>
                  <button
                    className={styles.popup__mobile_close_button}
                    onClick={() => setIsVisible(!isVisible)}>
                    <ArrowdDownComponent />
                  </button>
                  <h3 className={styles.popup__desktop_title}>
                    Solicită prezentarea Supermarket
                    <br />
                    <span className={styles.popup__title_mark}>NEWTON PARK</span> PDF
                  </h3>

                  <form 
                    className={styles.popup__desktop_form}
                    action="https://formsubmit.co/nev30inbox@gmail.com/"
                    method="POST"
                    >
                    <input type="email" placeholder="Adresa de email" required />
                    <input type="tel" placeholder="Numărul de telefon" required/>
                    <input type="hidden" name="_captcha" value="false"/>
                    <input type="hidden" name="_next" value="https://newtonpark.md/thanks"></input>
                    <button 
                      type="submit"
                      onClick={handleFormSending}
                      >Solicită prezentarea</button>
                  </form>

                  <div className={styles.according}>
                    <input type="checkbox" defaultChecked readOnly />
                    <label>
                      Sunt de acord cu{' '}
                      <Link href="/policy">
                        <a className={styles.according__link}>termenii și condițiile site-ului</a>
                      </Link>
                    </label>
                  </div>
                  <p className={styles.popup__bottom_subtitle}>Sau contactează-ne:</p>
                    <MobilePopUpMessenger />
                </div>
              </div>
            </motion.div>
          </div>
        )}
    </Layout>
  );
}
