import styles from '../css/CheckBox.module.css'

function CheckBox({tipo}) {

	return (
		<div>	
			<label className={styles.Item}>
				<input type="checkbox" value={tipo} />
				{tipo}
			</label>
		</div>
	);
	
}

export default CheckBox