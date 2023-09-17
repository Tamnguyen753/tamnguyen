import React from 'react'

function Product_detail() {
  return (
    <div className='product-detail'>
        <img className='img-product' src='Product.png' />
        <div>
            <h1>Adidas Shoes</h1>
            <p>ID: 123</p>
            <div className='rating'>
                <img src='Rating1.png' />
                <p>50% Off</p>
            </div>
            <div className='price'>
                <p>$ 120.00</p>
                <img src='Add Cart.png' />
            </div>
        </div>
        <button className='btn-avaiable'>Avaiable</button>
    </div>
  )
}

export default Product_detail