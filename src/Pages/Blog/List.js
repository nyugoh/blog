import React, {Component} from 'react';
import { connect } from 'react-redux';
import BlogTable from '../../Tables/BlogList';
import { edit, remove } from '../../actions/blog';

class BlogList extends Component {
	edit = (data) =>{
		console.log(data);
		this.props.edit(data).then( () =>{
			// TODO: Close modal
			// this.setState({open: false});
		}).catch( error =>{
			alert(error.message);
		});
	};

	remove = (id) =>{
		this.props.remove(id).then( response =>{
			alert('Deleted....!!!');
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
					edit={this.edit}/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	blogs: state.blogs
});

export default connect(mapStateToProps, { edit, remove })(BlogList);
