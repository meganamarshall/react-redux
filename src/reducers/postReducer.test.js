import reducer from './postReducer';
import { addPost, deletePost, updatePost } from '../actions/postActions';

describe('post reducer', () => {
  it('handles the add post action', () => {
    const initialState = [];
    const newState = reducer(initialState, addPost('hello2', 'hello'));
    expect(newState).toEqual(
      [{ postTitle: 'hello2', postBody: 'hello' }]
    );
  });
  it('handles the delete post action', () => {
    const initialState = [{ postBody: 'hello', postTitle: 'title' }, { postBody: 'hello there', postTitle: 'title' }];
    const newState = reducer(initialState, deletePost(0));
    expect(newState).toEqual([{ postBody: 'hello there', postTitle: 'title' }]);
  });
  it('handles the update post action', () => {
    const initialState = [{ postBody: 'hello', postTitle: 'title' }, { postBody: 'hello there', postTitle: 'title' }];
    const newState = reducer(initialState, updatePost(0, 'new body'));
    expect(newState).toEqual([{ postBody: 'new body', postTitle: 'title' }, { postBody: 'hello there', postTitle: 'title' }]);
  });
});
