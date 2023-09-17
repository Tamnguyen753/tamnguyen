import React from 'react'
import Content_left from './Content_left'
import Content_right from './Content_right'

function Content_container() {
  return (
    <div className='content-container'>
        <Content_left />
        <Content_right />
    </div>
  )
}

export default Content_container