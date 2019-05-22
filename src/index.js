
import { createStore } from 'redux';

const initialState = {
  drink: null,
  sandwich: null,
  chips: null
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_DRINK':
      return { ...state, drink: action.payload };
    case 'ADD_SANDWICH':
      return { ...state, sandwich: action.payload };
    case 'ADD_CHIPS':
      return { ...state, chips: action.payload };
    case 'REMOVE_DRINK':
      return { ...state, drink: null };
    case 'REMOVE_SANDWICH':
      return { ...state, sandwich: null };
    case 'REMOVE_CHIPS':
      return { ...state, chips: null };
    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch({
  type: 'ADD_DRINK',
  payload: 'Diet Coke'
});

console.log('drink added', store.getState());

store.dispatch({
  type: 'ADD_SANDWICH',
  payload: 'Field Roast'
});

console.log('sandwich added', store.getState());

store.dispatch({
  type: 'ADD_CHIPS',
  payload: 'Juanitas'
});

console.log('chips added', store.getState());

store.dispatch({
  type: 'REMOVE_DRINK'
});

console.log('drink removed', store.getState());

store.dispatch({
  type: 'REMOVE_SANDWICH'
});

console.log('sandwich removed', store.getState());

