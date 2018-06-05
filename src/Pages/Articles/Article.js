import React, {Component} from 'react';
import { Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Title from "../../components/Title";
import PostBody from "../../components/Body";
import Navbar from "../../components/Navbar";

class Blog extends Component {
	state = {
		currentArticle: ''
	};

	componentDidMount() {
		this.setState({ currentArticle: this.props.history.location.pathname.split('/')[2] });
	};

	render() {
		const blog = this.props.blogs.filter( blog => blog.slug === this.state.currentArticle)[0];
		return (
			<div>
				{blog && <div>
					<Navbar/>
					<div className="ui text container main-content">
						<Title blog={blog}/>
						<div className="ui hidden divider"/>
						<main>
							<PostBody blog={blog}/>
						</main>
					</div>
				</div>}
				{!blog && <Message info={true}>
					<Message.Header>Article not found</Message.Header>
					<Message.Content>We have deployed a team of smart monkeys to fix this.</Message.Content>
				</Message>}
			</div>
		);
	}
}

export default connect(state => ({ blogs: state.blogs}))(Blog);
