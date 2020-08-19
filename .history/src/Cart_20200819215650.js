import React from 'react'

const Cart = ({cart,totalCount,emptyCart,totalPrice}) => {
  return(
    <div>
      <h2>Cart { totalCount > 0 && ` - ${totalCount} item(s)` }</h2>
      {
        cart.items.map(product=>(
          <h4 key={product.id}>{product.name} - {product.qty}x</h4>
        ))
      }
      {totalCount > 0 && <h3>Total price - {totalPrice} $</h3> }
      {
        totalCount > 0 &&
        <button onClick={emptyCart}>Empty cart</button>
      }
    </div>
  )
}

export default Cart