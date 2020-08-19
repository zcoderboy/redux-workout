import normalizedData from '../normalizedState'
console.log(normalizedData.entities)

const products = (products = normalizedData.entities.products, action) => {
  return products
}

export default products