import React, {Component} from 'react';
import { Table, Label, Button, Image, Modal, Confirm } from 'semantic-ui-react';
import EditCategory from '../forms/EditCategory';
import ConfirmDelete from "../forms/DeleteConfirm";

class CategoryiesList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	};

	render() {
		const { categories } = this.props;
		return (
			<Table celled>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>Category</Table.HeaderCell>
						<Table.HeaderCell>Cartoon</Table.HeaderCell>
						<Table.HeaderCell>Blogs</Table.HeaderCell>
						<Table.HeaderCell>Actions</Table.HeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{categories.map( (category, index) => {
						return <Table.Row key={index}>
							<Table.Cell>
								{category.blogs === 0 && <Label ribbon color={'orange'}>Empty</Label>}
								{category.blogs > 0 && <Label ribbon color={'teal'}>Active</Label>}
								{category.name}
							</Table.Cell>
							<Table.Cell><Image src={category.imageUrl}/></Table.Cell>
							<Table.Cell>{category.blogs}</Table.Cell>
							<Table.Cell>
								<Modal
									size={'tiny'}
									trigger={<Button
										positive
										icon={'edit'}/>}>
									<Modal.Header>Edit a category</Modal.Header>
									<Modal.Content>
										<EditCategory
										category={category}
										edit={this.props.edit.bind(this)}/>
									</Modal.Content>
								</Modal>
								<ConfirmDelete
								category={category}
								remove={this.props.remove.bind(this)}/>
							</Table.Cell>
						</Table.Row>
					})}
				</Table.Body>
			</Table>
		);
	}
}

export default CategoryiesList;