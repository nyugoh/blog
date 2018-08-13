import React from 'react';
import { Link } from 'react-router-dom';
import { Label } from 'semantic-ui-react';
import moment from 'moment';

const Title = ({ blog }) => {
	return(<div className={'blog-header'}>
		<h1>{blog.title}</h1>
		<p className={'post-details'}>
			{/* <span className={'author'}>Joe Nyugoh</span> */}
			<span className="date">{moment(blog.updatedAt).format('dddd, MMMM Do YYYY')}</span>
			<Link to={`/categories/${blog.category}`} className="title-tag">{blog.category}</Link>
			<span className="disqus-comment-count"><Link to={`/${blog.slug}#disqus_thread`}/></span>
			{/* <a className="disqus-comment-count" href={`http://localhost:3000/${blog.slug}/#disqus_thread`}>Second article</a> */}
			{/* <span className="disqus-comment-count" data-disqus-identifier={blog.slug}></span> */}
		</p>
	</div>);
};

export default Title;
