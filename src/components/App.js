import axios from 'axios'
import Card from './Card'
import { Helmet } from 'react-helmet';
import Header from './Header'
import MenuLateral from './MenuLateral'
import React, { useState } from "react";
import styles from '../css/App.module.css';
import AppContextProvider from './AppContextProvider'
import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import CarPage from '../pages/CarPage'


const baseURL = 'https://my-json-server.typicode.com/Lukiam23/Osf_Academy_project/cards';

function App() {
  // state é um objeto do JavaScrip usado pelo React para representar uma informação sobre a situação atual da componente 
  //useState permite ter variáveis state em componentes que são função
  // state => estado inicial
  // setDisplay => função para mudar o estado inicial
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
    <AppContextProvider>
      <Router>
        <Routes>
          <Route path='car' element={<CarPage />}/>
        </Routes>
      </Router>
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
                <Card pokemon={obj}/>
              );})}

          </div>

      </div>
    </AppContextProvider>
  );
}

export default App;
