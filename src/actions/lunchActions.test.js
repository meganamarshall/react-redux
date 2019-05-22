import { ADD_DRINK, addDrink, ADD_SANDWICH, addSandwich, addChips, ADD_CHIPS, REMOVE_CHIPS, removeChips, REMOVE_SANDWICH, removeSandwich, REMOVE_DRINK, removeDrink, REMOVE_ONE_CHIP, removeOneChip } from './lunchActions';

describe('lunch actions', () => {
  it('creates add drink action', () => {
    expect(addDrink('water')).toEqual({
      type: ADD_DRINK,
      payload: 'water'
    });
  });
  it('creates add sandwich action', () => {
    expect(addSandwich('plain')).toEqual({
      type: ADD_SANDWICH,
      payload: 'plain'
    });
  });
  it('creates add chips action', () => {
    expect(addChips('plain')).toEqual({
      type: ADD_CHIPS,
      payload: 'plain'
    });
  });
  it('creates REMOVE chips action', () => {
    expect(removeChips()).toEqual({
      type: REMOVE_CHIPS
    });
  });
  it('creates REMOVE sandwich action', () => {
    expect(removeSandwich()).toEqual({
      type: REMOVE_SANDWICH
    });
  });
  it('creates REMOVE DRINK action', () => {
    expect(removeDrink()).toEqual({
      type: REMOVE_DRINK
    });
  });
  it('creates REMOVE one chip action', () => {
    expect(removeOneChip('fritos')).toEqual({
      type: REMOVE_ONE_CHIP,
      payload: 'fritos'
    });
  });
});
