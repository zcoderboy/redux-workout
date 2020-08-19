import { act } from "react-dom/test-utils";
import Product from "../Product";

const defaultCart = {
  items: [],
}

const cart = (cart = defaultCart, action) => {
  if(action.type === "ADD_TO_CART"){  
    let update = false
    cart.items.forEach(product => {
      if(product.id === action.payload.id){
        update = true
        product.qty += product.qty
      }
    })
    update 
    return {
      items: [...cart.items,action.payload],
    }
  }
  return cart;
}

export default cart