import React from 'react'

const Product = ({product}) => {
  console.log(products)
  return (
    <>
      {
        products.map(product => {
          const {id,name} = {...product}
          console.log(product)
          return(
            <h6 key={id}>{name}</h6>
          )
        })
      }
    </>
  )
}

export default Product