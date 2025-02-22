import React from 'react'
import product from '../product'

//Description component
const Description = () => {
  return (
    <div style={{fontWeight:300}}>
      {product.description}
    </div>
  )
}

export default Description
