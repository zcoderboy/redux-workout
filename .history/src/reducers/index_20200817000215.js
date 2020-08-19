import {combineReducers} from 'redux'
import cart from './CartReducer'
import products from './ProductReducer'
import categories fro

export default combineReducers({
  cart,
  products,
  categories
})