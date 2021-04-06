import React from 'react';

const Drag = (props) => {
  const drop = e => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData('card_id');

    const card = document.getElementById(card_id);
    card.style.display = 'block';

    e.target.appendChild(card);
  }
  const dragOver = e => {
    e.preventDefault();
  }
  const dragStart = e => {
    const target = e.target;
    e.dataTransfer.setData('card_id', target.id);
    setTimeout(() => {
      target.style.display ='none';
    }, 0);
  }

  const dragLeave = e => {
    e.stopPropagation();
  }
  return (
    <div>
      <h1>Check components/Drag.js file</h1>
      <p>Using onDrag onDragEnter and onDragLeave events move the orage square from one box to another</p>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around'
      }}>
        <div id='board'
        id={props.id}
        className={props.className}
        onDrop={drop}
        onDragOver={dragOver}
        style={{
          width: 200,
          height: 200,
          border: '1px solid black',
        }}>
          <div id={props.id}
          className={props.className}
          draggable={props.draggable}
          onDragStart={dragStart}
          onDragLeave={dragLeave}
           style={{
            width: 50,
            height: 50,
            backgroundColor: 'orange'
          }}
          // onDrag={() => console.log('drag')}
          />
        </div>
        <div  id={props.id}
        className={props.className}
        onDrop={drop}
        onDragOver={dragOver}
        style={{
          width: 200,
          height: 200,
          border: '1px solid black',
        }} 
        />
        { props.children}
      </div>
    </div>
  )
}

export default Drag;