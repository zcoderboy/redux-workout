
const defaultCart = {
  items: [],
  totalQty: 0
}

const cart = (cart = defaultCart, action) => {
  if(action.type === "ADD_TO_CART"){
    return {
      totalQty: 
    }
  }
  return cart;
}

export default cart