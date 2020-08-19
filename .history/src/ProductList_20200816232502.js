import React from 'react'

const ProductList = ({products}) => {
  console.log(products)
  return (
    <>
      {
        products.map(product => {
          const {id,name} = {}
          <h6 key={product.id}>{product.name}</h6>
        })
      }
    </>
  )
}

export default ProductList