import americano from './americano.png'
import expresso from './expresso.png'
import expresso_cremoso from './expresso_cremoso.png'
import expresso_gelado from './cafe_gelado.png'
import cafe_com_leite from './cafe_com_Leite.png'
import latte from './latte.png'
import cappucino from './capuccino.png'
import macchiato from './macchiato.png'
import mochaccino from './mochaccino.png'
import chocolate_quente from './choc_quente.png'
import cubano from './cubano.png'
import havaiano from './havaiano.png'
import arabe from './arabe.png'
import irlandes from './irlandes.png'


export const coffees = [
  {
    id: 1,
    title: 'Expresso Tradicional',
    image : americano,
    description : 'O tradicional café feito com água quente e grãos moídos',
    tags : ['Tradicional'],
    price: 9.90
  },
  {
    id: 2,
    title: 'Expresso Americano',
    image : expresso,
    description : 'Expresso diluído, menos intenso que o tradicional',
    tags : ['Tradicional'],
    price: 9.90
  },
  {
    id: 3,
    title: 'Expresso Cremoso',
    image : expresso_cremoso,
    description : 'Café expresso tradicional com espuma cremosa',
    tags : ['Tradicional'],
    price: 9.90
  },
  {
    id: 4,
    title: 'Expresso Gelado',
    image : expresso_gelado,
    description : 'Bebida preparada com café expresso e cubos de gelo',
    tags : ['Tradicional', 'Gelado'],
    price: 9.90
  },
  {
    id: 5,
    title: 'Café com Leite',
    image : cafe_com_leite,
    description : 'Meio a meio de expresso tradicional com leite vaporizado',
    tags : ['Tradicional', 'com leite'],
    price: 9.90
  },
  {
    id: 6,
    title: 'Latte',
    image : latte,
    description : 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tags : ['Tradicional', 'com leite'],
    price: 9.90
  },
  {
    id: 7,
    title: 'Cappucino',
    image : cappucino,
    description : 'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags : ['Tradicional', 'com leite'],
    price: 9.90
  },
  {
    id: 8,
    title: 'Macchiato',
    image : macchiato,
    description : 'Café expresso misturado com um pouco de leite quente e espuma',
    tags : ['Tradicional', 'com leite'],
    price: 9.90
  },
  {
    id: 9,
    title: 'Mocaccino',
    image : mochaccino,
    description : 'Café expresso com calda de chocolate, pouco leite e espuma',
    tags : ['Tradicional', 'com leite'],
    price: 9.90
  },
  {
    id: 10,
    title: 'Chocolate Quente',
    image : chocolate_quente,
    description : 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags : ['especial', 'com leite'],
    price: 9.90
  },
  {
    id: 11,
    title: 'Cubano',
    image : cubano,
    description : 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags : ['especial', 'alcoólico', 'gelado'],
    price: 9.90
  },
  {
    id: 12,
    title: 'Havaiano',
    image : havaiano,
    description : 'Bebida adocicada preparada com café e leite de coco',
    tags : ['especial'],
    price: 9.90
  },
  {
    id: 13,
    title: 'Árabe',
    image : arabe,
    description : 'Bebida preparada com grãos de café árabe e especiarias',
    tags : ['especial'],
    price: 9.90
  },
  {
    id: 15,
    title: 'Irlandês',
    image : irlandes,
    description : 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tags : ['especial', 'alcoólico'],
    price: 9.90
  },
]

