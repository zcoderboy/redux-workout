import {connect} from 'react-redux'
import Cart from '../Cart'
import {createSelector} from 'reselect'

const getCart = (state) => state.cart

const mapStateToProps = (state) => {
  return {
    cart: selectCart(state)
  }
}

export default connect(mapStateToProps,null)(Cart)