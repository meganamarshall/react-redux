import reducer from './postReducer';
import { addPost, deletePost } from '../actions/postActions';

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
  it('handles the delete post action', () => {
    const initialState = {
      posts: [{ postId: '1234', postBody: 'hello' }, { postId: '5678', postBody: 'hello there' }]
    };
    const newState = reducer(initialState, deletePost('1234'));
    expect(newState).toEqual({
      posts: [{ postId: '5678', postBody: 'hello there' }]
    });
  });
});
