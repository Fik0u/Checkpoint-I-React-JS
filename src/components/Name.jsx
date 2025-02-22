import React from 'react'
import product from '../product'

// Name component 
const Name = () => {
  return (
    <div style={{fontSize: '2rem', color: '#0101a4'}}>
      {product.name}
    </div>
  )
}

export default Name
