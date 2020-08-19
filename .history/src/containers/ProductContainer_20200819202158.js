import { connect } from 'react-redux'
import Product from '../Product'

const mapStateToProps = (state,ownProps) =>{
  return{
    product: state.products[ownProps.productId]
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addToCart: (product) => {
      dispatch({
        type: 'ADD_TO_CART',
        payload: {
          ...product
          qty: 1
        }
      })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product)