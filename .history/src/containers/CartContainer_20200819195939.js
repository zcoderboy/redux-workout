import {connect} from 'react-redux'
import Cart from '../Cart'
import {createSelector} from 'reselect'

const getCart = (state) => state.cart

const selectTotalCount = createSelector(
  [getCart],
  (cart) =
)
const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps,null)(Cart)