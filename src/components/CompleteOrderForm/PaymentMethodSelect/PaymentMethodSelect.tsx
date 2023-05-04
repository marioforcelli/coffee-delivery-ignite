import { useState } from 'react'
import styles from './styles.module.scss'
import {PAYMENT_METHOD_CASH, PAYMENT_METHOD_DEBIT, PAYMENT_METHOD_CREDIT} from '../../../constants'
import {useFormContext} from 'react-hook-form'
import {CreditCard, Bank, Money, CurrencyDollar} from 'phosphor-react'


export default function PaymentMethodSelect(){
  const [selectedOption, setSelectedOption] = useState('')

  const { setValue } = useFormContext()
  
  const handleChange = (e : React.FormEvent<HTMLInputElement>) => {setSelectedOption((e.target as HTMLTextAreaElement).value) 
    setValue('paymentMethods', selectedOption)
    console.log(e.target)
  }
  


  return (

    <div className={styles.container}>

      <div className={styles.formTitle}>
        <CurrencyDollar color='#8047F8' size={22}/>
        <h2>
          Pagamento
        </h2>
      </div>
      <h3>
        O pagamento é feito na entrega. Escolha a forma que deseja pagar
      </h3>

      <form className={styles.radioInputForm}>


        <div className={styles.option}>
          <input onChange={handleChange} id="credit" type='radio' value={PAYMENT_METHOD_CREDIT} checked={ selectedOption === PAYMENT_METHOD_CREDIT}/>
          <label htmlFor="credit" className={styles.method}>
            <div className={styles.method}>
              <CreditCard size={16} color='#8047F8'/>
        Cartão de crédito</div>

          </label>
        </div>

        <div className={styles.option} >
          <input onChange={handleChange} id="debit" type='radio' value={PAYMENT_METHOD_DEBIT} checked={ selectedOption === PAYMENT_METHOD_DEBIT }/>
          <label htmlFor="debit" className={styles.method} >
            <div className={styles.method} >
              <Bank size={16} color='#8047F8'/>
            Cartão de Débito
            </div>

          </label>

        </div>

        <div className={styles.option}>
          <input onChange={handleChange} id="cash" type='radio' value={PAYMENT_METHOD_CASH} checked={ selectedOption === PAYMENT_METHOD_CASH }/>
          <label htmlFor="cash" className={styles.method} >
            <div className={styles.method}>
              <Money size={16} color='#8047F8' />
           Dinheiro
            </div>

          </label>
        </div>



      </form>

    </div>
        
  )
}