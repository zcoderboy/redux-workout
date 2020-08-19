import {connect} from 'react-redux'
import Cart from '../Cart'

const mapStateToProps = (state) => {
  return {
    products: Object.keys(state.products)
  }
}

export default connect(mapStateToProps,null)(Cart)