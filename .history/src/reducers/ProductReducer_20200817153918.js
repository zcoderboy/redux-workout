import normalizedData from '../normalizedState'

const products = (products = normalizedData.entities.products, action) => {
  console.log(action.payload)
  return products
}

export default products