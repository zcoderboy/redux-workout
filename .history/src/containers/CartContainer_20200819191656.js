import {connect} from 'react-redux'
import Cart from '../Cart'
import {createSelector} from 'reselect'

const getCart = (state) => state.cart

const selectCart = createSelector(
  [getCart],
  (cart) => {
    return cart
  }
)

const mapStateToProps = (state) => {
  console.log('rer')
  return {
    cart: selectCart(state)
  }
}

export default connect(mapStateToProps,null)(Cart)