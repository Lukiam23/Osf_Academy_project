import axios from 'axios'
import styles from '../css/Header.module.css'
import React, { useEffect } from "react";




function Header({data}) {
	const [show, setShow] = React.useState(null);
	const [found, setFound] = React.useState(null);
	const filterFunction = (nome, searchWord) => { return nome.includes(searchWord)}

	const options = () =>{
		let divInput = document.getElementById('headerSearchInput');
		let searchWord = divInput.value;
		if(searchWord){
			setShow(true);
		} else {
			setShow(false)
		}		

		const newFilter = data.filter((value) => {
			return filterFunction(value.nome.toLowerCase(),searchWord.toLowerCase())
		});
		
		setFound(newFilter.map((value,key) => {
			return <div className={styles.dataItem}><a href={value.nome}><p>{value.nome}</p></a></div>
		}));	
	}

	const searchName = () =>{
		let divInput = document.getElementById('headerSearchInput');
		setShow(false)
	}

	const visibleBox = {
		"height": "140px",
		"width": "75%",

	};

	const visibleOptions = {
		"visibility": "visible",
	};


	return (
		
		<div className={styles.headerContainer}>
			<input type="checkbox" id={styles.check}/>
			<div className={styles.webTitle}>RocketMarket</div>
			<div className={styles.carButton}>
				<span><i class="fas fa-cart-plus"></i></span>
			</div>
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