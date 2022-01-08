function CheckBox({tipo}) {
	return (
		<div>	
			<label>
				<input type="checkbox" value={tipo} />
				{tipo}
			</label>
		</div>
	);
	
}

export default CheckBox