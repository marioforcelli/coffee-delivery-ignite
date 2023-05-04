import { FormProvider, useForm } from 'react-hook-form';
import SelectedCoffees from './SelectedCoffees/SelectedCoffees';
import PaymentMethodSelect from './PaymentMethodSelect/PaymentMethodSelect';
import AddressForm from './AddressForm/AddressForm';
import styles from './styles.module.scss'

export default function CompleteOrderForm () {

  const confirmOrderForm = useForm()
  return (
    <FormProvider {...confirmOrderForm}>
      <div className={styles.formContainer}>
        <div className={styles.formLeft}>
          <AddressForm />
          <PaymentMethodSelect/>
        </div>

        <div className={styles.rightForm}>
          <SelectedCoffees/>
        </div>
      </div>


    </FormProvider>

    
        
      

  )
    
}