import React, {Component} from 'react';
import { Form, Button, Icon } from 'semantic-ui-react';

class EditCategory extends Component {
	constructor(props){
		super(props);
		this.state = { ...props.category };
	};

	edit = () =>{
		this.props.edit(this.state);
		this.setState({});
	};

	handleChange = e => {
		this.setState({ ...this.state, [e.target.name]: e.target.value });
	};

	render() {
		return (
			<div>
				<Form onSubmit={this.edit}>
					<Form.Input
						fluid
						name={'name'}
						value={this.state.name}
						onChange={this.handleChange}
						label='Category name'/>
					<Form.Input
						fluid
						name={'slug'}
						value={this.state.slug}
						onChange={this.handleChange}
						label='Slug/ uri'/>
					<Form.Input
						fluid
						name={'imageUrl'}
						value={this.state.imageUrl}
						onChange={this.handleChange}
						label='Category Icon'/>
					<Button
						fluid={'true'}
						color={'twitter'}
						icon
						labelPosition={'right'}>
						<Icon name={'save'}/>Save
					</Button>
				</Form>
			</div>
		);
	}
}

export default EditCategory;
