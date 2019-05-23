import reducer from './commentReducer';
import { addComment } from '../actions/commentActions';

describe('comment reducer', () => {
  it('handles the add comment action', () => {
    const newState = reducer({ 0: ['hi'] }, addComment(0, 'hello there'));
    expect(newState).toEqual({
      0: ['hi', 'hello there']
    });
  });
});
