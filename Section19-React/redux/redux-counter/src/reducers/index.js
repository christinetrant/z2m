import counterReducer from './counter';
import loggedReducer from './isLogged';
// combines our reducers
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  // counterReducer
  // is the same as below it destructures it:
  // counterReducer: counterReducer
  counter: counterReducer,
  isLogged: loggedReducer
})

export default allReducers;