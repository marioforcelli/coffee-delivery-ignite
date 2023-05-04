import { MapPinLine , CurrencyDollar} from 'phosphor-react'
import styles from './styles.module.scss'
import TextInput from '../../TextInput/TextInput'
import PaymentMethodSelect from '../PaymentMethodSelect/PaymentMethodSelect'
import { FormProvider, useForm } from 'react-hook-form'
import SelectedCoffees from '../SelectedCoffees/SelectedCoffees'

export default function CompleteOrderForm() {

  const confirmOrderForm = useForm()
    

  return (

    <div className={styles.container}>

      <div className={styles.formTitle}>
        <MapPinLine color='#C47F17' size={22}/>
        <h2>
            Endereço de Entrega
        </h2>
      </div>

      <h3>
      Informe o endereço onde deseja receber seu pedido
      </h3>
      <form className={styles.formWrapper}>
        <div className={styles.formrow}>
          <TextInput placeholder='CEP'/>
        </div>
        <div className={styles.formrow}>
          <TextInput placeholder='Rua/Logradouro' width={35}/>
        </div>
        <div className={styles.formrow} >
          <TextInput placeholder='Número'/>
          <TextInput placeholder='Complemento' isOptional width={21.75}/>
        </div>
        <div className={styles.formrow} >
          <TextInput placeholder='Bairro'/>
          <TextInput placeholder='Cidade' width={17.25}/>
          <TextInput placeholder='UF' width={3.75}/>
        </div>
      </form>
   


    </div>

    
  )
}