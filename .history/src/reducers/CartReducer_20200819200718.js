import { act } from "react-dom/test-utils";

const defaultCart = {
  items: [],
  totalQty: 0
}

const cart = (cart = defaultCart, action) => {
  if(action.type === "ADD_TO_CART"){
    return {
      items: [...cart.items,action.payload],
      total
    }
  }
  return cart;
}

export default cart
