import {connect} from 'react-redux'
import ProductAdd from '../ProductAdd'

const mapStateToProps = (state) => {
  return {
    products: Object.keys(state.products)
  }
}

export default connect(mapStateToProps,null)(ProductList)