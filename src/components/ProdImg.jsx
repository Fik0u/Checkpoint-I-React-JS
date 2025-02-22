import React from 'react'
import product from '../product'

//Image component
const ProdImg = () => {
  return (
    <div>
      <img src={product.urlImg} alt="PSVR2" style={{width: '300px', height:'200px'}}/>
    </div>
  )
}

export default ProdImg
