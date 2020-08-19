import {connect} from 'react-redux'
import ProductList from '../ProductList'

const mapStateToProps = (state) => {
  console.log(state.entities.products)
  return {
    products: [state.products]
  }
}

export default connect(mapStateToProps,null)(ProductList)