import React, {Component} from 'react';
import { connect } from 'react-redux';
import Navbar from "../../components/Navbar";
import { fetchCategory } from '../../actions/blog';
import Bloglist from "../../components/Bloglist";

class Categories extends Component {
	componentWillMount() {
		this.props.fetchCategory(this.props.history.location.pathname.split('/')[2]);
	};
	render() {
		const { blogs } = this.props;
		if (blogs)
			return (
				<div>
					<Navbar/>
					<div className="ui text container main-content">
						{blogs.length > 0 && <Bloglist blogs={blogs}/>}
					</div>
				</div>
			);
		else
			return (
				<div>
					<Navbar/>
					Loading ...
				</div>
			)
	}
}

const mapStateToProps = state => ({ blogs: state.general });

export default connect(mapStateToProps, { fetchCategory })(Categories);