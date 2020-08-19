import React from 'react'

const ProductAdd = () => {
  const addProduct = () => {
    console.log('Adding....')
  }
  return (
    <>
      <h5>Add Product</h5>
      <form onSubmit={addProduct}>

      </form>
    </>
  )
}

export default ProductAdd