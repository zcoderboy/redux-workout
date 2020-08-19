import {connect} from 'react-redux'
import ProductList from '../ProductList'

const mapStateToProps = (state) => {
  return state.products
}

export default connect(mapStateToProps,null)(ProductList)