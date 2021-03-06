import React,{useReducer} from 'react'

const formReducer = (state, action) => {
  if(action.type === "UPDATE_STATE"){
    return {
      ...state,
      ...action.payload
    }
  }
  return state
}

const ProductAdd = ({keys,categories,addProduct}) => {
  const [state,dispatch] = useReducer(formReducer,{})

  const handleChange = (event) => {
    dispatch({
      type: 'UPDATE_STATE',
      payload: {
        [event.target.name] : event.target.value
      }
    })
  }
  
  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={(event) => {
        event.preventDefault()
        state.price = parseInt(state.price)
        addProduct(state)
        event.target.reset()
      }} style={{
        display: "flex",
        flexDirection: "column",
      }}>
        <input style={{
          marginBottom: "10px"
        }} type="text" name="name" required placeholder="Name" onChange={ (event) => handleChange(event) }></input>
        <input style={{
          marginBottom: "10px"
        }} type="number" name="price" required placeholder="Price" onChange={ (event) => handleChange(event) }></input>
        <select style={{
          marginBottom: "10px"
        }} name="category" required onChange={ (event) => handleChange(event) }>
          {
            keys.map((key,index)=>{
              return(
                <option selected key={key} value={key}>{categories[key].name}</option>
              )
            })
          }
        </select>
        <button type="submit" value="Add">Add product</button>
      </form> 
    </div>
  )
}

export default ProductAdd