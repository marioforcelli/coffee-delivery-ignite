import { MapPinLine } from 'phosphor-react'
import styles from './styles.module.scss'
import {TextInput} from '../../TextInput/TextInput'
import { useFormContext} from 'react-hook-form'

export interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}



export default function CompleteOrderForm() {

  const {register, formState} = useFormContext()

  const { errors } = formState as ErrorsType

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
      <div className={styles.formWrapper}>
        <div className={styles.formrow}>
          <TextInput error={errors.cep?.message} type='number' {...register('cep')} placeholder='CEP'/>
        </div>
        <div className={styles.formrow}>
          <TextInput error={errors.street?.message} {...register('street')} placeholder='Rua/Logradouro' width={35}/>
        </div>
        <div className={styles.formrow} >
          <TextInput error={errors.number?.message} {...register('number')} type='number' placeholder='Número'/>
          <TextInput error={errors.complement?.message} {...register('complement')} placeholder='Complemento' isOptional width={21.75}/>
        </div>
        <div className={styles.formrow} >
          <TextInput error={errors.neighborhood?.message} {...register('neighborhood')} placeholder='Bairro'/>
          <TextInput error={errors.city?.message} {...register('city')} placeholder='Cidade' width={17.25}/>
          <TextInput error={errors.state?.message} {...register('state')} placeholder='UF' width={3.75}/>
        </div>
      </div>
   


    </div>

    
  )
}