import { useContext } from 'react'
import { DELIVERY_FEE_VALUE } from '../../../../constants'
import { CartContext } from '../../../../contexts/cart'
import formatPrice from '../../../../helpers/formatPrice'
import styles from './style.module.scss'


export default function CartTotal(){

  const { sumTotal} = useContext(CartContext)
  return (
    <div className={styles.container}>
      <div className={styles.totalPrice}>
        <span>Total de Itens</span>
        <span>R$ {formatPrice(sumTotal(false))}</span>
      </div>
      <div className={styles.deliveryFee}>
        <span>Entrega</span>
        <span>R$ {formatPrice(DELIVERY_FEE_VALUE)}</span>
      </div>
      <div className={styles.total}>
        <h2>Total</h2>
        <h2>R$ {formatPrice(sumTotal(true))}</h2>
      </div>
    </div>

  )
}