import { ContextType, ReactComponentElement, ReactNode, createContext, useState } from 'react';
import { CoffeeProps } from '../../components/Home/CoffeeCard/CoffeCard';


export interface CartItemProps extends CoffeeProps {
    quantity: number
}

interface CartProviverProps {
    totalItems: number,
    addToCart : (coffee: CartItemProps) => void
    removeFromCart : (coffee: CartItemProps) => void
    updateCartItem : (coffee: CartItemProps, newQuantity: number) => void
    itemCart: CartItemProps[]
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


  const removeFromCart = ( coffee : CartItemProps) =>{
    const newCoffee = itemCart.filter((i)=>{
      if(coffee.id !== i.id) {
        return {...i}
      } 
      

    })
    setItemCart(newCoffee)  
  }

  const updateCartItem = (coffee: CartItemProps, newQuantity : number) => {
    const newCoffee = itemCart.map((i)=>{
      if(coffee.id === i.id) {
        return {...i, quantity: newQuantity}
      } 
      
      return {...i}

    })
    setItemCart(newCoffee)
  }

  return(
    <CartContext.Provider value={{addToCart, totalItems, itemCart, removeFromCart, updateCartItem}}>
      {children}
    </CartContext.Provider>
  )

}

export {CartContextProvider, CartContext}