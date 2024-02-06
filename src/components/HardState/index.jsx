import React, { useEffect, useState, useReducer } from 'react';
import reducer, { initialState } from './reducer';

/*
  допрацювати ред'юсер, додати йому логіку зміни стану для координат
  
  * зробити компонент Counter (лічільник) на хуці useReducer
    цей компонент має містити кнопку, при натисканні на яку змінюється лічильник
    селект, який вказує крок зміни
    ** кнопка яка керує тим чи буде крок додаватися або відніматися від лічильника
    ************ має бути кнопка, яка скине стан в початкове значення
*/

const HardState = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { coords, number } = state;

  function handleChange({ target: { value } }) {
    // дані для ред'юсеру які дозволяють зрозуміти яку логіку стану використовувати
    const action = { type: 'number', payload: +value };

    // відправка action каже реакту запускати ред'юсер
    dispatch(action);
  }

  function handleCoords({ clientX, clientY }) {
    const action = {
      type: 'CHANGE_COORDS',
      newCoords: {
        x: clientX,
        y: clientY,
      },
    };

    dispatch(action);
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
