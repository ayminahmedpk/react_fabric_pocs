import React, {useState, useEffect} from 'react'
import { fabric } from 'fabric'

const Canvas = () => {

  const [canvasObject, setCanvasObject] = useState('');
  const [count, setCount] = useState(0);

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
      <button onClick={() => {setCount(count+1)}}>
        Button to re-render component - count: {count}
      </button>
      <br />
      <br />
      <p>
        Appears that canvas maintains its own state between component
        re-renders that result from clicking the increment button.
      </p>
      <br />
      <p>
        However, changing this text (a sort of refresh) will clear the canvas -
        but maintain the count. Note this behavior.
      </p>
    </>
  )
}

export default Canvas;