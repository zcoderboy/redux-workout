import normalizedData from '../normalizedState'

const products = (products = normalizedData.entities.products, action) => {
  console.log(action.pa)
  return products
}

export default products