import App from '../components/App';
import styles from '../css/HomePage.module.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Card from '../components/Card'

function HomePage({display}) {
	return (
		<div className={styles.cardContainer}>  
      {display.map( obj => {
        return (
          <Card pokemon={obj}/>
        );})}
    </div>
		
	);
}

export default HomePage;