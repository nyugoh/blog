import React, {Component} from 'react';
import { Table, Button, Image, Modal } from 'semantic-ui-react';
import EditBlog from '../forms/EditBlog';
import ConfirmDelete from "../forms/DeleteConfirm";

class BlogsList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	};

	render() {
		const { blogs } = this.props;
		return (
			<Table celled>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>Blog</Table.HeaderCell>
						<Table.HeaderCell>Cartoon</Table.HeaderCell>
						<Table.HeaderCell>Blogs</Table.HeaderCell>
						<Table.HeaderCell>Actions</Table.HeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{blogs.map( (blog, index) => {
						return <Table.Row key={index}>
							<Table.Cell>
								{blog.title}
							</Table.Cell>
							<Table.Cell>{/*<Image src={blog.imageUrl}/>*/}</Table.Cell>
							<Table.Cell>{blog.content}</Table.Cell>
							<Table.Cell>
								<Modal
									size={'tiny'}
									trigger={<Button
										positive
										icon={'edit'}/>}>
									<Modal.Header>Edit a blog</Modal.Header>
									<Modal.Content>
										<EditBlog
											blog={blog}
											edit={this.props.edit.bind(this)}/>
									</Modal.Content>
								</Modal>
								<ConfirmDelete
									blog={blog}
									type={'blog'}
									remove={this.props.remove.bind(this)}/>
							</Table.Cell>
						</Table.Row>
					})}
				</Table.Body>
			</Table>
		);
	}
}

export default BlogsList;
