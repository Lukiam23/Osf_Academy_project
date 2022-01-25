import React, { useState, useContext } from "react";

const Context = React.createContext();

export default function AppContextProvider({children}){
	const [carList, setCarList] = useState([]);

	return (
		<Context.Provider value = {{carList,setCarList}}>
			{children}
		</Context.Provider>
	);
}

export function useAppContext(){
	return useContext(Context)
}


