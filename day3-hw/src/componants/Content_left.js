import React from 'react'
import Content_category from './Content_category'
import Menu_item from './Menu_item'


function Content_left() {
  return (
    <div className='content-left'>
        <Content_category />
        <Menu_item background="#B59628" text="Computer" />
        <Menu_item text="Hand Tools"></Menu_item>
        <Menu_item text="Machine Tools"></Menu_item>
        <Menu_item text="Power Tools"></Menu_item>
        <Menu_item text="Storage Tools"></Menu_item>
        <Menu_item text="Clothes & PPE"></Menu_item>
        <Menu_item text="Electrical"></Menu_item>
        <Menu_item text="Building Tools"></Menu_item>
        <Menu_item text="Foods"></Menu_item>
        <Menu_item text="Drinks"></Menu_item>
    </div>
  )
}

export default Content_left