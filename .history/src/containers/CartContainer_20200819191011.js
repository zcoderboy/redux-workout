import {connect} from 'react-redux'
import Cart from '../Cart'
import {createSelector} from 'reselect'

const selectCart = (state) => state.cart

const getCartItem = createSelector(
  [getCart],
  (cart) => {
    return cart
  }
)
const mapStateToProps = (state) => {
  return {
    cart: getCartItem(state)
  }
}

export default connect(mapStateToProps,null)(Cart)