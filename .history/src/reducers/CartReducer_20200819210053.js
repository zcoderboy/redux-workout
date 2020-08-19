import { act } from "react-dom/test-utils";

const defaultCart = {
  items: [],
}

const cart = (cart = defaultCart, action) => {
  if(action.type === "ADD_TO_CART"){
    
    return {
      items: [...cart.items,action.payload],
    }
  }
  return cart;
}

export default cart