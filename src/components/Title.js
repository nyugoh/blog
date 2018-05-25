import React from 'react';
import { Link } from 'react-router-dom';
import { Label } from 'semantic-ui-react';
import moment from 'moment';

const Title = ({ blog }) => {
	return(<div className={'blog-header'}>
		<h1>{blog.title}</h1>
		<p>
			<span className={'author'}>Joe Nyugoh</span>
			<span className="date">{moment(blog.createdAt).format('dddd, MMMM Do YYYY')}</span>
			<Label pointing={'left'}><Link to={'/categories/linux'}>{blog.category}</Link></Label>
		</p>
	</div>);
};

export default Title;
