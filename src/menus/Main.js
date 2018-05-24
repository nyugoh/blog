import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Main extends Component {
	componentDidMount() {
		this.setState( {activeItem: window.location.pathname.split('/')[1] });
	};

	state = { activeItem: '' };

	handleItemClick = (e, { name }) => {
		this.setState({ activeItem: name });
	};

	render() {
		const { activeItem } = this.state;

		return (
			<Segment inverted>
				<Menu inverted pointing secondary>
					<Link to={'/blogs'}><Menu.Item name='blogs' active={activeItem === 'blogs'} onClick={this.handleItemClick} /></Link>
					<Link to={'/categories'}><Menu.Item name='categories' active={activeItem === 'categories'} onClick={this.handleItemClick} /></Link>
					<Link to={'/blogs'}><Menu.Item name='stats' active={activeItem === 'stats'} onClick={this.handleItemClick} /></Link>
				</Menu>
			</Segment>
		);
	};
}
