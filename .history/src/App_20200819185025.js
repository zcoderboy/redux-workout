import React from 'react';
import './App.css';
import ProductListContainer from './containers/ProductListContainer';
import ProductAddContainer from './containers/ProductAddContainer';

function App() {
  return (
    <div className="App">
      <ProductListContainer/>
      <ProductAddContainer/>
      <cart
    </div>
  );
}

export default App;
