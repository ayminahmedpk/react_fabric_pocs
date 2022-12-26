import React, {useState} from 'react'

import Canvas from './Canvas';

const CanvasParent = (props) => {

  const [count, setCount] = useState(0);


  return (
    <div className="component parent">
      <button onClick={() => {setCount(count+1)}}>
        Button to re-render parent - count: {count}
      </button>
      <Canvas parentCount={count} setParentCount={setCount}></Canvas>
      <p>
        Changing this doesn't re-render the canvas, but moving the elements
        around does.
      </p>
    </div>
  )
}

export default CanvasParent;