import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Articles from './Pages/Articles/Article';
import Home from './Pages/Articles/Home';
import Archive from './Pages/Articles/Archive';
import Categories from './Pages/Articles/Categories';

class Blog extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route path='/blog' exact component={Home}/>
					<Route path='/blog/categories/*' component={Categories}/>
					<Route path='/blog/archive' exact component={Archive}/>
					<Route path='/blog/*' component={Articles}/>
				</Switch>
			</div>
		);
	}
}

export default Blog;
