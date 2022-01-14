import axios from 'axios'
import Card from './Card'
import { Helmet } from 'react-helmet';
import Header from './Header'
import MenuLateral from './MenuLateral'
import React from "react";
import styles from '../css/App.module.css';


const baseURL = 'https://my-json-server.typicode.com/Lukiam23/Osf_Academy_project/cards';

function App() {

  // state é um objeto do JavaScrip usado pelo React para representar uma informação sobre a situação atual da componente 
  //useState permite ter variáveis state em componentes que são função
  // state => estado inicial
  // setState => função para mudar o estado inicial
  const [state, setState] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL)
    .then((res) => {
      setState(res.data);
    });
  }, []);
  
  if (!state) return null;

  return (
    <div className={styles.App}>
      <Helmet>
        <script src="https://kit.fontawesome.com/3475a922f1.js" crossorigin="anonymous"></script>
        <title>RocketMarket</title>
      </Helmet>
      
      <MenuLateral />
      <Header img='images/pokeball.png' alt='pokeball'/>

      <div className={styles.cardContainer}>    
        {state.map( obj => {
          return (
            <Card nome={obj.nome} tipo={obj.tipo} preco={obj.preco} img={obj.img} alt={obj.alt}/>
          );})}
        

      </div>

    </div>
  );
}

export default App;
