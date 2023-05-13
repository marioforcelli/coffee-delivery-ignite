import headerLogo from '../../assets/header-logo.png'
import styles from './styles.module.scss'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart'

export default function Header () { 
  
  const { itemCart } = useContext(CartContext)
  return( 
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.headerLeft}>
          <Link to={'/'}><img src={headerLogo} alt='image logo' className={styles.logo}/></Link>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.localizationContent}>
            <MapPin weight='fill' className={styles.localIcon} size={22}/>
            <span className={styles.localization}>Osasco, SP</span>
          </div>
          <Link to={'/complete-order'}>
            <div className={styles.cart}> 
              {itemCart.length > 0 && <span className={styles.cartlength}>{itemCart.length}</span>}
              <ShoppingCart size={22} weight='fill' className={styles.iconCart}/>
            </div>
            
          </Link> 
        </div>
      </div>
      
    </header>
  )

}