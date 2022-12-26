import React, {useState} from 'react'

const CanvasParent = (props) => {

  const [count, setCount] = useState(0);


  return (
    <div className="component parent">
      <button onClick={() => {setCount(count+1)}}>
        Button to re-render parent - count: {count}
      </button>
      <br />
      <br />
      <p>
        Changing the parent's count doesn't force re-rendering of the canvas,
        even though the child re-renders.
      </p>
      <br />
      <p>
        Interestingly, changing the text of this component doesn't force the
        canvas to re-render either. Note this behavior.
      </p>
      {props.children ? props.children : ''}
    </div>
  )
}

export default CanvasParent;