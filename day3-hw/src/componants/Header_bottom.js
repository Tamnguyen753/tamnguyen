import React from 'react'
import Search_icon from './Search_icon'

function Header_bottom() {
  return (
    <div className='header-bottom'>
        <p className='shop-app'>SHOP APP</p>
        <Search_icon />
        <img className='iconheader' src='Cart-vector.png' />
        <img className='iconheader' src='UserItem.png' />


    </div>
  )
}

export default Header_bottom