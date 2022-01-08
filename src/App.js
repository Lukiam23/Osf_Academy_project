import './App.css';
import Card from './components/Card'
import { Helmet } from 'react-helmet';
import Header from './components/Header'
import MenuLateral from './components/MenuLateral'
import styles from './components/MenuLateral.module.css'

function App() {
  return (
    <div className="App">
      <Helmet>
        <script src="https://kit.fontawesome.com/3475a922f1.js" crossorigin="anonymous"></script>
        <title>RocketMarket</title>
      </Helmet>
      
      <MenuLateral />
      <Header img='images/pokeball.png' alt='pokeball'/>

      <Card nome='Pikachu' tipo='Elétrico' preco='R$ 10.000' qt='1' img='images/pikachu.png' alt='Pikachu'/>
      
    </div>
  );
}

export default App;
