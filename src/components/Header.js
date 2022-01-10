import styles from '../css/Header.module.css'

function Header({img,alt}) {
	return (
		
		<div className={styles.headerContainer}>
			<input type="checkbox" id={styles.check}/>
			<h1>Rocket<span>Market</span></h1>
			<div className={styles.searchBox}>
				<input type="text" placeholder="Insira um pokémon" className={styles.headerSearchInput}/>
				<a className={styles.searchButton}  href="#">
					<label for={styles.check}>
						<i class="fas fa-search"></i>
					</label>
				</a>
			</div>
			
		</div>
		
	);
}

export default Header