import React, {useState} from 'react';
import {rectangleShape, triangleShape, circleShape, update} from '../util/Utils';

function Buttons(props) {
    const {
        action,
        buttonName
    } = props

    return (
        // <div>
        //     <button onClick={(e) => {
        //         action(e)
        //     }} style={{marginRight: 10}}>{buttonName}</button>
        // </div>
        <div
        onClick={(e) => action(e)}
          style={{cursor: 'pointer', width: '310px', height: '40px', borderRadius: '6px', backgroundColor: '#4454DF', alignItems: 'center', justifyContent: 'center', display: 'flex', marginTop: '15px'}}>
          <div>
            <label style={{fontFamily: 'Rubik', fontWeight: '500', fontSize: '18', color:'#fff'}}>
              {buttonName}
            </label>
          </div>
        </div>
    );
}

export default Buttons;
