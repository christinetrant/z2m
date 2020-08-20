import { CHANGE_SEARCH_FIELD } from './constants.js';

const initialState = {
  searchField: ''
}

export const searchRobots = (state=initialState, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      // instead of modifying state.searchfield we use object.assign - the state we receive and whatever we want to change which is the searchfield property with action of payload
      return Object.assign({}, state, {searchField: action.payload});
      // We can also use spread operator for above which would look like:
      // return { ...state, searchField: action.payload)}
    default:
      return state;
  }
}