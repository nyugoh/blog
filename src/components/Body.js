import React, {Component} from 'react';
import marked from 'marked';
import highlightjs from 'highlightjs';
import Discuss from "./Comments";
import $ from 'jquery';

class PostBody extends Component {
	constructor(props){
		super(props);
		marked.setOptions({
			highlight: function(code) {
				return highlightjs.highlightAuto(code).value;
			},
			gfm: true,
			tables: true,
			breaks: false,
			pedantic: false,
			sanitize: false,
			smartLists: true,
			smartypants: false
		});
	};

	componentWillMount() {
		document.title = this.props.blog.title;
	};

	render() {
		const html = marked(`${this.props.blog.content}`);
		return (
			<div className={'blog-body'}>
				<section>
					<div dangerouslySetInnerHTML={{__html: html}} />
				</section>
				<Discuss blog={this.props.blog}/>
			</div>
		);
	}
}

export default PostBody;
