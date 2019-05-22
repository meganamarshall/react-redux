import { ADD_POST, addPost, deletePost, DELETE_POST } from './postActions';

describe('post actions', () =>{
  it('creates and add post action', () => {
    const post = {
      postBody: 'hello',
      postId: '12345'
    };
    expect(addPost(post)).toEqual({
      type: ADD_POST,
      payload: post
    });
  });
  it('creates a delete post action', () => {
    expect(deletePost('12345')).toEqual({
      type: DELETE_POST,
      payload: '12345'
    });
  });
});
