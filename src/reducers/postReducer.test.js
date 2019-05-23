import reducer from './postReducer';
import { addPost } from '../actions/postActions';

describe('post reducer', () => {
  it('handles the add post action', () => {
    const initialState = {
      posts: []
    };
    const newState = reducer(initialState, addPost({ postId: '1234', postBody: 'hello' }));
    expect(newState).toEqual({
      posts: [{ postId: '1234', postBody: 'hello' }]
    });
  });
});
