import { ContextType, ReactComponentElement, ReactNode, createContext, useState } from 'react';
import { CoffeeProps } from '../../components/Home/CoffeeCard/CoffeCard';


interface CartItemProps extends CoffeeProps {
    quantity: number
}

interface CartProviverProps {
    items?: CartItemProps[]
    totalItems: number,
    addToCart : (coffee: CartItemProps) => void
 }

 interface CartContextProviderProps {
    children: ReactNode;
  }

const CartContext = createContext({} as CartProviverProps);


function CartContextProvider({children}: CartContextProviderProps) {
  const [itemCart, setItemCart] = useState<CartItemProps[]>([])
  const totalItems = itemCart.length


  const addToCart = (coffee : CartItemProps) =>{
    const isAlreadyOnCart = itemCart.some((i) => i.id === coffee.id)

    if(itemCart.length && isAlreadyOnCart) {
      
      const newCoffee = itemCart.map((i)=>{
        if(coffee.id === i.id) {
          return {...i, quantity: i.quantity + coffee.quantity}
        } 
        
        return {...i}

      })
      setItemCart(newCoffee)  
      
    } else { 
      setItemCart([...itemCart, coffee])  
    }
  }

  return(
    <CartContext.Provider value={{addToCart, totalItems}}>
      {children}
    </CartContext.Provider>
  )

}

export {CartContextProvider, CartContext}