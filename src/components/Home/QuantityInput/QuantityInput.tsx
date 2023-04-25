import React from 'react'
import {Plus, Minus } from 'phosphor-react' 

import styles from './styles.module.scss'

interface QuantityInputProps {
    quantity : number,
    onMinus : () => void
    onPlus : () => void
}



export default function QuantityInput({quantity, onMinus, onPlus}: QuantityInputProps){
  return (
    <div className={styles.inputContainer}>
      <button onClick={onMinus} disabled={quantity <= 1} className={styles.iconArea}>
        <Minus size={14} color={'#8047F8'}/>
      </button>
      <input type='number' readOnly value={quantity} />
      <button onClick={onPlus} className={styles.iconArea}>
        <Plus size={14} color={'#8047F8'}/>
      </button>
    </div>
  )
}