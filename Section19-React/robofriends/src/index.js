import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
// robots isn't a default app, it is a variable so we destructure when calling (curly brackets)
import { robots } from './robots'

// if we are using javascript we wrap in curly brackets - JSX rules

// We don't want to call each card separately - what if we have 20 cards?  So we create a cardlist component
ReactDOM.render(
  <React.StrictMode>
  <CardList robots={robots} />
    {/*<Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
    <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
    <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
