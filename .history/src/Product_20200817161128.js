import React from 'react'

const Product = ({product,addToCart}) => {
  return (
    <>
      <h4>{product.name}</h4>
      <button onClick>Add to cart</button>
    </>
  )
}

export default Product