import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Admin from './Admin';
import Blog from './Blog';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div>
		  <Switch>
			  <Route path={'/admin'} component={Admin}/>
        <Route path={'/contact'} component={Contact}/>
			  <Route path={'/*'} component={Blog}/>
		  </Switch>
      </div>
    );
  }
}

export default App;
