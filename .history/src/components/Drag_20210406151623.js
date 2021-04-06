  
import React from 'react';

const Drag = () => {

  function dragStart(event) {
    event.dataTransfer.setData("orange_box", event.target.id);

    setTimeout (() => {
      event.target.style.display = "none";
    }, 0);
    
  }

  function drop(event) {
    event.preventDefault();
    const orangeBox = event.dataTransfer.getData("orange_box");
    
    const box = document.getElementById(orangeBox);
    box.style.display = "block";
    event.target.appendChild(box);
    document.getElementById("dragging").innerHTML = "";
  }

  function allowDrop(event) {
    event.preventDefault();
  }

  function dragEnter(event) {
    if ( event.target.className === "box_target" ) {
      event.target.style.backgroundColor = "green";
    }
  }
  
  function dragLeave(event) {
    if ( event.target.className === "box_target" ) {
      event.target.style.backgroundColor = "blue";
    }
  }

  function ondrag(event) {
    document.getElementById("dragging").innerHTML = "The orange box is being dragged";
  }
  

  return (

      <div>
        <h1>Check components/Drag.js file</h1>
        <p>Using onDrag onDragEnter and onDragLeave events move the orage square from one box to another</p>
        <div  style={{
          display: 'flex',
          justifyContent: 'space-around'
          }}>
          <div className="box_target" style={{
            width: 200,
            height: 200,
            border: '1px solid black',
            }} onDrop={drop} 
              onDragOver={allowDrop}
              onDragEnter={dragEnter}
              onDragLeave={dragLeave}
              >
            <div style={{
              width: 50,
              height: 50,
              backgroundColor: 'orange'
            }} id="dragtarget" draggable="true" onDragStart={dragStart} onDrag={ondrag}
            />
          </div>
          <p id="dragging"></p>
          <div className="box_target" style={{
            width: 200,
            height: 200,
            border: '1px solid black',
          }} onDrop={drop} 
            onDragOver={allowDrop}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave} 
            />
        </div>
      </div>
  )
}

export default Drag;