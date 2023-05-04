
import SelectedCoffeesCard from '../../../components/CompleteOrderForm/SelectedCoffees/SelectedCoffeesCard/SelectedCoffeesCard';
import { CartContext } from '../../../contexts/cart/index'
import { useContext } from 'react'
import CartTotal from './CartTotal/CartTotal';
import styles from './styles.module.scss'

export default function SelectedCoffees ( ) {

  const { itemCart, totalItems} = useContext(CartContext)

  return (
    totalItems ? 
      <div className={styles.container}>
      
        { totalItems > 0 && 
       itemCart.map((i, index) =>{
         return (
           <SelectedCoffeesCard coffee={i} key={index}/>
         )
       })}
        <CartTotal/>
      </div>

      : 
      <div>
        <h2>Seu carrinho está vazio!</h2>
      </div>
      

   
  )
}

