import React from 'react'
import {coffees} from '../../assets/coffees'
import styles from './styles.module.scss'
import CoffeCard from '../CoffeeCard/CoffeCard'


export default function CoffeeList(){
  return (
    <div className={styles.coffeListContainer}> 
      {coffees.map((i) =>{
        return(
          <CoffeCard key={i.id} coffee={i}/>
        )
      })}

    </div>
  )
}