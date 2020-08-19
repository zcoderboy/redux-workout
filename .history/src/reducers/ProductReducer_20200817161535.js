import normalizedData from '../normalizedState'


const products = (products = normalizedData.entities.products, action) => {
  if(action.type === "ADD_PRODUCT"){
    return {
      ...products,
      [action.payload.id] : action.payload
    }
  }
  if(action.type === "ADD_TO_CART")
  return products
}

export default products