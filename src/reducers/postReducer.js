import { addPost, ADD_POST, deletePost, DELETE_POST, updatePost, UPDATE_POST } from '../actions/postActions';

const initialState = {
  posts: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case DELETE_POST:
      return { ...state, posts: state.posts.filter(({ postId }) => postId !== action.payload) };
    case UPDATE_POST:
      return { ...state, posts: state.posts.filter(({ postId }) => {
        console.log(postId);
        return postId === action.payload.postId;
        //  .map(post => ({
      // ...post, postBody: action.payload.postBody
      }).map(post => {
        console.log(post);
        console.log({ ...post, postBody: action.payload.postBody });
      })
      }; }
        
}
 
