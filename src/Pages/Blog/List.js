import React, {Component} from 'react';
import { connect } from 'react-redux';
import BlogTable from '../../Tables/BlogList';
import { remove, archive } from '../../actions/blog';

class BlogList extends Component {
	
	archive = (id) =>{
		this.props.archive(id).then( () =>{
		}).catch( error =>{
			alert(error.message);
		});
	};

	remove = (id) =>{
		this.props.remove(id).then( () =>{
		}).catch( error =>{
			alert(error.message);
		});
	};

	render() {
		return (
			<div>
				<h3>Blog listing</h3>
				<BlogTable
					blogs={this.props.blogs}
					remove={this.remove}
					edit={this.edit}
					archive={this.archive}/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	blogs: state.blogs
});

export default connect(mapStateToProps, { remove, archive })(BlogList);
