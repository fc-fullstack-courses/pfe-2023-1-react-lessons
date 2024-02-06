import React, { useReducer } from 'react';

const initialState = {
  isBordered: true
}

function reducer (prevState, action) {
  
  if(action === 'change border plz') {
    const newState = {
      isBordered: !prevState.isBordered
    };

    return newState;
  } else if (action === 'say something') {
    alert('Something');
    return prevState;
  } else {
    return prevState;
  }

}

const BasicReducerComponent = (props) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const divStyles = {
    border: `20px solid ${state.isBordered ? 'black': 'transparent'}`
  }

  function handleClick () {
    const action = 'change border plz';
    dispatch(action);
  }

  function handleClick2 () {
    const action = 'say something';
    dispatch(action);
  }

  return <div style={divStyles}>
    <p>lorem</p>
    <button onClick={handleClick}>Toggle border visibility</button>
    <button onClick={handleClick2}>Say something</button>
  </div>;
};

export default BasicReducerComponent;
