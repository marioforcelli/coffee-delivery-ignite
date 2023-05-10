import styles from './styles.module.scss'
import {MapPin, CurrencyDollar, Clock} from 'phosphor-react'
import illustration from '../../assets/illustration.svg'

import { useLocation } from 'react-router-dom'

export default function ConfirmedOrder() {

  const location = useLocation()

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.pageTitle}>
          <h1>Uhu! Pedido confirmado</h1>
        </div>
        <div className={styles.subTitle}>
          <h2>Agora é só aguardar que logo o café chegará até você</h2>
         
        </div>
        <div className={styles.confirmedOrderDetails}>
          <div className={styles.detailsItem}>
            <div style={{backgroundColor: '#8047F8'}} className={styles.detailIcon}>
              <MapPin size={16} color='#FFF' weight='fill'/>
            </div>
            <p>
            Entrega em
              <strong>
                {` ${location.state?.street}, `} 
                {location.state?.number}
              </strong> 
              <br/> 
              {location.state?.neighborhood} - {`${location.state?.city}, `} {location.state?.state}
            </p>
          </div>

          <div className={styles.detailsItem}>
            <div style={{backgroundColor: '#DBAC2C'}} className={styles.detailIcon}>
              <Clock size={16} color='#FFF' weight='fill'/>
            </div>
            <p>
                Previsão de entrega <br/>
              <strong>20 min - 30 min</strong>
            </p>
          </div>

          <div className={styles.detailsItem}>
            <div style={{backgroundColor: '#C47F17'}} className={styles.detailIcon}>
              <CurrencyDollar size={16} color='#FFF' weight='fill'/>
            </div>
            
            <p>
                Pagamento na entrega <br/>
              <strong>Cartao de credito</strong>
            </p>
          </div>

          {location.state?.cep}
        </div>
      </div>
      <div className={styles.right}>
        <div>
          <img src={illustration}/>
        </div>
      </div>
    </div>
  )
}