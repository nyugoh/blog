import React, { Component } from 'react'
import { Button, Confirm } from 'semantic-ui-react'

class ConfirmDelete extends Component {
	state = { open: false };

	show = () => this.setState({ open: true });

	handleConfirm = () => {
		this.setState({ open: false });
		this.props.remove(this.props.category._id);
	};

	handleCancel = () => this.setState({ open: false });

	render() {
		const { category } = this.props;
		return (
			<div>
				<Button
					color={'red'}
					icon={'trash'}
					onClick={this.show.bind(this)}/>
				<Confirm
					open={this.state.open}
					cancelButton='Never mind'
					confirmButton="Delete"
					header={`Deleting ${category.name}`}
					content={`${category.name} has ${category.blogs} blogs, are you sure you want to delete it ?`}
					onCancel={this.handleCancel.bind(this)}
					onConfirm={this.handleConfirm.bind(this, this.props.category._id)}
				/>
			</div>
		);
	};
}

export default ConfirmDelete;
