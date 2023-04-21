import headerLogo from '../assets/header-logo.png'
import styles from './styles.module.scss'
import React from 'react'
import { ShoppingCart, MapPin } from 'phosphor-react'

export default function Header () { 
  return( 
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.headerLeft}>
          <img src={headerLogo} alt='image logo' className={styles.logo}/>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.localizationContent}>
            <MapPin weight='fill' className={styles.localIcon} size={22}/>
            <span className={styles.localization}>Osasco, SP</span>
          </div>
          <div className={styles.cart}> <ShoppingCart size={22} weight='fill' className={styles.iconCart}/></div>
        </div>
      </div>
      
    </header>
  )

}