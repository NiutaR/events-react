import React, { useRef, useState } from 'react';
import { useDragEvents } from 'beautiful-react-hooks';

const Drag = () => {
  const draggableRef = useRef();
  const dropzoneRef = useRef();
  const [ sroppedTimes, setDroopedTimes] = useState(0);
  const [isDragged, setIsDragged] = useState(false);
  const { onDragStart, onDragEnd } = useDragEvents(draggableRef);
  

  onDragStart((event) => {
    setIsDragged(true);
  });

  onDragEnd((event) => {
    setIsDragged(false);
  });
  onDragOver((event) => {
    event.preventDefault();
  });
  onDrop((event) => {
    setDroopedTimes(1 + droppedTimes);
  });

  return (
    <DisplayDemo>
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
        }} onDrop={setDroopedTimes}
        onDrag
        > 
          <div ref={draggableRef} style={{
            width: 50,
            height: 50,
            backgroundColor: 'orange'
          }} 
          // onDrag={() => console.log('drag')}
          /> Draggable item ... {isDragged && <span>is being dragged</span>}
        </div>
        <div  ref={dropzoneRef} style={{
          width: 200,
          height: 200,
          border: '1px solid black',
        }} /> Drop zone! Droppes items: {droppedTimes}
      </div>
    </div>
    </DisplayDemo>
  );
};

export default Drag;