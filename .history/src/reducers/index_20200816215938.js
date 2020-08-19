import {combineReducers} from 'redux'
import cartReducer} from './CartReducer'
import productReducer from './ProductReducer'

export default combineReducers({
  cartReducer,
  productReducer
})