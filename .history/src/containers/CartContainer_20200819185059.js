import {connect} from 'react-redux'
import Cart from '../Cart'

const mapStateToProps = (state) => {
  return {
    products: state.Cart
  }
}

export default connect(mapStateToProps,null)(Cart)