import React from "react";
import styles from '../css/Header.module.css'



function Header({img,alt}) {
	const [show, setShow] = React.useState(null);

	const options = () =>{
		let divInput = document.getElementById('headerSearchInput');

		if(divInput.value){
			setShow(true);
		} else {
			setShow(false)
		}		
	}

	const searchName = () =>{
		let divInput = document.getElementById('headerSearchInput');
		setShow(false)
	}

	const visibleBox = {
		"padding": "0px 20px 20px 20px",
		"border-radius": "10px 10px",
		"box-shadow": "0px 4px 8px 0px rgba(1,0,0,.8)", 
		"height": "200px",
		"background": "white",
		"width": "240px",
		"height": "100px",
		"margin-right" : "10px"
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