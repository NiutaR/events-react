import React, { useRef, useState } from 'react';
import { useDragEvents } from 'beautiful-react-hooks';

const Drag = () => {
  //const draggableRef = useRef();
  //const dropzoneRef = useRef();
 
  //const [isDragged, setIsDragged] = useState(false);
  const { draggableRef, onDragStart } = useDragEvents(true);
  const { dropzoneRef, onDragEnd } = useDragEvents(false);


  const zoneA = () => {
    onDragEnd(false);
    onDragStart(true);
  };
  const zoneB = () => {
    onDragEnd(true);
    onDragStart(false);
  };
  /*onDragStart((event) => {
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
  });*/

  return (
    <DisplayDemo>
    <div ref={dropzoneRef}>
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
        }} onDragLeave={zoneA}
        > 
        {draggableRef ? draggableRef : null}
          <div ref={draggableRef} style={{
            width: 50,
            height: 50,
            backgroundColor: 'orange'
          }} 
          // onDrag={() => console.log('drag')}
          /> Draggable item ... 
        </div>
        <div   style={{
          width: 200,
          height: 200,
          border: '1px solid black',
        }} /> Drop zone! Droppes items:onDragLeave {zoneB}
      </div>
    </div>
    </DisplayDemo>
  );
};

export default Drag;