import { ADD_POST, addPost, deletePost, DELETE_POST, updatePost, UPDATE_POST } from './postActions';

describe('post actions', () =>{
  it('creates and add post action', () => {
    const post = {
      postTitle: 'hi', postBody: 'hello'
    };
    expect(addPost(post.postTitle, post.postBody)).toEqual({
      type: ADD_POST,
      payload: post
    });
  });
  it('creates a delete post action', () => {
    expect(deletePost(0)).toEqual({
      type: DELETE_POST,
      payload: 0
    });
  });
  it('creates an update post action', () => {
    const post = {
      postBody: 'hello',
      id: 0
    };
    expect(updatePost(post.id, post.postBody)).toEqual({
      type: UPDATE_POST,
      payload: { id: 0, postBody: 'hello' }
    });
  });
});
