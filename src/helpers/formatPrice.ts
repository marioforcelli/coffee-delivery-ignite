export default function formatPrice(value : number){
  return value.toLocaleString('pt-BR', {minimumSignificantDigits: 3} )
}