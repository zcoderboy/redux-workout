import { act } from "react-dom/test-utils";
import Product from "../Product";

const defaultCart = {
  items: [],
}

const cart = (cart = defaultCart, action) => {
  if(action.type === "ADD_TO_CART"){  
    cart.items.forEach(product => {
      if(product.id === action.payload.id){
        update = true
        product.qty += product.qty
      }
    })
    return {
      items: [...cart.items,action.payload],
    }
  }
  return cart;
}

export default cart