import {useAppContext} from '../components/AppContextProvider'
import CarItem from '../components/CarItem'
import styles from '../css/CarPage.module.css'
import { useState, useEffect } from "react";


function CarPage({texto}) {
	const {carList, setCarList} = useAppContext();
	
	const [updateFlag,setUpdateFlag] = useState(true);
	
	const [total,setTotal] = useState();
	
	const deleteItem = (pokemon) => {
		setCarList(carList.filter(item => item.nome !== pokemon.nome));
	};	

	useEffect(() => {
		setTotal(carList.reduce((acumulador, pokemon) => {return acumulador + (pokemon.preco *pokemon.carQt)},0))
	},[carList,updateFlag])

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
          	return(<CarItem pokemon={pokemon} setUpdateFlag={setUpdateFlag} updateFlag={updateFlag} deleteItem={deleteItem} setTotal={setTotal}/>)
          })}
        </div>
	);
}

export default CarPage;