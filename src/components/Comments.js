import React, {Component} from 'react';
import { Icon } from 'semantic-ui-react';

class Discuss extends Component {

	componentDidMount() {
		var disqus_config = function () {
			this.page.url = "http://localhost";
			this.page.identifier = this.props.blog.slug;
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
