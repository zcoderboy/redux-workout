import React from 'react'

const ProductAdd = () => {
  const addProduct = () => {
    console.log('Adding....')
  }
  return (
    <>
      <h5>Add Product</h5>
      <form onSubmit={addProduct}>
        <input type="text" name="name"></input>
      </form> 
    </>
  )
}

export default ProductAdd