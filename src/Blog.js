import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Articles from './Pages/Articles';
import Home from './Pages/Articles/Home';
import Archive from './Pages/Articles/Archive';
// import Categories from './Pages/Articles/Categories';

class Blog extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route path='/' exact component={Home}/>
					{/*<Route path='/categories/*' component={Categories}/>*/}
					<Route path='/archive' exact component={Archive}/>
					<Route path='*' component={Articles}/>
				</Switch>
			</div>
		);
	}
}

export default Blog;
