import styles from '../css/CarItem.module.css';

export default function CarItem({pokemon, deleteItem}){
	const deleteItemCar = () => deleteItem(pokemon);
	return (
		<div className={styles.carItem}>
			<img src={pokemon.img} alt={pokemon.alt} />
			<div className={styles.nome}>{pokemon.nome}</div>
			<span onClick={deleteItemCar}><i class="fas fa-trash-alt"></i></span>
			
		</div>
	);
}

