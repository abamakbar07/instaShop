import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
import { AppContextProvider } from './components/context/GlobalContext';
import { ProductDetailContextProvider } from './components/context/ProductDetailContext';

ReactDOM.render(
  <AppContextProvider>
    <ProductDetailContextProvider>
      <App />
    </ProductDetailContextProvider>
  </AppContextProvider>,
  document.getElementById('root')
);
