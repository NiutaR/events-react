import React, { useRef, useState } from 'react';
import { useDragEvents } from 'beautiful-react-hooks';

const Drag = () => {
  const ref = useRef();
  const [isDragged, setIsDragged] = useState(false);
  const { onDragStart, onDragEnd } = useDragEvents(ref);

  onDragStart((event) => {
    setIsDragged(true);
  });

  onDragEnd((event) => {
    setIsDragged(false);
  });

  return (
    <div>
      <h1>Check components/Drag.js file</h1>
      <p>
        Using onDrag onDragEnter and onDragLeave events move the orage square
        from one box to another
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
      <div
          style={{ width: 200, height: 200, border: "1px solid black" }}
          
      >
        </div>
      
      <div
          style={{ width: 200, height: 200, border: "1px solid black" }}
          
        >
        </div>
      </div>
      </div>
 
  );
};

export default Drag;