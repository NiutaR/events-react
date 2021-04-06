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
    
      <div ref={ref} style={{padding: '20px 0', background: '#1D6C8B'}}>
        Draggable item...
        {isDragged && <span>is being dragged</span>}
      </div>
 
  );
};

export default Drag;