import styles from '../css/CarItem.module.css';
import { useState, useEffect } from "react";
import {useAppContext} from '../components/AppContextProvider'

export default function CarItem({pokemon, deleteItem, total,setTotal}){
	const {carList, setCarList} = useAppContext();
	const [quantidade,setQuantidade] = useState(1);
	const deleteItemCar = () => {
		setTotal(total - pokemon.preco)
		deleteItem(pokemon)
	};

	//useEffect(() => {setTotal(total + (pokemon.preco * quantidade))}, [carList]);

	const addItemCar = () => {
		if(quantidade < pokemon.qt){
			setQuantidade(quantidade + 1)
			setTotal(total + pokemon.preco)
		}
	};

	const removeItemCar = () => {
		if(quantidade > 1){
			setQuantidade(quantidade - 1)
			setTotal(total - pokemon.preco)
		}
	};

	const limitColor ={
		'color': 'grey'
	} 

	return (
		<div className={styles.carItem}>
			<img src={pokemon.img} alt={pokemon.alt} />
			<div className={styles.nome}>{pokemon.nome}</div>
			<div className={styles.preco}>R$ {pokemon.preco * quantidade}</div>
			<div className={styles.minusButton} onClick={removeItemCar}><span style={ (quantidade === 1) ? limitColor : {}}><i class="fas fa-minus"></i></span></div>
			<div className={styles.quantidade}>{quantidade}</div>
			<div className={styles.plusButton} onClick={addItemCar}><span style={ quantidade === pokemon.qt ? limitColor : {}}><i class="fas fa-plus"></i></span></div>
			<div className={styles.deleteButton}><span onClick={deleteItemCar}><i class="fas fa-trash-alt"></i></span></div>
		</div>
	);
}

