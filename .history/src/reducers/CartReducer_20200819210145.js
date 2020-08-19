import { act } from "react-dom/test-utils";

const defaultCart = {
  items: [],
}

const cart = (cart = defaultCart, action) => {
  if(action.type === "ADD_TO_CART"){
    const {id} = {...action.payload}
    const pr = cart.items
    
    return {
      items: [...cart.items,action.payload],
    }
  }
  return cart;
}

export default cart