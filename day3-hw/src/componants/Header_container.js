import React from 'react'
import Header_menu from './Header_menu'
import Header_bottom from './Header_bottom'

function Header_container() {
  return (
    <div className='header-container'>
       <Header_menu />
       <Header_bottom />

    </div>
  )
}

export default Header_container