const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const UPDATE_POST = 'UPDATE_POST';

const addPost = (postTitle, postBody) => ({
  type: ADD_POST,
  payload: { postTitle, postBody }
});

const deletePost = id => ({
  type: DELETE_POST,
  payload: id
});

const updatePost = (id, postBody) => ({
  type: UPDATE_POST,
  payload: { id, postBody }
});


export { ADD_POST, DELETE_POST, addPost, deletePost, updatePost, UPDATE_POST };
