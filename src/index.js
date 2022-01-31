import { hydrate, render, ReactDOM } from "react-dom";
import React from 'react';
import './css/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  , rootElement);
} else {
  render(<App />, rootElement);
}

reportWebVitals();
