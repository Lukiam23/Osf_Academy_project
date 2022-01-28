import styles from '../css/CarItem.module.css';
import { useState, useEffect } from "react";

export default function CarItem({pokemon, deleteItem, total, setTotal, setUpdateFlag, updateFlag}){	
	const deleteItemCar = () => {
		deleteItem(pokemon)
	};

	const addItemCar = () => {
		if(pokemon.carQt < pokemon.qt){
			pokemon.carQt++;
			setUpdateFlag(!updateFlag)
		}
	};

	const removeItemCar = () => {
		if(pokemon.carQt > 1){
			pokemon.carQt--;
			setUpdateFlag(!updateFlag)
		}
	};

	const limitColor ={
		'color': 'grey'
	} 

	return (
		<div className={styles.carItem}>
			<img src={pokemon.img} alt={pokemon.alt} />
			<div className={styles.nome}>{pokemon.nome}</div>
			<div className={styles.preco}>R$ {pokemon.preco * pokemon.carQt}</div>
			<div className={styles.minusButton} onClick={removeItemCar}><span style={ (pokemon.carQt === 1) ? limitColor : {}}><i class="fas fa-minus"></i></span></div>
			<div className={styles.quantidade}>{pokemon.carQt}</div>
			<div className={styles.plusButton} onClick={addItemCar}><span style={ pokemon.carQt === pokemon.qt ? limitColor : {}}><i class="fas fa-plus"></i></span></div>
			<div className={styles.deleteButton}><span onClick={deleteItemCar}><i class="fas fa-trash-alt"></i></span></div>
		</div>
	);
}

