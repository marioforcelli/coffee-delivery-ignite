import styles from './styles.module.scss'

export default function Intro () {
    return (
        <section className={styles.introContainer}>
             <div className={styles.introContent}>
                <div className={styles.leftIntro}>
                    <div className={styles.leftIntroTop}>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
                    </div>
                    <div className={styles.leftIntroBottom}>
                        <div>Compra simples e segura</div>
                        <div>Entrega rápida e rastreada</div>
                        <div>Embalagem mantém o café intacto</div>
                        <div>O café chega fresquinho até você</div>
                </div>
                </div>
                
  
             </div>
        </section>
    )
}