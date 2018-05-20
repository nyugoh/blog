import React, {Component} from 'react';
import { connect } from 'react-redux';
import BlogTable from '../../Tables/BlogList';
class BlogList extends Component {
	render() {
		return (
			<div>
				<h3>Blog listing</h3>
				<BlogTable blogs={this.props.blogs}/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	blogs: state.blogs
});

export default connect(mapStateToProps)(BlogList);
