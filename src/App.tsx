import React from 'react'
import Header from './components/Header/Header'
import './styles/global.scss'
import Intro from './components/Intro/Intro'
import CoffeeList from './components/CoffeeList/CoffeeList'

function App() {

  return (
    <>
      <Header/>
      <Intro/>
      <CoffeeList/>
    </>
  )
}

export default App
