import styles from '../css/Card.module.css'
import React, { useEffect, useContext } from "react";
import {CarContext} from './App'

function Card({nome, tipo, preco, img, alt}) {
	const {carList, pokemonList ,setCarList} = useContext(CarContext);
	const [checked, setChecked] = React.useState(null);
	const putOnCar = (e) => {
		const temp = carList;
		const nomePokemon = e.currentTarget.getAttribute('value');
		const pokemon = pokemonList.filter( value => value.nome === nomePokemon)
		if (pokemon.length > 0){
			temp.push(pokemon[0]);
			setCarList(temp)
			setChecked(!checked)
		} 
		console.log(carList)
	}

	const buttonColor = {
		'background': '#2ecc71'
	};

	return (

	<div className={styles.cardContainers} onClick={putOnCar} value={nome}>
		<img src={img} alt={alt} />

		<div className={styles.nomePreco}>
			<label>{nome}</label>
			<label>{preco}</label>
		</div>

		<div className={styles.descricao}>
			<label>O {nome} é um pokémon do tipo {tipo}</label>
		</div>			

		<div id='checkButton' style={ checked ? buttonColor : {}} className={styles.checkButton}>
			<span><i class="fas fa-check fa-2x"></i></span>
		</div>
	</div>
	);
}

export default Card