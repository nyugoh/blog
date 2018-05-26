import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Icon, Label } from 'semantic-ui-react';
import moment from 'moment';

class BlogPost extends Component {
	render() {
		const blog = this.props.blog;
		return (
			<div>
				<div className={'post blog-preview-header'}>
					<header>
						<h2><Link to={`/${blog.slug}`}>{blog.title}</Link></h2>
					</header>
					<article>
						<p>
							Using ember-data's RESTSerializer it is pretty simple to integrate with a standard API and pull data. In my previous post I talked about what format the Using ember-data's RESTSerializer it is pretty simple to integrate with a standard API and pull data. In my previous post I talked about what format the Using ember-data's RESTSerializer it is pretty simple to integrate with a standard API and pull data. In my previous post I talked about what format the Using ember-data's RESTSerializer it is pretty simple to integrate with a standard API and pull data. In my previous post I talked about what format the
							<Link to={`/${blog.slug}`}>...  <Icon name={'angle double right'}/></Link>
						</p>
					</article>
					<footer>
						<Icon name={'user'} circular/>
						<span className={'author'}>Joe Nyugoh</span>
						<span className="date">{moment(blog.createdAt).format('dddd, MMMM Do YYYY')}</span>
						<Label pointing={'left'}><Link to={`/categories/${blog.category}`}>{blog.category}</Link></Label>
						<span className={'comments'}><Link to={`${blog.slug}#disqus_thread`}/></span>
					</footer>
				</div>
				<div className="ui horizontal divider"><Icon name={'crosshairs'}/></div>
			</div>
		);
	}
}

export default BlogPost;
