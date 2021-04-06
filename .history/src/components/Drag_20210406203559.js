import React from 'react';

const Drag = (props) => {
  const drop = e => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData('card_id');

    const card = document.getElementById(card_id);
    ca
  }
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
        }} 
        />
      </div>
    </div>
  )
}

export default Drag;