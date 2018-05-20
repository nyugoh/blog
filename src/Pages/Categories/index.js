import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Button, Icon, Modal, Header, Form } from 'semantic-ui-react';
import CategoryiesList from '../../Tables/CategoryiesList';
import { add, edit, remove } from '../../actions/category';

class Categories extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	};

	submit = () => {
		this.props.add(this.state).then( ()=> {
			this.setState({});
		}).catch( error =>{
			alert(error.message);
		});
	};

	edit = (data) =>{
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

	handleChange = e => {
		this.setState({ ...this.state, [e.target.name]: e.target.value });
	};

	render() {
		const { categories } = this.props;
		return (
			<div>
				<Header floated={'left'} as={'h3'}>Categories</Header>
				<Modal
					size={'tiny'}
					trigger={<Button
					positive
					icon
					floated={'right'}
					labelPosition={'right'}>
					<Icon name={'plus'}/>
					Add Category
				</Button>}>
					<Modal.Header>Add a category</Modal.Header>
					<Modal.Content>
						<Form onSubmit={this.submit}>
							<Form.Input
								fluid
								name={'name'}
								onChange={this.handleChange}
								label='Category name'
								placeholder='Baking awesomeness' />
							<Button
							fluid={'true'}
							color={'twitter'}
							icon
							labelPosition={'right'}>
							<Icon name={'plus'}/>Add
							</Button>
						</Form>
					</Modal.Content>
				</Modal>
				<br/><br/>
				<div className="ui divider"/>
				<Header as={'h3'} color={'teal'}>List of categories</Header>
				<CategoryiesList
					categories={categories}
					edit={this.edit}
				remove={this.remove}/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	categories: state.categories
});

export default connect(mapStateToProps, { add, edit, remove })(Categories);
