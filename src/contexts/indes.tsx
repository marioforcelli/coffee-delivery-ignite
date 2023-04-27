import { ReactNode } from 'react'
import { CartContextProvider } from './cart/index'


function GlobalContext ( children: ReactNode) {
  return(
    <CartContextProvider >
      {children}
    </CartContextProvider>
  ) 

}