import React from 'react'

const Cart = ({cart}) => {
  return(
    <div></div>
    <h2>Cart</h2>
    {
      cart.map(product=>(
        <h4>{product.name}</h4>
      )
    }
  )
}

export default Cart