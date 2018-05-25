import React, {Component} from 'react';
import { Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Title from "../../components/Title";
import PostBody from "../../components/Body";

class Blog extends Component {
	state = {
		currentArticle: ''
	};

	componentDidMount() {
		this.setState({ currentArticle: this.props.history.location.pathname.split('/')[1] });
	};

	render() {
		const blog = this.props.blogs.filter( blog => blog.slug === this.state.currentArticle)[0];
		return (
			<div>
				{blog && <div>
					<header>
						<div className="ui stackable menu">
							<div className="item">
								<img src="https://semantic-ui.com/images/logo.png"/>
							</div>
							<a className="item">Features</a>
							<a className="item">Testimonials</a>
							<a className="item">Sign-in</a>
						</div>
						<Title blog={blog}/>
						<div className="ui section divider"/>
					</header>
					<main>
						<PostBody blog={blog}/>
					</main>
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
