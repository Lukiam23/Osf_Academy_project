import styles from '../css/Card.module.css'
import React, { useEffect, useContext } from "react";
import {useAppContext} from './AppContextProvider'

function Card({pokemon}) {
	const {nome, tipo, preco, img, alt} = pokemon;
	const {carList, setCarList} = useAppContext();
	const checked = !!carList.find( value => value.nome === nome);

	const putOnCar = (e) => {
		if(checked){
			setCarList(carList.filter(value => value.nome !== nome))
		} else {
			pokemon['carQt'] = 1;
			setCarList([...carList, pokemon])
		}
	}

	const buttonColor = {
		'background': '#2ecc71'
	};

	return (

	<div className={styles.cardContainers} onClick={putOnCar}>
		<img src={img} alt={alt} />

		<div className={styles.nomePreco}>
			<label>{nome}</label>
			<label>R$ {preco}</label>
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