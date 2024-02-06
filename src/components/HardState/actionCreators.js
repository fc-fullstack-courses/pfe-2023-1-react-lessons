import ACTION_TYPES from "./actionTypes";
/*
  actionCreator - функція, яка повертає об'єкт action з коректною структурою
*/

export function createNumberAction(value) {
  const action = { type: ACTION_TYPES.CHANGE_NUMBER, payload: +value };
  return action;
}

export function createChangeCoords(newCoords) {
  return {
    type: ACTION_TYPES.CHANGE_COORDS,
    payload: newCoords,
  };
}
