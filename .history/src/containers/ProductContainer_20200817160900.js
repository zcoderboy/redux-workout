import { connect } from 'react-redux'
import Product from '../Product'

const mapStateToProps = (state,ownProps) =>{
  return{
    product: state.products[ownProps.productId]
  }
}

const mapDispatchToProps = (state) => {
  return{
    addToCart: 
  }
}

export default connect(mapStateToProps,null)(Product)