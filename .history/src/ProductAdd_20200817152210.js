import React from 'react'

const ProductAdd = ({keys,categories}) => {
  console.log(props)
  return (
    <>
      <h2>Add Product</h2>
      <form onSubmit="" style={{
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

          }
          <option value="test">Shoes</option>
        </select>
      </form> 
    </>
  )
}

export default ProductAdd