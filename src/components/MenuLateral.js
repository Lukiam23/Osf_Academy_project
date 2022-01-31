import axios from 'axios'
import styles from '../css/MenuLateral.module.css'
import CheckBox from './CheckBox'
import React, { useEffect } from "react";
import {Link} from 'react-router-dom'
import {useAppContext} from './AppContextProvider'

function MenuLateral({filtro, setFiltro, data, display, setDisplay}) {
	const {saldo, setSaldo} = useAppContext();
	const [state, setState] = React.useState(null);

	useEffect(() => {setFiltro({})},[]);

	//value virá do nosso state
	//selected é um obj que possui os tipos selecionados
	
	const seletionType = (value, selected) => {
		let matchType = false;
		
		const comparer = (key) => key.split(' ')[0] === 'R$' || key.split(' ')[0] !== 'R$' && !selected[key]
		let display = Object.keys(selected).every(comparer)

		if (display) return true; //Se não há nenhum tipo selecionado retorna true
		value.tipo.split(' ').forEach( type =>{
			let selectedType = selected[type];
			if(selectedType && !matchType){
				matchType = true;
			} 
		})
		
		//só são aceitos pokemons que estão no tipo passado
		return matchType 
	}

	const seletionPrice = (value, selected) =>{
		let matchPrice = false;

		const comparer = (key) => key.split(' ')[0] !== 'R$' || key.split(' ')[0] === 'R$' && !selected[key]
		let display = Object.keys(selected).every(comparer)
		if (display) return true; //Se não há nenhum intervalo de preço selecionado retorna true

		Object.keys(selected).forEach( item =>{
			if (selected[item]){
				let array = item.split(' ');
				if(array[0] === 'R$' && !matchPrice){
					let range = array.filter(string => !isNaN(string)).map(string => Number(string));
					if(range[0] < value.preco && value.preco <= range[1]){
						matchPrice = true;
					}
				}
			}
		})

		//só são aceitos pokemons que estão no intervalo de preço passado
		return matchPrice
	}

	function show(id) {
		let element = document.getElementById(id);
		if(element.style.display === "block"){
			element.style.display = "none";
		} else{
			element.style.display = "block";
		}
	}

	function DisplaySelected(e) {
		filtro[e.target.value] = e.target.checked;
		let displayPokemon = Object.values(filtro).reduce( (rest, current) => rest || current )
		const newDisplay = data.filter( value => {
			return seletionType(value,filtro);
		}).filter( value =>{
			return seletionPrice(value,filtro);
		})

		if (displayPokemon){
			setDisplay(newDisplay);	
		} else {
			setDisplay(data);
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
					<Link to='/'>Home</Link>
					<a href="#" onClick={() => {show("type")}}>
						<span>Tipo</span>
					</a>

					<div id="type" onChange={DisplaySelected} className={styles.checkbox}>
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
						<CheckBox tipo='Psíquico' />		
					</div>

					<a href="#" onClick={() => {show("price")}}>
						<span>Preço</span>
					</a>

					<div id="price" onChange={DisplaySelected} className={styles.checkbox}>
						<CheckBox tipo='R$ 1000 - R$ 2000' />
						<CheckBox tipo='R$ 2000 - R$ 4000' />
						<CheckBox tipo='R$ 4000 - R$ 5000' />
						<CheckBox tipo='R$ 6000 - R$ 7000' />
						<CheckBox tipo='R$ 8000 - R$ 9000' />
						<CheckBox tipo='R$ 10000 - R$ 11000' />
						<CheckBox tipo='R$ 12000 - R$ 13000' />
						<CheckBox tipo='R$ 13000 - R$ 14000' />
						<CheckBox tipo='R$ 14000 - R$ 15000' />
						<CheckBox tipo='R$ 15000 - R$ 16000' />
						<CheckBox tipo='R$ 16000 - R$ 17000' />
						<CheckBox tipo='R$ 17000 - R$ 18000' />
						<CheckBox tipo='R$ 18000 - R$ 19000' />
						<CheckBox tipo='R$ 19000 - R$ 20000' />
						<CheckBox tipo='R$ 20000 - R$ 21000' />
						
					</div>


					<a href="#" onClick={() => {show("saldo")}}>
						<span>Saldo</span>
					</a>

					<div id="saldo" className={styles.checkbox}>
						{saldo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}				
					</div>

				</nav>
			</div>
		</div>
		
	);
}

export default MenuLateral