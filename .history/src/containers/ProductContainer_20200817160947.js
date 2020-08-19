import { connect } from 'react-redux'
import Product from '../Product'

const mapStateToProps = (state,ownProps) =>{
  return{
    product: state.products[ownProps.productId]
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addToCart: () => {
      dispatch({
        type: 'ADD_TO_CART'
        payload: {
          
        }
      })
    }
  }
}

export default connect(mapStateToProps,null)(Product)