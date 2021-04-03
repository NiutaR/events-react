import React from 'react';

const Mouse = () => {
  function changeBackground(e) {
    e.target.style.background = 'red';
  }
  function returnInitial(e) {
    e.target.style.background = 'none';
  }
  return (
    <div>
      <h1>Check components/Mouse.js file</h1>
      <p>Using onMouseEnter events make the square below red when user hovers it. And using onMouseLeave turn it back to normal.</p>
      <div style={{
        width: 200,
        height: 200,
        border: '1px solid black',
        margin: '0 auto'
      }}
      onMouseEnter={changeBackground}
      onMouseLeave={returnInitial}
      </div>/>
    </div>
  )
}

export default Mouse;