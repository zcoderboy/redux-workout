import {connect} from 'react-redux'
import Cart from '../Cart'
import {createSelector} from 'reselect'


const mapStateToProps = (state) => {
  return {
    cart: selectCart(state)
  }
}

export default connect(mapStateToProps,null)(Cart)