import React,{useReducer} from 'react'

const defaultState = {
    name: '',
    price: '',
    category: ''
}
const formReducer = (state = defaultState, action) => {
  
}

const ProductAdd = ({keys,categories,addProduct}) => {
  const [state,dispatch] = useReducer(formReducer,)
  const submitForm = () => {

  }
  return (
    <>
      <h2>Add Product</h2>
      <form onSubmit={submitForm} style={{
        display: "flex",
        flexDirection: "column",
        width: "10%"
      }}>
        <input style={{
          marginBottom: "10px"
        }} type="text" name="name" placeholder="Name"></input>
        <input style={{
          marginBottom: "10px"
        }} type="number" name="price" placeholder="Price"></input>
        <select name="category">
          {
            keys.map(key=>{
              return(
                <option value={key}>{categories[key].name}</option>
              )
            })
          }
        </select>
      </form> 
    </>
  )
}

export default ProductAdd