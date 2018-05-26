import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Icon, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Navbar from "../../components/Navbar";
import moment from 'moment';

class Archive extends Component{
	render() {
		const { blogs } = this.props;
		return (
			<div>
				<Navbar/>
				<div className="main-content">
					<div className="ui container">
						<Header as={'h3'}>Archives</Header>
						<div className="ui horizontal divider"><Icon name={'archive'} color={'teal'} size={'small'}/></div>
						<div className="archive">
							<Table color={'blue'} celled selectable={true} striped={true}>
								<Table.Header>
									<Table.Row>
										<Table.HeaderCell />
										<Table.HeaderCell>Title</Table.HeaderCell>
										<Table.HeaderCell>Category</Table.HeaderCell>
										<Table.HeaderCell>Date Published</Table.HeaderCell>
										<Table.HeaderCell>Last Update</Table.HeaderCell>
									</Table.Row>
								</Table.Header>
								<Table.Body>
									{blogs.map( (blog, index) => {
										return <Table.Row key={index}>
											<Table.Cell>{index+1}</Table.Cell>
											<Table.Cell>
												<Link to={`/${blog.slug}`}>{blog.title}</Link>
											</Table.Cell>
											<Table.Cell>
												<Link to={`/categories/${blog.category}`}>{blog.category}</Link>
											</Table.Cell>
											<Table.Cell>{moment(blog.createdAt).format('dddd, MMMM Do YYYY')}</Table.Cell>
											<Table.Cell>{moment(blog.updatedAt).format('dddd, MMMM Do YYYY')}</Table.Cell>
										</Table.Row>
									} )}
								</Table.Body>
							</Table>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

const mapStateToProps = state =>({
	blogs: state.blogs
});

export default connect(mapStateToProps)(Archive);
