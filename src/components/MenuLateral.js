import styles from '../css/MenuLateral.module.css'
import CheckBox from './CheckBox'


function MenuLateral() {
	function showTypes() {
		let element = document.getElementById('type');
		if(element.style.display === "block"){
			element.style.display = "none";
		} else{
			element.style.display = "block";
		}
		
	}

	function showPrices() {
		let element = document.getElementById('price');
		if(element.style.display === "block"){
			element.style.display = "none";
		} else{
			element.style.display = "block";
		}
		
	}

	return (
		<div className={styles.menuContainer}>
			<input type="checkbox" id={styles.menuIcon}></input>
			<div className={styles.menuButton}>
				<label for={styles.menuIcon}>
					<span><i class="fas fa-bars"></i></span>
				</label>
			</div>

			<div className={styles.selectAble}>
				<header>Menu</header>
				<nav>
					<a href="#" onClick={showTypes}>
						<span>Tipo</span>
					</a>

					<div id="type" className={styles.checkbox}>
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

					<a href="#" onClick={showPrices}>
						<span>Preço</span>
					</a>

					<div id="price" className={styles.checkbox}>
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
		</div>
		
	);
}

export default MenuLateral