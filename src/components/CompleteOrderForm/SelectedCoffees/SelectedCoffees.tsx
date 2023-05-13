
import SelectedCoffeesCard from '../../../components/CompleteOrderForm/SelectedCoffees/SelectedCoffeesCard/SelectedCoffeesCard';
import { CartContext } from '../../../contexts/cart/index'
import { useContext } from 'react'
import CartTotal from './CartTotal/CartTotal';
import styles from './styles.module.scss'





export default function SelectedCoffees ( ) {

  const { itemCart} = useContext(CartContext)

  return (
    itemCart.length ? 
      <div className={styles.container}>
      
        { 
          itemCart.map((i, index) =>{
            return (
              <SelectedCoffeesCard coffee={i} key={index}/>
            )
          })}
        <CartTotal/>

        <button type='submit' 
          className={styles.submitBtn}>Confirmar Pedido
        </button>
      </div>

      : 
      <div>
        <h2>Seu carrinho está vazio!</h2>
      </div>
      

   
  )
}

