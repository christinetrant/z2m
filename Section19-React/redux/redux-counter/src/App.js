import React from 'react';

// useSelector: To access piece of state e.g. counter:
// useDispatch gives us ability to dispatch an action
import { useSelector, useDispatch } from 'react-redux';
// To access an action:
import { increment, decrement } from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      {/* So these buttons will call the action which will then call the appropriate reducer */}
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      {/* If only people signed in are supposed to see the h3 tag we do it like this in React: 
      https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator
      */}
      { 
        isLogged && 
        <h3>Valuable information I shouldn't see</h3>
      }
      
    </div>
  );
}

export default App;
