import {connect} from 'react-redux'
import Cart from '../Cart'
import {createSelector} from 'reselect'

const getCart = (state) => state.cart

const selectTotalCount = createSelector(
  [getCart],
  (cart) => {
    return cart.items.reduce(function(acc,item){
      return acc + item.qty
    },0)
  }
)

const selectTotalPrice = createSelector(
  [getCart],
  (cart) => {
    return cart.items.reduce(function(acc,item){
      return acc + (item.qty * item.price)
    },0)
  }
)

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    totalCount: selectTotalCount(state),
    totalPrice: selectTotalPrice(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    emptyCart: () => {
      dispatch({
        type: 'EMPTY_CART'
      })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)