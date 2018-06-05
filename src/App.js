import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Admin from './Admin';
import Blog from './Blog';

class App extends Component {
  render() {
    return (
      <div>
		  <Switch>
			  <Route path={'/blog/admin'} component={Admin}/>
			  <Route path={'/blog/*'} component={Blog}/>
		  </Switch>
      </div>
    );
  }
}

export default App;
