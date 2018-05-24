import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Admin from './Admin';
import Blog from './Blog';

class App extends Component {
  render() {
    return (
      <div className="ui container">
		  <Switch>
			  <Route path={'/admin'} component={Admin}/>
			  <Route path={'/*'} component={Blog}/>
		  </Switch>
      </div>
    );
  }
}

export default App;
