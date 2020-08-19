
const cart = (cart = [], action) => {
  if(action.type === "ADD_TO_CART"){
    return [...cart,action.payload]
  }
  return cart;
}

export default cart
