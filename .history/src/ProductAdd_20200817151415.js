import React from 'react'

const ProductAdd = (props) => {
  console.log(props)
  return (
    <>
      <h5>Add Product</h5>
      <form onSubmit="">
        <input type="text" name="name" placeholder="Name"></input>
        <input type="number" name="price" placeholder="Name"></input>
      </form> 
    </>
  )
}

export default ProductAdd