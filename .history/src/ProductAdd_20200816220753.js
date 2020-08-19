import React from 'react'

const ProductAdd = () => {
  const addProduct = () => {
    console.log('Adding....')
  }
  return (
    <>
      <h5>Add Product</h5>
      <form onSubmit={addProduct}>
        <input type="text" name="name" placeholder="Name"></input>
      </form> 
    </>
  )
}

export default ProductAdd