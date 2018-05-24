import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from "./menus/Main";
import Footer from "./menus/Footer";
import Blogs from './Pages/Blog';
import Categories from './Pages/Categories';

class Admin extends Component {
	render() {
		return (
			<div>
				<Main/>
				<Route path='/admin' component={Blogs}/>
				<Route path='/admin/categories' component={Categories}/>
				<Footer/>
			</div>
		);
	}
}

export default Admin;
