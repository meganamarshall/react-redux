
import { createStore } from 'redux';
import reducer from './reducers/lunchReducer';
import { addDrink, addSandwich, addChips, removeDrink, removeChips, removeSandwich, removeOneChip } from './actions/lunchActions';

const store = createStore(reducer);

store.dispatch(addDrink('Diet Coke'));

store.dispatch(addDrink('Regular Coke'));

console.log('drink added', store.getState());

store.dispatch(addSandwich('Field Roast'));

console.log('sandwich added', store.getState());

store.dispatch(addChips('Juanitas'));

store.dispatch(addChips('Doritos'));

console.log('chips added', store.getState());

store.dispatch(removeOneChip('Doritos'));

console.log('one chip removed', store.getState());

store.dispatch(removeDrink());

console.log('drink removed', store.getState());

store.dispatch(removeSandwich());

console.log('sandwich removed', store.getState());

store.dispatch(removeChips());

console.log('chips removed', store.getState());

