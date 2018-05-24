import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Icon, Label } from 'semantic-ui-react';

class BlogPost extends Component {
	render() {
		return (
			<div>
				<div className={'post blog-preview-header'}>
					<header>
						<h2><Link to={'/blogs'}>Getting started with Docker for software development</Link></h2>
					</header>
					<article>
						<p>
							Using ember-data's RESTSerializer it is pretty simple to integrate with a standard API and pull data. In my previous post I talked about what format the Using ember-data's RESTSerializer it is pretty simple to integrate with a standard API and pull data. In my previous post I talked about what format the Using ember-data's RESTSerializer it is pretty simple to integrate with a standard API and pull data. In my previous post I talked about what format the Using ember-data's RESTSerializer it is pretty simple to integrate with a standard API and pull data. In my previous post I talked about what format the
							<Link to={'/blogs'}>...  <Icon name={'angle double right'}/></Link>
						</p>
					</article>
					<footer>
						<Icon name={'user'} circular/>
						<span className={'author'}>Joe Nyugoh</span>
						<span className="date">15 June 2017</span>
						<Label pointing={'left'}><Link to={'/categories/linux'}>Linux</Link></Label>
					</footer>
				</div>
				<div className="ui horizontal divider"><Icon name={'crosshairs'}/></div>
			</div>
		);
	}
}

export default BlogPost;
