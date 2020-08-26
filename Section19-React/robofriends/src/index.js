import React from "react";
import ReactDOM from "react-dom";
// We need provider to make redux work with our App
import { Provider } from "react-redux";
import { createStore } from "redux";

import "./index.css";
// import CardList from './CardList';
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import { searchRobots } from "./reducers";
import "tachyons";
// robots isn't a default app, it is a variable so we de-structure when calling (curly brackets)
// import { robots } from './robots'

// if we are using javascript we wrap in curly brackets - JSX rules

// Redux: create store to call reducers - we want to combine all reducers to create one root reducer
const store = createStore(searchRobots);

// instead of passing down the store to the app - include it into the provider component and the provider component is going to take care of passing down the store to all the components down the component tree that need it
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

    {/*<CardList robots={robots} />*/}
    {/*<Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
    <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
    <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />*/}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
