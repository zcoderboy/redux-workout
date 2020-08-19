import React,{useReducer} from 'react'

const defaultState = {
    name: '',
    price: '',
    category: ''
}
const formReducer = (state, action) => {
  if(action.type === "UPDATE_STATE"){
    return {
      state,
      ...action.payload
    }
  }
  return state
}

const ProductAdd = ({keys,categories,addProduct}) => {
  const [state,dispatch] = useReducer(formReducer,defaultState)

  const handleChange = (event) => {
    dispatch({
      type: 'UPDATE_STATE',
      payload: {
        [event.target.name] : event.target.value
      }
    })
  }
  
  return (
    <>
      <h2>Add Product</h2>
      <form onSubmit={()=>console.log(state)}style={{
        display: "flex",
        flexDirection: "column",
        width: "10%"
      }}>
        <input style={{
          marginBottom: "10px"
        }} type="text" name="name" placeholder="Name" onChange={ (event) => handleChange(event) }></input>
        <input style={{
          marginBottom: "10px"
        }} type="number" name="price" placeholder="Price" onChange={ (event) => handleChange(event) }></input>
        <select style={{
          marginBottom: "10px"
        }} name="category" onChange={ (event) => handleChange(event) }>
          {
            keys.map(key=>{
              return(
                <option value={key}>{categories[key].name}</option>
              )
            })
          }
        </select>
        <button type="submit" value="Add">Add product</button>
      </form> 
    </>
  )
}

export default ProductAdd