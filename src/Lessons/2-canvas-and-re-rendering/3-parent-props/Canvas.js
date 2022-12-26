import React, {useState, useEffect} from 'react'
import { fabric } from 'fabric'

const Canvas = ({parentCount, setParentCount}) => {

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
    <div className="component child">
      <canvas id="canvas"/>
      <button onClick={addBox}>Add red box</button>
      <button onClick={() => {setCount(count+1)}}>
        Button to re-render component - count: {count}
      </button>
      <button onClick={() => {setParentCount(parentCount+1)}}>
        Button to re-render parent - parent count: {parentCount}
      </button>
      <br />
      <br />
      <p>
        Updating props doesn't seem to re-render the canvas.
      </p>
    </div>
  )
}

export default Canvas;