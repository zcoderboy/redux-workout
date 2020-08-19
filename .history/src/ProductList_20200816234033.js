import React from 'react'
import ProductContainer from './containers/ProductContainer'

const ProductList = ({products}) => {
  console.log(products)
  return (
    <>
      {
        products.map(product => (
          <ProductContainer/>
        ))
      }
    </>
  )
}

export default ProductList