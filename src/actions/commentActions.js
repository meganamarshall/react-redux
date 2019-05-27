const ADD_COMMENT = 'ADD_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';

const addComment = (postId, comment) => ({
  type: ADD_COMMENT,
  payload: { postId, comment }
});

const deleteComment = (postId, commentId) => ({
  type: DELETE_COMMENT,
  payload: { postId, commentId }
});

export { addComment, ADD_COMMENT, deleteComment, DELETE_COMMENT };
