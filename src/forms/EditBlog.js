import React, {Component} from 'react';
import { Form, TextArea } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { edit } from '../actions/blog';

class EditBlog extends Component {
	
	edit = () =>{
		this.props.edit(this.state);
		this.setState({});
	};

	componentDidMount() {
		// this.state = this.props.blog;
	}

	handleChange = e => { this.setState({ ...this.state, [e.target.name]: e.target.value }); };

	handleSelect = (e, data) => { this.setState({ ...this.state.data, [data.name]: data.value }); };

	render() {
		const { categories, id, post } = this.props;
		let blog = {};
		if (post){
			this.state = {...post};
			blog = this.state;
		}
		const options = [ ...categories.map( category => ( { text: category.name, value: category.name }))];
		return (
			<div>
				<Form onSubmit={this.edit}>
					<Form.Input
						fluid={true}
						name={'title'}
						placeholder={'Add a title here...'}
						label={'Title'}
						value={blog.title}
						onChange={this.handleChange}/>
					<Form.Input
						fluid={true}
						name={'slug'}
						placeholder={'Edit the slug...'}
						label={'Blog Slug'}
						value={blog.slug}
						onChange={this.handleChange}/>
					<TextArea
						autoHeight
						fluid={'true'}
						name={'content'}
						placeholder={'Blog content'}
						style={{minHeight: 250}}
						value={blog.content}
						onChange={this.handleChange}/>
					<br/><br/>
					<TextArea
						autoHeight
						fluid={'true'}
						name={'description'}
						placeholder={'Blog description'}
						style={{minHeight: 50}}
						value={blog.description}
						onChange={this.handleChange}/>
					<br/><br/>
					<Form.Input
						fluid={true}
						name={'imageUrl'}
						placeholder={'Link to an image...'}
						label={'Blog Cover'}
						value={blog.imageUrl}
						onChange={this.handleChange}/>
					<Form.Input
						fluid={true}
						name={'imageCaption'}
						placeholder={'Image caption, credit'}
						label={'Image caption'}
						value={blog.imageCaption}
						onChange={this.handleChange}/>
					<Form.Select
						fluid={true}
						label='Category'
						options={options}
						placeholder='Category'
						name={'category'}
						defaultValue={blog.category}
						onChange={this.handleSelect}/>
					<Form.Button social={'twitter'}>SAVE</Form.Button>
				</Form>
			</div>
		);
	};
}

const mapStateToProps = state => ({
	categories: state.categories,
	posts: state.posts
});

export default connect(mapStateToProps, { edit })(EditBlog);
