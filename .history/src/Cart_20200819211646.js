import React from 'react'

const Cart = ({cart,totalCount}) => {
  return(
    <div>
      <h2>Cart</h2>
      {
        cart.items.map(product=>(
          <h4 key={product.id}>{product.name} - {product.qty}x   {totalCount}</h4>
        ))
      }
    </div>
  )
}

export default Cart