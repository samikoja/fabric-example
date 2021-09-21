import React from 'react';
import TextToolBar from './textToolBar/TextToolBar';

function TopToolBar(
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
  return (
    <div style={{position: 'absolute', left: '70px', top: '62px', right: 0,  height: '60px', backgroundColor: '#fff', justifyContent:'center'}}>
      <TextToolBar
      handleClick={handleClick}
      handleClose={handleClose}
      handleChange={handleChange}
      color={color}
      displayColorPicker={displayColorPicker}
      handleBoldText={handleBoldText}
      handleItalicText={handleItalicText}
      handleCurveText={handleCurveText}
      handleSendBack={handleSendBack}
      />
    </div>
  )
}

export default TopToolBar
