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
        type: 'ADD_TO_CART'
        payload: {
          ...product
        }
      })
    }
  }
}

export default connect(mapStateToProps,null)(Product)