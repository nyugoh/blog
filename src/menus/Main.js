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
			<Segment inverted style={menu}>
				<Menu inverted pointing secondary className={'ui container'} borderless>
					<Link to={'/blog/admin/blogs'}><Menu.Item as={'h4'}  name='admin' active={activeItem === 'admin'} onClick={this.handleItemClick} /></Link>
					<Link to={'/blog/admin/categories'}><Menu.Item name='categories' active={activeItem === 'categories'} onClick={this.handleItemClick} /></Link>
					<Link to={'/blog/admin/stats'}><Menu.Item name='stats' active={activeItem === 'stats'} onClick={this.handleItemClick} /></Link>
				</Menu>
			</Segment>
		);
	};
}

const menu = {
	borderRadius: 0
};
