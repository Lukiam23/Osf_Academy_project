import axios from 'axios'
import styles from '../css/MenuLateral.module.css'
import CheckBox from './CheckBox'
import React, { useEffect } from "react";

function MenuLateral({selected, setSelected, data, setData, baseURL}) {
	const [state, setState] = React.useState(null);

	useEffect(() => {setSelected({})},[]);

	useEffect(() => {
		axios.get(baseURL)
		.then((res) => {
	    	setState(res.data);
	    });
	}, [selected]);

	let display = "";
	//value virá do nosso state
	//selected é um obj que possui os tipos selecionados
	
	const seletion = (value, selected) => {
		let matchType = false;
		let matchPrice = false;
		let typeRestriction = false;
		let priceRestriction = false;


		value.tipo.split(' ').forEach( type =>{
			let selectedType = selected[type];
			if(selectedType && !matchType){
				typeRestriction = true;
				matchType = true;
			} 
		})

		Object.keys(selected).forEach( item =>{
			if (selected[item]){
				let array = item.split(' ');
				if(array[0] === 'R$' && !matchPrice){
					priceRestriction = true;
					let range = array.filter(string => !isNaN(string)).map(string => Number(string));
					if(range[0] < value.preco && value.preco <= range[1]){
						matchPrice = true;
					}
				}
			}
		})
		
		//só são aceitos pokemons que estão no intervalo de preço e no tipo passados

		console.log(value.nome,typeRestriction, priceRestriction,matchPrice,matchType)
		if(typeRestriction && priceRestriction) return (matchType) && (matchPrice);

		return (matchType && typeRestriction) || (matchPrice && priceRestriction);
	}

	function setType(){
		show("type");
	}

	function setPrice(){
		show("price");
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
		selected[e.target.value] = e.target.checked;
		let display = Object.values(selected).reduce( (rest, current) => rest || current )
		const newData = state.filter( value => {
			return seletion(value,selected);
		})

		if (display){
			setData(newData);	
		} else {
			setData(state);
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
					<a href="#" onClick={setType}>
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

					<a href="#" onClick={setPrice}>
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

				</nav>
			</div>
		</div>
		
	);
}

export default MenuLateral