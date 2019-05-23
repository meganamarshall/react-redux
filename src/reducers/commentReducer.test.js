import reducer from './commentReducer';
import { addComment } from '../actions/commentActions';

describe('comment reducer', () => {
  it('handles the add comment action', () => {
    const newState = reducer({}, addComment(0, 'hello there'));
    expect(newState).toEqual({
      1: ['hello there']
    });
  });
});
