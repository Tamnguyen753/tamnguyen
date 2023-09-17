import React from 'react'

function Menu_item({text,background="#3D464D"}) {
  return (
    <div style={{background}} className='menu-item'>
        <p>{text}</p>
        <img style={{height:"20px"}} src='Vector12.png'></img>
    </div>
  )
}

export default Menu_item