import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  , rootElement);
} else {
  ReactDOM.render(<App />, rootElement);
}

reportWebVitals();
