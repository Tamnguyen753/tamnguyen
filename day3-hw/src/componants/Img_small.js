import React from 'react'

function Img_small() {
  return (
    <div>
        <img  style={{width:"296px",height:"178px"}} src='Photos.png' />
        <img className='img-small'  style={{width:"296px",height:"178px"}} src='Photos.png' />
        <img className='img-small'  style={{width:"296px",height:"178px"}} src='Photos.png' />
    </div>
  )
}

export default Img_small