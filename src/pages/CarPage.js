import {useAppContext} from '../components/AppContextProvider'
import CarItem from '../components/CarItem'
import styles from '../css/CarPage.module.css'

function CarPage({texto}) {
	const {carList, setCarList} = useAppContext();
	const deleteItem = (pokemon) => setCarList(carList.filter(item => item.nome !== pokemon.nome));
	return (
		<div className={styles.carContainer}>  
          {carList.map(pokemon => {return(<CarItem pokemon={pokemon} deleteItem={deleteItem}/>)})}
        </div>

	);
}

export default CarPage;