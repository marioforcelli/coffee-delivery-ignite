import { FormProvider, useForm } from 'react-hook-form';
import SelectedCoffees from './SelectedCoffees/SelectedCoffees';
import PaymentMethodSelect from './PaymentMethodSelect/PaymentMethodSelect';
import AddressForm from './AddressForm/AddressForm';
import styles from './styles.module.scss'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'


export default function CompleteOrderForm () {


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


  const {handleSubmit, formState:{errors}, getValues} = confirmOrderForm

  return (
    <FormProvider {...confirmOrderForm} >

      <form onSubmit={handleSubmit(console.log(errors))}> 
        <div className={styles.formContainer}>
          <div className={styles.formLeft}>
            <AddressForm />
            <PaymentMethodSelect/>
          </div>

          <div className={styles.rightForm}>
            <SelectedCoffees />
          </div>
        </div>

      </form>
      



    </FormProvider>
    
    
        
      

  )
    
}