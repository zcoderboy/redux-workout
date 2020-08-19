import React from 'react'

const ProductList = ({products}) => {
  return (
    <>
      {
        products.map(prod)
      }
    </>
  )
}

export default ProductList