import styles from '../css/MessagePage.module.css';
import {Link } from 'react-router-dom';

export default function MessagePage(){
	return(
		<div className={styles.messageContainer}>
			<div className={styles.messageBox}>
				<h1>Compra concluída com sucesso.</h1>
				<Link to='/'>
					<button>Fechar</button>
				</Link>
			</div>
		</div>

	);
};