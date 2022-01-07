function Tipo({tipo}) {
	return (
		<div>	
			<input type="checkbox" value={tipo} />
			<label>{tipo}</label>
		</div>
	);
	
}

export default Tipo