import React from 'react'

const ProductAdd = (props) => {
  return (
    <>
      <h2>Add Product</h2>
      <form onSubmit="" style={{
        display: "flex",
        flexDirection: "column",
        width: "10%"
      }}>
        <input styles={{

        } type="text" name="name" placeholder="Name"></input>
        <input type="number" name="price" placeholder="Price"></input>
        <select name="category">
          <option value="test">Shoes</option>
        </select>
      </form> 
    </>
  )
}

export default ProductAdd