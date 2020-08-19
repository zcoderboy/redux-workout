import React from 'react'
import ProductContainer from './containers/ProductContainer'

const ProductList = ({products}) => {
  return (
    <div>
      <h2>Products</h2>
      {
        products.map(product => (
          <ProductContainer key={product} productId={product}/>
        ))
      }
    </div>
  )
}

export default ProductList