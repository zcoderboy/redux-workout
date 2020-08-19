import normalizedData from '../normalizedState'

const products = (products = normalizedData.entities.products, action) => {
  if(action.type === "ADD_PRODUCT"){
    console.log(products)
  }
  return products
}

export default products