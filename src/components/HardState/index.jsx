import React, { useEffect, useState, useReducer } from 'react';

const initialState = {
  number: 0,
  coords: {
    x: 0,
    y: 0,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'number': {
      const newState = {
        ...state,
        number: action.payload,
      };

      return newState;
    }
    default:
      return state;
  }
}

const HardState = (props) => {
  // state - стан
  // dispatch - функція відправки
  // reducer - функція, яка оновлюе стан, приймає найсвіжіший state першим аргументом
  // і action (набір додаткових даних для зміни стану) другим аргументом
  // reducer має повертати новий стан на основі цих даних
  // initialState - початкове значення стану
  const [state, dispatch] = useReducer(reducer, initialState);
  const { coords, number } = state;

  // їх тут 5+
  // const [coords, setCoords] = useState({ x: 0, y: 0 });
  // const [number, setNumber] = useState(1);

  // тут теж 5+
  function handleChange({ target: { value } }) {
    const action = { type: 'number', payload: +value };

    dispatch(action);

    // setNumber(+value);
  }

  function handleCoords({ clientX, clientY }) {
    const action = {
      type: 'coords',
    };
    // setCoords({
    //   x: clientX,
    //   y: clientY
    // });
  }

  useEffect(() => {
    document.body.addEventListener('mousemove', handleCoords);
    return () => {
      document.body.removeEventListener('mousemove', handleCoords);
    };
  }, []);

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
