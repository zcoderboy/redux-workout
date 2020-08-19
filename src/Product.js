import React from 'react'

const Product = ({product,addToCart}) => {
  return (
    <>
      <h4>{product.name}</h4>
      <h4>{product.price} $</h4>
      <button onClick={()=>addToCart(product)}>Add to cart</button>
    </>
  )
}

export default Product