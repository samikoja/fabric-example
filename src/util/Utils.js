import {fabric} from "fabric";
import { act } from "react-dom/cjs/react-dom-test-utils.production.min";

export const rectangleShape = (canvas) => {
    const fabricObject = new fabric.Rect({
        left: 50,
        top: 50,
        height: 280,
        width: 200,
        fill: 'yellow',
    });
    canvas.add(fabricObject);
    canvas.renderAll();
}

export const triangleShape = (canvas) => {
    const fabricObject = new fabric.Triangle({
        left: 50,
        top: 50,
        height: 280,
        width: 200,
        fill: "#5c4a3c",
    });
    canvas.add(fabricObject)
    canvas.renderAll();
}

export const circleShape = (canvi) => {
    const fabricObject = new fabric.Circle({
        left: 50,
        top: 50,
        radius: 50,
        fill: 'red',
    });
    canvi.add(fabricObject)
    fabricObject.on('after:render', (event) => {
       console.log('fghghggfdhd: ', event);
    })
    canvi.renderAll();
}

export const addTextBox = (canvas) => {
    const fabricObject = new fabric.Textbox('Text', {
        left: 50,
        top: 50,
        width: 150,
        fontSize: 30,
        fontFamily: "Roboto",
        textAlign: 'center',
        pathSide: 'left',
        pathStartOffset: 0
      });

      canvas.add(fabricObject);
      canvas.renderAll();
}

export const uploadImage = (canvas, url) => {
    new fabric.Image.fromURL(url, img => {
      img.scale(0.75);
      img.scaleToWidth(100);
      img.scaleToHeight(100);
      canvas.add(img);
      canvas.renderAll();
    });
  }

//Actions
export const leftControl = (canvas, value) => {
    const newCanvas =  canvas.getActiveObject();
    console.log('Control: ', newCanvas);
    if (newCanvas) {
        console.log(`res: `, newCanvas);
        newCanvas.set('left', value).setCoords();
        canvas.requestRenderAll();
    }
}

export const topControl = (canvas, value) => {
    const newCanvas =  canvas.getActiveObject();
    if (newCanvas) {
        console.log(`res: `, newCanvas);
        newCanvas.set('top', value).setCoords();
        canvas.requestRenderAll();
    }
}

export const rightControl = (canvas, value) => {
    const newCanvas =  canvas.getActiveObject();
    if (newCanvas) {
        console.log(`res: `, newCanvas);
        newCanvas.set('left', -value).setCoords();
        canvas.requestRenderAll();
    }
}
export const changeColor = (canvas, value) => {
    const newCanvas =  canvas.getActiveObject();
    const r = value.r;
    const b = value.b;
    const g = value.g;
    const a = value.a
    if (newCanvas) {
        newCanvas.set('fill', `rgba(${r}, ${g}, ${b}, ${a})`).setCoords();
        canvas.requestRenderAll();
    }
}

export const clearCanvas = (canvas, action) => {
    if (action == 'clearAll') {
        canvas.remove(...canvas.getObjects());
    } else if (action == 'selectedObject') {
        const newCanvas =  canvas.getActiveObject();
        canvas.remove(newCanvas);
    }
}

export const positionAction = (canvas, action) => {
    const newCanvas =  canvas.getActiveObject();
    if (action == 'back') {
        canvas.sendToBack(newCanvas)
        canvas.requestRenderAll();
    }
    else if(action == 'front'){
        canvas.bringToFront(newCanvas)
        canvas.requestRenderAll();
    }
    canvas.renderAll()
}

export const textFormate = (canvas, action) => {
    const newCanvas =  canvas.getActiveObject();
    console.log('ffhdfs: ', newCanvas);
    if (action == 'italic') {
        newCanvas.set('fontStyle', 'italic');
    }
    else if(action == 'bold'){
        newCanvas.set('fontStyle', 'bold');
    }
    else if (action == 'curveText'){
        newCanvas.set('path', new fabric.Path('M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97', {
            strokeWidth: 1,
            visible: false,
        }));
    }
    canvas.renderAll()
}

export const fabricFilter = (canvas, action, value) => {
    const newCanvas =  canvas.getActiveObject();
    if (action == 'brightness') {
        const filter = new fabric.Image.filters.Brightness({
            brightness: parseFloat(value)
        });
        newCanvas.filters.push(filter);
        newCanvas.applyFilters();
        canvas.renderAll();
        newCanvas.filters.length > 1 && newCanvas.filters.shift();
    } else if (action == 'contrast') {
        const filter = new fabric.Image.filters.Contrast({
            contrast: parseFloat(value)
        });
        newCanvas.filters.push(filter);
        newCanvas.applyFilters();
        canvas.renderAll();
        newCanvas.filters.length > 1 && newCanvas.filters.shift();
    } else if (action == 'removeColor') {
        const filter = new fabric.Image.filters.BlackWhite();
        newCanvas.filters.push(filter);
        newCanvas.applyFilters();
        canvas.renderAll();
        // newCanvas.filters.length > 1 && newCanvas.filters.shift();
    } else if (action == 'textShadow') {
        newCanvas.set({shadow: 'rgba(0,0,0, 0.3) 2px 2px 2px'})
        canvas.requestRenderAll();
    } else if (action == 'strokeText') {
        newCanvas.set('stroke', 'green')
        newCanvas.set('storkeWidth', 3)
        canvas.requestRenderAll();
    }
}
