import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Label } from 'semantic-ui-react';

const Title = props => {
	return(<div className={'blog-header'}>
		<h1>Getting started with Docker for software development</h1>
		<p>
			<span className={'author'}>Joe Nyugoh</span>
			<span className="date">15 June 2017</span>
			<Label pointing={'left'}><Link to={'/categories/linux'}>Linux</Link></Label>
		</p>
	</div>);
};

export default Title;
