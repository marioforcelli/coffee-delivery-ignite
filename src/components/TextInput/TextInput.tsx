import { InputHTMLAttributes, forwardRef } from 'react'
import styles from './styles.module.scss'


export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {

    isOptional?: boolean,
    error? : string

}

// eslint-disable-next-line react/display-name
export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(({width = 12.5, isOptional = false, placeholder, error, ...props }, ref) =>{
  return(
    <div>
      <div style={{width : `${width}rem`}} className={styles.textInputArea}> 
        <input ref={ref} {...props} placeholder={placeholder} className={styles.textInput} />
        {isOptional ? <p className={styles.rightInputText}>Optional</p>: null}
      </div>
      { error && <p className={styles.errorMessage}>{error}</p> }
    </div>
  )
})
