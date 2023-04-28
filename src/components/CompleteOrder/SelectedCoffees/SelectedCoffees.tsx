import CompleteOrderForm from '../../../components/CompleteOrder/CompleteOrderForm/CompleteOrderForm';
import SelectedCoffeesCard from '../../../components/CompleteOrder/SelectedCoffees/SelectedCoffeesCard/SelectedCoffeesCard';
import QuantityInput from '../../../components/Home/QuantityInput/QuantityInput';
import TextInput from '../../../components/TextInput/TextInput';
import { CartContext, CartItemProps } from '../../../contexts/cart/index'
import { useContext } from 'react'


export default function SelectedCoffees ( ) {

  const { itemCart } = useContext(CartContext)

  return (
    <div>
      {itemCart.map((i, index) =>{
        return (
          <SelectedCoffeesCard coffee={i} key={index}/>
        )
      })}
    </div>
  
      

   
  )
}

