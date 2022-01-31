import React, { useState, useContext, useEffect } from "react";

const Context = React.createContext();

export default function AppContextProvider({children}){
	const [carList, setCarList] = useState([]);
	const [saldo, setSaldo] = useState(500000);

	useEffect(() => {
    	let car = sessionStorage.getItem("carList");
    	
    	if(car !== null){
    		setCarList(JSON.parse(car))
    	}
 	},[]);

 	useEffect(() => {
    	let temSaldo = sessionStorage.getItem("Saldo");

    	if(temSaldo !== null){
    		setSaldo(JSON.parse(temSaldo))
    	}
 	},[]);

 	useEffect(() => {
    	sessionStorage.setItem("carList", JSON.stringify(carList));
 	},[carList]);

 	useEffect(() => {
    	sessionStorage.setItem("Saldo", JSON.stringify(saldo));
 	},[saldo]);

	return (
		<Context.Provider value = {{carList, setCarList, saldo, setSaldo}}>
			{children}
		</Context.Provider>
	);
}

export function useAppContext(){
	return useContext(Context)
}


