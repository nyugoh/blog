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
					<article className='blog-description'>
						<p>
							{blog.description}
							
						</p>
					</article>
					<footer>
						<span className="date">{moment(blog.updatedAt).format('dddd, MMMM Do YYYY')}</span>
						<Link to={`/categories/${blog.category}`}>{blog.category}</Link>
						<span className={'comments'}><Link to={`/${blog.slug}#disqus_thread`}/></span>
					</footer>
				</div>
				<div className="ui horizontal divider"><Icon name={'crosshairs'}/></div>
			</div>
		);
	}
}

export default BlogPost;
