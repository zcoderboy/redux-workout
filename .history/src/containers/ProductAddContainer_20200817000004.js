import {connect} from 'react-redux'
import ProductAdd from '../ProductAdd'

const mapStateToProps = (state) => {
  return {
    products: Object.keys(state.products)
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addProduct: () => {
      dispatch({
        type: 
      })
    }
  }
}

export default connect(mapStateToProps,null)(ProductApp)