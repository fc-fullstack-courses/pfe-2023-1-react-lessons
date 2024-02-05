import React, { useEffect, useState } from 'react';

const HardState = (props) => {
  // їх тут 5+
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [number, setNumber] = useState(1);

  // тут теж 5+
  function handleChange({ target: { value } }) {
    setNumber(+value);
  }

  function handleCoords ({clientX, clientY}) {
    setCoords({
      x: clientX,
      y: clientY
    });
  }

  useEffect(()=> {
    document.body.addEventListener('mousemove', handleCoords);
    return () => {
      document.body.removeEventListener('mousemove', handleCoords);
    }
  },[]);

  return (
    <div>
      <p>X: {coords.x}</p>
      <p>Y: {coords.y}</p>
      <p>
        Square value of {number} is {number ** 2}
      </p>
      <label>
        <input type="number" value={number} onChange={handleChange} />
      </label>
    </div>
  );
};

export default HardState;
