import {connect} from 'react-redux'
import Cart from '../Cart'
import {createSelector} from ''

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps,null)(Cart)