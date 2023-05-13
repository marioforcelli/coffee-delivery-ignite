import { ReactNode, createContext, useEffect, useState } from 'react';
import { CoffeeProps } from '../../components/Home/CoffeeCard/CoffeCard';
import formatPrice from '../../helpers/formatPrice';
import { DELIVERY_FEE_VALUE } from '../../constants';


export interface CartItemProps extends CoffeeProps {
    quantity: number
}

interface CartProviverProps {
    
    addToCart : (coffee: CartItemProps) => void
    removeFromCart : (coffee: CartItemProps) => void
    updateQuantityItem : (coffee: CartItemProps, newQuantity: number) => void
    itemSum : (coffee: CartItemProps) => string
    sumTotal : (deliveryFee: boolean) => number
    itemCart: CartItemProps[]
 }

 interface CartContextProviderProps {
    children: ReactNode;
  }

const CartContext = createContext({} as CartProviverProps);


function CartContextProvider({children}: CartContextProviderProps) {
  const [itemCart, setItemCart] = useState<CartItemProps[]>([])

  useEffect(()=>{

    const storage = JSON.parse(localStorage.getItem('cart') || '')
    setItemCart(storage);
    
  },[])


  useEffect(()=>{
    if(itemCart.length){
      localStorage.setItem('cart', JSON.stringify(itemCart))
    }
    
  },[itemCart])

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

  const updateQuantityItem = (coffee: CartItemProps, newQuantity : number) => {
    const newCoffee = itemCart.map((i)=>{
      if(coffee.id === i.id) {
        return {...i, quantity: newQuantity}
      } 
      
      return {...i}

    })
    setItemCart(newCoffee)
  }

  const itemSum = (coffee: CartItemProps) => formatPrice(coffee.price * coffee.quantity)


  const sumTotal = (deliveryFee: boolean) => {
    if(deliveryFee){
      return itemCart.reduce((acc , current) =>{
        return acc + (current.price * current.quantity)
      }, DELIVERY_FEE_VALUE)

    } else {
      return itemCart.reduce((acc, current) =>{
        return Number(acc) + (current.price * current.quantity)
      }, 0)
    }


   
  }

  return(
    <CartContext.Provider value={{addToCart, itemCart, removeFromCart, updateQuantityItem, itemSum, sumTotal}}>
      {children}
    </CartContext.Provider>
  )

}

export {CartContextProvider, CartContext}