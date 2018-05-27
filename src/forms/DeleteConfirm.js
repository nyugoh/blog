import React, { Component } from 'react'
import { Icon, Confirm } from 'semantic-ui-react'

class ConfirmDelete extends Component {
	state = { open: false };

	show = () => this.setState({ open: true });

	handleConfirm = () => {
		this.setState({ open: false });
		this.props.type === 'blog'? this.props.remove(this.props.blog._id): this.props.remove(this.props.category._id);;
	};

	handleCancel = () => this.setState({ open: false });

	render() {
		const { category, type, blog } = this.props;
		return (
			<div>
				<Icon
					color={'red'}
					name={'trash'}
					style={{float:'left', cursor: 'pointer'}}
					onClick={this.show.bind(this)}/>
				{type === 'blog' && <Confirm
					open={this.state.open}
					cancelButton='Never mind'
					confirmButton="Delete"
					header={`Deleting ${blog.title}`}
					content={`Are you sure you want to delete it ?`}
					onCancel={this.handleCancel.bind(this)}
					onConfirm={this.handleConfirm.bind(this, blog._id)}
				/>}
				{type === 'category' && <Confirm
					open={this.state.open}
					cancelButton='Never mind'
					confirmButton="Delete"
					header={`Deleting ${category.name}`}
					content={`${category.name} has ${category.blogs} blogs, are you sure you want to delete it ?`}
					onCancel={this.handleCancel.bind(this)}
					onConfirm={this.handleConfirm.bind(this, category._id)}
				/>}
			</div>
		);
	};
}

export default ConfirmDelete;
