import React from 'react'
import ElementLogo from '../../accets/images/ElementLogo.svg'
import Vector from '../../accets/images/Vector.svg'
import BackgroundLogo from '../../accets/images/BackgroundLogo.svg'
import { global } from '../../global/Global'

function MainSideBar({clickAction, activeTab}) {

  return (
    <div style={{position: 'absolute', left: 0, bottom: 0, top: '62px',  width: '70px', backgroundColor: '#2B3377', justifyContent:'center'}}>
      <div style={{marginTop: 20, cursor: 'pointer'}} onClick={(action) => {clickAction(action); global.editorName = 'Element'; activeTab('Element')}}>
        <img src={ElementLogo} width={27} height={27}/>
        <div style={{fontSize: 12, color: '#C4C4C4', fontFamily: 'Rubik'}}>
          Elements
        </div>
      </div>
      <div style={{marginTop: 20, cursor: 'pointer'}} onClick={(action) => {clickAction(action); global.editorName = 'Text'; activeTab('Text')}}>
        <img src={Vector} width={27} height={27}/>
        <div style={{fontSize: 12, color: '#C4C4C4', fontFamily: 'Rubik'}}>
          Text
        </div>
      </div>
      <div style={{marginTop: 20, cursor: 'pointer'}} onClick={(action) => {clickAction(action); global.editorName = 'Background'; activeTab('Background')}}>
        <img src={BackgroundLogo} width={27} height={27}/>
        <div style={{fontSize: 12, color: '#C4C4C4', fontFamily: 'Rubik'}}>
          Background
        </div>
      </div>
    </div>
  )
}

export default MainSideBar
