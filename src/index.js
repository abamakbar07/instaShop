import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
import { AppContextProvider } from './components/context/GlobalContext';
import { ProductContextProvider } from './components/context/ProductContext';

ReactDOM.render(
  <AppContextProvider>
    <ProductContextProvider>
      <App />
    </ProductContextProvider>
  </AppContextProvider>,
  document.getElementById('root')
);
