import axios from 'axios'
import Card from './Card'
import { Helmet } from 'react-helmet';
import Header from './Header'
import MenuLateral from './MenuLateral'
import React, { useState } from "react";
import styles from '../css/App.module.css';

export const CarContext = React.createContext();

const baseURL = 'https://my-json-server.typicode.com/Lukiam23/Osf_Academy_project/cards';

function App() {
  // state é um objeto do JavaScrip usado pelo React para representar uma informação sobre a situação atual da componente 
  //useState permite ter variáveis state em componentes que são função
  // state => estado inicial
  // setDisplay => função para mudar o estado inicial
  const [carList, setCarList] = useState([]);
  const [pokemonList, setPokemonList] = useState(null);
  const [display, setDisplay] = useState(null);
  const [filtro, setFiltro] = useState(null);

  React.useEffect(() => {
    axios.get(baseURL)
    .then((res) => {
      setDisplay(res.data);
      setPokemonList(res.data);
    });
  }, []);

  if (!display) return null;

  return (
    <CarContext.Provider value={{carList, pokemonList,setCarList}}>
      <div className={styles.App}>
        <Helmet>
          <script src="https://kit.fontawesome.com/3475a922f1.js" crossorigin="anonymous"></script>
          <title>RocketMarket</title>
        </Helmet>
        
        <MenuLateral filtro = {filtro} setFiltro = {setFiltro} data={pokemonList} display={display} setDisplay = {setDisplay}/>
        <Header data={pokemonList}/>
        
        <div className={styles.cardContainer}>  
          {display.map( obj => {
            return (
              <Card nome={obj.nome} tipo={obj.tipo} preco={'R$ '+obj.preco} img={obj.img} alt={obj.alt}/>
            );})}
        </div>

      </div>
    </CarContext.Provider>
  );
}

export default App;
