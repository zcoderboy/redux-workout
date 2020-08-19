import React from 'react'

const Cart = ({cart}) => {
  return(
    <h2>Cart</h2>
    {
      cart.map(product=>{
        <h4></h4>
      })
    }
  )
}

export default Cart