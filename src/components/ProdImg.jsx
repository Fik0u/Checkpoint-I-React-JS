import React from 'react'
import product from '../product'
const ProdImg = () => {
  return (
    <div>
      <img src={product.urlImg} alt="Rolex" style={{width: '250px'}}/>
    </div>
  )
}

export default ProdImg
