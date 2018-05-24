import React, {Component} from 'react';
import { Header, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Article from './article';

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
				<div>
					<Header as={'h2'}>Blog with JARVIS</Header>
				</div>
				<div className="ui divider"/>
				{!blog && <Message info={true}>
					<Message.Header>Article not found</Message.Header>
					<Message.Content>We have deployed a team of smart monkeys to fix this.</Message.Content>
				</Message>}
				{blog && <Article article={blog}/>}
			</div>
		);
	}
}

export default connect(state => ({ blogs: state.blogs}))(Blog);
