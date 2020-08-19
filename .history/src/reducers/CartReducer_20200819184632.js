
const cart = (cart = [], action) => {
  if(action.type === "ADD_TO_CART"){
    return [cart,...action.pa]
  }
  return cart;
}

export default cart
