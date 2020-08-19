import normalizedData from '../normalizedState'

const products = (products = normalizedData.entities.products, action) => {
  console.log(action.type)
  return products
}

export default products