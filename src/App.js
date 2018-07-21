import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
// import { robots } from './robots';
import './app.css';

// STATE >> props
// state - an object that describes your application, things that can change and affect the app
// it usually lives in the parent component
// props - things that come out of state


class App extends Component{
	constructor (){
		super()
		//app state - it is what describes the app
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount(){
		//fake api call 
		//request 
		fetch('https://jsonplaceholder.typicode.com/users').then(response => {
			//response
			return response.json();
		})
		.then(users => {
			//update using setState
		 this.setState({robots: users});
		})
	}

	onSearchchange = (event) => {
		//setState is builtin in react
		this.setState({searchfield: event.target.value});	
	}


	render () {
		const filteredRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})

		if (this.state.robots.length === 0){
			return <h1>Loading...</h1>
		} else {
			return (
				<div className = 'tc'>
					<h1 className='f1' >RoboFriends</h1>
					<SearchBox searchChange={this.onSearchchange}/>
					<CardList robots={filteredRobots} />
				</div>
			)
		}	
	}
}

export default App;