import React from 'react'
import ProductContainer from './containers/ProductContainer'

const ProductList = ({products}) => {
  console.log)products
  return (
    <>
      {
        products.map(product => (
          <ProductContainer productId={product}/>
        ))
      }
    </>
  )
}

export default ProductList