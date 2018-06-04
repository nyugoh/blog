import React, {Component} from 'react';
import { Form, TextArea } from 'semantic-ui-react';
import { connect } from 'react-redux';

class EditBlog extends Component {
	constructor(props){
		super(props);
		this.state = { ...props.blog };
	};

	edit = () =>{
		this.props.edit(this.state);
		this.setState({});
	};

	handleChange = e => { this.setState({ ...this.state, [e.target.name]: e.target.value }); };

	handleSelect = (e, data) => { this.setState({ ...this.state.data, [data.name]: data.value }); };

	render() {
		const { categories } = this.props;
		const blog = this.state;
		const options = [ ...categories.map( category => ( { text: category.name, value: category.name }))];
		return (
			<div>
				<Form onSubmit={this.edit}>
					<Form.Input
						fluid={true}
						name={'title'}
						placeholder={'Add a title here...'}
						label={'Blog title'}
						value={blog.title}
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
	categories: state.categories
});

export default connect(mapStateToProps)(EditBlog);
