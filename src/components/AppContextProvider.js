import React, { useState, useContext, useEffect } from "react";

const Context = React.createContext();

export default function AppContextProvider({children}){
	const [carList, setCarList] = useState([]);

	useEffect(() => {
    	let car = sessionStorage.getItem("carList");
    	if(car !== null){
    		setCarList(JSON.parse(car))
    	}
 	},[]);

 	useEffect(() => {
    	sessionStorage.setItem("carList", JSON.stringify(carList));
 	},[carList]);

	return (
		<Context.Provider value = {{carList,setCarList}}>
			{children}
		</Context.Provider>
	);
}

export function useAppContext(){
	return useContext(Context)
}


