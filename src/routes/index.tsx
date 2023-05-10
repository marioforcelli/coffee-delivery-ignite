import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CompleteOrder from '../pages/CompleteOrder';
import ConfirmedOrder from '../pages/ConfirmedOrderPage'

export default function AppRoutes(){
  return(
    <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<CompleteOrder/>} path='/complete-order'/>
      <Route element={<ConfirmedOrder/>} path='confirmed-order'/>
    </Routes>
  )
}