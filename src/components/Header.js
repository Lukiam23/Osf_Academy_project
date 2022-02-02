import axios from 'axios'
import styles from '../css/Header.module.css'
import React, { useEffect } from "react";
import {BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom'

function Header({data, display, setDisplay}) {
	const [found, setFound] = React.useState(null);
	const filterFunction = (nome, searchWord) => { return nome.includes(searchWord)}
	const divInput = document.getElementById('headerSearchInput');
	let show = false;

	if(divInput){
		show = document.getElementById('headerSearchInput').value !== '';
	} 

	const transferWord = (nome) => {
		const newFilter = data.filter((value) => {
			return filterFunction(value.nome.toLowerCase(),nome.toLowerCase())
		});
		setDisplay(newFilter)
	}

	const options = () =>{
		let searchWord = divInput.value;	

		const newFilter = data.filter((value) => {
			return filterFunction(value.nome.toLowerCase(),searchWord.toLowerCase())
		});
		
		setFound(newFilter.map((value,key) => {
			return <div className={styles.dataItem} onClick={() => transferWord(value.nome)}><p>{value.nome}</p></div>
		}));	
	}

	const searchName = () =>{
		if(show){
			let searchWord = divInput.value;
			divInput.value = ''

			const newFilter = data.filter((value) => {
				return filterFunction(value.nome.toLowerCase(),searchWord.toLowerCase())
			});

			setDisplay(newFilter)
		}
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
			
				<Link to='car'>
					<button className={styles.carButton}>
						<span><i class="fas fa-cart-plus"></i></span>
					</button>
				</Link>

				<Link to='/'>
					<div className={styles.webTitle}>RocketMarket</div>
				</Link>

				<Outlet />

			<input type="checkbox" id={styles.check}/>
			
			
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