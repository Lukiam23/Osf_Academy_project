import styles from './Header.module.css'
import MenuLateral from './MenuLateral'

function Header({img,alt}) {
	return (
		<header className={styles.headerContainer}>
			<MenuLateral />
			<h1>Rocket<span>Market</span></h1>
			<div className={styles.searchBox}>
				<input type="text" placeholder="Insira um pokémon" className={styles.headerSearchInput}/>
				<a className={styles.searchButton} href="#">
					<i class="fas fa-search"></i>
				</a>
			</div>
			
		</header>
	);
}

export default Header