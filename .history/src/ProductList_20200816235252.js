import React from 'react'
import ProductContainer from './containers/ProductContainer'

const ProductList = ({products}) => {
  return (
    <>
      {
        products.map(product => (
          <ProductContainer key={}productId={product}/>
        ))
      }
    </>
  )
}

export default ProductList