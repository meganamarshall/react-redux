const ADD_COMMENT = 'ADD_COMMENT';

const addComment = comment => ({
  type: ADD_COMMENT,
  payload: comment
});

export { addComment, ADD_COMMENT };
