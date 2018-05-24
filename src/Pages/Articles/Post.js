import React, {Component} from 'react';
import Banner from "../../components/Banner";
import Title from "../../components/Title";
import PostBody from "../../components/Body";

class Post extends Component {
	render() {
		return (
			<div>
				<header>
					<div className="ui stackable menu">
						<div className="item">
							<img src="https://semantic-ui.com/images/logo.png"/>
						</div>
						<a className="item">Features</a>
						<a className="item">Testimonials</a>
						<a className="item">Sign-in</a>
					</div>
					<Title/>
					<div className="ui section divider"/>
				</header>
				<main>
					<PostBody/>
				</main>
			</div>
		);
	}
}

export default Post;
