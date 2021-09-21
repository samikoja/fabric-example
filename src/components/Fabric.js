import React, {useEffect, useState, useRef} from 'react';
//Packages
import { SketchPicker } from "react-color";
import reactCSS from 'reactcss'
//Components
import {
rectangleShape,
circleShape,
triangleShape,
leftControl,
topControl,
rightControl,
changeColor,
addTextBox,
clearCanvas,
positionAction,
textFormate,
uploadImage,
fabricFilter
} from "../util/Utils";
import TopToolBar from './sideBar/toolbar/TopToolBar';

import Buttons from "./Buttons";
import { global } from '../global/Global';

function Fabric({canvas}) {


    const [displayColorPicker, setDisplayColorPicker] = useState(false)
    const [color, setColor] = useState({
        r: '241',
        g: '112',
        b: '19',
        a: '1',
    })
    const [imgURL, setImgURL] = useState('');
    const [image, setImage] = useState('')
    const [brightnessValue, setBrightnessValue] = useState(0);
    const [contrastValue, setContrastValue] = useState(0)



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

      const styles = reactCSS({
        'default': {
          color: {
            width: '36px',
            height: '20px',
            borderRadius: '2px',
            background: `rgba(${color.r}, ${ color.g }, ${ color.b }, ${ color.a })`,
          },
          swatch: {
            padding: '10px',
            background: '#fff',
            borderRadius: '1px',
            boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
            display: 'inline-block',
            cursor: 'pointer',
          },
          popover: {
            position: 'absolute',
            zIndex: '2',
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

      const addImg = (e, url) => {
        e.preventDefault();
        uploadImage(canvas, url)
      }

      const handleUploadImage = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            setImage(URL.createObjectURL(img))
            uploadImage(canvas, URL.createObjectURL(img))
          }
      }

    return (
        <div className='container-fluid'>
            <div/>
            <div className="row" style={{justifyContent: 'center', alignItems: 'center', position: 'absolute', top: '140px', left: '500px' }}>
                <canvas id="canvas-main"/>
            </div>
            {/* <div className="container mb-5">
                    Shapes:
                <div className="row align-items-start mt-3">
                    <div className='col'>
                        <Buttons buttonName={'Circle'} action={() => circleShape(canvas)}/>
                    </div>
                    <div className='col'>
                        <Buttons buttonName={'Rectangle'} action={() => rectangleShape(canvas)}/>
                    </div>
                    <div className='col'>
                        <Buttons buttonName={'Triangle'} action={() => triangleShape(canvas)}/>
                    </div>
                    <div className='col'>
                        <Buttons buttonName={'Clear All'} action={() => clearCanvas(canvas, 'clearAll')}/>
                    </div>
                    <div className='col'>
                        <Buttons buttonName={'Delete Object'} action={() => clearCanvas(canvas, 'selectedObject')}/>
                    </div>
                </div>
                <div style={{marginTop: 10}}>
                    Alignment:
                    <div className="row align-items-start mt-3">
                        <div className='col'>
                                <Buttons buttonName={'Left Control'} action={() => leftControl(canvas, 500)}/>
                        </div>
                        <div className='col'>
                                <Buttons buttonName={'Top Control'} action={() => topControl(canvas, 100)}/>
                        </div>
                        <div className='col'>
                                <Buttons buttonName={'Right Control'} action={() => rightControl(canvas, 5)}/>
                        </div>
                        <div className='col'>
                                <Buttons buttonName={'Bold'} action={() => textFormate(canvas, 'bold')}/>
                        </div>
                        <div className='col'>
                                <Buttons buttonName={'Italic'} action={() => textFormate(canvas, 'italic')}/>
                        </div>
                        <div className='col'>
                                <Buttons buttonName={'Curved Text'} action={() => textFormate(canvas, 'curveText')}/>
                        </div>
                        <div className='col'>
                                <Buttons buttonName={'Text Shadow'} action={() => fabricFilter(canvas, 'textShadow', 0)}/>
                        </div>
                        <div className='col'>
                                <Buttons buttonName={'Stroke Text'} action={() => fabricFilter(canvas, 'strokeText', 0)}/>
                        </div>
                    </div>
                </div>
                <div style={{marginTop: 10}}>
                    Colors:
                    <div>
                        <div style={ styles.swatch } onClick={ () => handleClick() }>
                        <div style={ styles.color } />
                        </div>
                        { displayColorPicker ? <div style={ styles.popover }>
                        <div style={ styles.cover } onClick={ () => handleClose() }/>
                        <SketchPicker color={ color } onChange={ (e) => handleChange(e) } />
                        </div> : null }
                    </div>
                </div>
                <div style={{marginTop: 10}}>
                    <Buttons buttonName={'Add Text'} action={() => addTextBox(canvas)}/>
                </div>
                <div style={{marginTop: 10}}>
                    Positions:
                    <div className="row align-items-start mt-3">
                        <div className='col'>
                                <Buttons buttonName={'Send to Back'} action={() => positionAction(canvas, 'back')}/>
                        </div>
                        <div className='col'>
                                <Buttons buttonName={'Bring to Front'} action={() => positionAction(canvas, 'front')}/>
                        </div>
                    </div>
                </div>
                <div style={{marginTop: 10}}>
                    <form onSubmit={e => addImg(e, imgURL)}>
                        <div>
                            <input
                                type="text"
                                value={imgURL}
                                onChange={ e => setImgURL(e.target.value)}
                            />
                            <button type="submit">Add Image</button>
                        </div>
                    </form>
                    <div style={{marginTop: 10}}>
                        <input id="filereader" type="file" accept="image/*" onChange={(e) => handleUploadImage(e)}/>
                    </div>
                </div>

                <div style={{marginTop: 10}}>
                    Image Filters:
                    <div className="row align-items-start mt-3">
                        <div className='col'>
                           <p>Brightness  </p>
                            <input type="range" defaultValue={0} min="-0.5" max="0.5" step='0.01' value={brightnessValue} onChange={(e) => {
                                setBrightnessValue(e.target.value)
                                fabricFilter(canvas, 'brightness', e.target.value)}}/>
                        </div>
                        <div className='col'>
                        <p>Contrast  </p>
                            <input type="range" defaultValue={0} min="-1" max="1" step='0.1' value={contrastValue} onChange={(e) => {
                                setContrastValue(e.target.value)
                                fabricFilter(canvas, 'contrast', e.target.value)
                            }}/>
                        </div>
                        <div className='col'>
                            <p>Remove Color  </p>
                            <Buttons buttonName={'Black and White'} action={() => fabricFilter(canvas, 'removeColor', 0)}/>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
);
}

export default Fabric;
