import { ADD_DRINK, ADD_SANDWICH, ADD_CHIPS, REMOVE_DRINK, REMOVE_SANDWICH, REMOVE_CHIPS, REMOVE_ONE_CHIP } from '../actions/lunchActions';


const initialState = {
  drink: [],
  sandwich: [],
  chips: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_DRINK:
      return { ...state, drink: [...state.drink, action.payload] };
    case ADD_SANDWICH:
      return { ...state, sandwich: [...state.sandwich, action.payload] };
    case ADD_CHIPS:
      return { ...state, chips: [...state.chips, action.payload] };
    case REMOVE_DRINK:
      return { ...state, drink: [] };
    case REMOVE_SANDWICH:
      return { ...state, sandwich: [] };
    case REMOVE_CHIPS:
      return { ...state, chips: [] };
    case REMOVE_ONE_CHIP:
      return { ...state, chips: state.chips.filter(item => item !== action.payload) };
    default:
      return state;
  }
}
