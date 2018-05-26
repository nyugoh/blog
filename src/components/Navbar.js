import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	render() {
		return (
			<div>
				<header>
					<div className="ui borderless main menu fixed">
						<div className="ui container">
							<div className="header item" href={'/'}>
								<img className="logo" src="/assets/images/code-idea-256x256.png"/>
								<span className="logo-text">Ideal Code Africa</span>
							</div>
							<Link to={'/archive'} className={'item'}>Archive</Link>
							<Link to={'/admin/blogs'} className={'ui right floated item'}>Admin</Link>
						</div>
					</div>
				</header>
			</div>
		);
	}
}

export default Navbar;
