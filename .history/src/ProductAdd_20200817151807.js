import React from 'react'

const ProductAdd = (props) => {
  console.log(props)
  return (
    <>
      <h2>Add Product</h2>
      <form onSubmit="" style={{
        display: "flex",
        flexDirection: "column",
        width: "10%"
      }}>
        <input type="text" name="name" placeholder="Name"></input>
        <input type="number" name="price" placeholder="Price"></input>
        <select name="category">
          <option value="" 
          <option value="test" selected>Shoes</option>
        </select>
      </form> 
    </>
  )
}

export default ProductAdd