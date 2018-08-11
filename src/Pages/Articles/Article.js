import React, {Component} from 'react';
import { Message, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Title from "../../components/Title";
import PostBody from "../../components/Body";
import Navbar from "../../components/Navbar";
import Footer from '../../components/Footer';

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
					<Navbar/>
					<div className="ui container">
					<Grid>
						<Grid.Row>
							<Grid.Column width={12}>
								<Title blog={blog}/>
								<div className="ui hidden divider"/>
								<main>
									<PostBody blog={blog}/>
								</main>
							</Grid.Column>
							<Grid.Column width={4}>
								<div>
									
								</div>
							</Grid.Column>
						</Grid.Row>
					</Grid>
					</div>
					<Footer/>
				</div>}
			</div>
		);
	}
}

export default connect(state => ({ blogs: state.blogs}))(Blog);
