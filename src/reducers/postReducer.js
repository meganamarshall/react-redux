import { addPost, ADD_POST, deletePost, DELETE_POST, updatePost, UPDATE_POST } from '../actions/postActions';

const initialState = {
  posts: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_POST:
      return [...state, action.payload];
    case DELETE_POST:
      return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)];
    case UPDATE_POST:
      return [...state.slice(0, action.payload), { ...state[action.payload.postId], postBody: action.payload.postBody }, ...state.slice(action.payload.postId + 1)];
      
  }
}
 
