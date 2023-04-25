import React from 'react'
import './styles/global.scss'
import { BrowserRouter, Outlet} from 'react-router-dom';
import AppRoutes from './routes/index';
import Header from './components/Header/Header';


function App() {

  return (
    <>
      <Header/>
      <AppRoutes/>
    </>
  )

}

export default App
