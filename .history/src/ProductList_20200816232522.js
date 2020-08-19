import React from 'react'

const ProductList = ({products}) => {
  console.log(products)
  return (
    <>
      {
        products.map(product => {
          const {id,name} = {...product}
          return(
            <h6 key={id}>{name}</h6>
          )
        })
      }
    </>
  )
}

export default ProductList