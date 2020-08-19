
const defaultCart = {
  items: [],
  totalQty: 0
}
const cart = (cart = default, action) => {
  if(action.type === "ADD_TO_CART"){
    return [...cart,action.payload]
  }
  return cart;
}

export default cart
