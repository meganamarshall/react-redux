import { ADD_COMMENT, addComment, DELETE_COMMENT, deleteComment } from './commentActions';

describe('comment actions', () => {
  it('creates an add comment action', () => {
    const comment = 'hello';
    const postId = 0;

    expect(addComment(postId, comment)).toEqual({
      type: ADD_COMMENT,
      payload: { postId: 0, comment: 'hello' }
    });
  });
  it('creates a delete comment action', () => {
    expect(deleteComment(0, 0)).toEqual({
      type: DELETE_COMMENT,
      payload: { postId: 0, commentId: 0 }
    });
  });
});
