import {combineReducers} from 'redux'
import cart from './CartReducer'
import productReducer from './ProductReducer'

export default combineReducers({
  cartReducer,
  productReducer
})