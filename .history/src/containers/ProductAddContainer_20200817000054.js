import {connect} from 'react-redux'
import ProductAdd from '../ProductAdd'

const mapStateToProps = (state) => {
  return {
    products: Object.keys(state.products)
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addProduct: (product) => {
      product.id = Date.now()
      dispatch({
        type: 'ADD_PRODUCT',
        payload: product
      })
    }
  }
}

export default connect(map,mapDispatchToProps)(ProductApp)