import React, {Component} from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Button, Icon, Header } from 'semantic-ui-react';
import List from './List';
import Add from './Add';
import Edit from './Edit';

class Blog extends Component {
	render() {
		return (
			<div>
				<div>
					<Header floated={'left'} as={'h2'}>Blogs panel</Header>
					<Link to={'/admin/blogs/add'}>
						<Button
							positive
							icon
							floated={'right'}
							labelPosition={'right'}>
							<Icon name={'plus'}/>
							Add Blog
						</Button>
					</Link>
				</div>
				<br/><br/>
				<div className="ui divider"/>
				<Switch>
					<Route path='/admin/blogs' exact component={List}/>
					<Route path='/admin/blogs/add' component={Add}/>
					<Route path='/admin/blogs/edit/:id' component={Edit}/>
				</Switch>
			</div>
		);
	}
}

export default Blog;
