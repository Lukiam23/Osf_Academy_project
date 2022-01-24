import styles from '../css/Card.module.css'
import React, { useEffect } from "react";

function Card({nome, tipo, preco, img, alt}) {
	const [checked, setChecked] = React.useState(null);
	const putOnCar = (e) => {
		setChecked(!checked)
	}

	const buttonColor = {
		'background': '#2ecc71'
	};

	return (

	<div className={styles.cardContainers} onClick={putOnCar}>
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