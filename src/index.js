
import { createStore } from 'redux';
import { ADD_DRINK, addDrink } from './actions/lunchActions';


const initialState = {
  drink: [],
  sandwich: [],
  chips: []
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_DRINK:
      return { ...state, drink: [...state.drink, action.payload] };
    case 'ADD_SANDWICH':
      return { ...state, sandwich: [...state.sandwich, action.payload] };
    case 'ADD_CHIPS':
      return { ...state, chips: [...state.chips, action.payload] };
    case 'REMOVE_DRINK':
      return { ...state, drink: [] };
    case 'REMOVE_SANDWICH':
      return { ...state, sandwich: [] };
    case 'REMOVE_CHIPS':
      return { ...state, chips: [] };
    case 'REMOVE_ONE_CHIP':
      return { ...state, chips: state.chips.filter(item => item !== action.payload) };
    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch(addDrink('Diet Coke'));

store.dispatch(addDrink('Regular Coke'));

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

store.dispatch({
  type: 'ADD_CHIPS',
  payload: 'Doritos'
});

console.log('chips added', store.getState());

store.dispatch({
  type: 'REMOVE_ONE_CHIP',
  payload: 'Doritos'
});

console.log('one chip removed', store.getState());

store.dispatch({
  type: 'REMOVE_DRINK'
});

console.log('drink removed', store.getState());

store.dispatch({
  type: 'REMOVE_SANDWICH'
});

console.log('sandwich removed', store.getState());

store.dispatch({
  type: 'REMOVE_CHIPS'
});

console.log('chips removed', store.getState());

