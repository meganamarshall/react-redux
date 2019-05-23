import { ADD_COMMENT, addComment, DELETE_COMMENT, deleteComment } from './commentActions';

describe('comment actions', () => {
  it('creates an add comment action', () => {
    const comment = {
      commentBody: 'hello'
    };
    expect(addComment(comment)).toEqual({
      type: ADD_COMMENT,
      payload: comment
    });
  });
  it('creates a delete comment action', () => {
    expect(deleteComment(0)).toEqual({
      type: DELETE_COMMENT,
      payload: 0
    });
  });
});
