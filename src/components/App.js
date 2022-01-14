import styles from '../css/App.module.css';
import Card from './Card'
import { Helmet } from 'react-helmet';
import Header from './Header'
import MenuLateral from './MenuLateral'
import axios from 'axios'



function App() {

  let datas = [ {"nome":"Pikachu", "tipo":"Elétrico", "preco":"R$ 10.000", "img":"images/p2.png", "alt":"Pikachu"},
        { "nome":"Articuno", "tipo":"Gelo Voador", "preco":"R$ 21.000", "img":"images/p3.png", "alt":"Articuno"}]

  const nome = 'Matheus'

  return (
    <div className={styles.App}>
      <Helmet>
        <script src="https://kit.fontawesome.com/3475a922f1.js" crossorigin="anonymous"></script>
        <title>RocketMarket</title>
      </Helmet>
      
      <MenuLateral />
      <Header img='images/pokeball.png' alt='pokeball'/>

      <div className={styles.cardContainer}>
        {this.datas.map( data =>
            {return(<h1>{data.nome}</h1>); })}
        
        <Card nome='Clefairy' tipo='Fada' preco='R$ 2.000' img='images/p1.png' alt='Clefairy'/>

        <Card nome='Pikachu' tipo='Elétrico' preco='R$ 10.000' img='images/p2.png' alt='Pikachu'/>
        <Card nome='Articuno' tipo='Gelo Voador' preco='R$ 21.000' img='images/p3.png' alt='Articuno'/>
        <Card nome='Clefairy' tipo='Fada' preco='R$ 2.000' img='images/p1.png' alt='Clefairy'/>
        <Card nome='Pikachu' tipo='Elétrico' preco='R$ 10.000' img='images/p2.png' alt='Pikachu'/>
        <Card nome='Articuno' tipo='Gelo Voador' preco='R$ 21.000' img='images/p3.png' alt='Articuno'/>
        <Card nome='Clefairy' tipo='Fada' preco='R$ 2.000' img='images/p1.png' alt='Clefairy'/>

        <Card nome='Pikachu' tipo='Elétrico' preco='R$ 10.000' img='images/p2.png' alt='Pikachu'/>
        <Card nome='Articuno' tipo='Gelo Voador' preco='R$ 21.000' img='images/p3.png' alt='Articuno'/>
        <Card nome='Clefairy' tipo='Fada' preco='R$ 2.000' img='images/p1.png' alt='Clefairy'/>

        <Card nome='Pikachu' tipo='Elétrico' preco='R$ 10.000' img='images/p2.png' alt='Pikachu'/>
        <Card nome='Articuno' tipo='Gelo Voador' preco='R$ 21.000' img='images/p3.png' alt='Articuno'/>
        <Card nome='Clefairy' tipo='Fada' preco='R$ 2.000' img='images/p1.png' alt='Clefairy'/>

        <Card nome='Pikachu' tipo='Elétrico' preco='R$ 10.000' img='images/p2.png' alt='Pikachu'/>
        <Card nome='Articuno' tipo='Gelo Voador' preco='R$ 21.000' img='images/p3.png' alt='Articuno'/>
        <Card nome='Clefairy' tipo='Fada' preco='R$ 2.000' img='images/p1.png' alt='Clefairy'/>

        <Card nome='Pikachu' tipo='Elétrico' preco='R$ 10.000' img='images/p2.png' alt='Pikachu'/>
        <Card nome='Articuno' tipo='Gelo Voador' preco='R$ 21.000' img='images/p3.png' alt='Articuno'/>
        <Card nome='Clefairy' tipo='Fada' preco='R$ 2.000' img='images/p1.png' alt='Clefairy'/>

        <Card nome='Pikachu' tipo='Elétrico' preco='R$ 10.000' img='images/p2.png' alt='Pikachu'/>
        <Card nome='Articuno' tipo='Gelo Voador' preco='R$ 21.000' img='images/p3.png' alt='Articuno'/>
        <Card nome='Clefairy' tipo='Fada' preco='R$ 2.000' img='images/p1.png' alt='Clefairy'/>

        <Card nome='Pikachu' tipo='Elétrico' preco='R$ 10.000' img='images/p2.png' alt='Pikachu'/>
        <Card nome='Articuno' tipo='Gelo Voador' preco='R$ 21.000' img='images/p3.png' alt='Articuno'/>
        <Card nome='Clefairy' tipo='Fada' preco='R$ 2.000' img='images/p1.png' alt='Clefairy'/>

      </div>

    </div>
  );
}

export default App;
