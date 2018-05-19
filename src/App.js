import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from "./menus/Main";
import Footer from "./menus/Footer";
import Blogs from './Pages/Blog';

class App extends Component {
  render() {
    return (
      <div className="ui container">
		<Main/>
		<Switch>
		  <Route path='/' exact component={Home}/>
		  <Route path='/blogs' component={Blogs}/>
		  <Route path='/message'/>
		  <Route path='/stats'/>
		</Switch>
		<Footer/>
      </div>
    );
  }
}

const Home = () => {
	return (
	 <div>
		 <h3>Hello let's begin</h3>
	 </div>
	);
};

export default App;
