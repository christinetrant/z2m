import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';
// DAYPBL__

// Using state
// https://www.freecodecamp.org/news/react-js-for-beginners-props-state-explained/
// We want the search input to talk to the robots list and update cards accordingly, to do this searchfield and cardlist need a parent in common
// const state = {
// 	robots: robots,
// 	searchfield: ''
// }
// In order to use state we need to use classes
// const App = () => {
class App extends Component {
	constructor() {
		super()
		{
		/* inside state - these are the things that can change and affect our app: 
		State is defined in the parent and passed to Component child as props (properties)*/
		}
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
		// const filteredRobots = this.state.robots.filter(robot => {
		// 	return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		// })
		// console.log(filteredRobots);
	}



	render() {
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		
		return (
			<div className='tc'>
				<h1 className='light-green'>RoboCatFriends</h1>
				<SearchBox searchChange = {this.onSearchChange} />
				{/*<CardList robots={robots} /> */}
				<CardList robots={filteredRobots} />
			</div>
		);
	}
}
export default App;