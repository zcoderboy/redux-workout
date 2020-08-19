import React from 'react'
import { connect } from 'react-redux'
import Product from '../Product'

const mapStateToProps = (state,ownProps) =>{
  com
  return{
    product: state.products[ownProps.productId]
  }
}

export default connect(mapStateToProps,null)(Product)