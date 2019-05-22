const ADD_DRINK = 'ADD_DRINK';
const ADD_SANDWICH = 'ADD_SANDWICH';
const ADD_CHIPS = 'ADD_CHIPS';
const REMOVE_DRINK = 'REMOVE_DRINK';
const REMOVE_SANDWICH = 'REMOVE_SANDWICH';
const REMOVE_CHIPS = 'REMOVE_CHIPS';
const REMOVE_ONE_CHIP = 'REMOVE_ONE_CHIP';

const addDrink = drink => ({
  type: ADD_DRINK,
  payload: drink
});

const addSandwich = sandwich => ({
  type: ADD_SANDWICH,
  payload: sandwich
});

const addChips = chips => ({
  type: ADD_CHIPS,
  payload: chips
});

const removeDrink = () => ({
  type: REMOVE_DRINK
});

const removeChips = () => ({
  type: REMOVE_CHIPS
});

const removeSandwich = () => ({
  type: REMOVE_SANDWICH
});

const removeOneChip = chip => ({
  type: REMOVE_ONE_CHIP,
  payload: chip
});


export { ADD_DRINK, ADD_SANDWICH, ADD_CHIPS, REMOVE_CHIPS, REMOVE_DRINK, REMOVE_SANDWICH, REMOVE_ONE_CHIP, addDrink, addSandwich, addChips, removeDrink, removeChips, removeSandwich, removeOneChip };
