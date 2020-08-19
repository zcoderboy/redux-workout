
const cart = (cart = [], action) => {
  if(action.type === "ADD_TO_CART"){
    console.log(action.paylaod)
  }
  return cart;
}

export default cart
