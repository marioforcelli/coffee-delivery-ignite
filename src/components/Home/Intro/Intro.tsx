import styles from './styles.module.scss'
import React from 'react'
import coffeIntro from '../../../assets/coffee-intro.png'

import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

export default function Intro () {
  return (
    <section className={styles.introContainer}>
      <div className={styles.introContent}>
        <div className={styles.leftIntro}>
          <div className={styles.leftIntroTop}>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
          </div>
          <div className={styles.leftIntroBottom}>
            <div className={styles.benItem} >
              <div 
                style={{backgroundColor: '#C47F17'}} 
                className= {styles.benImg}>
                <ShoppingCart size={16} weight='fill' color='white' />
              </div>    
                            Compra simples e segura
            </div>
            <div className={styles.benItem} >
                            
              <div 
                style={{backgroundColor: '#DBAC2C'}} 
                className= {styles.benImg}>
                <Timer size={16} weight='fill' color='white' />
              </div>    
                            Entrega rápida e rastreada
            </div>
            <div className={styles.benItem} >
              <div 
                style={{backgroundColor: '#574F4D'}} 
                className= {styles.benImg}>
                <Package size={16} weight='fill' color='white' />
              </div>    
                            Embalagem mantém o café intacto
            </div>
            <div className={styles.benItem} >
              <div 
                style={{backgroundColor: '#8047F8'}} 
                className= {styles.benImg}>
                <Coffee size={16} weight='fill' color='white' />
              </div>    
                            O café chega fresquinho até você
            </div>
                        
          </div>
        </div>
        <div className={styles.rightIntro}>
          <img src={coffeIntro}/>
        </div>
                
      </div>
    </section>
  )
}