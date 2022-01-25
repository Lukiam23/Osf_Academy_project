import React, {createContext, useState, useContext} from 'react';

const PokemonCarContext = createContext();

export default function CarProvider({children}){
	const [pokemonList, setPokemonList] = useState("Amigo Estou Aqui");

	return (
		<PokemonCarContext.Provider 
		value = {{
			pokemonList,
			setPokemonList
		}}
		>
			{children}
		</PokemonCarContext.Provider>
	);
};

export function useCar(){
	const pokemonCar = useContext(PokemonCarContext);
	const {pokemonList, setPokemonList} = pokemonCar;
	return {pokemonList, setPokemonList};
}

