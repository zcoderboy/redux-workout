import React from 'react'

const ProductAdd = (props) => {
  console.log(props)
  return (
    <>
      <h5>Add Product</h5>
      <form onSubmit="" style={{
        display: "flex",
        flexDirection: "column",
        width
      }}>
        <input type="text" name="name" placeholder="Name"></input>
        <input type="number" name="price" placeholder="Price"></input>
        <select name="category">
          <option value="test" selected>Shoes</option>
        </select>
      </form> 
    </>
  )
}

export default ProductAdd