import styles from '../css/Card.module.css'
function Card({nome, tipo, preco, img, alt}) {
	return (
			<div className={styles.cardContainers}>
				<img src={img} alt={alt} />

				<div className={styles.nomePreco}>
					<label>{nome}</label>
					<label>{preco}</label>
				</div>

				<div className={styles.descricao}>
					<label>O {nome} é um pokémon do tipo {tipo}</label>
				</div>			
			</div>
	);
}

export default Card