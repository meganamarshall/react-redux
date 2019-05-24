const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const UPDATE_POST = 'UPDATE_POST';

const addPost = (postTitle, postBody) => ({
  type: ADD_POST,
  payload: { postTitle, postBody }
});

const deletePost = postId => ({
  type: DELETE_POST,
  payload: postId
});

const updatePost = (postId, postBody) => ({
  type: UPDATE_POST,
  payload: { postId, postBody }
});


export { ADD_POST, DELETE_POST, addPost, deletePost, updatePost, UPDATE_POST };
