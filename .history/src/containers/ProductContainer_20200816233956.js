import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state,ownProps) =>{
  return{
    product: state.products[ownProps.productId]
  }
}

export default connect(mapStateToProps,null)