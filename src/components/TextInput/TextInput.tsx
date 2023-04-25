import styles from './styles.module.scss'


export interface TextInputProps {
    width?: number,
    isOptional?: boolean,
    placeholder : string
}

export default function TextInput( {width = 12.5, isOptional = false, placeholder} : TextInputProps
){
  return(
    <div style={{width : `${width}rem`}} className={styles.textInputArea}> 
      <input placeholder={placeholder} className={styles.textInput} type="text" />
      {isOptional ? <p className={styles.rightInputText}>Optional</p>: null}
    </div>
  )
}