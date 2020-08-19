import {connect} from 'react-redux'
import ProductAdd from '../ProductAdd'

const mapStateToProps = (state) => {
  return {
    products: Object.keys(state.products)
  }
}

const mapDispatchToProps = (dispatch) => {
  
}

export default connect(mapStateToProps,null)(ProductApp)