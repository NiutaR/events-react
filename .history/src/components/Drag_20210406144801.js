import React, { useRef, useState } from 'react';
//import { useDragEvents } from ''

const Drag = () => {
  const draggableRef = useRef();
  const dropzoneRef = useRef();
  const [ sroppedTimes, setDroopedTimes] = useState(0);
  const [isDragged, setIsDragged] = useState(false);
  const { onDragStart, onDragEnd } = useDragEvents(draggableRef);
  const { onDrop, onDragOver } = useDragEvents(dropzoneRef)
  return (
    <div>
      <h1>Check components/Drag.js file</h1>
      <p>Using onDrag onDragEnter and onDragLeave events move the orage square from one box to another</p>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around'
      }}>
        <div style={{
          width: 200,
          height: 200,
          border: '1px solid black',
        }}>
          <div style={{
            width: 50,
            height: 50,
            backgroundColor: 'orange'
          }}
          // onDrag={() => console.log('drag')}
          />
        </div>
        <div style={{
          width: 200,
          height: 200,
          border: '1px solid black',
        }} onDragEnter={() => console.log('drag over')} onDragLeave={() => console.log('drag leave')}/>
      </div>
    </div>
  )
}

export default Drag;