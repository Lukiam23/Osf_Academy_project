import styles from '../css/MessagePage.module.css';
import {Link } from 'react-router-dom';

export default function MessagePage(){
	return(
		<div className={styles.messageContainer}>
			<div className={styles.messageBox}>
				<h1>Compra concluída com sucesso.</h1>
				<button>
					<Link to='/' className={styles.link}>
						Fechar
					</Link>
				</button>
			</div>
		</div>

	);
};