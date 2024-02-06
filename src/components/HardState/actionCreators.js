/*
  actionCreator - функція, яка повертає об'єкт action з коректною структурою
*/

export function createNumberAction(value) {
  const action = { type: 'number', payload: +value };
  return action;
}

export function createChangeCoords(newCoords) {
  return {
    type: 'CHANGE_COORDS',
    newCoords,
  };
}
