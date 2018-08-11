import React, {Component} from 'react';
import marked from 'marked';
import highlightjs from 'highlightjs';
import $ from 'jquery';
import Discuss from "./Comments";

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
		$(document).ready(function() {
			$('pre code').each(function(i, block) {
				highlightjs.highlightBlock(block);
			});
		});
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
