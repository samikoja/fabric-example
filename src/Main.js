import React, {useState, useEffect} from 'react'
import Fabric from './components/Fabric';
import Header from './components/header/Header';
import MainSideBar from './components/sideBar/MainSideBar';
import MainToolbar from './components/sideBar/toolbar/MainToolbar';
import TopToolBar from './components/sideBar/toolbar/TopToolBar';
import { fabric } from 'fabric';
import {
  circleShape,
  rectangleShape,
  triangleShape,
  uploadImage,
  addTextBox,
  changeColor,
  textFormate,
  positionAction,
  returnObject
} from './util/Utils'
function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTabeType, setActiveTabType] = useState('');
  const [displayColorPicker, setDisplayColorPicker] = useState(false)
  const [color, setColor] = useState({
    r: '241',
    g: '112',
    b: '19',
    a: '1',
})

const handleClick = () => {
  setDisplayColorPicker(!displayColorPicker)
};

const handleClose = () => {
  setDisplayColorPicker(false)
};

const handleChange = (color) => {
  setColor(color.rgb)
  changeColor(canvas, color.rgb)
};

//   useEffect(() => {
//    window.onclick = e => {
// console.log(e.target.id);
//     if (isOpen ) {
//       e.target.id == 'mainToolbar' ? setIsOpen(true)
//       :
//       document.body.addEventListener('click', () => setIsOpen(false), true);

//       return function cleanup() {
//         document.body.removeEventListener('click', () => setIsOpen(false), true);
//       }
//     }
//   }
//   },[isOpen]);

  const [canvas, setCanvas] = useState('');

  useEffect(() => {
    setCanvas(initCanvas());

}, []);

const initCanvas = () => {
  var cc=   new fabric.Canvas('canvas-main', {
        height: 800,
        width: 900,
        backgroundColor: '#1111',
    })
    cc.on('object:modified',function(){
      console.log("after:render",cc.toJSON());
    })
    cc.on('object:added',function(){
      console.log("after:render",cc.toJSON());
    })
    return cc;
  };

const ShapeDraw = (type) => {
  switch (type) {
    case 'circle':
      circleShape(canvas)
      break;
    case 'rectangle':
      rectangleShape(canvas)
      break;
    case 'polygon':
      triangleShape(canvas)
      break;
    default:
      break;
  }
}

const handleUploadImage = (e) => {
  if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      uploadImage(canvas, URL.createObjectURL(img))
    }
}

  return (
    <>
      <Header/>
      <TopToolBar
      handleClick={() => handleClick()}
      handleClose={() => handleClose()}
      handleChange={(e) => handleChange(e)}

      color={color}
      displayColorPicker={displayColorPicker}
      handleBoldText={() => textFormate(canvas, 'bold')}
      handleItalicText={() => textFormate(canvas, 'italic')}
      handleCurveText={() => textFormate(canvas, 'curveText')}
      handleSendBack={() => positionAction(canvas, 'back')}
      />
      <MainSideBar  clickAction={() => {isOpen ? setIsOpen(false) : setIsOpen(true)}} activeTab={(type) => setActiveTabType(type)}/>
      {isOpen && <MainToolbar
      onItemClicked={(type)=>{ShapeDraw(type)}}
      onUploadImage={(e) => handleUploadImage(e)}
      type={activeTabeType}
      addText={() => addTextBox(canvas)}
      />}
      <Fabric canvas={canvas} />
    </>
  )
}

export default Main
