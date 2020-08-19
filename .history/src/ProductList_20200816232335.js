import React from 'react'

const ProductList = ({products}) => {
  console.log(products[0])
  return (
    <>
      {
        products.map(product => (
          <h6 key={product.id}>{product.name}</h6>
        ))
      }
    </>
  )
}

export default ProductList