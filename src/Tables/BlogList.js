import React, {Component} from 'react';
import { Table, Icon, Modal, Label } from 'semantic-ui-react';
import EditBlog from '../forms/EditBlog';
import ConfirmDelete from "../forms/DeleteConfirm";
import moment from "moment/moment";

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
						<Table.HeaderCell>Last update</Table.HeaderCell>
						<Table.HeaderCell>Publish date</Table.HeaderCell>
						<Table.HeaderCell>Actions</Table.HeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{blogs.map( (blog, index) => {
						return <Table.Row key={index}>
							<Table.Cell>
								{blog.status === 0 && <Label ribbon color={'orange'}>Archived</Label>}
								{blog.status === 1 && <Label ribbon color={'teal'}>Published</Label>}
								{blog.title}
							</Table.Cell>
							<Table.Cell>{/*<Image src={blog.imageUrl}/>*/}</Table.Cell>
							<Table.Cell>{moment(blog.createdAt).format('dddd, MMMM Do YYYY')}</Table.Cell>
							<Table.Cell>{moment(blog.updatedAt).format('dddd, MMMM Do YYYY')}</Table.Cell>
							<Table.Cell>
								<Modal
									size={'tiny'}
									trigger={<Icon
										inverted={true}
										style={{float:'left', cursor: 'pointer'}}
										color={'green'}
										name={'pencil'}/>}>
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
								<Icon
									style={{float:'left', cursor: 'pointer'}}
									color={'teal'}
									name={'archive'}
									onClick={this.props.archive.bind(this, blog._id)}/>
							</Table.Cell>
						</Table.Row>
					})}
				</Table.Body>
			</Table>
		);
	}
}

export default BlogsList;
