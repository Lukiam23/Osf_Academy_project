import axios from 'axios'
import styles from '../css/Header.module.css'
import React, { useEffect } from "react";



function Header({baseURL}) {
	const [data, setData] = React.useState(null);
	const [show, setShow] = React.useState(null);
	const [found, setFound] = React.useState(null);
	const filterFunction = (nome, searchWord) => { return nome.includes(searchWord)}

	useEffect(() => {
		axios.get(baseURL)
		.then((res) => {
	    	setData(res.data);
	    });
	}, [show]);

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
		"width": "80%",

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