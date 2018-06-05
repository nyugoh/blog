import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Main from "./menus/Main";
import Footer from "./menus/Footer";
import Blogs from './Pages/Blog';
import Categories from './Pages/Categories';

class Admin extends Component {

	componentDidMount() {
		document.title = 'Admin | Jarvis';
	}

	render() {
		return (
			<div>
				<Main/>
				<div className="ui container">
					<Route path='/blog/admin' component={Blogs}/>
					<Route path='/blog/admin/categories' component={Categories}/>
				</div>
				<Footer/>
			</div>
		);
	}
}

export default Admin;
