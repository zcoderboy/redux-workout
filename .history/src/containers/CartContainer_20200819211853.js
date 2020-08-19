import {connect} from 'react-redux'
import Cart from '../Cart'
import {createSelector} from 'reselect'

const getCart = (state) => state.cart

const selectTotalCount = createSelector(
  [getCart],
  (cart) => {
    return cart.items.reduce(function(acc,item){
      return acc + item.qty
    },0)
  }
)
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    totalCount: 
  }
}

export default connect(mapStateToProps,null)(Cart)