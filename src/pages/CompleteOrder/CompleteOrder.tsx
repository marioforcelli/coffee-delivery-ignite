import { FormProvider, useForm } from 'react-hook-form';
import SelectedCoffees from '../../components/CompleteOrderForm/SelectedCoffees/SelectedCoffees'
import PaymentMethodSelect from '../../components/CompleteOrderForm/PaymentMethodSelect/PaymentMethodSelect';
import AddressForm from '../../components/CompleteOrderForm/AddressForm/AddressForm';
import styles from './styles.module.scss'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart';


export default function CompleteOrderForm () {

  const navigate = useNavigate()
  const { cleanCart } = useContext(CartContext)

  const addressSchema = yup.object({
    cep: yup.string().required('CEP não pode ser vazio'),
    street: yup.string().required('Rua não pode ser vazio'),
    number: yup.string().required('Número não pode ser vazio'),
    complement: yup.string().optional(),
    neighborhood: yup.string().required('Bairro não pode ser vazio'),
    city: yup.string().required('Cidade não pode ser vazio'),
    state: yup.string().min(2, 'Precisa ter exatos 2 caracteres').max(2, 'Precisa ter exatos 2 caracteres').required('UF não pode ser vazio'),
    paymentMethods : yup.string().required('Necessário selecionar um tipo de pagamento')

  })


  const confirmOrderForm = useForm({resolver : yupResolver(addressSchema)})

  

  const formSubmit = () => {

    cleanCart();

    navigate('/confirmed-order', {
      state: {
        street: watchFields.street,
        number: watchFields.number,
        state: watchFields.state,
        city: watchFields.city,
        paymentMethods: watchFields.paymentMethods,
        neighborhood: watchFields.neighborhood

      } })
  }


  const {handleSubmit, watch } = confirmOrderForm
  const watchFields = watch()

  return (
    <FormProvider {...confirmOrderForm} >

      <form onSubmit={handleSubmit(formSubmit)}> 
        <div className={styles.formContainer}>
          <div className={styles.formLeft}>
            <h1 className={styles.formTitle}>Complete seu pedido</h1>
            <AddressForm />
            <PaymentMethodSelect/>
          </div>

          <div className={styles.rightForm}>
            <h1 className={styles.formTitle}>Cafés selecionados</h1>
            <SelectedCoffees />
          </div>
        </div>

      </form>
      



    </FormProvider>
    
    
        
      

  )
    
}