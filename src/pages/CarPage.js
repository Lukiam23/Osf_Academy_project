import {useAppContext} from '../components/AppContextProvider'
import CarItem from '../components/CarItem'
import styles from '../css/CarPage.module.css'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'


function CarPage({texto}) {
	const {carList, setCarList} = useAppContext();

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
		setCarList([])
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
         <Link to='message'>
         	<button className={styles.endShop} onClick={shop}>Finalizar Compra</button> 
         </Link>
        </div>
	);
}

export default CarPage;