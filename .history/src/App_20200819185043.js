import React from 'react';
import './App.css';
import ProductListContainer from './containers/ProductListContainer';
import ProductAddContainer from './containers/ProductAddContainer';
import CartContainer from './containers/CartContainer';

function App() {
  return (
    <div className="App">
      <ProductListContainer/>
      <ProductAddContainer/>
      <CartContainer/>
    </div>
  );
}

export default App;
