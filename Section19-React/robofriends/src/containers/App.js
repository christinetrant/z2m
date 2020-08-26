import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
// import { robots } from './robots';
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

import { setSearchField } from "../actions";

const mapStateToProps = (state) => {
  return {
    // searchField: state.searchRobots.searchField,
    // We only have one state at the moment so call it directly rather than through searchRobots
    searchField: state.searchField,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  };
};

// Using state
// https://www.freecodecamp.org/news/react-js-for-beginners-props-state-explained/
// We want the search input to talk to the robots list and update cards accordingly, to do this searchfield and cardlist need a parent in common
// const state = {
// 	robots: robots,
// 	searchfield: ''
// }

// Inside state - these are the things that can change and affect our app:
// State is defined in the parent and passed to Component child as props (properties)

// In order to use state we need to use classes
// const App = () => {
class App extends Component {
  constructor() {
    super();
    this.state = {
      // robots: robots,
      // we will be getting the list so we start off with an empty array
      robots: [],
      // searchfield: "",
    };
  }

  // when component 'mounts' we set robots to equal robots array from robots.js:
  // instead of fetching array we get user info from jsonplaceholder then we convert response into JSON then we set that to equal the robots array
  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
    // this.setState({ robots: robots })
  }

  // onSearchChange = (event) => {
  // this.setState({ searchfield: event.target.value });
  // const filteredRobots = this.state.robots.filter(robot => {
  // 	return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
  // })
  // console.log(filteredRobots);
  // };

  render() {
    // instead of calling this.state.searchfield and this.state.robots we can de-structure:
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    // We don't want to call each card separately - what if we have 20 cards?  So we create a cardlist component
    // if(robots.length === 0) {
    return !robots.length ? (
      <h1 className="tc light-green">Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="light-green">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        {/*<CardList robots={robots} /> */}
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}
// export default App;
// To use connect we need to call connect which will return the App
// connect accepts two parameters - what state should I listen to and what dispatch / action should I listen to
export default connect(mapStateToProps, mapDispatchToProps)(App);
