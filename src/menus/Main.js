import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

export default class Main extends Component {
	state = { activeItem: 'blog' };

	handleItemClick = (e, { name }) => {
		this.setState({ activeItem: name });
	};

	render() {
		const { activeItem } = this.state;

		return (
			<Segment inverted>
				<Menu inverted pointing secondary>
					<Menu.Item name='blog' active={activeItem === 'blog'} onClick={this.handleItemClick} />
					<Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
					<Menu.Item name='stats' active={activeItem === 'stats'} onClick={this.handleItemClick} />
				</Menu>
			</Segment>
		);
	};
}
