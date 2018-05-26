import React, {Component} from 'react';
import Banner from "../../components/Banner";
import Title from "../../components/Title";
import PostBody from "../../components/Body";

class Post extends Component {
	render() {
		return (
			<div>
				{/*<img src="https://semantic-ui.com/images/logo.png"/>*/}
				<header>
					<div className="ui main text container">
						<h1 className="ui header">
							Hash Node
						</h1>
						<p>
							This example shows how to use lazy loaded images, a sticky menu, and a simple text container
						</p>
					</div>
				</header>
				<main>
					<PostBody/>
				</main>
			</div>
		);
	}
}

export default Post;
