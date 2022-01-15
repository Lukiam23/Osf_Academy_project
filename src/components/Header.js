import React from "react";
import styles from '../css/Header.module.css'



function Header({img,alt,data}) {
	const [show, setShow] = React.useState(null);
	const [found, setFound] = React.useState(null);

	const options = () =>{
		let divInput = document.getElementById('headerSearchInput');
		if(divInput.value){
			setShow(true);
		} else {
			setShow(false)
		}		
		
		setFound(data.map((value,key) => {
			return <div><a className={styles.dataItem} href={value.nome}>{value.nome}</a></div>
		}));	
	}

	const searchName = () =>{
		let divInput = document.getElementById('headerSearchInput');
		setShow(false)
	}

	const visibleBox = {
		"height": "140px",
	};

	const visibleOptions = {
		"visibility": "visible",
	};

	return (
		
		<div className={styles.headerContainer}>
			<input type="checkbox" id={styles.check}/>
			<h1>Rocket<span>Market</span></h1>
			<div className={styles.searchBox}>
				<div id="box" className={styles.inputBox} style={ show ? visibleBox : {}}>
					<input type="text" id="headerSearchInput" onChange={options} placeholder="Insira um pokémon" className={styles.headerSearchInput}/>
					<div id="options" style={ show ? visibleOptions : {}} className={styles.options}>
						{found}
					</div>
				</div>
				<a className={styles.searchButton}  href="#">
					<label onClick={searchName} for={styles.check}>
						<i class="fas fa-search"></i>
					</label>
				</a>
				

			</div>
			
		</div>
		
	);
}

export default Header