import { ADD_COMMENT, addComment } from './commentActions';

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
});
