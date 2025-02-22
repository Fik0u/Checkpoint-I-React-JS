import React from 'react'
import product from '../product'

//Price component
const Price = () => {
  return (
    <div style={{fontWeight:700}}>
      {product.price}
    </div>
  )
}

export default Price
