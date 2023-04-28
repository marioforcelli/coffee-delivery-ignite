

import styles from './styles.module.scss'
import QuantityInput from '../../../Home/QuantityInput/QuantityInput'
import RemoveButton from '../../../RemoveButton/RemoveButton'
import formatPrice from '../../../../helpers/formatPrice'
import { Coffee } from '../../../Home/CoffeeCard/CoffeCard'
import { CartContext, CartItemProps } from '../../../../contexts/cart/index'
import { useContext } from 'react'


interface SelectedCoffeesProps{
    coffee : CartItemProps
}

export default function SelectedCoffeesCard ({coffee}: SelectedCoffeesProps) {

  const { removeFromCart, updateCartItem } = useContext(CartContext)



  const handleClick = () =>{
    removeFromCart(coffee)
  }

  const handlePlus = () => {
    updateCartItem(coffee, coffee.quantity + 1)
  }

  const handleMinus = () => {
    updateCartItem(coffee, coffee.quantity - 1)
  }

  return (
    <div className={styles.coffeList}>

      <div className={styles.coffeeItem}>
        <div className={styles.coffeeContent} >
          <img className={styles.coffeeImg} src={coffee.image}/>
          <div className={styles.coffeeDetail}>
            
            <div >{coffee.title}</div>
            <div className={styles.buttons}>
              <QuantityInput heightRem='2rem' quantity={coffee.quantity} onPlus={handlePlus} onMinus={handleMinus} />
              <RemoveButton handleClick={handleClick}/>
            </div>
            
                
          </div>
          <div>R${formatPrice(coffee.price)}</div>
        </div>
      </div>
    
    </div>
  )

  
}