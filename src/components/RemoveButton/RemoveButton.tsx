
import {Trash } from 'phosphor-react'
import styles from './style.module.scss'
import { Coffee, CoffeeProps } from '../Home/CoffeeCard/CoffeCard'
import { CartItemProps } from '../../contexts/cart'

interface RemoveButton { 
  handleClick: () => void
}


export default function RemoveButton ({handleClick} : RemoveButton) {
  return(
    <div className={styles.container}>
      <button onClick={handleClick} className={styles.removeBtn}>
        <Trash size={16} color='#8047F8'/>
                REMOVER
      </button>
    </div>
  )
}