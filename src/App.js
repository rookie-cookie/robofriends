import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

// STATE >> props
// state - an object that describes your application, things that can change and affect the app
// it usually lives in the parent component
// props - things that come out of state


class App extends Component{
	constructor (){
		super()
		//app state - it is what describes the app
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	onSearchchange = (event) => {
		//setState is builtin in react
		this.setState({searchfield: event.target.value});	
	}


	render () {
		const filteredRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
		<div className = 'tc'>
			<h1>RoboFriends</h1>
			<SearchBox searchChange={this.onSearchchange}/>
			<CardList robots={filteredRobots} />
		</div>
		)
	}
}

export default App;