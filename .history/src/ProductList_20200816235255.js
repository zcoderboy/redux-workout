import React from 'react'
import ProductContainer from './containers/ProductContainer'

const ProductList = ({products}) => {
  return (
    <>
      {
        products.map(product => (
          <ProductContainer key={product} productId={product}/>
        ))
      }
    </>
  )
}

export default ProductList