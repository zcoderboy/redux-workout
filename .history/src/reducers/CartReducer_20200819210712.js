import { act } from "react-dom/test-utils";
import Product from "../Product";

const defaultCart = {
  items: [],
}

const cart = (cart = defaultCart, action) => {
  if(action.type === "ADD_TO_CART"){
    cart.items.forEach(product => {
      if(product.id === action.payload.id){
        product.qty = product.qty + 1
      }
    })
    return {
      items: [...cart.items,action.payload],
    }
  }
  return cart;
}

export default cart