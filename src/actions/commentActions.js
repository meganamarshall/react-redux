const ADD_COMMENT = 'ADD_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';

const addComment = comment => ({
  type: ADD_COMMENT,
  payload: comment
});

const deleteComment = commentId => ({
  type: DELETE_COMMENT,
  payload: commentId
});

export { addComment, ADD_COMMENT, deleteComment, DELETE_COMMENT };
