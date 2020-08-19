import normalizedData from '../normalizedState'

const products = (products = normalizedData.entities.products, action) => {
  if(action.type === "ADD_PRODUCT"){
    return {
      ...products,
      ...action.payload
    }
  }
  return products
}

export default products