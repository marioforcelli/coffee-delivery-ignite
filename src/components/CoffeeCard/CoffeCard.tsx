import React from 'react'
import styles from './styles.module.scss'
import formatPrice from '../../helpers/formatPrice'


interface CoffeeProps {
    id: number,
    title: string,
    tags: string[],
    price: number,
    image: string,
    description: string

}

interface Coffee {
    coffee : CoffeeProps
}

export default function CoffeCard({coffee }: Coffee ){
  return (
    <> 

      <div className={styles.cardContainer}>
        <div className={styles.cardContent}>
          <div className={styles.cardTop}>
            <div style={{background: `url(${coffee.image}) no-repeat top`, position: 'absolute'}} className={styles.topImg}/>
          </div>
          <div className={styles.tags}>
            {coffee.tags.map((tag=>{
              return(<span className={styles.tagDescription} key={`${coffee.id}_tag`}>{tag}</span>)
            }))}
          </div> 
          <div className={styles.titleArea}>
            <h2 className={styles.titleText} > {coffee.title}</h2>
          </div>
          <div className={styles.descArea}>
            <h3 className={styles.descText} > {coffee.description}</h3>
          </div>
          <div className={styles.cardBottom}>
            <div>
              <span className={styles.coin}>R$</span>
              <span className={styles.price}> {formatPrice(coffee.price)}</span> </div>
            <div>
              <input type='number'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}