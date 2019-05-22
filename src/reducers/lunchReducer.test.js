import reducer from './lunchReducer';
import { addDrink, addSandwich, addChips, removeChips, removeDrink, removeSandwich } from '../actions/lunchActions';

describe('lunch reducer', () => {
  it('can handle add drink action', () => {
    const initialState = {
      drink: [],
      chips: [],
      sandwich: []
    };

    const newState = reducer(initialState, addDrink('water'));
    expect(newState).toEqual({
      drink: ['water'],
      chips: [],
      sandwich: []
    });
  });
  it('can handle add sandwich action', () => {
    const initialState = {
      drink: [],
      chips: [],
      sandwich: []
    };

    const newState = reducer(initialState, addSandwich('peanut'));
    expect(newState).toEqual({
      drink: [],
      chips: [],
      sandwich: ['peanut']
    });
  });
  it('can handle add chips action', () => {
    const initialState = {
      drink: [],
      chips: [],
      sandwich: []
    };

    const newState = reducer(initialState, addChips('chippy'));
    expect(newState).toEqual({
      drink: [],
      chips: ['chippy'],
      sandwich: []
    });
  });
  it('can handle remove chips action', () => {
    const initialState = {
      drink: [],
      chips: ['toasty'],
      sandwich: []
    };

    const newState = reducer(initialState, removeChips());
    expect(newState).toEqual({
      drink: [],
      chips: [],
      sandwich: []
    });
  });
  it('can handle remove sandwich action', () => {
    const initialState = {
      drink: [],
      chips: ['toasty'],
      sandwich: ['pbj']
    };

    const newState = reducer(initialState, removeSandwich());
    expect(newState).toEqual({
      drink: [],
      chips: ['toasty'],
      sandwich: []
    });
  });
  it('can handle remove drink action', () => {
    const initialState = {
      drink: ['drinky'],
      chips: ['toasty'],
      sandwich: []
    };

    const newState = reducer(initialState, removeDrink());
    expect(newState).toEqual({
      drink: [],
      chips: ['toasty'],
      sandwich: []
    });
  });
});
