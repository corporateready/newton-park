import React from 'react'
import styles from '../styles/Market.module.scss'
import {Hero, About, Motives, Carousel, Info} from '../components/fast-food'

export default function market() {
  return (
    <div className={styles.market}>
        <Hero/>
        <About/>
        <Motives/>
        <Carousel/>
        <Info/>
    </div>
  )
}