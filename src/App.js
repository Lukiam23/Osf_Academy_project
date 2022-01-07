import './App.css';
//import Card from './components/Card'
import { Helmet } from 'react-helmet';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Helmet>
        <script src="https://kit.fontawesome.com/3475a922f1.js" crossorigin="anonymous"></script>
      </Helmet>
      
      <Header img='images/pokeball.png' alt='pokeball'/>
    </div>
  );
}

export default App;
