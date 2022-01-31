import styles from '../css/MessagePage.module.css';
import { Link, useNavigate   } from 'react-router-dom'

export default function MessagePage(){
	let navigate = useNavigate();

	return(
		<div className={styles.messageContainer}>
			<div className={styles.messageBox}>
				<h1>Compra concluída com sucesso.</h1>
				<button onClick={() => navigate('/')}>
					Fechar
				</button>
			</div>
		</div>

	);
};