import styles from './MenuLateral.module.css'
import Tipo from './Tipo'


function MenuLateral() {
	return (
		<div className={styles.menuContainer}>
			<div className={styles.menuButton}>
				<span><i class="fas fa-bars"></i></span>
			</div>

			<nav className={styles.selectAble}>
				<Tipo tipo='Planta' />
				<Tipo tipo='Fogo' />
				<Tipo tipo='Água' />
				<Tipo tipo='Inseto' />
				<Tipo tipo='Normal' />
				<Tipo tipo='Venenoso' />
				<Tipo tipo='Elétrico' />
				<Tipo tipo='Terra' />
				<Tipo tipo='Pedra' />
				<Tipo tipo='Voador' />
				<Tipo tipo='Fantasma' />
				<Tipo tipo='Gelo' />
				<Tipo tipo='Dragão' />
				<Tipo tipo='Metálico' />
				<Tipo tipo='Sombrio' />
				<Tipo tipo='Fada' />
			</nav>
		</div>
		
	);
}

export default MenuLateral