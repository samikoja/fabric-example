import React, {useEffect,useState, useRef} from 'react'
import { fabric } from 'fabric';
import RectangleShape from '../../../accets/images/RectangleShape.svg'
import EllipseShape from '../../../accets/images/EllipseShape.svg'
import PolygonShape from '../../../accets/images/PolygonShape.svg'

function ElementSideBar({onItemPicked, onUploadImage}) {
  const inputImage = useRef(null)


  return (
    <div className='container'>
      <div
      onClick={() => inputImage.current.click()}
        style={{cursor: 'pointer', width: '310px', height: '40px', borderRadius: '6px', backgroundColor: '#4454DF', alignItems: 'center', justifyContent: 'center', display: 'flex', marginTop: '15px'}}>
        <div>
          <input id="filereader" type="file" accept="image/*" style={{display: 'none'}} ref={inputImage} onChange={(e) => onUploadImage(e)}/>
          <label style={{fontFamily: 'Rubik', fontWeight: '500', fontSize: '18', color:'#fff'}}>
            Upload an Image
          </label>
        </div>
      </div>
      <div>
        <div style={{display: 'flex', alignItems: 'flex-start', marginTop: '15px', color: '#fff', fontFamily: 'Rubik', fontWeight: 'bold', fontSize: 18}}>
          Lines & Shapes
        </div>
        <div className='row' style={{marginTop: '15px'}}>
          <div className='col' style={{cursor: 'pointer'}} onClick={()=>{onItemPicked('circle')}} >
            <img src={EllipseShape} width={50} height={50}/>
          </div>
          <div className='col' style={{cursor: 'pointer'}} onClick={()=>{onItemPicked('rectangle')}}>
            <img src={RectangleShape} width={50} height={50}/>
          </div>
          <div className='col' style={{cursor: 'pointer'}} onClick={()=>{onItemPicked('polygon')}}>
            <img src={PolygonShape} width={50} height={50}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ElementSideBar
