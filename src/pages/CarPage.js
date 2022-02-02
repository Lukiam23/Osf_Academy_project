import {useAppContext} from '../components/AppContextProvider'
import CarItem from '../components/CarItem'
import styles from '../css/CarPage.module.css'
import { useState, useEffect } from "react";
import { Link, useNavigate   } from 'react-router-dom'


function CarPage({ message, setMessage}) {
	const {carList, setCarList, saldo, setSaldo} = useAppContext();
	let navigate = useNavigate();

	const setPokemonCount = (pokemon, count) => {
		setCarList(carList.map(pk => {
			if(pk.nome === pokemon.nome){
				return {...pokemon, carQt:count};
			}

			return pk;
		}));
	};	
	
	const deleteItem = (pokemon) => {
		setCarList(carList.filter(item => item.nome !== pokemon.nome));
	};	

	const shop = () => {
		const total = carList.reduce((acumulador, pokemon) => {	return acumulador + (pokemon.preco *pokemon.carQt)},0)
		const resto = saldo - total;
		if(resto >= 0){
			setSaldo(resto)
			setCarList([])
			navigate('message')
			setMessage("Compra concluída com sucesso.");
		} else {
			setMessage("Saldo insuficiente");
			navigate('message')
		}
	}
	

	if (carList.length === 0){
		return(
			<div className={styles.emptyCar}>  
	          <h1>Carrinho vazio</h1>
	        </div>
		);
	}

	return (
		<div className={styles.carContainer}>  
		  <h1>
		  Total: {carList.reduce((acumulador, pokemon) => {
		  	return acumulador + (pokemon.preco *pokemon.carQt)
		  },0).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} 
		  </h1>
          {carList.map(pokemon => {
          	return(<CarItem pokemon={pokemon} deleteItem={() => deleteItem(pokemon)} setPokemonCount={(count) => setPokemonCount(pokemon,count)}/>)
          })}
		  
         <button className={styles.endShop} onClick={shop}>
	     	Finalizar Compra
         </button> 

        </div>
	);
}

export default CarPage;