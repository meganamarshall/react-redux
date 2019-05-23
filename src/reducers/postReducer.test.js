import reducer from './postReducer';
import { addPost, deletePost, updatePost } from '../actions/postActions';

describe('post reducer', () => {
  it('handles the add post action', () => {
    const initialState = {
      posts: []
    };
    const newState = reducer(initialState, addPost({ postId: '1234', postBody: 'hello', postTitle: 'hello2' }));
    expect(newState).toEqual({
      posts: [{ postId: '1234', postBody: 'hello', postTitle: 'hello2' }]
    });
  });
  it('handles the delete post action', () => {
    const initialState = {
      posts: [{ postId: '1234', postBody: 'hello', postTitle: 'title' }, { postId: '5678', postBody: 'hello there', postTitle: 'title' }]
    };
    const newState = reducer(initialState, deletePost('1234'));
    expect(newState).toEqual({
      posts: [{ postId: '5678', postBody: 'hello there', postTitle: 'title' }]
    });
  });
  it('handles the update post action', () => {
    const initialState = {
      posts: [{ postId: '1234', postBody: 'hello', postTitle: 'title' }, { postId: '5678', postBody: 'hello there', postTitle: 'title' }]
    };
    const newState = reducer(initialState, updatePost('1234', 'new bod'));
    expect(newState).toEqual({
      posts: [{ postId: '1234', postBody: 'new bod', postTitle: 'title' }, { postId: '5678', postBody: 'hello there', postTitle: 'title' }]
    });
  });
});
