import React from 'react'

const Cart = ({cart}) => {
  return(
    <div>
      <h2>Cart</h2>
      {
        cart.map(product=>(
          <h4 key={product.id}>{product.name}</h4>
        ))
      }
    </div>
  )
}

export default Cart