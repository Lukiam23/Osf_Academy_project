import styles from './Card.module.css'
function Card({nome, tipo, preco, qt, img, alt}) {
	return (
		<div className={styles.cardContainers}>
			<img src={img} alt={alt} />
			<h4>{nome}</h4>
			<h5>Tipo:{tipo}</h5>
			<h5>Valor: {preco}</h5>
			<h5>Quantidade em estoque:{qt}</h5>
		</div>
	);
}

export default Card