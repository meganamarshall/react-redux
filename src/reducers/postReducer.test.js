import reducer from './postReducer';
import { addPost, deletePost, updatePost } from '../actions/postActions';

describe('post reducer', () => {
  it('handles the add post action', () => {
    const initialState = [];
    const newState = reducer(initialState, addPost({ postBody: 'hello', postTitle: 'hello2' }));
    expect(newState).toEqual(
      [{ postBody: 'hello', postTitle: 'hello2' }]
    );
  });
  it('handles the delete post action', () => {
    const initialState = [{ postBody: 'hello', postTitle: 'title' }, { postBody: 'hello there', postTitle: 'title' }];
    const newState = reducer(initialState, deletePost(0));
    expect(newState).toEqual([{ postBody: 'hello there', postTitle: 'title' }]);
  });
  it('handles the update post action', () => {
    const initialState = [{ postBody: 'hello', postTitle: 'title' }, { postBody: 'hello there', postTitle: 'title' }]
    };
    const newState = reducer(initialState, updatePost(0, 'new body'));
    expect(newState).toEqual({
      posts: [{ postBody: 'new body', postTitle: 'title' }, { postBody: 'hello there', postTitle: 'title' }]
    });
  });
});
