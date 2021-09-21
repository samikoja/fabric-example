import React from 'react'
import { SketchPicker } from "react-color";
import reactCSS from 'reactcss'
import Bold from '../../../../accets/images/B.svg'
import Italic from '../../../../accets/images/Italic.svg'
import SendBack from '../../../../accets/images/SendBack.svg'

function TextToolBar(
  {handleClick,
  handleClose,
  handleChange,
  color,
  displayColorPicker,
  handleBoldText,
  handleItalicText,
  handleCurveText,
  handleSendBack
}) {
  const styles = reactCSS({
    'default': {
      color: {
        width: '25px',
        height: '25px',
        borderRadius: '20px',
        background: `rgba(${color.r}, ${ color.g }, ${ color.b }, ${ color.a })`,
        marginTop: 10
      },
      popover: {
        position: 'absolute',
        top: 35,
        right: 0
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
    },
  });
  return (
    <div className='row-1'>
      <div className='col' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 20}}>
        <div onClick={ (e) => handleClick(e) }>
            <div style={ styles.color } />
        </div>
        { displayColorPicker ? <div style={ styles.popover }>
        <div style={ styles.cover } onClick={ (e) => handleClose(e) }/>
            <SketchPicker color={ color } onChange={ (e) => handleChange(e) } />
        </div> : null }
        <div style={{marginLeft: 20, marginTop: 10}} onClick={(e) => handleBoldText(e)}>
          <img src={Bold} width='15' height='15'/>
        </div>
        <div style={{marginLeft: 20, marginTop: 10}} onClick={(e) => handleItalicText(e)}>
          <img src={Italic} width='15' height='15'/>
        </div>
        <div style={{marginLeft: 20, marginTop: 10}} onClick={(e) => handleSendBack(e)}>
          <img src={SendBack} width='15' height='15'/>
        </div>
        <div style={{marginLeft: 20, marginTop: 10, color: '#1115'}} onClick={(e) => handleCurveText(e)}>
          curveText
        </div>
      </div>
    </div>
  )
}

export default TextToolBar
