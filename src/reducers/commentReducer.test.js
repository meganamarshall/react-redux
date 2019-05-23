import reducer from './commentReducer';
import { addComment, deleteComment } from '../actions/commentActions';
import { deletePost } from '../actions/postActions';

describe('comment reducer', () => {
  it('handles the add comment action', () => {
    const newState = reducer({ 0: ['hi'] }, addComment(0, 'hello there'));
    expect(newState).toEqual({
      0: ['hi', 'hello there']
    });
  });
  it('handles the add comment when its the first comment', () => {
    const newState = reducer({}, addComment(0, 'why'));
    expect(newState).toEqual({
      0: ['why']
    });
  });
  it('handles the delete comment action', () => {
    const newState = reducer({ 0: ['hi', 'no way', 'so cool'] }, deleteComment(0, 0));
    expect(newState).toEqual({
      0: ['no way', 'so cool']
    });
  });
  it('deletes all comments when a post is deleted', () => {
    const initialState = {
      0: ['hello', 'where', 'why']
    };
    const newState = reducer(initialState, deletePost(0));
    expect(newState).toEqual({
      0: []
    });
  });
});
