import {connect} from 'react-redux'
import Cart from '../Cart'
import {createSelector} from 'reselect'

// const getCart = (state) => state.cart

// const selectCart = createSelector(
//   [getCart],
//   (cart) => {
//     return cart
//   }
// )
const mapStateToProps = (state) => {
  console.log('reruned')
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps,null)(Cart)