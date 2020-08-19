import React from 'react'

const Product = ({product,addToCart}) => {
  console.log(addToCart)
  return (
    <>
      <h4>{product.name}</h4>
      <button onClick={()=>addToCart(product)}>Add to cart</button>
    </>
  )
}

export default Product