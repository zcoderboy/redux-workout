importimport {connect} from 'react-redux'
import ProductList from '../ProductList'

const mapStateToProps = (state) => {
  return {
    products: Object.keys(state.products)
  }
}

export default connect(mapStateToProps,null)(ProductList)