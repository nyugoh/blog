import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Form, TextArea, Button } from 'semantic-ui-react';
import { add } from '../../actions/blog';

class AddBlog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {},
			errors: []
		};
	};

	submit = () => this.props.add(this.state.data).then( () =>{
		this.props.history.push('/blogs');
	}).catch( error => {
		alert(error.message);
	});

	handleChange = e => { this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value } }); };

	render() {
		return (
			<div>
				<h3>Add blog form goes here</h3>
				<Form onSubmit={this.submit}>
					<Form.Input
					fluid={true}
					name={'title'}
					placeholder={'Add a title here...'}
					label={'Blog title'}
					onChange={this.handleChange}/>
					<TextArea
						autoHeight
						fluid={'true'}
						name={'content'}
						placeholder={'Blog content'}
						style={{minHeight: 250}}
						onChange={this.handleChange}/>
					<br/><br/>
					<Form.Input
						fluid={true}
						name={'imageUrl'}
						placeholder={'Link to an image...'}
						label={'Blog Cover'}
						onChange={this.handleChange}/>
					<Form.Input
						fluid={true}
						name={'imageCaption'}
						placeholder={'Image caption, credit'}
						label={'Image caption'}
						onChange={this.handleChange}/>
					<Form.Button social={'twitter'}>Submit</Form.Button>
				</Form>
			</div>
		);
	}
}

export default connect(null, { add })(AddBlog);
