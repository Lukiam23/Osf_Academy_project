import styles from './MenuLateral.module.css'
import CheckBox from './CheckBox'


function MenuLateral() {
	return (
		<div className={styles.menuContainer}>
			<div className={styles.menuButton}>
				<span><i class="fas fa-bars"></i></span>
			</div>

			<nav className={styles.selectAble}>
				<header>Menu</header>

				<a href="#">
					<span>Filtrar por tipo</span>
				</a>

				<div className={styles.checkbox}>
					<CheckBox tipo='Planta' />
					<CheckBox tipo='Fogo' />
					<CheckBox tipo='Água' />
					<CheckBox tipo='Inseto' />
					<CheckBox tipo='Normal' />
					<CheckBox tipo='Venenoso' />
					<CheckBox tipo='Elétrico' />
					<CheckBox tipo='Terra' />
					<CheckBox tipo='Pedra' />
					<CheckBox tipo='Voador' />
					<CheckBox tipo='Fantasma' />
					<CheckBox tipo='Gelo' />
					<CheckBox tipo='Dragão' />
					<CheckBox tipo='Metálico' />
					<CheckBox tipo='Sombrio' />
					<CheckBox tipo='Fada' />		
				</div>

				<a href="#">
					<span>Filtrar por preço</span>
				</a>

				<div className={styles.checkbox}>
					<CheckBox tipo=' R$ 1000 - R$ 2000' />
					<CheckBox tipo=' R$ 2000 - R$ 4000' />
					<CheckBox tipo=' R$ 4000 - R$ 5000' />
					<CheckBox tipo=' R$ 6000 - R$ 7000' />
					<CheckBox tipo=' R$ 8000 - R$ 9000' />
					<CheckBox tipo=' R$ 10.000 - R$ 11.000' />
					<CheckBox tipo=' R$ 12.000 - R$ 13.000' />
					<CheckBox tipo=' R$ 13.000 - R$ 14.000' />
					<CheckBox tipo=' R$ 14.000 - R$ 15.000' />
					<CheckBox tipo=' R$ 15.000 - R$ 16.000' />
					<CheckBox tipo=' R$ 16.000 - R$ 17.000' />
					<CheckBox tipo=' R$ 17.000 - R$ 18.000' />
					<CheckBox tipo=' R$ 18.000 - R$ 19.000' />
					<CheckBox tipo=' R$ 19.000 - R$ 20.000' />
					<CheckBox tipo=' R$ 20.000 - R$ 21.000' />
					
				</div>

			</nav>
		</div>
		
	);
}

export default MenuLateral