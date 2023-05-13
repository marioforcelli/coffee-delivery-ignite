import React from 'react'
import {Plus, Minus } from 'phosphor-react' 

import styles from './styles.module.scss'

interface QuantityInputProps {
    quantity : number,
    heightRem : string,
    onMinus : () => void
    onPlus : () => void
}



export default function QuantityInput({quantity, onMinus, onPlus, heightRem}: QuantityInputProps){
  return (
    <div style={{height: `${heightRem}`}} className={styles.inputContainer}>
      <button type='button' onClick={onMinus} disabled={quantity <= 1} className={styles.iconArea}>
        <Minus size={14} color={'#8047F8'}/>
      </button>
      <input type='number' readOnly value={quantity} />
      <button type='button' onClick={onPlus} className={styles.iconArea}>
        <Plus size={14} color={'#8047F8'}/>
      </button>
    </div>
  )
}