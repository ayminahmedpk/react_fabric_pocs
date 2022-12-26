import React, {useState, useEffect} from 'react'
import { fabric } from 'fabric'

const Canvas = () => {

  const [canvasObject, setCanvasObject] = useState('');

  useEffect( () => {setCanvasObject(initCanvas());}, [] )

  const initCanvas = () => (
    new fabric.Canvas('canvas', {
      height: 200,
      width: 400,
      backgroundColor: 'whitesmoke',
    })
  )

  const addBox = () => {
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: 'red',
      width: 20,
      height: 20,
    })
    canvasObject.add(rect);
  }

  return (
    <>
      <canvas id="canvas"/>
      <button onClick={addBox}>Add red box</button>
      <br />
      <br />
      <p>
        You can use the button to spawn a box.
      </p>
      <br />
      <p>
        You can drag the boxes around, rotate them, resize them and even change
        their aspect ratios.
      </p>
      <br />
      <p>
        The canvas seems to remember the locations and conditions of various
        items on it, so it must maintain some type of internal state.
      </p>
      
    </>
  )
}

export default Canvas;