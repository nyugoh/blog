import React, {Component} from 'react';
import { Table, Label, Button } from 'semantic-ui-react';

class CategoryiesList extends Component {
	render() {
		const { categories } = this.props;
		return (
			<Table celled>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>Category</Table.HeaderCell>
						<Table.HeaderCell>Blogs</Table.HeaderCell>
						<Table.HeaderCell>Actions</Table.HeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{categories.map( (category, index) => {
						return <Table.Row key={index}>
							<Table.Cell>
								{category.blogs === 0 && <Label ribbon color={'orange'}>Empty</Label>}
								{category.name}
							</Table.Cell>
							<Table.Cell>{category.blogs}</Table.Cell>
							<Table.Cell>
								<Button>Trash</Button>
							</Table.Cell>
						</Table.Row>
					})}
				</Table.Body>
			</Table>
		);
	}
}

export default CategoryiesList;
