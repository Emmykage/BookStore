const CHECKED_STATUS = 'bookstore/categories/CHECKED_STATUS';
export function checkSatus(id) {
  return {
    type: CHECKED_STATUS,
    id,
  };
}

const defaultState = [];

export default function statusReducer(state = defaultState, action) {
  if (action.type === CHECKED_STATUS) {
    return ['Under construction'];
  }
  return state;
}
