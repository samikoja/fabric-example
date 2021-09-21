import React from 'react'
import teelaunchLogo from '../../accets/images/teelaunchLogo.svg';

function Header() {
  return (
    <div className='container-fluid'>
      <div className='row' style={{backgroundColor: '#4454DF', height: '62px', flex: 1, alignItems: 'center'}}>
        <div className='col-1'>
          <img src={teelaunchLogo} width={200} height={50}/>
        </div>
      </div>
    </div>
  )
}

export default Header
