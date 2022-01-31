import axios from 'axios';
import Card from './Card';
import { Helmet } from 'react-helmet';
import Header from './Header';
import MenuLateral from './MenuLateral'
import React, { useState, useEffect } from "react";
import styles from '../css/App.module.css';
import AppContextProvider from './AppContextProvider';
import {BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';

import CarPage from '../pages/CarPage';
import HomePage from '../pages/HomePage';
import MessagePage from '../pages/MessagePage';


const baseURL = 'https://my-json-server.typicode.com/Lukiam23/Osf_Academy_project/cards';
const brazilianNumberFormatter = new Intl.NumberFormat("pt-BR")

function App() {
  const [pokemonList, setPokemonList] = useState(null);
  const [display, setDisplay] = useState(null);
  const [filtro, setFiltro] = useState(null);

  useEffect(() => {
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
      <div className={styles.App}>
        <Header data={pokemonList} display={display}/>
        
        <MenuLateral filtro = {filtro} setFiltro = {setFiltro} data={pokemonList} display={display} setDisplay = {setDisplay}/>
      </div>
      <Routes>
        <Route exact path='/' element={<HomePage display={display}/>}/>
        <Route path='car' element={<CarPage />}/>
        <Route path='car/message' element={<MessagePage />}/>
        <Route />
      </Routes>
    </Router>
    </AppContextProvider>

  );
}

export default App;
