import React, {Component} from 'react';
import { Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
						<div className="ui borderless main menu fixed">
							<div className="ui container">
								<div className="header item" href={'/'}>
									<img className="logo" src="/assets/images/code-idea-256x256.png"/>
									<span className="logo-text">Ideal Code Africa</span>
								</div>
								<Link to={'/archive'} className={'item'}>Archive</Link>
								<Link to={'/admin/blogs'} className={'ui right floated item'}>Admin</Link>
							</div>
						</div>
					</header>
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
