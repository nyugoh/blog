import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import List from './List';

class Blog extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route path='/blogs' component={List}/>
					<Route path='/message'/>
					<Route path='/stats'/>
				</Switch>
			</div>
		);
	}
}

export default Blog;
