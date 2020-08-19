import React from 'react'

const Cart = ({cart,totalCount}) => {
  return(
    console.log(totalCount)
    <div>
      <h2>Cart</h2>
      {
        cart.items.map(product=>(
          <h4 key={product.id}>{product.name} - {product.qty}x</h4>
        ))
      }
    </div>
  )
}

export default Cart