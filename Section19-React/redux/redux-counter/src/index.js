import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// REDUX:
import { createStore } from 'redux';
// don't need to add index as webpack automatically finds index.js
import allReducers from './reducers'


// TO HOOK IT ALL UP TO THE APP WE NEED:
import { Provider } from 'react-redux';

// const store = createStore(allReducers);
// To add dev tool for browser:
const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// THIS IS ALL BROKEN UP INTO REDUCER, ACTION FOLDER ETC

// STORE -> GLOBALISED STATE - holds all our data (state) for our application
// let store = createStore(reducer);

// ACTION -> IN THIS CASE IT WILL BE INCREMENT ( I am hungry / I want to increment by one)
// It describes what you want to do, the action you want to carry out
// A simple function that returns an object:
// const increment = () => {
//   return {
//     // type = name of action
//     type: 'INCREMENT'
//   }
// }
// const decrement = () => {
//  return {
//    type: 'DECREMENT'
//  }
// }

// REDUCER -> It describes how your actions are going to transform the state into the next state.
// e.g increment will be called, reducer will check what action was called and update the store
// parameters - initial state and then the action
// const counter = (state = 0, action) => {
//   switch(action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state -1;
//     default:
//       return state;
//   }
// };

// let store = createStore(counter);

// // DISPLAY IN CONSOLE:
// store.subscribe(() => console.log(store.getState()));

// // DISPATCH -> This executes the action
// // Dispatch action to reducer so reducer can check what action to do and then the store is updated

// // to call the increment action and update:
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
