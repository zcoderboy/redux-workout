import {combineReducers} from 'redux'
import cart from './CartReducer'
import products from './ProductReducer'
import categories from './'

export default combineReducers({
  cart,
  products,
  categories
})