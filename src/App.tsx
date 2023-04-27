import React from 'react'
import './styles/global.scss'
import { BrowserRouter, Outlet} from 'react-router-dom';
import AppRoutes from './routes/index';
import Header from './components/Header/Header';
import { CartContextProvider } from './contexts/cart';


function App() {

  return (
    <>
      <CartContextProvider>
        <Header/>
        <AppRoutes/>
      </CartContextProvider>
    </>
  )

}

export default App
