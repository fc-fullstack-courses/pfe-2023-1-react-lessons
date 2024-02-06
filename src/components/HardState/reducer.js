import ACTION_TYPES from "./actionTypes";

export const initialState = {
  number: 0,
  coords: {
    x: 0,
    y: 0,
  },
};

// функція яка поверне нове значення стану, яке реакт збереже і викличе ререндер
// допрацювати ред'юсер, додати йому логіку зміни стану для координат
export default function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.CHANGE_NUMBER: {
      const newState = {
        ...state,
        number: action.payload,
      };

      return newState;
    }
    case ACTION_TYPES.CHANGE_COORDS: {
      // const { newCoords: {x, y} } = action;
      const newState = {
        ...state,
        coords: action.payload
      }

      return newState;
    }
    default:
      return state;
  }
}