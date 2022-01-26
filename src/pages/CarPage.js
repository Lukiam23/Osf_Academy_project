import {useAppContext} from '../components/AppContextProvider'
import styles from '../css/CarPage.module.css'

function CarPage({texto}) {
	const {carList, setCarList} = useAppContext();
	return (
		<div className={styles.carContainer}>  
          {carList.map(pokemon => {return(<p>{pokemon.nome}</p>)})}
        </div>

	);
}

export default CarPage;