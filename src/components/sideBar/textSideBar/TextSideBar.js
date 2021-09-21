import React from 'react'
import Buttons from '../../Buttons'

function TextSideBar({addText}) {
  return (
    <div className='container'>
      <div style={{fontFamily: 'Rubik', fontWeight: 'bold', fontSize: '18', color:'#fff', marginTop: '15px'}}>Click text to add to page</div>
      <Buttons buttonName={'Add Title'} action={() => addText()}/>
      <Buttons buttonName={'Add a Subheader'}/>
      <Buttons buttonName={'Add Body text'}/>
    </div>
  )
}

export default TextSideBar
