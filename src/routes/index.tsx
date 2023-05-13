import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import CompleteOrder from '../pages/CompleteOrder/CompleteOrder';
import ConfirmedOrder from '../pages/ConfirmedOrder/ConfirmedOrderPage'

export default function AppRoutes(){
  return(
    <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<CompleteOrder/>} path='/complete-order'/>
      <Route element={ <ConfirmedOrder/>} path='confirmed-order'/>
    </Routes>
  )
}