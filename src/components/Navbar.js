import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu, Dropdown } from 'semantic-ui-react';

class Navbar extends Component {
	render() {
		return (
			<div className={'navbar-main'}>
				<header>
					<div className="ui borderless main menu" style={{borderRadius:0, marginBottom:25}}>
						<div className="ui container" style={{paddingTop: 10, paddingBottom:10}}>
							<Link className="header item" to={'/'}>
								<img className="logo" alt={'Ideal Code Africa logo'} src="/assets/images/code-idea-256x256.png"/>
								{/* <span className="logo-text">Ideal Code Africa</span> */}
							</Link>
							<Menu.Menu position='right'>
								<Link to={'/archive'} className={'item'}>Archive</Link>
								<Link to={'/contact'} className={'item'}>Contact</Link>
							</Menu.Menu>
						</div>
					</div>
				</header>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	categories: state.categories
});

export default connect(mapStateToProps)(Navbar);
