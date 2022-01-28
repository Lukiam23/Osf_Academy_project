import {useAppContext} from '../components/AppContextProvider'
import CarItem from '../components/CarItem'
import styles from '../css/CarPage.module.css'
import { useState, useEffect } from "react";


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

	const shop = () => {console.log("End Shop")}
	

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
		  },0)} 
		  </h1>
          {carList.map(pokemon => {
          	return(<CarItem pokemon={pokemon} deleteItem={() => deleteItem(pokemon)} setPokemonCount={(count) => setPokemonCount(pokemon,count)}/>)
          })}

         <button className={styles.endShop} onClick={shop}>Finalizar Compra</button> 
        </div>
	);
}

export default CarPage;