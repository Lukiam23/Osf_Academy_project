import {useAppContext} from '../components/AppContextProvider'
import CarItem from '../components/CarItem'
import styles from '../css/CarPage.module.css'
import { useState, useEffect } from "react";


function CarPage({texto}) {
	const {carList, setCarList} = useAppContext();
	const [total,setTotal] = useState(carList.reduce((acumulador, pokemon) => {return acumulador + (pokemon.preco *pokemon.carQt)},0));
	const deleteItem = (pokemon) => {
		setCarList(carList.filter(item => item.nome !== pokemon.nome));
	};	

	useEffect(() => {
		setTotal(carList.reduce((acumulador, pokemon) => {return acumulador + (pokemon.preco *pokemon.carQt)},0))
	},[carList])

	if (carList.length === 0){
		return(
			<div className={styles.emptyCar}>  
	          <h1>Carrinho vazio</h1>
	        </div>
		);
	}

	return (
		<div className={styles.carContainer}>  
		  <h1>Total: {total} </h1>
          {carList.map(pokemon => {
          	return(<CarItem pokemon={pokemon} deleteItem={deleteItem}/>)
          })}
        </div>
	);
}

export default CarPage;