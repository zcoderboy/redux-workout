import normalizedData from '../normalizedState'
import { act } from 'react-dom/test-utils'

const products = (products = normalizedData.entities.products, action) => {
  if(action.type === "ADD_PRODUCT"){
    return {
      ...products,
      [action.payload.id]: ...action.payload
    }
  }
  return products
}

export default products