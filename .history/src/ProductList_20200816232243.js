import React from 'react'

const ProductList = ({products}) => {
  return (
    <>
      {
        products.map(product => (
          <h6>{product.name}</h6>
        })
      }
    </>
  )
}

export default ProductList