import { ADD_COMMENT } from '../actions/commentActions';

export default function reducer(state = {}, action) {
  switch(action.type) {
    case ADD_COMMENT:
      return { ...state, [action.payload.postId]: [...(state[action.payload.postId] || []), action.payload.comment] };
  }
}
