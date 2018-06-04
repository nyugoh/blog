import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu, Dropdown } from 'semantic-ui-react';

class Navbar extends Component {
	render() {
		return (
			<div>
				<header>
					<div className="ui borderless main menu fixed">
						<div className="ui container">
							<Link className="header item" to={'/'}>
								<img className="logo" alt={'Ideal Code Africa logo'} src="/assets/images/code-idea-256x256.png"/>
								<span className="logo-text">Ideal Code Africa</span>
							</Link>
							<Link to={'/archive'} className={'item'}>Archive</Link>
							<Menu.Menu position='right'>
								<Dropdown item text='Categories'>
									<Dropdown.Menu>
										{this.props.categories && this.props.categories.map( (category, index) =>{
											return <a key={index} href={`/categories/${category.name}`}><Dropdown.Item>{category.name}</Dropdown.Item></a>
										})}
									</Dropdown.Menu>
								</Dropdown>
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
