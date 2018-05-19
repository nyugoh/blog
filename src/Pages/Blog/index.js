import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import { Button, Icon, Header } from 'semantic-ui-react';
import List from './List';
import Add from './Add';

class Blog extends Component {
	render() {
		return (
			<div>
				<div>
					<Header floated={'left'} as={'h2'}>Blogs panel</Header>
					<Button
						positive
						icon
						floated={'right'}
						labelPosition={'right'}>
						<Icon name={'plus'}/>
						Add Blog
					</Button>
				</div>
				<br/><br/>
				<div className="ui divider"/>
				<Switch>
					<Route path='/blogs' exact component={List}/>
					<Route path='/blogs/add' component={Add}/>
				</Switch>
			</div>
		);
	}
}

export default Blog;
