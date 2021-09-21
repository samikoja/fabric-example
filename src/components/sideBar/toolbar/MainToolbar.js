import React from 'react'
import { global } from '../../../global/Global';
import ElementSideBar from '../elementSideBar/ElementSideBar';
import TextSideBar from '../textSideBar/TextSideBar';

function MainToolbar({onItemClicked, onUploadImage, type, addText}) {

  return (
    <div id='mainToolbar' style={{position: 'absolute', left: '70px', bottom: 0, top: '62px',  width: '345px', backgroundColor: '#3D47A3', justifyContent:'center'}}>
      {type ==   'Element' && <ElementSideBar onItemPicked={onItemClicked} onUploadImage={onUploadImage}/>}
      {type == 'Text' && <TextSideBar addText={addText}/>}
      {type == 'Background' && <div style={{color: '#fff'}}>Background ToolBar</div>}
    </div>
  )
}

export default MainToolbar
