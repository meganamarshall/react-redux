import reducer from './lunchReducer';
import { addDrink } from '../actions/lunchActions';

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
});
