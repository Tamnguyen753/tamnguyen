import React from 'react'
import Product_detail from './Product_detail'

function Product_container() {
  return (
    <div className='product-container'>
        <Product_detail />
        <Product_detail />
        <Product_detail />
        <Product_detail />
    </div>
  )
}

export default Product_container