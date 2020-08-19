import React from 'react'

const Cart = ({cart,totalCount}) => {
  return(
    <div>
      <h2>Cart {totalCount}</h2>
      {
        cart.items.map(product=>(
          <h4 key={product.id}>{product.name} - {product.qty}x</h4>
        ))
      }
      {
        totalCount > 0 &&
        <button>Empty cart</button>
      }
    </div>
  )
}

export default Cart