import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Articles from './Pages/Articles';
import Home from './Pages/Articles/Home';

class Blog extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route path='/' exact component={Home}/>
					<Route path='*' component={Articles}/>
				</Switch>
			</div>
		);
	}
}

export default Blog;
