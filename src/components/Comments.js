import React, {Component} from 'react';
import { Icon } from 'semantic-ui-react';

class Discuss extends Component {

	componentDidMount() {
		let disqus_config = function () {
			this.page.url = 'localhost:3000';
			this.page.identifier = this.props.blog._id;
		};
		let d = document, s = d.createElement('script');
		s.src = 'https://localhost-jqt7lwk8m7.disqus.com/embed.js';
		s.setAttribute('data-timestamp', +new Date());
		(d.head || d.body).appendChild(s);
	};

	render() {
		return (
			<div className={'blog-comments'}>
				<div className="ui horizontal divider">Leave a comment below or start a discussion <Icon name={'comment'} circular/> </div>
				<div className={'blog-comment-section'}>
					<div id="disqus_thread"/>
				</div>
			</div>
		);
	}
}

export default Discuss;
