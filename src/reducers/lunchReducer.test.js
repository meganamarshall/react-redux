import reducer from './lunchReducer';
import { addDrink, addSandwich, addChips } from '../actions/lunchActions';

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
});
