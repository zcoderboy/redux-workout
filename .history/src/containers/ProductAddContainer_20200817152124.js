import {connect} from 'react-redux'
import ProductAdd from '../ProductAdd'

const mapStateToProps = (state) => {
  return {
    keys: Object.keys(state.categories)
    
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

export default connect(mapStateToProps,mapDispatchToProps)(ProductAdd)