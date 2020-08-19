import React from 'react';
import './App.css';
import ProductListContainer from './containers/ProductListContainer';
import ProductAddContainer from './containers/ProductAddContainer';
import Cart from './Cart';

function App() {
  return (
    <div className="App">
      <ProductListContainer/>
      <ProductAddContainer/>
      <Cart/>
    </div>
  );
}

export default App;
