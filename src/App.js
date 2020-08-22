import React, { Component } from 'react';
import CardList from './components/cardList/CardList';
import SearchBox from './components/searchBox/SearchBox';

import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: ''
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(users => this.setState({ monsters: users }));
	}

	handleChange = e => this.setState({ searchField: e.target.value });

	render() {
		const { monsters, searchField } = this.state;
		const filteredMonseters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
		return (
			<div className='App'>
				<h1>Monsters Rolodex</h1>
				<SearchBox placeholder='search monsters' handleChange={this.handleChange} />
				<CardList monsters={filteredMonseters} />
			</div>
		);
	}
}

export default App;
