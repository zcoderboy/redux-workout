import normalizedData from '../normalizedState'

const products = (categories = normalizedData.entities.categories, action) => {
  return categories
}

export default categories